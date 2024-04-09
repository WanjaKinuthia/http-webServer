const express = require("express");

const{ createServer} = require('http');
const { stringify } = require('querystring');

const server =createServer((request, response)=> {
    response.writeHead(200,{'content-Type':'text/html'});
    response.write('<h1>Hey Terry!</h1>');
    //response.writeHead(200,{'content-Type':'application/json'});
    //response.write(JSON.stringify({a:1, b:2, c:3}));
    return response.end();

});

const app = express();

app.get('/read-all-users',(request,response)=>{
    try{
    response.send("list of all users");
    console.log("read-all-users is working");
    }
    catch(error){
        console.log("All user details");
    }
});
app.get('/get-user-details',(request,response)=>{
    try{
    const userObj ={
        id:1284757,
        name:"Kinuthia Wanja",
        lastname:"terry",
        status:true
    };
    response.send(userObj);
    console.log("get-user-details is working");
   }
   catch(error){
    console.log("User details error");

}
});

app.listen(8000, () => {console.log("Server is running");
});