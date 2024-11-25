import app from "./app";
import { createServer } from "http";
import { Server } from "socket.io";
import { registerSocketHandlers } from "./socket";

const PORT = process.env.PORT || 3000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

registerSocketHandlers(io);

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
