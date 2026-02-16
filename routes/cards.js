import express from "express";
import Card from "../models/Card.js";

const router = express.Router();


// 🔹 GET all cards
router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// 🔹 GET by ID
router.get("/:id", async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) return res.status(404).json({ message: "Card not found" });

    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// 🔹 POST new card
router.post("/", async (req, res) => {
  try {
    const newCard = new Card(req.body);
    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// 🔹 PUT update card
router.put("/:id", async (req, res) => {
  try {
    const updatedCard = await Card.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedCard)
      return res.status(404).json({ message: "Card not found" });

    res.json(updatedCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// 🔹 DELETE card
router.delete("/:id", async (req, res) => {
  try {
    const deletedCard = await Card.findByIdAndDelete(req.params.id);

    if (!deletedCard)
      return res.status(404).json({ message: "Card not found" });

    res.json({ message: "Card deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
