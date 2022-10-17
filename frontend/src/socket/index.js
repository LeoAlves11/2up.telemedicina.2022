import { io } from 'socket.io-client'

const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"]
}

const socket = io('echo.websocket.org', options);

export default socket;