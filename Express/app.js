const app = require("./server");
const dotenv = require("dotenv");

// console.log(process.env);

PORT_NO = 9000;
app.listen(PORT_NO, () => {
  console.log("Server started on ", PORT_NO);
});
