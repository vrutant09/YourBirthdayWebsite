import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Final = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-dreamy">
      <Navbar />
      
      <div className="page-container">
        <div className="text-center max-w-4xl mx-auto space-y-10">
          
          {/* Heart decoration at top */}
          <div className="flex justify-center space-x-3 text-6xl animate-pulse">
            <span className="text-pink-500">💖</span>
            <span className="text-rose-500">💝</span>
            <span className="text-pink-500">💖</span>
          </div>
          
          {/* Final Message Title */}
          <div className="text-5xl md:text-6xl font-dancing font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 drop-shadow-lg">
            Forever & Always
          </div>
          
          {/* Final Letter Content */}
          <div className="letter-content space-y-6 bg-white/40 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/20">
            <p className="text-2xl font-dancing text-pink-700 mb-6">
              My Dearest Jasmine,
            </p>
            
            <p>
              As this special birthday journey comes to an end, I want you to carry this message with you 
              not just today, but every single day: You are absolutely, completely, wonderfully perfect 
              just as you are.
            </p>
            
            <p>
              This website is just a small token of the enormous love I have for you. Every word written 
              here comes from the deepest parts of my heart, and every letter of your name represents a 
              real reason why I fall in love with you over and over again.
            </p>
            
            <p>
              Thank you for being my partner, my best friend, my greatest love, and my favorite person in 
              the entire world. Thank you for making every day brighter just by being in it.
            </p>
            
            <p>
              I promise to love you through all the birthdays to come, through all the seasons of life, 
              through all the adventures we haven't even dreamed of yet. I promise to remind you of how 
              extraordinary you are whenever you forget.
            </p>
            
            <p className="text-xl font-dancing text-rose-700">
              Happy Birthday, Beautiful.<br />
              Here's to another year of loving you ❤️
            </p>
            
            <div className="border-t border-pink-300 pt-6 mt-8">
              <p className="text-lg font-dancing text-pink-600">
                With endless love and birthday wishes,<br />
                Forever yours
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button 
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Read It All Again 🥰
            </button>
            <button 
              onClick={() => window.print()}
              className="px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Save This Love Letter 💌
            </button>
          </div>
          
          {/* Birthday decorations */}
          <div className="flex justify-center space-x-4 text-3xl pt-8">
            <span className="animate-bounce">🎂</span>
            <span className="animate-bounce delay-100">🎉</span>
            <span className="animate-bounce delay-200">🎈</span>
            <span className="animate-bounce delay-300">🌟</span>
            <span className="animate-bounce delay-400">💖</span>
            <span className="animate-bounce delay-500">🌹</span>
            <span className="animate-bounce delay-600">✨</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Final