import User from "../models/user.model.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

// 🟢 Get all user
export const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});

    if (!users.length || users.length === 0)
      return res.status(404).json({ message: "No users found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

// 🟢 Get single user

export const getUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

// 🟢 Update user
export const updateUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update only the requested fields
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10); // Generate salt
      user.password = await bcrypt.hash(req.body.password, salt); // Hash password
    }

    // Save the updated user
    const updatedUser = await user.save();

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

//   🟢 Delete user
export const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

// 🟢 Create user
export const createUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10); // Generate salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash password
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    const token = generateToken(res, savedUser._id, savedUser.isAdmin);
    res.status(200).json({
      message: "User created successfully",
      user: {
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        isAdmin: savedUser.isAdmin,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

// 🟢 Login user
export const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch)
      return res.status(401).json({ message: "Invalid credentials" });
    const token = generateToken(res, user._id, user.isAdmin);

    res.status(200).json({ message: "Login successfull", user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

// 🟢 Logout user
export const logoutUser = asyncHandler(async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: "Logout successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});
