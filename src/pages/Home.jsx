import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-romantic">
      <Navbar />
      
      <div className="page-container">
        <div className="text-center max-w-4xl mx-auto space-y-10">
          
          {/* Main Birthday Title */}
          <div className="space-y-4">
            <h1 className="birthday-title">
              Happy Birthday Giasemoula ❤️
            </h1>
            <div className="text-2xl font-dancing text-pink-600">
              My dearest love, today is all about celebrating you
            </div>
          </div>
          
          {/* Heart decoration */}
          <div className="flex justify-center space-x-2 text-4xl animate-pulse">
            <span className="text-pink-400">💕</span>
            <span className="text-rose-400">🌹</span>
            <span className="text-pink-400">💕</span>
          </div>
          
          {/* Main Birthday Letter */}
          <div className="letter-content space-y-6 bg-white/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p>
              My Beautiful Jasmine,
            </p>
            
            <p>
              Today marks another year of your incredible journey through life, and I couldn't be more grateful 
              to be part of it. As I sit here thinking about all the moments we've shared, all the laughter, 
              the adventures, and even the challenges we've overcome together, my heart fills with overwhelming love and gratitude.
            </p>
            
            <p>
              You are the most amazing person I know - your kindness touches everyone around you, your strength 
              inspires me daily, and your beautiful soul makes this world a brighter place. Every day with you 
              feels like a gift, and I'm so lucky to call you mine.
            </p>
            
            <p>
              I've created something special for you today - a journey through your name that celebrates all 
              the wonderful qualities that make you uniquely you. Each letter represents something beautiful 
              about who you are and why I love you so deeply.
            </p>
            
            <p>
              So take my hand (virtually for now), and let's walk through this celebration of YOU. 
              Because today, and every day, you deserve to know just how extraordinary you are.
            </p>
            
            <p className="font-dancing text-xl text-pink-700">
              With all my love and birthday wishes,<br />
              Your devoted partner ❤️
            </p>
          </div>
          
          {/* Continue Button */}
          <div className="pt-6">
            <button 
              onClick={() => navigate('/J')}
              className="nav-button text-xl px-12 py-4"
            >
              Begin Our Journey ✨
            </button>
          </div>
          
          {/* Bottom decoration */}
          <div className="flex justify-center space-x-4 text-2xl pt-4">
            <span className="animate-bounce">🎂</span>
            <span className="animate-bounce delay-150">🎉</span>
            <span className="animate-bounce delay-300">🎈</span>
            <span className="animate-bounce delay-450">🌟</span>
            <span className="animate-bounce delay-600">💖</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home