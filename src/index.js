const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
