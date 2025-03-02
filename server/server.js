import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import roomRoutes from "./routes/room.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// connect mongodb

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("🟢 MongoDB connected"))
  .catch((e) => {
    console.error("🚫 Error connecting to MongoDB:", e);
    process.exit(1); // Exit the application with an error status
  });

// routes
app.use("/api/rooms", roomRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/users", userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("🚀 Server started on port ", port));
