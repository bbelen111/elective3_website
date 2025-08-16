const express = require('express');
const app = express();
const mymodule = require('./mymodule');

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('index', { heading: 'Home Page'});
});

app.get('/inventory', (req, res) => {
  res.render('inventory', { heading: 'Inventory'});
});

app.get('/about', (req, res) => {
  res.render('about', { heading: 'About Page'});
});

app.get('/contact', (req, res) => {
  res.render('contact', { heading: 'Contact Page'});
});

app.get('/login', (req, res) => {
  res.render('login', { heading: 'Login Page'});
});

app.get('/register', (req, res) => {
  res.render('register', { heading: 'Register Page'});
});