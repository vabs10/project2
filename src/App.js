import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Profile />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
