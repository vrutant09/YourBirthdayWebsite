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
        {/* Lightweight Background Effects with CSS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes instead of emojis */}
          <div className="floating-shapes">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`floating-shape floating-shape-${i + 1}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>

          {/* Animated gradient orbs */}
          <div className="gradient-orbs">
            <div className="gradient-orb orb-1" />
            <div className="gradient-orb orb-2" />
            <div className="gradient-orb orb-3" />
          </div>
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

          {/* Simple Pulsing Ring */}
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
            <div className="spinning-star">✨</div>
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

        {/* Add CSS styles */}
        <style jsx>{`
          .floating-shapes {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .floating-shape {
            position: absolute;
            width: 20px;
            height: 20px;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
            border-radius: 50%;
            animation: float-up linear infinite;
          }

          .floating-shape-1 { border-radius: 0; transform: rotate(45deg); }
          .floating-shape-2 { border-radius: 0; }
          .floating-shape-3 { width: 15px; height: 15px; }
          .floating-shape-4 { width: 25px; height: 25px; border-radius: 0; transform: rotate(45deg); }
          .floating-shape-5 { width: 18px; height: 18px; }
          .floating-shape-6 { border-radius: 0; transform: rotate(45deg); }
          .floating-shape-7 { width: 22px; height: 22px; }
          .floating-shape-8 { width: 16px; height: 16px; border-radius: 0; }

          @keyframes float-up {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
          }

          .gradient-orbs {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .gradient-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(40px);
            animation: float-orb 8s ease-in-out infinite;
          }

          .orb-1 {
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(255, 105, 180, 0.3) 0%, transparent 70%);
            top: 20%;
            left: 10%;
            animation-delay: 0s;
          }

          .orb-2 {
            width: 150px;
            height: 150px;
            background: radial-gradient(circle, rgba(255, 182, 193, 0.3) 0%, transparent 70%);
            top: 60%;
            right: 15%;
            animation-delay: -3s;
          }

          .orb-3 {
            width: 180px;
            height: 180px;
            background: radial-gradient(circle, rgba(255, 20, 147, 0.2) 0%, transparent 70%);
            bottom: 30%;
            left: 60%;
            animation-delay: -6s;
          }

          @keyframes float-orb {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-20px) scale(1.1); }
          }

          .spinning-star {
            animation: spin 3s linear infinite;
            font-size: 2rem;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen