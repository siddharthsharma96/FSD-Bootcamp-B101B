const fs = require("fs");

const tours = JSON.parse(fs.readFileSync("./dev-data/tours.json", "utf-8"));

exports.checkId = (req, res, next, val) => {
  console.log("asas", val);
  if (val > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "your id is not unavailable check from middleware right now",
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    result: tours.length,
    requestedAt: req.requestTime,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
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

exports.createTour = (req, res) => {
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
    "./dev-data/tours.json",
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

exports.updateTour = (req, res) => {
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
exports.deleteTour = (req, res) => {
  //   const tour = tours.find((el) => el.id === id);
  //   console.log(tour);
  res.status(204).json({
    status: "Success",
    data: null,
  });
};
