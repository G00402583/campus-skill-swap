import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import memberRoutes from "./routes/memberRoutes.js";
import offerRoutes from "./routes/offerRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/members", memberRoutes);
app.use("/api/offers", offerRoutes);

const port = 4000;

app.get("/", (req, res) => {
  res.json({ message: "Campus Skill Swap API is running" });
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
  }
}

startServer();
