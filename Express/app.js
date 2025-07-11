const app = require("./server");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

// console.log(process.env);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

// dummy data
// const tourTrip = new Tour({
//   name: "Bali Trip",
//   price: 6000,
// });

// save
// tourTrip
//   .save()
//   .then((doc) => console.log(doc))
//   .catch((err) => console.log("Error 💥", err));

PORT_NO = process.env.PORT_NO || 9000;
app.listen(PORT_NO, () => {
  console.log("Server started on ", PORT_NO);
});
