import "./ThemeSelector.css";
import { useTheme } from "../hooks/UseTheme";
import modeIcon from "../assets/mode-icon.svg";

const ThemeColors = ["#58249c", "#249c6b", "#b70233"];
export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={modeIcon}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
          alt=""
        />
      </div>

      <div className="theme-button">
        {ThemeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
