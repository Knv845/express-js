const express = require("express");

const app = express();

app.get("/", function(request,reponse){
reponse.send("hello world");
}
);

app.listen(3000, function(){
 console.log('server has started');
});