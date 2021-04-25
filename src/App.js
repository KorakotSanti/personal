import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SkillPage from "./pages/skillpage/skillpage.component";
import AboutMe from './pages/aboutme/aboutme.component';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/skills" component={SkillPage} />
          <Route path="/aboutme" component={AboutMe} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
