import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, renderMatches, Route, Routes } from 'react-router-dom';

import CalorieTracking from "./components/CalorieTracking";
import React from "react";


function App (){

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalorieTracking />} />
      </Routes>
    </Router>

  );
  }


export default App;
