import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ScrollReveal from '../components/ScrollReveal'

const Final = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-dreamy">
      <Navbar />
      
      <div className="scroll-section">
        <div className="text-center max-w-6xl mx-auto space-y-20 px-4">
          
          {/* Heart decoration at top */}
          <ScrollReveal delay={300}>
            <div className="flex justify-center space-x-6 text-8xl py-8 pt-20">
              <span className="floating-flower text-pink-500">💖</span>
              <span className="floating-flower text-rose-500 animation-delay-1000">💝</span>
              <span className="floating-flower text-pink-500 animation-delay-2000">💖</span>
            </div>
          </ScrollReveal>
          
          {/* Final Message Title */}
          <ScrollReveal delay={600}>
            <div className="text-7xl md:text-8xl lg:text-9xl font-dancing font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 drop-shadow-2xl">
              Forever & Always
            </div>
          </ScrollReveal>
          
          <div className="h-16"></div>
          
          {/* Final Letter Content */}
          <ScrollReveal delay={800}>
            <div className="letter-content space-y-16 bg-white/20 backdrop-blur-md rounded-3xl p-16 shadow-2xl border border-white/30">
              
              <ScrollReveal delay={1000}>
                <p className="text-4xl md:text-5xl font-dancing text-pink-700 mb-12">
                  My Dearest Giasemoula,
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={1200}>
                <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800 mb-8">
                  As this special birthday journey comes to an end, I want you to carry this message with you 
                  not just today, but every single day: You are absolutely, completely, wonderfully perfect 
                  just as you are.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={1400}>
                <div className="flex justify-center py-8">
                  <span className="floating-flower text-5xl">🌸</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={1600}>
                <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800 mb-8">
                  This website is just a small token of the enormous love I have for you. Every word written 
                  here comes from the deepest parts of my heart, and every letter of your name represents a 
                  real reason why I fall in love with you over and over again.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={1800}>
                <div className="flex justify-center space-x-8 py-8">
                  <span className="floating-flower text-5xl">✨</span>
                  <span className="floating-flower text-5xl animation-delay-1000">💕</span>
                  <span className="floating-flower text-5xl animation-delay-2000">✨</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={2000}>
                <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800 mb-8">
                  Thank you for being my partner, my best friend, my greatest love, and my favorite person in 
                  the entire world. Thank you for making every day brighter just by being in it.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={2200}>
                <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800 mb-8">
                  I promise to love you through all the birthdays to come, through all the seasons of life, 
                  through all the adventures we haven't even dreamed of yet. I promise to remind you of how 
                  extraordinary you are whenever you forget.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={2400}>
                <div className="border-t border-pink-300 pt-12 mt-12">
                  <p className="text-2xl md:text-3xl font-dancing text-rose-700 mb-8">
                    Happy Birthday, Beautiful.<br />
                    Here's to another year of loving you ❤️
                  </p>
                  
                  <p className="text-xl md:text-2xl font-dancing text-pink-600">
                    With endless love and birthday wishes,<br />
                    Forever yours
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          <div className="h-20"></div>
          
          {/* Action Buttons */}
          <ScrollReveal delay={2600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigate('/')}
                className="nav-button bg-gradient-to-r from-pink-400 to-rose-500"
              >
                Read It All Again 🥰
              </button>
              <button 
                onClick={() => window.print()}
                className="nav-button bg-gradient-to-r from-purple-400 to-pink-500"
              >
                Save This Love Letter 💌
              </button>
            </div>
          </ScrollReveal>
          
          {/* Birthday decorations */}
          <ScrollReveal delay={2800}>
            <div className="flex justify-center space-x-6 text-6xl pb-20">
              <span className="floating-flower">🎂</span>
              <span className="floating-flower animation-delay-200">🎉</span>
              <span className="floating-flower animation-delay-400">🎈</span>
              <span className="floating-flower animation-delay-600">🌟</span>
              <span className="floating-flower animation-delay-800">💖</span>
              <span className="floating-flower animation-delay-1000">🌹</span>
              <span className="floating-flower animation-delay-1200">✨</span>
            </div>
          </ScrollReveal>
          
        </div>
      </div>
    </div>
  )
}

export default Final