import dotenv from "dotenv";


import express from "express";
import cardRoutes from "./routes/cards.js";
import connectDB from "./config/db.js";
dotenv.config();
const app = express();

app.use(express.json());


connectDB();

app.use("/api/cards", cardRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
