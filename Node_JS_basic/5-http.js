var http = require('http');

const fs = require('fs');

var app = http.createServer(function (req, res) {
  const url = req.url;

  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (url === '/students') {
    res.write('This is the list of our students');
    res.end();
  }
});
app.listen(1245);
module.exports = app;
