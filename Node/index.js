const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemplates = require("./modules/replaceTemplates");

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

// Read Files
const overview = fs.readFileSync("./templates/overview.html", "utf-8");
const product = fs.readFileSync("./templates/product.html", "utf-8");
const productData = JSON.parse(fs.readFileSync("./dev-data/data.json"));
const card = fs.readFileSync("./templates/card.html", "utf-8");

// Creating Server
const server = http.createServer((req, res) => {
  // console.log(req.url);
  const { query, pathname } = url.parse(req.url, true);
  // console.log(pathname);
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    const cardHtml = productData
      .map((prod) => replaceTemplates(card, prod))
      .join("");
    // console.log(cardHtml);
    const output = overview.replace("{%PRODUCT_CARDS%}", cardHtml);

    res.end(output);
  } else if (pathname === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    console.log(query);

    const prod = productData[query.id];
    let output = replaceTemplates(product, prod);
    res.end(output);
  } else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(productData));
  } else {
    res.end("Page not found please check the url");
  }
});

// Starting the server
PORT_NO = 8000;
server.listen(PORT_NO, "127.0.0.1", () => {
  console.log("server started on port", PORT_NO);
});
