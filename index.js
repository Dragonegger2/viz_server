var express = require('express');
var multer = require('multer');
var upload = multer({dest: './uploads/' });

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

//Should only have images being uploaded.
app.post('/', upload.single('file'), function(req, res){
    console.log(req.body); // form fields
    console.log(req.file);// form files
    res.status(204).end();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
