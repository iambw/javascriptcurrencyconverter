const path = require('path');
const express = require('express');
const rates = require('./utils/rates');
const port = 3000;

const app = express();


// Paths
const publicPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../views');


// Views
app.set('view engine', 'pug');
app.set('views', viewPath);


// Static content
app.use(express.static(publicPath));


// Routes
app.get('/', (req, res) => {
    res.render('index', {title: 'currency converter'});
});


app.get('/tools', (req, res) => {
    res.render('tools', {title: 'tools'});
});


app.get('/trading', (req, res) => {
    res.render('trading', {title: 'trading'});
});


app.get('/resources', (req, res) => {
    res.render('resources', {title: 'resources'});
});


app.get('/transfer', (req, res) => {
    res.render('transfer', {title: 'transfer'});
});


app.get('*', (req, res) => {
    res.render('404', {title: 'page not found'});
});


app.listen(port, () => {
    console.log(`Server listening on ${port}.`);
});
