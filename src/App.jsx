import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import CLN from './components/CLN';
import AchievementBox from './components/AchievementBox';
import './App.css'

function App() {

  return (
    <>
      <div className="app">
        {
          <Router>
            <Routes>
              <Route path="/" element={<CLN/>} />
              <Route path="/achievementbox" element={<AchievementBox />} />
          
            </Routes>

          </Router>

        }
      </div>
    </>
  );
}

export default App
