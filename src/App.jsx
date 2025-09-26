import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
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

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/J" element={<J />} />
          <Route path="/A" element={<A />} />
          <Route path="/S" element={<S />} />
          <Route path="/M" element={<M />} />
          <Route path="/I" element={<I />} />
          <Route path="/N" element={<N />} />
          <Route path="/E" element={<E />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App