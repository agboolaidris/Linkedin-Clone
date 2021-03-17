import React from "react";
import { Link } from "react-router-dom";
import home from "../../../img/home.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <div className="container home">
      <div className="content">
        <h1>Welcome to your professional community</h1>

        <Link>
          Find Person You Know
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>

        <Link>
          Hire professional for your company
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>

        <Link>
          Join the professional community
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className="svg">
        <img src={home} />
      </div>
    </div>
  );
}

export default Home;
