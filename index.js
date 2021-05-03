var http = require("http");
var hostname = "127.0.0.1";
var port = 8080;

const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;
  if (path === "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Contents-Type": "application/json" });
      const products = JSON.stringify([
        {
          name: "농구공",
          price: 50000,
        },
      ]);
      res.end(products);
    } else if (method === "POST") {
      res.end("생성되었습니다");
    } else {
      req.end("good bye");
    }
  }
});

server.listen(port, hostname);
// 요청을 기다리는 구문

console.log("Server On");
