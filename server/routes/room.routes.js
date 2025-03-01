import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoomById,
  getRooms,
  updateRoom,
} from "../controllers/room.controller.js";

const router = express.Router();

// get rooms
router.route("/").post(createRoom).get(getRooms);
router.route("/:id").get(getRoomById).put(updateRoom).delete(deleteRoom);

export default router;
