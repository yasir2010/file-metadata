var express = require('express');
var path = require('path');
var multer = require('multer');
var upload = multer();

var app = express();

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'/ind_ex.html'));
});

app.post('/filesize',upload.single('file'),function(req, res){
	var filedata = req.file;
	console.log(filedata);
	res.json({size:filedata['size']});
});

app.listen(process.env.PORT || 2000)