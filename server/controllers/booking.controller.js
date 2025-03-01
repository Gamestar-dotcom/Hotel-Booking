import asyncHandler from "../middlewares/asyncHandler.js";
import Booking from "../models/booking.model.js";

// 🟢 Get all bookings
export const getBookings = asyncHandler(async (req, res) => {
  try {
    const bookings = await Booking.find({});

    if (!bookings.length || bookings.length === 0)
      return res.status(404).json({ message: "No bookings found" });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🟢 Create bookingJJ
export const createBooking = asyncHandler(async (req, res) => {
  try {
    const { BookingId, name, email, checkInDate, checkOutDate } = req.body;

    // Check if the user has already done the booking for that date and room
    const existingBooking = await Booking.findOne({
      roomId,
      checkInDate,
      checkOutDate,
    });

    if (existingBooking) {
      return res.status(400).json({ message: "Booking already exists" });
    }

    // Create a new room document
    const newBooking = new Booking({
      roomId,
      name,
      email,
      checkInDate,
      checkOutDate,
    });

    // Save the room to the database
    const savedBooking = await newBooking.save();
    res.status(200).json(savedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//🟢 Update booking
export const updateBooking = asyncHandler(async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

// 🟢 Delete booking
export const deleteBooking = asyncHandler(async (req, res) => {
  try {
    const Booking = await Booking.findById(req.params.id);
    if (!Booking) return res.status(404).json({ message: "Booking not found" });
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//  🟢 Get single booking
export const getBookingById = asyncHandler(async (req, res) => {
  try {
    const isBooked = await Booking.findById(req.params.id);
    if (!isBooked)
      return res.status(404).json({ message: "Booking not found" });
    res.status(200).json(isBooked);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
