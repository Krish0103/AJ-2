const express = require('express');
const router = express.Router();

const database = [];
let id = 1; // Use 'let' so you can increment it

router.post('/info', (req, res) => {
  const info = { id: id++, name: req.body.name, amount: req.body.amount };

  database.push(info);
  console.log('database', database);
  res.status(201).json(database);
});

module.exports = router;
