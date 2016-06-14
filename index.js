var express = require('express');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    console.log(file);
    //cb(null, "test" + Date.now() + '.' + mime.extension(file.mimetype));
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

//Should only have images being uploaded.
app.post('/', upload.array('photos', 12), function(req, res){
    console.log(req.body); // form fields
    console.log(req.file);// form files
    res.status(204).end();
}, function() {

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
