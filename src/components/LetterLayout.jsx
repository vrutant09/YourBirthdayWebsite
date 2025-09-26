import React from 'react'
import { useNavigate } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

const LetterLayout = ({ 
  letter, 
  word, 
  content, 
  nextPath, 
  buttonText = "Next",
  backgroundClass = "bg-gradient-romantic" 
}) => {
  const navigate = useNavigate()

  return (
    <div className={`scroll-section ${backgroundClass}`}>
      <div className="text-center max-w-6xl mx-auto space-y-16 px-4">
        
        {/* Large Letter with scroll reveal */}
        <ScrollReveal delay={300}>
          <div className="letter-title pt-20">
            {letter}
          </div>
        </ScrollReveal>
        
        {/* Word that describes her */}
        <ScrollReveal delay={600}>
          <div className="text-5xl md:text-6xl lg:text-7xl font-dancing font-semibold text-pink-700 mb-12">
            {word}
          </div>
        </ScrollReveal>
        
        {/* Floating flowers */}
        <ScrollReveal delay={800}>
          <div className="flex justify-center space-x-8 text-6xl py-8">
            <span className="floating-flower text-pink-400">💕</span>
            <span className="floating-flower text-rose-400 animation-delay-1000">🌸</span>
            <span className="floating-flower text-pink-400 animation-delay-2000">💕</span>
          </div>
        </ScrollReveal>
        
        {/* Letter content with scroll reveals */}
        <div className="letter-content text-center space-y-16 bg-white/20 backdrop-blur-md rounded-3xl p-12 shadow-2xl my-16">
          {content.split('\n\n').map((paragraph, index) => (
            <ScrollReveal key={index} delay={1000 + (index * 400)}>
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800 mb-8">
                {paragraph}
              </p>
              {index < content.split('\n\n').length - 1 && (
                <div className="flex justify-center py-4">
                  <span className="floating-flower text-4xl animation-delay-500">🌺</span>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
        
        {/* Large spacing */}
        <div className="h-20"></div>
        
        {/* Navigation button */}
        <ScrollReveal delay={1800}>
          <div className="pb-20">
            <button 
              onClick={() => navigate(nextPath)}
              className="nav-button shadow-2xl transform hover:scale-110"
            >
              {buttonText}
            </button>
          </div>
        </ScrollReveal>
        
        {/* Bottom floating flowers */}
        <ScrollReveal delay={2000}>
          <div className="flex justify-center space-x-6 text-5xl pb-16">
            <span className="floating-flower">✨</span>
            <span className="floating-flower animation-delay-600">💝</span>
            <span className="floating-flower animation-delay-1200">✨</span>
          </div>
        </ScrollReveal>
        
      </div>
    </div>
  )
}

export default LetterLayout