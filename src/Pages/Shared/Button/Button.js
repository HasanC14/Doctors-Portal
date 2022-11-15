import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children }) => {
  return (
    <div>
      <Link className="btn btn-primary bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
        {children}
      </Link>
    </div>
  );
};

export default Button;
