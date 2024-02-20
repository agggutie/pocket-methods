import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './Components/Pages/Home';
import InstrumentSelection from './Components/Pages/InstrumentSelection';
import Mode from './Components/Pages/ModeSelect';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import GameContext from './Components/GameContext';
import Level from './Components/Pages/Level';
import AOS from 'aos';
import About from './Components/Pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [instrument, setInstrument] = useState(null);
  const [mode, setMode] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [skillMode, setSkillMode] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <div className="App">
      <GameContext.Provider value={{ instrument, setInstrument, mode, setMode, difficulty, setDifficulty, skillMode, setSkillMode }}>
        <Navbar />
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/instrument' element={<InstrumentSelection />} />
            <Route path='/mode' element={<Mode />} />
            <Route path='/about' element={<About />} />
            <Route path='/level' element={<Level />} />
          </Routes>
        </Router>
        <Footer />
      </GameContext.Provider>
    </div>
  );
}

export default App;