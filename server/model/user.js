const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default:
      "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-260nw-1114445501.jpg",
  },
  phone: {
    type: String,
    unique: true,
    sparse: true, // allows this field to be optional
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  userType: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  address: {
    type: String,
    required: true,
  },
  deliveryPreferences: {
    type: String,
    enum: ["morning", "afternoon", "evening"],
    default: "morning",
  },
  favoriteItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MenuItem",
    },
  ],
  notifications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notification",
    },
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
  activityLog: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ActivityLog",
    },
  ],
  privacySettings: {
    type: Object,
    default: {},
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

const User = mongoose.model("User", userSchema);

module.exports = User;
