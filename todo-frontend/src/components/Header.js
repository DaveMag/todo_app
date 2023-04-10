import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";

const Header = () => {
  return (
    <>
      <div className="main-header">
        <Link className="linkHeader" to="/">
          <h1 className="notes-title">Notes </h1>
          <span className="pen"> &#128393;</span>
        </Link>
      </div>
    </>
  );
};

export default Header;
