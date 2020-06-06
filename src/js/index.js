import React from "react";
import ReactDOM from "react-dom";

const App = () => <p>Hello, React!</p>;

const $container = document.getElementById("app");
ReactDOM.render(<App />, $container);
