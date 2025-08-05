const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io");
const path = require("path");

const server = http.createServer(app);
const io = socketio(server);

// Set EJS as view engine
app.set("view engine", "ejs");

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Route
app.get("/", function (req, res) {
  res.render("index"); // views/index.ejs
});

// Socket.io connection
io.on("connection", function (socket) {
socket.on("send-location", function (data) {
io.emit("receive-location", { id: socket.id, ...data });
});

socket.on ("disconnect", function () {
  io.emit("receive-location", { id: socket.id, latitude: null, longitude: null });
});
});

// Start the server 

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
