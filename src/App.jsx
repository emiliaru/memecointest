import { useState } from 'react'
import Hero from './components/Hero'
import SpinGame from './components/SpinGame'
import Tokenomics from './components/Tokenomics'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Hero />
      <SpinGame />
      <Tokenomics />
      <Footer />
    </div>
  )
}

export default App
