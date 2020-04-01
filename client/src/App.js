import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./Routes";
import Header from "./components/homepage/Header";

function App() {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
