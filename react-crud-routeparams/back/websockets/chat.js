const socketio = require("socket.io");
const emoji = require("node-emoji");

module.exports = server => {
  const io = socketio(server);
  console.log("Configured websockets");

  io.on("connection", socket => {
    console.log("a user connected");
    // Emit the first message on connect
    socket.emit("chatmessage", "Hola desde el servidor");

    // Register event listener on messages
    socket.on("chatmessage", msg => {
      let emoified = emoji.emojify(msg);
      console.log(`Received message: "${emoified}", replying....`);
      socket.broadcast.emit("chatmessage", "Reply: " + emoified);
    });
  });
};
