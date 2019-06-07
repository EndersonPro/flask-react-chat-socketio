import React from "react";
import ReactDOM from "react-dom";
import { initSocket } from "./socketio.config";
import App from "./App";
import "./styles/App.scss";

ReactDOM.render(<App />, document.querySelector("#app"), () => initSocket());
