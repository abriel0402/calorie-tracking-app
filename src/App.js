import Header from "./components/Header";
import Base from "./components/Base";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkoutLogging from "./components/WorkoutLogging";
import CalorieTracking from "./components/CalorieTracking";

function App() {

  let WORKOUTS = []

  const getData = (data) => {
    WORKOUTS.push(data)
  }
  
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Base workouts={WORKOUTS}/>} />
        <Route path="/workoutlogging" element={<WorkoutLogging onSubmit={getData}/>} />
        <Route path="/calorietracking" element={<CalorieTracking />} />
      </Routes>
    </Router>
  );
}

export default App;
