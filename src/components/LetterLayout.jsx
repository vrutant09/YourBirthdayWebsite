import React from 'react'
import { useNavigate } from 'react-router-dom'

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
    <div className={`page-container ${backgroundClass}`}>
      <div className="text-center max-w-4xl mx-auto space-y-8">
        {/* Large Letter */}
        <div className="letter-title">
          {letter}
        </div>
        
        {/* Word that describes her */}
        <div className="text-4xl font-dancing font-semibold text-pink-700 mb-6">
          {word}
        </div>
        
        {/* Letter content */}
        <div className="letter-content text-center space-y-6">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-800">
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Navigation button */}
        <div className="pt-8">
          <button 
            onClick={() => navigate(nextPath)}
            className="nav-button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default LetterLayout