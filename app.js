const morgan = require('morgan');
const express = require('express');
const app = express();
const staticMiddleWare = express.static('public');
const views = require('./views');
console.log('hello sophie');
app.use(staticMiddleWare);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

const PORT = 3000;

app.get('/', (req, res) => {
  console.log('were in our homepage!');
  res.send(views.main());
});

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
