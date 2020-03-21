const socketio = require("socket.io");

module.exports = server => {
  const io = socketio(server);
  console.log("Configured websockets");

  io.on("connection", socket => {
    console.log("a user connected");
    socket.emit("chatmessage", "Hola desde el servidor");
    socket.on("chatmessage", msg => {
      console.log(`Received message: "${msg}", replying....`);
      socket.emit("chatmessage", "Reply:" + msg);
    });
  });
};
