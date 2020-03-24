require("dotenv").config();
const express = require("express");

const authRouter = require("./auth/auth-router");
const userRouter = require("./users/users-router");

const server = express();

server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

module.exports = server;