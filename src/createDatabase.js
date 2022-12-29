const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connected to MongoDB');
  const db = client.db(dbName);
  db.createCollection('subscribers', (error, collection) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('Collection created');
    client.close();
  });
});
