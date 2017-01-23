const express = require('express');
const expressNunjucks = require('express-nunjucks');
const sassMiddleware = require('node-sass-middleware');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const app = express();
const isDev = app.get('env') === 'development';

const getAdjacentProjectUrls = require('./utils/getAdjacentProjectUrls.js');
const getProjectContents = require('./utils/getProjectContents.js');
const content = require('./content.js');


// SCSS
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

app.get('/about', (req, res) => {
    res.render('pages/about');
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

app.get('/projects', (req, res) => {
    res.render('pages/project-index', {
        projectGroups: content.projectGroups
    });
});

app.get('/projects/:groupId/:projectId', (req, res) => {
	var projectContents = getProjectContents(req.params.groupId, req.params.projectId, content),
        adjacentProjectUrls = getAdjacentProjectUrls(req.params.groupId, req.params.projectId, content);

    res.render('pages/project', {
    	groupId: req.params.groupId,
        group: projectContents.group,
    	projectId: req.params.projectId,
    	project: projectContents.project,
        nextProjectUrl: adjacentProjectUrls.next,
        previousProjectUrl: adjacentProjectUrls.previous
    });
});


// START IT UP
console.log('it started');
app.listen(3000);
