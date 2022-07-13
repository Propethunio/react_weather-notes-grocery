import "./styles/app.css";
import "./styles/darkMode.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/Home";
import NotesApp from "./pages/NotesApp";
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
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
