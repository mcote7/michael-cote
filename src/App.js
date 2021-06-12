import React, { useEffect, useState } from 'react';

import Main from './Components/Main/Main';
import Nav from './Components/Navigation/Nav';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=> {
    console.log("dark mode?", darkMode)
    // 
    
  },[darkMode]);
  
  return (
    <div className="container-fluid neu-app">
      <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main/>
    </div>
  );
};

export default App;
