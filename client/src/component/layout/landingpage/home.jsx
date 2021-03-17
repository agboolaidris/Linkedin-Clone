import React from "react";
import { Link } from "react-router-dom";
import home from "../../../img/home.svg";
function Home() {
  return (
    <div className="container home">
      <div className="content">
        <h1>Welcome to your professional community</h1>
        <div>
          <Link>Find Person You Know</Link>
        </div>
        <div>
          <Link>Hire professional for your company</Link>
        </div>
        <div>
          <Link>Join the professional community</Link>
        </div>
      </div>
      <div className="svg">
        <img src={home} />
      </div>
    </div>
  );
}

export default Home;
