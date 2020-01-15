var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://portfoliojs:8081';
var serverTwo = 'http://ios-apijs:8082';

app.all("/ws/*", function(req, res) {
    try{
        apiProxy.web(req, res, {target: serverOne});
    }
    catch(err){
        console.log(err);
    }
    
})

app.all("/ios-api/*", function(req, res) {
    try{
        apiProxy.web(req, res, {target: serverTwo});
    }
    catch(err){
        console.log(err);
    }
    
})

app.get('/', function(req,res) {
    redirectToPortfolio(req,res);
})

app.use('*',redirectToPortfolio);

function redirectToPortfolio(req, res) {
    const targetUrl = 'http://williamstewart.dev/ws/';
    res.redirect(targetUrl);
}

app.listen(8080,function(){
    console.log("Server running at Port 8080");
  });