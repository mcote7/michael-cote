import React, { useEffect, useState } from 'react';
import useRS from "radioactive-state";
import Main from './Components/Main/Main';
import Nav from './Components/Navigation/Nav';
import { animateBulb } from './Util/bulb.anime';


const App = () => {

  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(()=> {
    animateBulb();
    
    document.body.classList.add('no-transition');
    
    const root = document.documentElement;
    
    root?.style.setProperty("--bgcolor", darkMode ? "#444444" : "#e4ebf5");
    root?.style.setProperty("--dark-shadow", darkMode ? "#363636" : "#bec8e4");
    root?.style.setProperty("--light-shadow", darkMode ? "#525252" : "#ffffff");
    
    root?.style.setProperty("--text-color-primary", darkMode ? "rgba(255, 255, 255, 0.93)" : "rgba(0, 0, 0, 0.93)");
    root?.style.setProperty("--text-color-secondary", darkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)");
    root?.style.setProperty("--text-color-disabled", darkMode ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.45)");
    
    
    // console.log("dark mode?", darkMode)
    
    setTimeout(() => {
      document.body.classList.remove('no-transition');
    }, 100);
    
  },[darkMode]);


  const [colorMode, setColorMode] = useState('blue');
  const [primaryColor, setPrimaryColor] = useState('#2977ff');
  
  const [isBlueActive, setIsBlueActive] = useState('active');
  const [isGreenActive, setIsGreenActive] = useState('');
  const [isOrangeActive, setIsOrangeActive] = useState('');

  useEffect(()=> {
    
    document.body.classList.add('no-transition');
    
    const root = document.documentElement;
    
    if(colorMode === 'blue') {
      animateBulb();
      root?.style.setProperty("--primary", "#2978FF");
      root?.style.setProperty("--primary-dark", "#0151D9");
      root?.style.setProperty("--primary-light", "#7DADFE");
      setPrimaryColor('#2978FF');
      setIsBlueActive('active');
      setIsGreenActive('');
      setIsOrangeActive('');
    }
    if(colorMode === 'green') {
      animateBulb();
      root?.style.setProperty("--primary", "#28C200");
      root?.style.setProperty("--primary-dark", "#219C00");
      root?.style.setProperty("--primary-light", "#6BDD4D");
      setPrimaryColor('#28C200');
      setIsGreenActive('active');
      setIsBlueActive('');
      setIsOrangeActive('');
    }
    if(colorMode === 'orange') {
      animateBulb();
      root?.style.setProperty("--primary", "#F58300");
      root?.style.setProperty("--primary-dark", "#C16700");
      root?.style.setProperty("--primary-light", "#FFB560");
      setPrimaryColor('#F58300');
      setIsOrangeActive('active');
      setIsBlueActive('');
      setIsGreenActive('');
    }
    
    // console.log("color mode?", colorMode)
    
    setTimeout(() => {
      document.body.classList.remove('no-transition');
    }, 100);
    
  },[colorMode]);


  const state = useRS({
    x: 0,
    y: 0
  });

  const handleMouseMove = (e) => {
    e.preventDefault();
    // console.log("coord:", e.clientX, e.clientY)
    const el = document.getElementById('follow');
    el.classList.add('on');
    state.x = e.clientX - 18; // (18) 1/2 width/height of el to center //
    state.y = e.clientY - 18;
  };

  const handleMouseLeave = (e) => {
    const el = document.getElementById('follow');
    el.classList.remove('on');
  };

  useEffect(()=> {
    window.addEventListener('blur', left);
    window.addEventListener('focus', back);
  },[]);

  const left = (e) => {
    document.title = 'see you soon 🚀';
  };

  const back = (e) => {
    document.title = 'welcome back ✨';
  };

  
  return (
    <div className="container-fluid neu-app">
      
      <Nav 
        darkMode={darkMode} 
        handleDarkMode={handleDarkMode} 
        setColorMode={setColorMode} 
        isBlueActive={isBlueActive} 
        isGreenActive={isGreenActive} 
        isOrangeActive={isOrangeActive} />
        
      <Main 
        darkMode={darkMode} 
        primaryColor={primaryColor} 
        isBlueActive={isBlueActive} 
        isGreenActive={isGreenActive} 
        isOrangeActive={isOrangeActive} 
        handleMouseMove={handleMouseMove} 
        handleMouseLeave={handleMouseLeave} />
                                              
      <div id="follow" className="follow" style={{top: `${state.y}px`, left: `${state.x}px`}}></div>
    </div>
  );
};

export default App;
