import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  number: { type: Number, required: true },
  desc: { type: String, required: true },
  roomNumbers: [
    {
      number: { type: Number, required: true },
      unavailableDates: [Date], // Store unavailable dates as an array of Date objects
    },
  ],
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
