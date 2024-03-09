import React, { useEffect, useState } from "react";
import ThemesItem from "./ThemesItem";
import { themes } from "../data";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./Themes.css";

const getStorageColor = () => {
  let color = "green";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }
  return color;
};

// ----------theme related code----------
const getStorageTheme = () => {
  let theme = "dark-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());

  const changeColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--first-color", color);
    localStorage.setItem("color", color);
  }, [color]);

  // ---------theme related code----------
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <div className={`${showSwitcher ? "show-switcher" : ""} style__switcher`}>
        <div
          className="style__switcher-toggler"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <FaCog></FaCog>
        </div>
        <div className="theme__toggler" onClick={toggleTheme}>
          {theme === "light-theme" ? <BsSun></BsSun> :  <BsMoon></BsMoon>}
        </div>
        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme) => (
            <ThemesItem
              key={theme.id}
              {...theme}
              changeColor={changeColor}
            ></ThemesItem>
          ))}
        </div>
        <div
          className="style__switcher-close"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default Themes;
