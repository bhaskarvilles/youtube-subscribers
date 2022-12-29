const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const appRoutes = express();
const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';

// Define routes and handlers as before

module.exports = appRoutes;


app.get('/subscribers', (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
      return;
    }
    const db = client.db(dbName);
    const collection = db.collection('subscribers');
    collection.find({}).toArray((error, subscribers) => {
      if (error) {
        console.error(error);
        res.status(500).send({ message: error.message });
        return;
      }
      res.send(subscribers);
      client.close();
    });
  });
});

app.get('/subscribers/names', (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
      return;
    }
    const db = client.db(dbName);
    const collection = db.collection('subscribers');
    collection.find({}, { projection: { name: 1, subscribedChannel: 1 } }).toArray((error, subscribers) => {
      if (error) {
        console.error(error);
        res.status(500).send({ message: error.message });
        return;
      }
      res.send(subscribers);
      client.close();
    });
  });
});

app.get('/subscribers/:id', (req, res) => {
  const id = req.params.id;
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
      return;
    }
    const db = client.db(dbName);
    const collection = db.collection('subscribers');
    collection.findOne({ _id: id }, (error, subscriber) => {
      if (error) {
        console.error(error);
        res.status(500).send({ message: error.message });
        return;
      }
      if (!subscriber) {
        res.status(400).send({ message: `Subscriber with id ${id} not found` });
        return;
      }
      res.send(subscriber);
      client.close();
    });
  });
});
