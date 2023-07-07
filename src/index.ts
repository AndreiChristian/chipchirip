import express, { NextFunction, Request, Response } from "express";

import { Server } from "socket.io";

import { config } from "dotenv";
// import corsMiddleware from "./middleware";
import Router from "./routes/index";
import corsMiddleware from "./middleware";

config();

const app = express();
const port = process.env.PORT || 3333;

app.use(corsMiddleware);

app.use(express.json());

app.use("/api", Router);

app.get("/", async (req, res) => {
  res.json({ Hello: "World" });
});

const server = app.listen(port, () => {
  console.log(`Example app listening at port :${port}`);
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:4200",
  },
});

io.on("connection", (socket) => {
  console.log("Hello");
});

