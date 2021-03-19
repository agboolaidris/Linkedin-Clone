import React, { useEffect } from "react";
import Navbar from "./component/layout/nav/nav";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Public from "./Router/public/public";
import { checkLogin } from "./redux/action/auth";
import Private from "./Router/private/private";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ToastContainer position="top-center" />
        <Public />
        <Private />
      </BrowserRouter>
    </div>
  );
}

export default App;
