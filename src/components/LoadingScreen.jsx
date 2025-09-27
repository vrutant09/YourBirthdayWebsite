import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [loadingText, setLoadingText] = useState("Preparing your surprise...")
  const [isComplete, setIsComplete] = useState(false)

  const loadingMessages = [
    "Preparing your surprise...",
    "Loading beautiful moments...",
    "Setting up the magic...",
    "Almost ready for you...",
    "Everything is perfect!"
  ]

  useEffect(() => {
    let messageIndex = 0
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % loadingMessages.length
      setLoadingText(loadingMessages[messageIndex])
    }, 2000)

    // Simulate minimum loading time for smooth experience
    const timer = setTimeout(() => {
      setIsComplete(true)
      setTimeout(() => {
        onLoadingComplete()
      }, 1000) // Extra delay for smooth transition
    }, 8000) // 8 seconds minimum loading time

    return () => {
      clearInterval(messageInterval)
      clearTimeout(timer)
    }
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 bg-gradient-to-br from-pink-400 via-purple-300 to-pink-300 flex items-center justify-center z-50"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Hearts */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight + 100,
                rotate: 0 
              }}
              animate={{ 
                y: -100,
                rotate: 360,
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: Math.random() * 8 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
              className="absolute text-pink-200 text-opacity-60"
              style={{ fontSize: Math.random() * 20 + 20 }}
            >
              💖
            </motion.div>
          ))}

          {/* Floating Sparkles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{ 
                scale: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
              className="absolute text-white text-opacity-50"
              style={{ fontSize: Math.random() * 15 + 10 }}
            >
              ✨
            </motion.div>
          ))}
        </div>

        {/* Main Loading Content */}
        <div className="relative z-10 text-center px-8">
          {/* Main Logo/Title */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.6 }}
            className="mb-8"
          >
            <div className="text-8xl mb-4">💝</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg font-serif">
              For My Beautiful
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold text-pink-100 drop-shadow-lg font-serif mt-2">
              Giasemoula
            </h2>
          </motion.div>

          {/* Loading Message */}
          <motion.div
            key={loadingText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl text-white text-opacity-90 mb-8 font-light"
          >
            {loadingText}
          </motion.div>

          {/* Animated Loading Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="w-4 h-4 bg-white bg-opacity-70 rounded-full"
              />
            ))}
          </div>

          {/* Pulsing Ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-32 h-32 border-4 border-white border-opacity-50 rounded-full mx-auto mb-8 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-4xl"
            >
              💫
            </motion.div>
          </motion.div>

          {/* Completion Message */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-2xl text-white font-semibold"
              >
                Ready! ✨
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen