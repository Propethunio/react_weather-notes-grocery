import "../styles/nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <button
        onClick={() => {
          navigate("/notes");
        }}
        className="notes"
      >
        Notes
      </button>
      <button
        onClick={() => {
          navigate("/grocery");
        }}
        className="grocery"
      >
        Shopping list
      </button>
      <button
        onClick={() => {
          navigate("/weather");
        }}
        className="weather"
      >
        Weather
      </button>
      <button
        onClick={() => {
          navigate("/settings");
        }}
        className="settings"
      >
        Settings
      </button>
    </nav>
  );
};

export default Nav;
