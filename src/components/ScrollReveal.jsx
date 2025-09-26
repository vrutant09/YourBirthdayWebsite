import React, { useEffect, useRef, useState } from 'react'

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { 
        threshold: 0,
        rootMargin: '200px 0px 200px 0px'
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(50px)'
        case 'down': return 'translateY(-50px)'
        case 'left': return 'translateX(50px)'
        case 'right': return 'translateX(-50px)'
        default: return 'translateY(50px)'
      }
    }
    return 'translateY(0px)'
  }

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
      }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal