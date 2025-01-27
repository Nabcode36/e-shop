import express from "express";
import dotenv from "dotenv";

// routes
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // 5000 is the default port

app.use(express.json()); // allows for parsing the body of the request

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);

  connectDB();
});
