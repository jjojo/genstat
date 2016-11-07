var http = require("http")
var express = require("express")
var app = express()

var port = process.env.PORT || 5000

app.get('/', function (req, res) {
  app.use(express.static(__dirname + "/dist"))
  res.redirect('index.html')
});

var server = http.createServer(app)
server.listen(port, function () {
  console.log("||||||||||||||||||||||||||||||||||||||||||");
  console.log("||                                      ||");
  console.log("||    STARTING SERVER ON PORT ",port,"    ||");
  console.log("||                                      ||");
  console.log("||||||||||||||||||||||||||||||||||||||||||");
})


