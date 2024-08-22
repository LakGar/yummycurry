// Import necessary libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // To parse JSON request bodies
app.use(cors()); // To enable CORS
app.use(helmet()); // To secure HTTP headers
app.use(morgan("tiny")); // To log HTTP requests

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Basic routes (you would normally separate these into different route files)
app.get("/", (req, res) => {
  res.send("Welcome to the Catering App API");
});

// // Sample route for MenuItems (assuming you have a MenuItem model)
// app.get("/menu", async (req, res) => {
//   try {
//     const menuItems = await MenuItem.find(); // Replace MenuItem with your actual Mongoose model
//     res.json(menuItems);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch menu items" });
//   }
// });

// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
