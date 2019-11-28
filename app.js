var express = require('express');
var app = express();
var request = require('request');

var program = {
    script: "console.log('hello')",
    language : "nodejs",
    versionIndex : "1",
    clientId : "2751a219a35a12b6e01abb7d6a39c025",
    clientSecret:"feaf6132ea11024f3148c710f21c40d7fbd8faa174020e6986e6c2951d85bc60"
};
request({
    url: 'https://api.jdoodle.com/v1/execute',
    method: "POST",
    json: program
},
function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});
app.listen(4999,(req,res)=>{
    console.log("app is listening port:4999");
})








