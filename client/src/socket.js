import { io } from "socket.io-client";

const socket = io("ws://localhost:3000");

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;