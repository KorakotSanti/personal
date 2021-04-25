import React from "react";

import { useHistory } from 'react-router-dom';

import "./custom-button.styles.scss";

const CustomButton = ({ children, href, ...props }) => {
  const history = useHistory();
  const handleClick = () => history.push(href);

  return (
    <div className="custom">
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default CustomButton;
