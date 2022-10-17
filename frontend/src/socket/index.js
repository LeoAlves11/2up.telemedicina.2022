import { io } from 'socket.io-client'

const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"]
}

const socket = io('https://2up-telemedicina-2022.vercel.app:3001', options);

export default socket;