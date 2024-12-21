import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  try {
    console.log(`Example app listening http://localhost:${port}/`);
  } catch (error: any) {
    throw new Error(error);
  }
});

app.use("/", async (req, res) => {
  res.json({
    code: 200,
    message: "Success",
  });
});

export default app;
