import { io } from 'socket.io-client'

const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"]
}

const socket = io('https://telemedicina-2up.herokuapp.com/', options);

export default socket;