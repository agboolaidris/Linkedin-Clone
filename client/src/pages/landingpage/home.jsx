import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import home from "../../assets/img/home.svg";
import man from "../../assets/img/man.jpg";

function Home() {
  return (
    <div className=" home">
      <div className="content-wrapper">
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
      <div className="main container">
        <div className="main-content">
          <h1>Let the right people know you’re open to work</h1>
          <p>
            With the Open To Work feature, you can privately tell recruiters or
            publicly share with the LinkedIn community that you are looking for
            new job opportunities
          </p>
        </div>
        <div className="main-imgbx">
          <div className="imgbx">
            <img src={man} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
