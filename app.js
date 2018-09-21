const morgan = require('morgan');
const express = require('express');
const app = express();
const staticMiddleWare = express.static('public');
const wikiRouter = require('./routes/wiki');
const views = require('./views');
const userRouter = require('./routes/user');
const { db, Page, User } = require('./models');

// console.log(models);

console.log('hello sophie');
app.use(staticMiddleWare);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
});

// app.get('/', (req, res) => {
//   console.log('were in our homepage!');
//   res.send(views.main());
// });

const PORT = 3000;

db.authenticate().then(() => {
  console.log('connected to the database');
});

const init = async () => {
  await db.sync();

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
