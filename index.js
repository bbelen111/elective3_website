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