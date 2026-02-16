import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  suit: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  collection: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Card = mongoose.model("Card", cardSchema);

export default Card;
