import express from "express";
import { User } from "../models/user";

const router = express.Router();
const formattedDate = new Date().toLocaleString("pt-BR");

router.get("/user", async (req, res) => {
  const user = {
    id: 1,
    name: "Douglas Resende",
  };
  console.log("🚀  user", user);
  res.json({ user, code: 200, message: "Success" });
});

//POST /register
router.post("/register", async (req, res) => {
  try {
    // const user = new User();
    // const { firstName, lastName, email } = req.body;
    const user = req.body;
    const formattedDate = new Date().toLocaleString("pt-BR"); // Formata para o padrão brasileiro

    res.status(200).json({
      timeStamp: formattedDate,
      message: "Success",
      user,
      code: 200,
    });
  } catch (e: any) {
    throw new Error(e);
  }
});

// POST /login
router.post("/login", async (req, res) => {
  try {
    res.status(200).json({
      timeStamp: formattedDate,
      message: "Logged in successfully",
      code: 200,
    });
  } catch (e: any) {
    throw new Error(e);
  }
});

//POST /logout
router.post("/logout", async (req, res) => {
  try {
    res.status(200).json({
      timeStamp: formattedDate,
      message: "logout in successfully",
      code: 200,
    });
  } catch (e: any) {
    throw new Error(e);
  }
});

router.all("*", async (req, res) => {
  try {
    res.status(404).json({
      timeStamp: formattedDate,
      message: "Route not found",
      code: 404,
    });
  } catch (e: any) {
    throw new Error(e);
  }
});

export default router;
