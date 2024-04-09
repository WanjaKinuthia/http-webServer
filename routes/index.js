var express = require("express");

var app = express();

app.get('/read-all-users',(request,response)=>{
    response.send("list of all users");
});
app.get('/get-user-details',(request,response=>{
    const userObj ={
        id:1284757,
        name:"Kinuthia Wanja",
        lastname:"terry",
        status:true

    }
    response.send(userObj);

}));
app.listen(8000);