// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send({ message: 'Hello Holberton School!' });
// });
// app.listen(1245, () => {
//   console.log('Port 1245 is running')
// })

// module.exports = app;
// Import the Express module
const express = require('express');

// Create an instance of Express app
const app = express();

// Define a route for the root endpoint "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Make the app listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export the app for use in other modules
module.exports = app;
