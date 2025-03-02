import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  loginUser,
  logoutUser,
  updateUser,
} from "../controllers/user.controller.js";
import { authenticateAdmin, authenticateUser } from "../utils/authUser.js";

const router = express.Router();

router.post("/login", loginUser);

router
  .route("/")
  .get(authenticateUser, authenticateAdmin, getUsers)
  .post(authenticateUser, authenticateAdmin, createUser);

router
  .route("/:id")
  .get(getUserById)
  .put(authenticateUser, updateUser)
  .delete(authenticateUser, authenticateAdmin, deleteUser);

router.post("/logout", authenticateUser, logoutUser);

export default router;
