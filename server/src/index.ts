import express from "express";
import router from "../src/lib/router";

const app = express();
const port = process.env.PORT || 3333;

app.listen(port, () => {
  try {
    console.log(`🚀 Server listening http://localhost:${port}/`);
  } catch (error: any) {
    throw new Error(error);
  }
});

//ele vai chamar o router
app.use("/api", router, (req, res) => {
  //se cair na rota default ele vai retornar a mesagem
  res.status(200).json({ message: "Home Page " });
});

export default app;
