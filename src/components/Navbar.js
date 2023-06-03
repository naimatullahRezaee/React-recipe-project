import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "./SearchBar";

import { useTheme } from "../hooks/UseTheme";
export default function Navbar() {
  const { color, changeColor } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav onClick={() => changeColor("green")}>
        <Link to="/" className="brand">
          <h1>Recipe Food</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
