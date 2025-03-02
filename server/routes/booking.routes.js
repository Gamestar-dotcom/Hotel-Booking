import express from "express";
import {
  createBooking,
  deleteBooking,
  getBookingById,
  getBookings,
  updateBooking,
} from "../controllers/booking.controller.js";
import { authenticateUser } from "../utils/authUser.js";

const router = express.Router();

router.route("/").get(getBookings).post(authenticateUser, createBooking);

router
  .route("/:id")
  .get(getBookingById)
  .put(authenticateUser, updateBooking)
  .delete(authenticateUser, deleteBooking);

export default router;
