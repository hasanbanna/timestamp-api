var express = require('express')
var app = express()
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'))
})
// convert unix time to a date
app.get('/date', function(req,res){
  var date = new Date(req.query.unix_time*1000);
  res.send(date);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})