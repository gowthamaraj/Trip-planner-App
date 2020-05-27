let Data = {};
const path = require('path');
const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const app = express();
const getAllData = require('./getData');

//middleware for parsing the json data request
app.use(body_parser.urlencoded({extended : false}));
app.use(body_parser.json());

//for allowing cross site requests
app.use(cors());

// serve static pages from the dist folder
app.use(express.static('dist'));

//serve the home page on get request from client
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
});

//get the data from the client and send back the response
app.post('/fetch', function(req,res){
  Data['city'] = req.body.city;
  Data['dep'] = req.body.dep;
  Data['future'] = req.body.future;
  Data['future'] = req.body.future;
  //log to see the data
  console.log(Data);
  getAllData(Data['city'],Data['dep'],Data['future']).then( d=> {res.send(d);}).catch(err => {console.log(err);});
});

// start listening for the request on the port 3000
const server = app.listen(3000, function listening() {
  console.log(`running on localhost: 3000`);
});

module.exports = app;