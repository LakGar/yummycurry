const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activityLogSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  action: {
    type: String,
    required: true,
    enum: [
      "Login",
      "Logout",
      "Order Placed",
      "Order Cancelled",
      "Payment Made",
      "Profile Updated",
      "Password Changed",
      "Item Reviewed",
    ],
  },
  details: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ActivityLog = mongoose.model("ActivityLog", activityLogSchema);

module.exports = ActivityLog;
