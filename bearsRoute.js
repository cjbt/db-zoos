const express = require('express');
const db = require('./data/db.Config');
const route = express.Router();

route.get('/', (req, res) => {
  db('bears')
    .then(ids => {
      res.status(200).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

route.get('/:id', (req, res) => {
  const id = req.params.id;
  db('bears')
    .where({ id })
    .first()
    .then(ids => {
      if (ids) {
        res.status(200).json(ids);
      } else {
        res.status(404).json({ message: 'id not found' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

route.post('/', (req, res) => {});

route.put('/:id', (req, res) => {});

route.delete('/:id', (req, res) => {});

module.exports = route;
