import React from "react";
import CustomButton from '../../components/custom-button/custom-button.component';

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="home-container">
    <div className="homepage">
      <h1>
        Hi, I'm Korakot. I'm a Software Developer that likes to create Web
        Applications and learn about new technologies
      </h1>
    </div>
    <CustomButton href="/aboutme">ABOUT ME</CustomButton>
  </div>
);

export default HomePage;