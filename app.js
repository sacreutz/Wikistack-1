const morgan = require('morgan');
const express = require('express');
const app = express();
const staticMiddleWare = express.static('public');
const views = require('./views');
const models = require('./models');
console.log(models);

models.authenticate().
then(() => {
  console.log('connected to the database');
})
console.log('hello sophie');
app.use(staticMiddleWare);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));



app.get('/', (req, res) => {
  console.log('were in our homepage!');
  res.send(views.main());
});

const PORT = 3000;
const init = async () => {
  await db.sync()


  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });

}

init();



