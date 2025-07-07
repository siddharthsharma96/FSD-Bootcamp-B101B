const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(express.json());
const tours = JSON.parse(fs.readFileSync("./dev-data/tours.json", "utf-8"));

// status code:
// 1XX:Informational
// 2xx: Success
// 3xx:Redirection
// 4xx: Client Error
// 5xx: Server Error
// CRUD C:Create(post) R:Read(get) U:Update(put and patch) D:Delete(delete)

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    result: tours.length,
    data: {
      tours,
    },
  });
});

app.get("/api/v1/tours/:id", (req, res) => {
  console.log(req.params);
  let id = req.params.id * 1;
  if (id > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "your id is not unavailable right now",
    });
  }
  const tour = tours.find((el) => el.id === id);
  //   console.log(tour);

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});

app.post("/api/v1/tours", (req, res) => {
  const newId = tours[tours.length - 1].id + 1;

  const newTour = Object.assign({ id: newId }, req.body);

  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "Missing name or price",
    });
  }
  tours.push(newTour);
  fs.writeFile(
    "./dev-data/tous.json",
    JSON.stringify(tours),
    "utf-8",
    (err) => {
      res.status(201).json({
        status: "done",
        dta: { newTour },
      });
    }
  );
});

app.patch("/api/v1/tours/:id", (req, res) => {
  let id = req.params.id * 1;
  if (id > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "your id is not unavailable right now",
    });
  }
  //   const tour = tours.find((el) => el.id === id);
  //   console.log(tour);
  res.status(201).json({
    status: "Success",
    data: {
      message: "Updated tour done",
    },
  });
});

app.delete("/api/v1/tours/:id", (req, res) => {
  let id = req.params.id * 1;
  if (id > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "your id is not unavailable right now",
    });
  }
  //   const tour = tours.find((el) => el.id === id);
  //   console.log(tour);
  res.status(204).json({
    status: "Success",
    data: null,
  });
});

PORT_NO = 9000;
app.listen(PORT_NO, () => {
  console.log("Server started on ", PORT_NO);
});
