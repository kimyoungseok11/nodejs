const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
//const http2 = require("http2"); //https

const name = "kys";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "Node" },
];
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    // fs.createReadStream("./html/index.html").pipe(res);
    ejs.renderFile("./template/index.ejs", { name }).then((data) => {
      res.end(data);
    });
  } else if (url === "/course") {
    // fs.createReadStream("./html/courses.html").pipe(res);
    ejs.renderFile("./template/courses.ejs", { courses }).then((data) => {
      res.end(data);
    });
  } else {
    // fs.createReadStream("./html/not-found.html").pipe(res);
    ejs.renderFile("./template/not-found.ejs", { name }).then((data) => {
      res.end(data);
    });
  }
});

server.listen(8080);
