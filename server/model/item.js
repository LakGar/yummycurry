const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["Veg", "Non-Veg", "Dessert", "Beverage"],
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
    default:
      "https://www.shutterstock.com/image-photo/food-placeholder-image-260nw-1006475266.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
