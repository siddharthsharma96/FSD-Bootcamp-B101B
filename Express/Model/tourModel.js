const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Tour must contain a name"],
    unique: [true, "A tour must have a unique name"],
    trim: true,
    minlength: [5, "Name should have 5 characters"],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be above 1"],
    max: [5, "Rating should be below 5"],
  },
  price: {
    type: Number,
    required: [true, "A tour must contain a price"],
  },
  duration: {
    type: Number,
    required: [true, "Must Have a duration"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "Must Have  a size of the group"],
  },
  difficulty: {
    type: String,
    required: [true, "Must have a difficulty level"],
    enum: {
      values: ["easy", "medium", "difficult"],
    },
  },
  summary: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: String,
  images: [String],
  startDates: [Date],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

// model name ,schema name
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
