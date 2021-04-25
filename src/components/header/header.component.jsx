import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="options">
      <Link className="name" to="/">
        KORAKOT SANTIUDOMMONGKOL
      </Link>
      <Link className="option-item" to="/aboutme">
        ABOUT ME
      </Link>
      <Link className="option-item" to="/skills">
        SKILLS & PROJECTS
      </Link>
      <a className="option-item" href="/document/Korakot_Santiudommongkol.pdf" target="_blank">
        RESUME
      </a>
    </div>
  </div>
);

export default Header;
