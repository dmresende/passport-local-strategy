import { timeStamp } from "console";
import express from "express";

const router = express.Router();

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
    res.status(200).json({
      timeStamp: Date.now(),
      message: "Success",
      code: 200,
    });
  } catch (e: any) {
    throw new Error(e);
  }
});

export default router;
