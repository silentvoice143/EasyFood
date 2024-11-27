import { Server } from "socket.io";

export const registerSocketHandlers = (io) => {
  io.on("connection", (socket) => {
    console.log("a user connected:", socket.id);

    socket.on("message", (message) => {
      console.log("message received:", message);
      io.emit("message", message);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected:", socket.id);
    });
  });
};
