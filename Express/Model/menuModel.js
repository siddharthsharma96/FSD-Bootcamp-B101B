const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Item name is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  imgName: String,
  imageId: String,
  inStock: {
    type: Boolean,
    default: true,
  },
  isVeg: Boolean,
  rating: String,
  ratingCount: String,
  ratingCountV2: String,
  defaultPrice: Number,
  price: Number,
});

const SectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Section title is required"],
    },
    itemCards: [ItemSchema],
  },
  {
    timestamps: true,
  }
);

const RestaurantMenu = mongoose.model("RestaurantMenu", SectionSchema);

module.exports = RestaurantMenu;
