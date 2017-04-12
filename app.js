const express = require('express');
const expressNunjucks = require('express-nunjucks');
const sassMiddleware = require('node-sass-middleware');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const app = express();
const isDev = app.get('env') === 'development';

const getAdjacentProjects = require('./utils/getAdjacentProjects.js');
const getProjectContents = require('./utils/getProjectContents.js');
const getGroups = require('./utils/getGroups.js');
const content = require('./content.js');


// SCSS
// NOTE: If changing css, change stylesheet src to "/styles.css",
//       and before launching site, revert it back to "/css/styles.css".

app.use(
    sassMiddleware({
        src: __dirname + '/sass',
        dest: __dirname + '/public/css',
        debug: true
    })
);

app.use(express.static(path.join(__dirname, 'public')));


// SET
app.set('views', __dirname + '/templates');

const njk = expressNunjucks(app, {
    watch: isDev,
    noCache: isDev
});

// ROUTES
app.get('/styleguide', (req, res) => {
    res.render('pages/styleguide', {
        content: content.styleguide
    });
});

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/resume', (req, res) => {
    res.render('pages/resume', {
        resume: content.resume
    });
});

app.get('/writing', (req, res) => {
    res.render('pages/writing', {
        writing: content.writing
    });
});

app.get('/projects/:groupId/:projectId', (req, res) => {
	var projectContents = getProjectContents(req.params.groupId, req.params.projectId, content),
        adjacentProjects = getAdjacentProjects(req.params.groupId, req.params.projectId, content),
        groups = getGroups(req.params.groupId, content);

    res.render('pages/project', {
    	groupId: req.params.groupId,
        group: projectContents.group,
    	projectId: req.params.projectId,
    	project: projectContents.project,
        nextProject: adjacentProjects.next,
        previousProject: adjacentProjects.previous,
        groups: groups
    });
});

app.get('*', (req, res) => {
    res.render('pages/404');
});

// START IT UP
console.log('it started');
app.listen(3001);
