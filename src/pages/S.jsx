import React from 'react'
import LetterLayout from '../components/LetterLayout'
import Navbar from '../components/Navbar'

const S = () => {
  const content = `My Strong & Sweet Jasmine,

S represents so many beautiful qualities you possess - you are STRONG, SWEET, SMART, and SPECTACULAR. But if I had to choose just one, it would be STRONG, because your strength is one of the things I admire most about you.

You are strong in the most beautiful way. Not just physically, but emotionally, mentally, and spiritually. You face life's challenges with courage and determination. You stand up for what you believe in. You support others when they need it most, and you never give up on the people you love.

Your strength isn't harsh or intimidating - it's gentle and nurturing. You're strong enough to be vulnerable, strong enough to ask for help when you need it, and strong enough to show emotion. You're strong enough to be tender, and that combination of strength and softness is absolutely beautiful.

I've watched you overcome obstacles that would have defeated others, and you did it with such grace and poise. Your strength inspires me to be stronger too, and it makes me feel safe and secure knowing I have such a strong, incredible woman by my side.

Thank you for being my rock, my safe harbor, and my example of what true strength looks like.`

  return (
    <div className="min-h-screen bg-gradient-romantic">
      <Navbar />
      <LetterLayout 
        letter="S"
        word="Strong"
        content={content}
        nextPath="/M"
        backgroundClass="bg-gradient-romantic"
      />
    </div>
  )
}

export default S