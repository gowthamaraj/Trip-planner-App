let Data = {};
const path = require('path');
const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const app = express();
const getAllData = require('./getData');
app.use(body_parser.urlencoded({extended : false}));
app.use(body_parser.json());
app.use(cors());
// serve pages
app.use(express.static('dist'));
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
});
app.post('/fetch', function(req,res){
  Data['city'] = req.body.city;
  Data['dep'] = req.body.dep;
  Data['future'] = req.body.future;
  Data['future'] = req.body.future;
  console.log(Data);
  getAllData(Data['city'],Data['dep'],Data['future']).then( d=> {res.send(d);}).catch(err => {console.log(err);});
});
const server = app.listen(3000, function listening() {
  console.log(`running on localhost: 3000`);
});
module.exports = app;