import React from "react";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to="/notes/new" className="floating-button">
      <h3>&#65291;</h3>
    </Link>
  );
};

export default AddButton;
