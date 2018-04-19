const express = require('express');
const router = express.Router();
const catService = require("../cat-service")

const first = (req, res, next) => {
  res.locals.messages = ["Hello from first!"]
  next()
}

const second = (req, res, next) => {
  res.locals.messages.push("Hello from second")
  next()
}
/* GET home page */
router.get('/', first, second, (req, res, next) => {
  catService.random()
    .then(fact => {
      console.log(fact)
    })
    .catch(err => next(err))

  res.render('index');
});

module.exports = router;
