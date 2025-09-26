import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const pages = [
    { path: '/', label: 'Home', letter: '🏠' },
    { path: '/J', label: 'J', letter: 'J' },
    { path: '/A', label: 'A', letter: 'A' },
    { path: '/S', label: 'S', letter: 'S' },
    { path: '/M', label: 'M', letter: 'M' },
    { path: '/I', label: 'I', letter: 'I' },
    { path: '/N', label: 'N', letter: 'N' },
    { path: '/E', label: 'E', letter: 'E' },
    { path: '/final', label: 'Final', letter: '❤️' }
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/30">
        <div className="flex space-x-2">
          {pages.map((page) => (
            <button
              key={page.path}
              onClick={() => navigate(page.path)}
              className={`w-10 h-10 rounded-full font-semibold text-sm transition-all duration-300 ${
                location.pathname === page.path
                  ? 'bg-pink-500 text-white shadow-lg scale-110'
                  : 'bg-white/30 text-pink-700 hover:bg-pink-100 hover:scale-105'
              }`}
            >
              {page.letter}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar