import { useState, useEffect } from 'react'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-500/20 animate-pulse-fast"></div>
      
      <div className={`container mx-auto px-4 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center">
          <div className="inline-block mb-8">
            <div className="text-8xl animate-bounce-slow">🎰</div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-6 animate-pulse">
            MEMECOIN ROULETTE
          </h1>
          
          <p className="text-xl md:text-3xl text-white/90 mb-12 font-semibold">
            Spin & Win Real Solana Memecoins! 🎰
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Diamond Hands</h3>
              <p className="text-white/80">HODL for the moon!</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-2">Play & Earn</h3>
              <p className="text-white/80">Spin to win rewards!</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="text-2xl font-bold text-orange-400 mb-2">Community</h3>
              <p className="text-white/80">Join the movement!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
