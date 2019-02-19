const express = require('express');
const helmet = require('helmet');
const db = require('./data/db.Config');
const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here
server.get('/', (req, res) => {
  res.send("it's working");
});

// getAll
server.get('/zoos', (req, res) => {
  db('zoos')
    .then(zoo => {
      res.status(200).json(zoo);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// getById

// post

// update

// delete

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
