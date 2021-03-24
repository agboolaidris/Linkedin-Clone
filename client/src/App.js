import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
//setup the react-toastify library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import Navbar from the layout folder
import Navbar from "./layout/Header/navbar";

//the public routes
import Public from "./Router/public/public";

//the private route
import Private from "./Router/private/private";

//check if the user is authenticated when the page load
import { checkLogin } from "./redux/action/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

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
