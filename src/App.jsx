import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CLN from './components/CLN';
import AchievementBox from './components/AchievementBox';
import SplashScreen from './components/Splash';

import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true);


  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (showSplash) {
      setTimeout(() => {
        setShowSplash(false);
      }, 4000);
    }
  }, [showSplash]);
  return (
    <>
      <div className="app">
        {showSplash ? (
          <SplashScreen />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<CLN/>} />
              <Route path="/achievementbox" element={<AchievementBox />} />
            </Routes>
          </Router>

        )}
      </div>
    </>
  );
}

export default App
