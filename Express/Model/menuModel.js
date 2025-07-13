const mongoose = require("mongoose");

// Schema for an individual item inside a section
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

// Schema for a menu section
const SectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Section title is required"],
    },
    itemCards: [ItemSchema], // array of items inside the section
  },
  {
    timestamps: true,
  }
);

const RestaurantMenu = mongoose.model("RestaurantMenu", SectionSchema);

module.exports = RestaurantMenu;
