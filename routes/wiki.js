const express = require('express');
const app = express();
const router = express.Router();
const { addPage } = require('../views');
const { Page } = require('../models');

router.get('/', (req, res, next) => {
  res.send('get the wiki');
});

router.post('/', async (req, res, next) => {
  console.log(req.body);
  const page = new Page ({
    title : req.body.title,
    content : req.body.content,
    slug: req.body.title
  })
  try {
    await page.save();
    res.redirect('/');
  } catch (error) {
    next(error)
  }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
