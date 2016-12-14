var express = require('express');
var app = express();

app.get('/queryProducts',function(req,res){
	console.log('Querying products');
	res.json([{name: "iphone", price:900},{name: "Mac", price:1100}]);
});

app.post("/login",function(req,res){
	res.end("loggedin successfully");
});

app.listen(3000,function(){
	console.log("Server started on port 3000");
});