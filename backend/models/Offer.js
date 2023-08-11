const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  targetPrice: {
    type: Number,
    required: true,
  },
  bids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bid",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
