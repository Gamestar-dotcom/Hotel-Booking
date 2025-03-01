import express from "express";
import {
  createBooking,
  deleteBooking,
  getBookingById,
  getBookings,
  updateBooking,
} from "../controllers/booking.controller.js";

const router = express.Router();

router.route("/").get(getBookings).post(createBooking);

router
  .route("/:id")
  .get(getBookingById)
  .put(updateBooking)
  .delete(deleteBooking);

export default router;
