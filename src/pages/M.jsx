import React from 'react'
import LetterLayout from '../components/LetterLayout'
import Navbar from '../components/Navbar'

const M = () => {
  const content = `My Magnificent Jasmine,

M stands for MAGNIFICENT - You are magnificent in every sense of the word. Your beauty, both inside and out, is truly magnificent. Your heart, your mind, your spirit - everything about you is grand and wonderful and absolutely magnificent.

You have a magnificent way of making everyone around you feel special and valued. You have a magnificent ability to bring out the best in people. You have magnificent dreams and the magnificent courage to pursue them.

Your magnificence isn't something you put on or try to be - it's simply who you are. It shows in the way you treat others with kindness and respect. It shows in the way you tackle challenges with determination. It shows in the way you love so fully and completely.

I am constantly in awe of your magnificence. Sometimes I catch myself just watching you as you go about your day, amazed that someone so magnificent chose to share their life with me. You make me want to be magnificent too, to live up to the incredible example you set every day.

Thank you for being magnificently, authentically, wonderfully you. The world is a more magnificent place because you're in it.`

  return (
    <div className="min-h-screen bg-gradient-sunset">
      <Navbar />
      <LetterLayout 
        letter="M"
        word="Magnificent"
        content={content}
        nextPath="/I"
        backgroundClass="bg-gradient-sunset"
      />
    </div>
  )
}

export default M