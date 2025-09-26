import React from 'react'
import LetterLayout from '../components/LetterLayout'
import Navbar from '../components/Navbar'

const A = () => {
  const content = `My Amazing Jasmine,

A is for AMAZING - which is exactly what you are in every possible way. You constantly amaze me with your intelligence, your creativity, your compassion, and your incredible ability to make everything better just by being present.

You amaze me with how you handle challenges with such grace and strength. You amaze me with your ability to see the best in people, even when they don't see it in themselves. You amaze me with your talents, your dreams, and the way you pursue them with such determination.

Every day I discover something new and wonderful about you that leaves me in awe. Whether it's the way you think through problems, the way you care for others, or the way you can make me laugh when I least expect it - you never fail to surprise and delight me.

You are amazing not just because of what you do, but because of who you are at your core. Your heart, your mind, your spirit - everything about you is absolutely amazing, and I feel so incredibly lucky to witness your amazingness every single day.

Thank you for being amazing in ways both big and small, and for making me want to be amazing too.`

  return (
    <div className="min-h-screen bg-gradient-dreamy">
      <Navbar />
      <LetterLayout 
        letter="A"
        word="Amazing"
        content={content}
        nextPath="/S"
        backgroundClass="bg-gradient-dreamy"
      />
    </div>
  )
}

export default A