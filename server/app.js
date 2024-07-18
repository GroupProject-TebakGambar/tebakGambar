if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require("express");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        // origin: "https://tebakgambar-66ba1.web.app",
        origin: "http://localhost:5173",
    },
});
const router = require("./routers");
const cors = require("cors");
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

let onlineUsers = [];
io.on("connection", (socket) => {
    setTimeout(() => {
        socket.emit("message", "Welcome to Tebak Gambar!");
        socket.emit("online:users", onlineUsers);
    }, 1000);

    // Handle incoming audio stream
    socket.on("audioStream", (audioData) => {
        console.log("masukkkk");
        io.emit("audioStream", audioData);
    });

    socket.on("clientMessage", (args) => {
        io.emit("new:message", { message: args, id: socket.id });
    });

    if (socket.handshake.auth.username) {
        onlineUsers.push({
            id: socket.id,
            username: socket.handshake.auth.username,
        });
        socket.broadcast.emit("online:users", onlineUsers);
    }

    socket.on("disconnect", () => {
        onlineUsers = onlineUsers.filter((item) => item.id !== socket.id);
        socket.broadcast.emit("online:users", onlineUsers);
    });
});

httpServer.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
