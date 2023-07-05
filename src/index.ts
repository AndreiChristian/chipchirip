import express from "express";

import { config } from "dotenv";
import corsMiddleware from "./middleware";
import Router from "./routes/index";

config();

const app = express();
const port = process.env.PORT || 3333;

app.use(corsMiddleware);

app.use(express.json());

app.use("/api", Router);

app.get("/", async (req, res) => {
  res.json({ Hello: "World" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
