import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'

const ScrollLottie = ({ animationPath, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [animationData, setAnimationData] = useState(null)
  const [error, setError] = useState(null)
  const elementRef = useRef()

  // Load animation data
  useEffect(() => {
    console.log('Loading animation from:', animationPath)
    fetch(animationPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        console.log('Animation loaded successfully:', animationPath)
        setAnimationData(data)
      })
      .catch(error => {
        console.error('Error loading animation:', error)
        setError(error.message)
      })
  }, [animationPath])

  // Intersection observer for scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Animation triggered:', animationPath)
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, animationPath])

  // Show error state with CSS fallback
  if (error) {
    return (
      <div 
        ref={elementRef}
        className={`${className} flex items-center justify-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
        }`}
      >
        <span className="flower-fallback">🌸</span>
      </div>
    )
  }

  // Show loading state with CSS fallback
  if (!animationData) {
    return (
      <div 
        ref={elementRef}
        className={`${className} flex items-center justify-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
        }`}
      >
        <span className="flower-fallback">🌺</span>
      </div>
    )
  }

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-1000 ${className} ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
      }`}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={isVisible}
        className="w-full h-full"
      />
    </div>
  )
}

export default ScrollLottie