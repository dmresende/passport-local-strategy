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
app.use("/api", router);

export default app;
