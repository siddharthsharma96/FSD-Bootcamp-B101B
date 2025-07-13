// const fs = require("fs");

const Tour = require("./../Model/tourModel");
// const tours = JSON.parse(fs.readFileSync("./dev-data/tours.json", "utf-8"));

// exports.checkId = (req, res, next, val) => {
//   console.log("asas", val);
//   if (val > tours.length) {
//     return res.status(404).json({
//       status: "fail",
//       message: "your id is not unavailable check from middleware right now",
//     });
//   }
//   next();
// };

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      result: tours.length,
      requestedAt: req.requestTime,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    // let id = req.params.id * 1;
    // const tour = tours.find((el) => el.id === id);
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// exports.createTour = async (req, res) => {
//   try {
//     const newTour = await Tour.create(req.body);
//     res.status(201).json({
//       status: "done",
//       data: {
//         newTour,
//       },
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };

exports.createTour = async (req, res) => {
  try {
    const NewT = await Tour.create(req.body);
    // console.log(req.body);
    res.status(201).json({
      data: NewT,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.updateTour = async (req, res) => {
  try {
    // let id = req.params.id * 1;
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    //   const tour = tours.find((el) => el.id === id);
    //   console.log(tour);
    res.status(201).json({
      status: "Success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    //   const tour = tours.find((el) => el.id === id);
    //   console.log(tour);
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
