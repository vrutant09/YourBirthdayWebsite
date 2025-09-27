import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import ConfettiAnimation from './components/ConfettiAnimation'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'
import BackgroundMusic from './components/BackgroundMusic'
import Home from './pages/Home'
import J from './pages/J'
import A from './pages/A'
import S from './pages/S'
import M from './pages/M'
import I from './pages/I'
import N from './pages/N'
import E from './pages/E'
import Final from './pages/Final'
import './index.css'

const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition animationType="heart"><Home /></PageTransition>} />
        <Route path="/J" element={<PageTransition animationType="letterSpotlight" letter="J"><J /></PageTransition>} />
        <Route path="/A" element={<PageTransition animationType="sparkleHeart"><A /></PageTransition>} />
        <Route path="/S" element={<PageTransition animationType="letterSpotlight" letter="S"><S /></PageTransition>} />
        <Route path="/M" element={<PageTransition animationType="ripple"><M /></PageTransition>} />
        <Route path="/I" element={<PageTransition animationType="letterSpotlight" letter="I"><I /></PageTransition>} />
        <Route path="/N" element={<PageTransition animationType="slideUp" letter="N"><N /></PageTransition>} />
        <Route path="/E" element={<PageTransition animationType="letterSpotlight" letter="E"><E /></PageTransition>} />
        <Route path="/final" element={<PageTransition animationType="sparkleHeart"><Final /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [songsPreloaded, setSongsPreloaded] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [musicChoiceMade, setMusicChoiceMade] = useState(false)

  const handleLoadingComplete = () => {
    setSongsPreloaded(true)
    setIsLoading(false)
  }

  const handleMusicChoice = () => {
    setMusicChoiceMade(true)
    setShowConfetti(true)
  }

  const handleConfettiComplete = () => {
    setShowConfetti(false)
  }

  return (
    <Router>
      <div className="App">
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        {!isLoading && (
          <>
            <BackgroundMusic 
              songsPreloaded={songsPreloaded} 
              onMusicChoice={handleMusicChoice}
            />
            <ConfettiAnimation 
              show={showConfetti} 
              onComplete={handleConfettiComplete} 
            />
            <ScrollToTop />
            <AnimatedRoutes />
          </>
        )}
      </div>
    </Router>
  )
}

export default App