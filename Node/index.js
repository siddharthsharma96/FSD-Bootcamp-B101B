const fs = require("fs");
const http = require("http");
const url = require("url");

// blocking
// Synchrous Manner
// fs.readFileSync("path","encoding manner")
// const readData = fs.readFileSync("./txt/read-this.txt", "utf-8");
// console.log(readData);
// console.log("Hello world");
// // write file (path,content,endod manner)
// // fs.writeFileSync("./txt/output.txt", "Written from Node files", "utf-8");
// console.log("filr writen succesfully");

// // non-Blocking code
// fs.readFile("./txt/start.txt", "utf-8", (err1, data1) => {
//   if (err1) {
//     return console.log("error 💥", err1);
//   }
//   console.log("First function", data1);

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data) => {
//     if (err) {
//       return console.log("error 💥", err);
//     }
//     console.log(data);
//   });
// });

// fs.writeFile(
//   "./txt/final.txt",
//   "This is added by Non Blocking code",
//   "utf-8",
//   (err) => {
//     if (err) {
//       return console.log("error 💥", err);
//     }
//     console.log("File Writeten Succesfully");
//   }
// );
// Creating Serverconstr server
const server = http.createServer((req, res) => {
  console.log(req.url);
  //   const { query, pathname } = url.parse(req.url, true);
  //   console.log(pathname);
  if ((req.url = "/about")) {
    res.end("we are abouty [age");
  }
  res.end("We have created our first Server");
});

PORT_NO = 8000;
server.listen(PORT_NO, "127.0.0.1", () => {
  console.log("server started on port", PORT_NO);
});
