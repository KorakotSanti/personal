import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="options">
      <Link className="name" to="/">
        Korakot Santiudommongkol
      </Link>
      <Link className="option-item" to="/">
        ABOUT ME
      </Link>
      <Link className="option-item" to="/skills">
        SKILLS
      </Link>
    </div>
  </div>
);

export default Header;
