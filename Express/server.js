const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(express.json());
const tours = JSON.parse(fs.readFileSync("./dev-data/tours.json", "utf-8"));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// status code:
// 1XX:Informational
// 2xx: Success
// 3xx:Redirection
// 4xx: Client Error
// 5xx: Server Error
// CRUD C:Create(post) R:Read(get) U:Update(put and patch) D:Delete(delete)
// controllers
const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    result: tours.length,
    requestedAt: req.requestTime,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  console.log(req.params);
  let id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

const createTour = (req, res) => {
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
};

const updateTour = (req, res) => {
  let id = req.params.id * 1;

  //   const tour = tours.find((el) => el.id === id);
  //   console.log(tour);
  res.status(201).json({
    status: "Success",
    data: {
      message: "Updated tour done",
    },
  });
};
const deleteTour = (req, res) => {
  //   const tour = tours.find((el) => el.id === id);
  //   console.log(tour);
  res.status(204).json({
    status: "Success",
    data: null,
  });
};
// userControllers
const getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};
// routes
// Tour Routes
// Step 1
// app.get("/api/v1/tours", getAllTours);
// app.post("/api/v1/tours", createTour);

// app.get("/api/v1/tours/:id", getTour);

// app.patch("/api/v1/tours/:id", updateTour);

// app.delete("/api/v1/tours/:id", deleteTour);

const TourRouter = express.Router();
const UserRouter = express.Router();

TourRouter.param("id", (req, res, next, val) => {
  console.log("asas", val);
  if (val > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "your id is not unavailable check from middleware right now",
    });
  }
  next();
});
TourRouter.route("/").get(getAllTours).post(createTour);
TourRouter.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

// app.get("/api/v1/user", getUser);
// app.post("/api/v1/user", createUser);
// app.patch("/api/v1/user/:id", updateUser);
// app.delete("/api/v1/user/:id", deleteUser);
UserRouter.route("/").get(getUser).post(createUser);
UserRouter.route("/:id").patch(updateUser).delete(deleteUser);

app.use("/api/v1/tours", TourRouter);
app.use("/api/v1/user", UserRouter);

PORT_NO = 9000;
app.listen(PORT_NO, () => {
  console.log("Server started on ", PORT_NO);
});
