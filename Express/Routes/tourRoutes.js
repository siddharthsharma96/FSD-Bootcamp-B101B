const express = require("express");
const tourController = require("./../Controllers/tourControllers");

const TourRouter = express.Router();

TourRouter.param("id", tourController.checkId);
TourRouter.route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);
TourRouter.route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = TourRouter;
