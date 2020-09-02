const express = require("express");
const { response } = require("express");
const nodemon = require("nodemon");

const app = express();

app.get("/", function(request,reponse){
reponse.send("hello world");
}
);

app.get("/contact", function(req,res){
res.send("contact me at: knvkhera30@gmail.com");
});

app.get("/about", function(req,res){
    res.send("I am pursuing my bachelors from cgc landra");
});
app.listen(3000, function(){
 console.log('server has started');
});