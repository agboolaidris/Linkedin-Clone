import React from "react";
import Navbar from "./component/layout/nav/nav";
import { BrowserRouter, Switch } from "react-router-dom";
import Public from "./Router/public/public";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Public />
      </BrowserRouter>
    </div>
  );
}

export default App;
