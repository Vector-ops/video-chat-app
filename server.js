const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const roomRouter = require("./routes/room.route");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", roomRouter);

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
