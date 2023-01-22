import Header from "./components/Header";
import Base from "./components/Base";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkoutLogging from "./components/WorkoutLogging";

function App() {

  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/workoutlogging" element={<WorkoutLogging />} />
      </Routes>
    </Router>
  );
}

export default App;
