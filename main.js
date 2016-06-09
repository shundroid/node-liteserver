var port = 8080;

var contentTypes = {
  "html": "text/html",
  "css": "text/css",
  "js": "text/javascript",
  "json": "application/json",
  "png": "image/png",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "gif": "image/gif"
}
var http = require("http");
var fs = require("fs");
http.createServer(function(req, res) {
  var url = req.url === "/" ? "/index.html" : req.url;
  res.writeHead(200, { "Content-Type": contentTypes[url.split(".")[1]]});
  fs.readFile(__dirname + "/public" + url, "utf-8", function(err, data) {
    res.write(data);
    res.end();
  });
}).listen(port, function() {
  console.log("server running...");
});
