import asyncHandler from "../middlewares/asyncHandler.js";
import Room from "../models/room.model.js";

export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    if (!rooms.length || rooms.length === 0)
      return res.status(404).json({ message: "No rooms found" });
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 create a room
export const createRoom = asyncHandler(async (req, res) => {
  try {
    const { name, price, number, desc, unavailableDates } = req.body;

    // Check if the room number already exists in any room document
    const existingRoom = await Room.findOne({ "roomNumbers.number": number });

    if (existingRoom) {
      return res.status(400).json({ message: "Room number already exists" });
    }

    // Create a new room document
    const newRoom = new Room({
      name,
      price,
      desc,
      roomNumbers: [{ number, unavailableDates }],
    });

    // Save the room to the database
    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🟢 Get single room
export const getRoomById = asyncHandler(async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🟢 Update room
export const updateRoom = asyncHandler(async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

// 🟢 Delete room
export const deleteRoom = asyncHandler(async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
