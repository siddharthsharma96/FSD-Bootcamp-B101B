const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    cloudinaryImageId: { type: String },
    locality: { type: String },
    areaName: { type: String },
    costForTwo: { type: String },
    cuisines: [String],
    avgRating: { type: Number },
    avgRatingString: { type: String },
    totalRatingsString: { type: String },
    parentId: { type: String },
    nextCloseTime: { type: String },
    opened: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
