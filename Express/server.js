const express = require("express");
const cors = require("cors");
const tourRouter = require("./Routes/tourRoutes");
const userRouter = require("./Routes/userRoutes");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/user", userRouter);

module.exports = app;
