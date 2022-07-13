import "./styles/app.css";
import "./styles/darkMode.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/Home";
import NotesApp from "./pages/NotesApp";
import GroceryApp from "./pages/GroceryApp";
import WeatherApp from "./pages/WeatherApp";
import Settings from "./pages/Settings";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`${darkMode && "dark-mode"}`}>
        <div className="container">
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="/notes" element={<NotesApp />} />
            <Route path="/grocery" element={<GroceryApp />} />
            <Route path="/weather" element={<WeatherApp />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
