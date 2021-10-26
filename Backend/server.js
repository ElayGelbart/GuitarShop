const express = require('express');
var cors = require('cors');
// my files
const errorHandler = require('./middleware/errorHandler');
// others
const app = express();
const port = 8080;

// start the server
app.listen(port, function () {
  console.log(`listing to port ${port}`);
});
app.use(cors());
app.post('/sell/:type', (req, res, next) => {
  const type = req.params.type;
})

app.use(function errorHandler(err, req, res, next) {
  if (err.status) {
    console.log('in error')
    res.status(err.status);
    res.send();
  }
  else {
    res.status(500);
    res.send()
  }
})