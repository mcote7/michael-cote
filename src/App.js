import React, { useEffect, useState } from 'react';

import Main from './Components/Main/Main';
import Nav from './Components/Navigation/Nav';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  // 🚧 TODO set color theme (3) //

  useEffect(()=> {
    console.log("dark mode?", darkMode)
    // 🌗 set dark mode 
    const root = document.documentElement;
    
    root?.style.setProperty("--bgcolor", darkMode ? "#444444" : "#e4ebf5");
    root?.style.setProperty("--dark-shadow", darkMode ? "#363636" : "#bec8e4");
    root?.style.setProperty("--light-shadow", darkMode ? "#525252" : "#ffffff");
    
    root?.style.setProperty("--text-color-primary", darkMode ? "rgba(255, 255, 255, 0.93)" : "rgba(0, 0, 0, 0.93)");
    root?.style.setProperty("--text-color-secondary", darkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)");
    root?.style.setProperty("--text-color-disabled", darkMode ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.45)");
    
    root?.style.setProperty("--bg-color-disabled", darkMode ? "#727272" : "#dee5e8");
  },[darkMode]);
  
  return (
    <div className="container-fluid neu-app">
      <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main/>
    </div>
  );
};

export default App;
