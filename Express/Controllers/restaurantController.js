const Restaurant = require("../Model/restaurantModel");

// Create Restaurant
exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(201).json({ status: "success", data: restaurant });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

// Get All Restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json({
      status: "success",
      length: restaurants.length,
      data: restaurants,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

// Get Restaurant by ID
exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res
        .status(404)
        .json({ status: "fail", message: "Restaurant not found" });
    }
    res.status(200).json({ status: "success", data: restaurant });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

// Delete Restaurant
exports.deleteRestaurant = async (req, res) => {
  try {
    const deleted = await Restaurant.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res
        .status(404)
        .json({ status: "fail", message: "Restaurant not found" });
    }
    res.status(200).json({ status: "success", message: "Restaurant deleted" });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};
