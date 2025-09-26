import { motion } from 'framer-motion'

const PageTransition = ({ children, animationType = 'heart', letter = '' }) => {
  const getAnimation = () => {
    switch (animationType) {
      case 'letterSpotlight':
        return {
          overlay: {
            initial: { scaleY: 0 },
            animate: { scaleY: 0 },
            exit: { scaleY: 1 },
            transition: { duration: 0.8, ease: "easeInOut" },
            background: 'radial-gradient(circle, rgba(255, 107, 157, 0.9) 0%, rgba(255, 20, 147, 0.95) 100%)',
          },
          letter: {
            initial: { scale: 0, opacity: 0, rotateY: -180 },
            animate: { scale: 0, opacity: 0, rotateY: -180 },
            exit: { 
              scale: [0, 2, 1.5], 
              opacity: [0, 1, 1], 
              rotateY: [-180, 0, 0],
              filter: ['brightness(1)', 'brightness(2)', 'brightness(1.5)']
            },
            transition: { 
              duration: 0.8, 
              delay: 0.3,
              times: [0, 0.6, 1],
              ease: "easeOut"
            },
            className: "text-white text-9xl font-bold tracking-wider drop-shadow-2xl",
            content: letter
          },
          entrance: {
            initial: { scaleY: 1, background: 'radial-gradient(circle, rgba(255, 107, 157, 0.9) 0%, rgba(255, 20, 147, 0.95) 100%)' },
            animate: { scaleY: 0 },
            transition: { duration: 0.8, ease: "easeInOut" },
            entranceLetter: {
              initial: { scale: 1.5, opacity: 1, rotateY: 0, filter: 'brightness(1.5)' },
              animate: { scale: 0, opacity: 0, rotateY: 180 },
              transition: { duration: 0.8, ease: "easeIn" }
            }
          }
        }
      
      case 'sparkleHeart':
        return {
          overlay: {
            initial: { opacity: 0 },
            animate: { opacity: 0 },
            exit: { opacity: 1 },
            transition: { duration: 0.6 },
            background: 'linear-gradient(135deg, #ff6b9d, #ff1493, #ff69b4, #ffb6c1)',
          },
          letter: {
            initial: { scale: 0, rotate: 0 },
            animate: { scale: 0, rotate: 0 },
            exit: { 
              scale: [0, 1.5, 1], 
              rotate: [0, 720, 360],
            },
            transition: { 
              duration: 0.7, 
              delay: 0.2,
              ease: "easeOut"
            },
            className: "text-white text-8xl",
            content: '💖✨'
          },
          entrance: {
            initial: { opacity: 1, background: 'linear-gradient(135deg, #ff6b9d, #ff1493, #ff69b4, #ffb6c1)' },
            animate: { opacity: 0 },
            transition: { duration: 0.6 },
            entranceLetter: {
              initial: { scale: 1, rotate: 360 },
              animate: { scale: 0, rotate: 0 },
              transition: { duration: 0.6 }
            }
          }
        }

      case 'ripple':
        return {
          overlay: {
            initial: { scale: 0, borderRadius: '50%' },
            animate: { scale: 0, borderRadius: '50%' },
            exit: { scale: 4, borderRadius: '0%' },
            transition: { duration: 0.8, ease: "easeInOut" },
            background: 'conic-gradient(from 0deg, #ff6b9d, #ff1493, #ff69b4, #ffb6c1, #ff6b9d)',
          },
          letter: {
            initial: { scale: 0, opacity: 0 },
            animate: { scale: 0, opacity: 0 },
            exit: { 
              scale: [0, 1.2, 1], 
              opacity: [0, 1, 1],
            },
            transition: { 
              duration: 0.6, 
              delay: 0.4,
              ease: "backOut"
            },
            className: "text-white text-8xl font-bold",
            content: letter || '💕'
          },
          entrance: {
            initial: { scale: 4, borderRadius: '0%', background: 'conic-gradient(from 0deg, #ff6b9d, #ff1493, #ff69b4, #ffb6c1, #ff6b9d)' },
            animate: { scale: 0, borderRadius: '50%' },
            transition: { duration: 0.8, ease: "easeInOut" },
            entranceLetter: {
              initial: { scale: 1, opacity: 1 },
              animate: { scale: 0, opacity: 0 },
              transition: { duration: 0.6 }
            }
          }
        }

      case 'slideUp':
        return {
          overlay: {
            initial: { y: '100%' },
            animate: { y: '100%' },
            exit: { y: '0%' },
            transition: { duration: 0.6, ease: "easeInOut" },
            background: 'linear-gradient(135deg, #ff1493, #ff6b9d, #ffb6c1)',
          },
          letter: {
            initial: { scale: 0, opacity: 0, y: 50 },
            animate: { scale: 0, opacity: 0, y: 50 },
            exit: { 
              scale: [0, 1.3, 1], 
              opacity: [0, 1, 1],
              y: [50, -10, 0],
            },
            transition: { 
              duration: 0.6, 
              delay: 0.3,
              ease: "easeOut"
            },
            className: "text-white text-8xl font-bold drop-shadow-2xl",
            content: letter
          },
          entrance: {
            initial: { y: '0%', background: 'linear-gradient(135deg, #ff1493, #ff6b9d, #ffb6c1)' },
            animate: { y: '100%' },
            transition: { duration: 0.6, ease: "easeInOut" },
            entranceLetter: {
              initial: { scale: 1, opacity: 1, y: 0 },
              animate: { scale: 0, opacity: 0, y: 50 },
              transition: { duration: 0.5 }
            }
          }
        }

      case 'curtainDrop':
        return {
          overlay: {
            initial: { y: '-100%' },
            animate: { y: '-100%' },
            exit: { y: '0%' },
            transition: { duration: 0.7, ease: "easeInOut" },
            background: 'linear-gradient(180deg, #ff1493 0%, #ff6b9d 50%, #ffb6c1 100%)',
          },
          letter: {
            initial: { y: -100, opacity: 0, scale: 0.5 },
            animate: { y: -100, opacity: 0, scale: 0.5 },
            exit: { 
              y: [0, 20, 0], 
              opacity: [1, 1, 1],
              scale: [1.2, 1, 1.1],
            },
            transition: { 
              duration: 0.6, 
              delay: 0.4,
              ease: "bounceOut"
            },
            className: "text-white text-8xl font-bold drop-shadow-lg",
            content: letter
          },
          entrance: {
            initial: { y: '0%', background: 'linear-gradient(180deg, #ff1493 0%, #ff6b9d 50%, #ffb6c1 100%)' },
            animate: { y: '-100%' },
            transition: { duration: 0.7, ease: "easeInOut" },
            entranceLetter: {
              initial: { y: 0, opacity: 1, scale: 1.1 },
              animate: { y: -100, opacity: 0, scale: 0.5 },
              transition: { duration: 0.5 }
            }
          }
        }

      default: // heart
        return {
          overlay: {
            initial: { scaleY: 0 },
            animate: { scaleY: 0 },
            exit: { scaleY: 1 },
            transition: { duration: 0.6, ease: "easeInOut" },
            background: 'linear-gradient(45deg, #ff6b9d, #ffc0cb, #ff69b4)',
          },
          letter: {
            initial: { scale: 0, rotate: 0 },
            animate: { scale: 0, rotate: 0 },
            exit: { 
              scale: [0, 1.2, 1], 
              rotate: [0, 180, 360] 
            },
            transition: { 
              duration: 0.6, 
              delay: 0.2,
              times: [0, 0.6, 1],
              ease: "easeInOut"
            },
            className: "text-white text-8xl",
            content: '💖'
          },
          entrance: {
            initial: { scaleY: 1, background: 'linear-gradient(45deg, #ff6b9d, #ffc0cb, #ff69b4)' },
            animate: { scaleY: 0 },
            transition: { duration: 0.6, ease: "easeInOut" },
            entranceLetter: {
              initial: { scale: 1, rotate: 0 },
              animate: { scale: 0, rotate: 360 },
              transition: { duration: 0.6 }
            }
          }
        }
    }
  }

  const animation = getAnimation()

  return (
    <>
      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {children}
      </motion.div>

      {/* Exit Animation Overlay */}
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none"
        initial={animation.overlay.initial}
        animate={animation.overlay.animate}
        exit={animation.overlay.exit}
        transition={animation.overlay.transition}
        style={{
          background: animation.overlay.background,
          transformOrigin: 'center',
        }}
      >
        <div className="flex items-center justify-center h-full">
          <motion.div
            initial={animation.letter.initial}
            animate={animation.letter.animate}
            exit={animation.letter.exit}
            transition={animation.letter.transition}
            className={animation.letter.className}
          >
            {animation.letter.content}
          </motion.div>
        </div>
      </motion.div>

      {/* Entrance Animation Overlay */}
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none"
        initial={animation.entrance.initial}
        animate={animation.entrance.animate}
        exit={{ opacity: 0 }}
        transition={animation.entrance.transition}
        style={{
          background: animation.entrance.background,
          transformOrigin: 'center',
        }}
      >
        <div className="flex items-center justify-center h-full">
          <motion.div
            initial={animation.entrance.entranceLetter.initial}
            animate={animation.entrance.entranceLetter.animate}
            transition={animation.entrance.entranceLetter.transition}
            className={animation.letter.className}
          >
            {animation.letter.content}
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default PageTransition