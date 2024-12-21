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

export default router;
