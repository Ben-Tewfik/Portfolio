import { useEffect } from "react";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
export default function ThemeToggle({ darkMode, setDarkMode }) {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(false);
  }, []);
  useEffect(() => {
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FaMoon /> : <IoSunny />}
    </button>
  );
}
