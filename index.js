const express = require('express');
const app = express();
const mymodule = require('./mymodule');

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { heading: 'Welcome to the Home Page'});
});

app.get('/about', (req, res) => {
  res.render('about', { heading: 'About Us', students: mymodule.students, helloMessage: mymodule.hello });
});

app.get('/error', (req, res) => {
  res.render('error', { heading: 'Error Page', message: 'An error has occurred!' });
});