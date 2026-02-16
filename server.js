import express from "express";
import cardRoutes from "./routes/cards.js";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());


connectDB();

app.use("/api/cards", cardRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
