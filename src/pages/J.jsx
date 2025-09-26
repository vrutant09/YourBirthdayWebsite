import React from 'react'
import LetterLayout from '../components/LetterLayout'
import Navbar from '../components/Navbar'

const J = () => {
  const content = `My Joyful Jasmine,

The letter J stands for JOY - and that's exactly what you bring into my life every single day. Your infectious laughter, your bright smile, and your positive energy light up every room you enter.

From the moment I met you, you've been a source of pure happiness in my life. Whether we're sharing silly jokes, dancing around the kitchen, or just enjoying quiet moments together, you have this incredible ability to find joy in the simplest things and share it with everyone around you.

Your joyful spirit is one of the things I love most about you. Even on difficult days, you somehow manage to find something to smile about, something to be grateful for. You've taught me to appreciate the little moments, to laugh more, and to approach life with the same enthusiasm and wonder that you do.

Thank you for being my daily dose of sunshine, my reason to smile, and my greatest source of joy. You make ordinary days feel extraordinary just by being you.`

  return (
    <div className="min-h-screen bg-gradient-sunset">
      <Navbar />
      <LetterLayout 
        letter="J"
        word="Joyful"
        content={content}
        nextPath="/A"
        backgroundClass="bg-gradient-sunset"
      />
    </div>
  )
}

export default J