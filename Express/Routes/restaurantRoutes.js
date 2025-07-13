const express = require("express");
const router = express.Router();
const restaurantController = require("../Controllers/restaurantController");

router.post("/", restaurantController.createRestaurant);
router.get("/", restaurantController.getAllRestaurants);
router.get("/:id", restaurantController.getRestaurantById);
router.delete("/:id", restaurantController.deleteRestaurant);

module.exports = router;
