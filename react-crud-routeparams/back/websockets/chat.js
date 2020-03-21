const socketio = require("socket.io");
const emoji = require("node-emoji");

module.exports = server => {
  const io = socketio(server);
  console.log("Configured websockets");

  io.on("connection", socket => {
    console.log("a user connected");
    socket.emit("chatmessage", "Hola desde el servidor");
    socket.on("chatmessage", msg => {
      let emoified = emoji.emojify(msg);
      console.log(`Received message: "${emoified}", replying....`);
      socket.emit("chatmessage", "Reply: " + emoified);
    });
  });
};
