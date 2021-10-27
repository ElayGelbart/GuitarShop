const express = require('express');
const cors = require('cors');
const fs = require('fs');
//class
const guitarClass = require('./Classes/guitar')
// others
const app = express();
const port = 8080;

// start the server
app.listen(port, function () {
  console.log(`listing to port ${port}`);
});
app.use(cors());
app.use(express.json()) // for parsing routerlication/json
app.use(express.urlencoded({ extended: true })) // for parsing routerlication/x-www-form-urlencoded
app.post('/sell/:type', async (req, res, next) => {
  const type = req.params.type;
  const guitarProps = JSON.parse(req.body.data);
  const guitarNewClass = guitarClass.newClassicGuitar(guitarProps.manufactureYear, guitarProps.brand, guitarProps.price, guitarProps.numOfString);
  try {
    console.log(guitarNewClass);
    fs.writeFileSync(`../guitars4Sell/${guitarNewClass.id}.json`, JSON.stringify(guitarNewClass));
    console.log("yay");
  } catch (err) {
    console.log("failed");
    next(err)
  }
});


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