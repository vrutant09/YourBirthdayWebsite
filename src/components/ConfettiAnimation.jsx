import React from 'react'
import Confetti from 'react-confetti'

const ConfettiAnimation = ({ show, onComplete }) => {
  if (!show) return null

  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={200}
      recycle={false}
      gravity={0.3}
      onConfettiComplete={onComplete}
      colors={['#ff6b9d', '#ff1493', '#ff69b4', '#ffb6c1', '#ffc0cb', '#ff91a4']}
    />
  )
}

export default ConfettiAnimation