const mongoose = require("mongoose");

const bidsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  price: { type: Number, required: true },
  offer: { type: mongoose.Schema.Types.ObjectId, ref: "Offer" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imageUrls: [{ type: String }],
});

const Bid = mongoose.model("Bid", bidsSchema);