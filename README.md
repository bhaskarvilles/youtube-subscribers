# How to setup project :
- Install the required dependencies:
```npm install express mongodb```
- The File `src/createDatabase.js` This file will start an Express server on port 3000.

- You can use a tool like Postman or curl to send a GET request to the `/subscribers` route and retrieve a list of subscribers:
  `curl http://localhost:3000/subscribers`
- You can also send a GET request to the `/subscribers/names` route to retrieve a list of subscribers with only their names and subscribed channels:
  `curl http://localhost:3000/subscribers/names`
- You can send a GET request to the `/subscribers/:id` route with a specific id to retrieve a single subscriber:
  `curl http://localhost:3000/subscribers/123`
  
**Open the MongoDB shell by running the following command in your terminal:**

`mongo`

**Connect to the "myDatabase" database by running the following command in the MongoDB shell:**

`use myDatabase`

**Insert a new document into the "subscribers" collection using the insertOne method:**

`db.subscribers.insertOne({
  name: 'John Doe',
  email: 'john.doe@example.com',
  subscribedChannel: 'Tech Tips'
});
`

**This will insert a new document with the specified fields into the "subscribers" collection.**

**You can also insert multiple documents at once using the insertMany method:**

`db.subscribers.insertMany([
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    subscribedChannel: 'Cooking with Jane'
  },
  {
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    subscribedChannel: 'DIY Projects'
  }
]);
`

**You can then use the find method to retrieve the documents you have inserted:**

`db.subscribers.find();`

**This will display all the documents in the "subscribers" collection.**