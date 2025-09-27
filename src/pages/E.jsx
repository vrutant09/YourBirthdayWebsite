import React from 'react'
import LetterLayout from '../components/LetterLayout'
import Navbar from '../components/Navbar'

const E = () => {
  const content = `My Extraordinary Jasmine,

E is for EXTRAORDINARY - In a world full of ordinary, you shine as something truly special and unique.

You are extraordinary not because you're perfect, but because you're perfectly you. You're extraordinary because of the way you love, the way you laugh, the way you see beauty in unexpected places, and the way you make everyone around you feel special.

Your heart is extraordinary. Your mind is extraordinary. Your spirit is extraordinary. The way you move through this world, touching lives and making differences both big and small - it's all extraordinary.

You are extraordinary because you dare to be authentic in a world that often rewards pretending. You are extraordinary because you choose kindness when it would be easier to be indifferent. You are extraordinary because you love deeply even when it makes you vulnerable.

As we come to the end of this journey through your name, I want you to know that every single letter represents something real and true about who you are. You are joyful, amazing, strong, magnificent, inspiring, nurturing, and extraordinary.

But most of all, you are loved. So deeply, completely, and extraordinarily loved.

Happy Birthday, my extraordinary Jasmine. Thank you for being exactly who you are.`

  return (
    <div className="min-h-screen bg-gradient-sunset">
      <Navbar />
      <LetterLayout 
        letter="E"
        word="Extraordinary"
        content={content}
        nextPath="/final"
        buttonText="One More Surprise ❤️"
        backgroundClass="bg-gradient-sunset"
      />
    </div>
  )
}

export default E