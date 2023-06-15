const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const roomRouter = require("./routes/room.route");

app.set("view engine", "ejs");
app.use(express.static("public/"));
app.use("/", roomRouter);

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);

    socket.on("disconnect", () => {
      socket.broadcast.to(roomId).emit("User disconnected" + userId);
    });
  });
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
