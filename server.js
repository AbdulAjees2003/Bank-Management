 var http =require('http');
 var fs = require('fs');
 http.createServer(function (req, res) {
  fs.readFile('HomePage.html',function(err,data){
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(data);
   return res.end();
  });
 }).listen(8080);
console.log("Server Run On 8080");