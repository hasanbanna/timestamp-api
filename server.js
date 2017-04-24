var express = require('express')
var app = express()
var path = require('path')
var moment = require('moment');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'))
})
// convert unix time to a date
app.get('/[0-9]+', function(req,res){
  var return_object = dateFromString(req.url.substring(1))
  res.send(return_object)
})

app.get('/[a-zA-Z]{3,9}(%20)?*[0-9]{2}(%20)?*[0-9]{4}', function(req,res){
  res.send(req.url);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

function dateFromString(unix_number){
  var mom_unix =  moment.unix(unix_number)
  return {unix: unix_number,
          natural:mom_unix.format("MMMM D, YYYY")}
}