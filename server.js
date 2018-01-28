var express = require("express");
var app     = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/face_detection";

app.use(express.static('public'));
app.use('/static', express.static('data'));

app.get('/users', function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("face_detection");
    dbo.collection("users").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
})

var io = require('socket.io').listen(app.listen(3000));

io.sockets.on('connection', function (socket) {
  socket.emit('message', { message: 'welcome to the chat' });
  socket.emit('img_updated', { path: "/static/face_folder/img.png?" + new Date().getTime() });
  
  socket.on('imageUpdated', function (data) {
      console.log(data);
  });
});

console.log("Running at Port 3000");
