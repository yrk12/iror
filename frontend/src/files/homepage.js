import React from "react";
import { Link } from "react-router-dom";
import "./files.css";

import "./files.css";

import Bookticket from "./components/bookticket";
import Trainsearch from "./components/trainsearch";
import Pnrsearch from "./components/pnrsearch";

function Homepage() {
  return (
    <>
      <Bookticket />
      <Trainsearch />
      <Pnrsearch />
    </>

  );
}

export default Homepage;
