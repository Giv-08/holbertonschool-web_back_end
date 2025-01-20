var http = require('http');
var app = http.createServer(function (req, res) {
  res.write('Hello Holberton School!');
  res.end();
});
app.listen(1245);
module.exports = app;
