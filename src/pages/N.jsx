import React from 'react'
import LetterLayout from '../components/LetterLayout'
import Navbar from '../components/Navbar'

const N = () => {
  const content = `My Nurturing Jasmine,

N is for NURTURING - one of your most beautiful qualities. You have the most nurturing heart I've ever known. You care for others with such tenderness and attention, making everyone around you feel loved, supported, and valued.

You nurture dreams - both your own and those of the people you care about. You encourage growth, you celebrate progress, and you provide the support needed for things to flourish. Just like a garden thrives under loving care, everything and everyone in your life blooms because of your nurturing nature.

You nurture relationships with such care and intention. You remember the little things, you check in on people, you offer comfort when it's needed, and you celebrate joys with genuine happiness. You make people feel seen and heard and important.

You nurture love in the most beautiful way. Your love isn't just felt - it's experienced in your actions, your words, your thoughtfulness, and your presence. You create a safe space where love can grow and thrive.

Because of your nurturing spirit, I feel more confident to be vulnerable, to share my dreams, and to grow as a person. You've created an environment where I can be completely myself, and that's one of the greatest gifts anyone has ever given me.

Thank you for nurturing our love, our relationship, and the best parts of who I am.`

  return (
    <div className="min-h-screen bg-gradient-romantic">
      <Navbar />
      <LetterLayout 
        letter="N"
        word="Nurturing"
        content={content}
        nextPath="/E"
        backgroundClass="bg-gradient-romantic"
      />
    </div>
  )
}

export default N