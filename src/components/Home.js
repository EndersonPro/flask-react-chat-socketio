import React, { Component } from "react";
import { socket } from "../socketio.config";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  handlerChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  sendMessage = () => {
    console.log("Mensaje Enviado");
    socket.emit("new message", { msg: this.state.data });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.data}
          name="data"
          onChange={this.handlerChange}
        />
        <button type="button" onClick={this.sendMessage}>
          Send Message
        </button>
      </div>
    );
  }
}

export default Home;
