
const express = require("express");
const server = express();

server.use(express.json());

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router");

server.get("/", (req, res) => {
  res.json({
    message: "Successfully Connected"
  });
});

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
module.exports = server;

