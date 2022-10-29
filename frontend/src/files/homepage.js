import React from "react";
import { Link } from "react-router-dom";
import "./files.css";

import "./files.css";
import trainImg from "./train_img.jpg";

import Bookticket from "./components/bookticket";
import Trainsearch from "./components/trainsearch";
import Pnrsearch from "./components/pnrsearch";

function Homepage() {
  return (
    <div className="abc">
      <div className="homepage_main">
        <div className="train_query">
          <Bookticket />
        </div>
        <div className="train_image_homepage">
          <img src={trainImg} className="train_img" />
        </div>
      </div>
      <div className="train_enquiry_homepage">
        <div className="search_train_homepage">
          <Trainsearch />
        </div>
        <div className="find_pnr_homepage">
          <Pnrsearch />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
