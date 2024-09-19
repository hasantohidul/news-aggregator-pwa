import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <div className="p-4">
        <button
          className="mb-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
        <Home />
      </div>
    </div>
  );
}

export default App;
