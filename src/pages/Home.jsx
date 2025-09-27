import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ScrollReveal from '../components/ScrollReveal'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-romantic">
      <Navbar />
      
      <div className="scroll-section">
        <div className="text-center max-w-7xl mx-auto space-y-24 px-4">
          
          {/* Main Birthday Title */}
          <ScrollReveal delay={300}>
            <div className="space-y-8 pt-20">
              <h1 className="birthday-title leading-tight">
                Happy Birthday Giasemoula, My Pastelia.. ❤️
              </h1>
              <div className="text-4xl md:text-5xl lg:text-6xl font-dancing text-pink-600">
                My dearest love, today is all about celebrating you
              </div>
            </div>
          </ScrollReveal>
          
          {/* Heart decoration with floating animations */}
          <ScrollReveal delay={600}>
            <div className="flex justify-center space-x-8 text-8xl py-12">
              <span className="floating-flower text-pink-400">💕</span>
              <span className="floating-flower text-rose-400 animation-delay-1000">🌹</span>
              <span className="floating-flower text-6xl">🌸</span>
              <span className="floating-flower text-pink-400 animation-delay-2000">💕</span>
            </div>
          </ScrollReveal>
          
          {/* Large spacing for scroll effect */}
          <div className="h-32"></div>
          
          {/* Main Birthday Letter */}
          <ScrollReveal delay={200}>
            <div className="letter-content space-y-16 bg-white/20 backdrop-blur-md rounded-3xl p-16 shadow-2xl my-24">
              
              <ScrollReveal delay={400}>
                <p className="text-4xl md:text-5xl lg:text-6xl font-dancing text-pink-700 mb-12">
                  My Beautiful Giasemi,
                </p>
              </ScrollReveal>
              
              <div className="space-y-20">
                <ScrollReveal delay={600}>
                  <p className="letter-paragraph">
                    I don’t really know where to begin, because every year with you feels like both a lifetime and a single heartbeat. When I sit here, trying to gather words, I feel them stumble over each other, never quite good enough… but I hope you can feel my hands reaching for you through every line.
                  </p>
                  <p className="letter-paragraph">
                    Today marks another year of your incredible journey through life, and I couldn't be more grateful 
                    to be part of it. As I sit here thinking about all the moments we've shared, all the laughter, 
                    the adventures, and even the challenges we've overcome together, my heart fills with overwhelming love and gratitude.
                  </p>
                </ScrollReveal>
                
                {/* Large spacing with floating flowers */}
                <ScrollReveal delay={800}>
                  <div className="flex justify-center space-x-12 py-16">
                    <span className="floating-flower text-6xl">🌺</span>
                    <span className="floating-flower text-6xl animation-delay-1000">🌸</span>
                    <span className="floating-flower text-6xl animation-delay-2000">🌻</span>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={1000}>
                  <p className="letter-paragraph">
                    You are the most amazing person I know - your kindness touches everyone around you, your strength 
                    inspires me daily, and your beautiful soul makes this world a brighter place. Every day with you 
                    feels like a gift, and I'm so lucky to call you mine.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={1200}>
                  <div className="flex justify-center space-x-8 py-16">
                    <span className="floating-flower text-7xl">💝</span>
                    <span className="floating-flower text-7xl animation-delay-1500">✨</span>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={1400}>
                  <p className="letter-paragraph">
                    I've created something special for you today - a journey through your name that celebrates all 
                    the wonderful qualities that make you uniquely you. Each letter represents something beautiful 
                    about who you are and why I love you so deeply.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={1600}>
                  <p className="letter-paragraph">
                    So take my hand (virtually for now), and let's walk through this celebration of YOU. 
                    Because today, and every day, you deserve to know just how extraordinary you are.
                  </p>
                </ScrollReveal>
              </div>
              
              <ScrollReveal delay={1800}>
                <p className="font-dancing text-3xl md:text-4xl lg:text-5xl text-pink-700 pt-12">
                  With all my love and birthday wishes,<br />
                  Your devoted partner ❤️
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          {/* Large spacing */}
          <div className="h-40"></div>
          
          {/* Continue Button */}
          <ScrollReveal delay={2000}>
            <div className="pb-20">
              <button 
                onClick={() => navigate('/J')}
                className="nav-button shadow-2xl transform hover:scale-110"
              >
                Begin Our Journey ✨
              </button>
            </div>
          </ScrollReveal>
          
          {/* Bottom decoration */}
          <ScrollReveal delay={2200}>
            <div className="flex justify-center space-x-8 text-6xl pb-20">
              <span className="floating-flower">🎂</span>
              <span className="floating-flower animation-delay-300">🎉</span>
              <span className="floating-flower animation-delay-600">🎈</span>
              <span className="floating-flower animation-delay-900">🌟</span>
              <span className="floating-flower animation-delay-1200">💖</span>
            </div>
          </ScrollReveal>
          
        </div>
      </div>
    </div>
  )
}

export default Home