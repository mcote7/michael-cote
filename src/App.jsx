import React, { useEffect, useState } from 'react';

import Main from './Components/Main/Main';
import Nav from './Components/Navigation/Nav';

// 🚀 this component holds the theme change functions, which are passed to Nav controller.

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = (e) => {
    setDarkMode(!darkMode);
  };

  useEffect(()=> {
    
    const root = document.documentElement;
    
    root?.style.setProperty("--bgcolor", darkMode ? "#444444" : "#e4ebf5");
    root?.style.setProperty("--dark-shadow", darkMode ? "#363636" : "#bec8e4");
    root?.style.setProperty("--light-shadow", darkMode ? "#525252" : "#ffffff");
    
    root?.style.setProperty("--text-color-primary", darkMode ? "rgba(255, 255, 255, 0.93)" : "rgba(0, 0, 0, 0.93)");
    root?.style.setProperty("--text-color-secondary", darkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)");
    root?.style.setProperty("--text-color-disabled", darkMode ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.45)");
    
    root?.style.setProperty("--bg-color-disabled", darkMode ? "#727272" : "#dee5e8");
    
    console.log("dark mode?", darkMode)
    
  },[darkMode]);


  const [colorMode, setColorMode] = useState('blue');
  const [primaryColor, setPrimaryColor] = useState('#2977ff');
  
  const [isBlueActive, setIsBlueActive] = useState('active');
  const [isGreenActive, setIsGreenActive] = useState('');
  const [isOrangeActive, setIsOrangeActive] = useState('');

  useEffect(()=> {
    
    const root = document.documentElement;
    
    if(colorMode === 'blue') {
      root?.style.setProperty("--primary", "hsl(218, 100%, 58%)");
      root?.style.setProperty("--primary-dark", "hsl(230, 100%, 58%)");
      root?.style.setProperty("--primary-light", "hsl(217, 100%, 75%)");
      setPrimaryColor('#2977ff');
      setIsBlueActive('active');
      setIsGreenActive('');
      setIsOrangeActive('');
    }
    if(colorMode === 'green') {
      root?.style.setProperty("--primary", "hsl(108, 100%, 38%)");
      root?.style.setProperty("--primary-dark", "hsl(120, 100%, 38%)");
      root?.style.setProperty("--primary-light", "hsl(107, 100%, 52%)");
      setPrimaryColor('#27c200');
      setIsGreenActive('active');
      setIsBlueActive('');
      setIsOrangeActive('');
    }
    if(colorMode === 'orange') {
      root?.style.setProperty("--primary", "hsl(32, 100%, 48%)");
      root?.style.setProperty("--primary-dark", "hsl(28, 100%, 48%)");
      root?.style.setProperty("--primary-light", "hsl(32, 100%, 62%)");
      setPrimaryColor('#f58300');
      setIsOrangeActive('active');
      setIsBlueActive('');
      setIsGreenActive('');
    }
    
    console.log("color mode?", colorMode)
    
  },[colorMode]);
  
  return (
    <div className="container-fluid neu-app">
      <Nav 
        darkMode={darkMode}
        handleDarkMode={handleDarkMode} 
        setColorMode={setColorMode} 
        isBlueActive={isBlueActive} 
        isGreenActive={isGreenActive} 
        isOrangeActive={isOrangeActive}/>
        
      <Main 
        darkMode={darkMode} 
        primaryColor={primaryColor}/>
    </div>
  );
};

export default App;
