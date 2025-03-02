import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoomById,
  getRooms,
  updateRoom,
} from "../controllers/room.controller.js";
import { authenticateAdmin, authenticateUser } from "../utils/authUser.js";

const router = express.Router();

// get rooms
router
  .route("/")
  .post(authenticateUser, authenticateAdmin, createRoom)
  .get(getRooms);
router
  .route("/:id")
  .get(getRoomById)
  .put(authenticateUser, authenticateAdmin, updateRoom)
  .delete(authenticateUser, authenticateAdmin, deleteRoom);

export default router;
