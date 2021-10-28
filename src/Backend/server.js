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
  let guitarNewClass;
  if (type == 'classic') {
    guitarNewClass = guitarClass.newClassicGuitar(guitarProps.manufactureYear, guitarProps.brand, guitarProps.price, guitarProps.numOfString);
  }
  else if (type == 'bass') {
    console.log("in Bass");
    guitarNewClass = guitarClass.newBassGuitar(guitarProps.manufactureYear, guitarProps.brand, guitarProps.price, guitarProps.numOfString);
  }
  else if (type == 'electric') {
    guitarNewClass = guitarClass.newElectricGuitar(guitarProps.manufactureYear, guitarProps.brand, guitarProps.price, guitarProps.numOfString);
  }
  else {
    return;
  }
  try {
    // guitarNewClass.picture = guitarProps.picture;
    fs.writeFileSync(`../guitars4Sell/${guitarNewClass.id}.json`, JSON.stringify(guitarNewClass));
    res.send(guitarNewClass.id)
    console.log("yay");
  } catch (err) {
    console.log("failed");
    next(err)
  }
});
app.get('/guitars', async (req, res, next) => {
  const guitarDirArr = fs.readdirSync('../guitars4Sell')
  let guitarObjArr = [];
  for (let value of guitarDirArr) {
    guitarObjArr.push(fs.readFileSync(`../guitars4Sell/${value}`, "utf-8"))
  }
  res.send(guitarObjArr);
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