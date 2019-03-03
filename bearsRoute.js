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

route.post('/', (req, res) => {
  const body = req.body;
  db('bears')
    .insert(body)
    .then(bear => {
      res.status(200).json(bear);
    })
    .catch(err => {
      res.status(500).json({ message: 'you need a name', err });
    });
});

route.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  db('bears')
    .where({ id })
    .update(changes)
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

route.delete('/:id', (req, res) => {
  const id = req.params.id;
  db('bears')
    .where({ id })
    .del()
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

module.exports = route;
