import React from 'react';
import {Route,Routes} from "react-router-dom";
import Main from "./Pages/Main/Main";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Team from "./Pages/Teams/Team";
import Alumni from "./Pages/Alumni/Alumni";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </div>
  );
}

export default App;