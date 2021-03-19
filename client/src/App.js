import React from "react";
import Navbar from "./component/layout/nav/nav";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Public from "./Router/public/public";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Public />
      </BrowserRouter>
    </div>
  );
}

export default App;
