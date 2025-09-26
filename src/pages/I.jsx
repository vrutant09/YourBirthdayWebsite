import React from 'react'
import LetterLayout from '../components/LetterLayout'
import Navbar from '../components/Navbar'

const I = () => {
  const content = `My Incredible & Inspiring Jasmine,

I is for INSPIRING - because that's what you are to me and to everyone who knows you. You inspire me to be better, to dream bigger, to love deeper, and to see the world through more hopeful eyes.

You inspire me with your passion for life and the things you care about. You inspire me with your curiosity and your desire to keep learning and growing. You inspire me with your courage to try new things and to step outside your comfort zone.

Your dreams inspire me. Your determination inspires me. The way you treat people with kindness and compassion inspires me. Even the way you handle setbacks and disappointments with grace inspires me.

You have this incredible ability to see potential where others see obstacles. You believe in possibilities when others see problems. You find hope in situations where others find only difficulty. That perspective is not only inspiring - it's transformative.

Because of your inspiration, I dream bigger dreams. Because of your inspiration, I try harder, love more deeply, and approach life with greater enthusiasm. You inspire me to be the best version of myself, and I'm forever grateful for that gift.

Thank you for being my daily inspiration and for showing me what it means to live an inspired life.`

  return (
    <div className="min-h-screen bg-gradient-dreamy">
      <Navbar />
      <LetterLayout 
        letter="I"
        word="Inspiring"
        content={content}
        nextPath="/N"
        backgroundClass="bg-gradient-dreamy"
      />
    </div>
  )
}

export default I