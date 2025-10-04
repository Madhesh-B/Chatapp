import { io } from "socket.io-client";

const Socket = io("https://chat-pie-backend.onrender.com/chat");
export default Socket;