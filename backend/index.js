import app from "./src/app.js";
import { createServer } from "http";
import { Server } from "socket.io";
import { registerSocketHandlers } from "./src/socket.js";

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
