import { io } from "socket.io-client";
// const socket = io("https://game.arlia.space");
const socket = io("http://localhost:3000");

export default socket;
