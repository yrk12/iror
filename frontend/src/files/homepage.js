import React from "react";
import { Link } from "react-router-dom";
import "./files.css";

import "./files.css";

import Bookticket from "./components/bookticket";
import Trainsearch from "./components/trainsearch";
import Pnrsearch from "./components/pnrsearch";

function Homepage() {
  return (
    <div className="abc">
      <div className="train_query">
        <Bookticket />
      </div>
      <div className="search_train_homepage">
        <Trainsearch />
      </div>
      <div className="find_pnr_homepage">
        <Pnrsearch />
      </div>
    </div>

  );
}

export default Homepage;
