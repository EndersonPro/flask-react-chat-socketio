import io from "socket.io-client";

const socket = io("http://localhost:5000"),
  initSocket = () => {
    socket.on("connect", function() {
      console.log("socket connected!!");
    });
  };

export { socket, initSocket };
