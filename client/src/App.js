import React from "react";
import Navbar from "./component/layout/nav/nav";
import { BrowserRouter, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <h1>App React</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
