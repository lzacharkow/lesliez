const express = require('express');
const expressNunjucks = require('express-nunjucks');
const sassMiddleware = require('node-sass-middleware');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const content = require('./content.js');

const app = express();
const isDev = app.get('env') === 'development';

// UTILITIES

function getProject(group, project) {
	var thisProject = _.find(content.projectIndex, ['id', group]);

	return {
		content: _.find(thisProject.projects, ['id', project]).content,
		role: thisProject.role
	};
}

// SET

app.set('views', __dirname + '/templates');
 
const njk = expressNunjucks(app, {
    watch: isDev,
    noCache: isDev
});
 
// SCSS

app.use(
  	sassMiddleware({
    	src: __dirname + '/sass',
    	dest: __dirname + '/public/css',
    	debug: true,
  	})
);

app.use(express.static(path.join(__dirname, 'public')));

// ROUTES

app.get('/', (req, res) => {
    res.render('pages/home', {
    	content: content.home
    });
});

app.get('/projects', (req, res) => {
    res.render('pages/project-index');	
});

app.get('/project/:group/:project', (req, res) => {
	var projectContents = getProject(req.params.group, req.params.project);
    
    res.render('pages/project', {
    	group: req.params.group,
    	project: req.params.project,
    	content: projectContents.content,
    	role: projectContents.role
    });
});

// START IT UP

console.log('it started');
 
app.listen(3000);
