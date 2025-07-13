const mongoose = require("mongoose");

// Item schema remains the same
const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  imgName: String,
  imageId: String,
  inStock: { type: Boolean, default: true },
  isVeg: Boolean,
  rating: String,
  ratingCount: String,
  ratingCountV2: String,
  defaultPrice: Number,
  price: Number,
});

// Section schema
const SectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  itemCards: [ItemSchema],
});

// 🔄 NEW: Menu schema containing sections
const MenuSchema = new mongoose.Schema({
  menuSections: [SectionSchema],
});

const Menu = mongoose.model("Menu", MenuSchema);
module.exports = Menu;
