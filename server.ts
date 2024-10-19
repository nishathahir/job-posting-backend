import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import jobPortalRoutes from "./routes/jobPortalRoutes";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json()); // Use this instead of bodyParser (newer versions support it)

// MongoDB connection
const mongoURI = process.env.MONGO_URI || "your_mongo_db_uri";

mongoose
  .connect(mongoURI) // Removed the old options
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
// Use the interview routes
app.use("/api", jobPortalRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
