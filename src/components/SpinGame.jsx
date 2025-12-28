import { useState } from 'react'

const prizes = [
  { emoji: '💎', name: 'Diamond', value: 1000, color: 'from-blue-400 to-cyan-400' },
  { emoji: '🚀', name: 'Rocket', value: 500, color: 'from-orange-400 to-red-400' },
  { emoji: '🌙', name: 'Moon', value: 2000, color: 'from-yellow-300 to-yellow-500' },
  { emoji: '⭐', name: 'Star', value: 750, color: 'from-purple-400 to-pink-400' },
  { emoji: '🔥', name: 'Fire', value: 1500, color: 'from-red-400 to-orange-400' },
  { emoji: '💰', name: 'Money', value: 300, color: 'from-green-400 to-emerald-400' },
  { emoji: '🎯', name: 'Target', value: 100, color: 'from-red-500 to-pink-500' },
  { emoji: '🎁', name: 'Gift', value: 50, color: 'from-purple-500 to-indigo-500' },
]

function SpinGame() {
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState(null)
  const [coins, setCoins] = useState(1000)
  const [totalWon, setTotalWon] = useState(0)
  const [slots, setSlots] = useState([prizes[0], prizes[1], prizes[2]])

  const spinSlots = () => {
    if (spinning || coins < 100) return

    setSpinning(true)
    setResult(null)
    setCoins(coins - 100)

    let spinCount = 0
    const spinInterval = setInterval(() => {
      setSlots([
        prizes[Math.floor(Math.random() * prizes.length)],
        prizes[Math.floor(Math.random() * prizes.length)],
        prizes[Math.floor(Math.random() * prizes.length)],
      ])
      spinCount++

      if (spinCount >= 20) {
        clearInterval(spinInterval)
        
        const finalSlots = [
          prizes[Math.floor(Math.random() * prizes.length)],
          prizes[Math.floor(Math.random() * prizes.length)],
          prizes[Math.floor(Math.random() * prizes.length)],
        ]
        setSlots(finalSlots)

        const allSame = finalSlots[0].name === finalSlots[1].name && finalSlots[1].name === finalSlots[2].name
        const twoSame = finalSlots[0].name === finalSlots[1].name || 
                        finalSlots[1].name === finalSlots[2].name || 
                        finalSlots[0].name === finalSlots[2].name

        let winAmount = 0
        let message = ''

        if (allSame) {
          winAmount = finalSlots[0].value * 3
          message = `🎉 JACKPOT! Triple ${finalSlots[0].name}! +${winAmount} coins!`
        } else if (twoSame) {
          const matchedPrize = finalSlots[0].name === finalSlots[1].name ? finalSlots[0] : 
                               finalSlots[1].name === finalSlots[2].name ? finalSlots[1] : finalSlots[0]
          winAmount = matchedPrize.value
          message = `✨ Nice! Double ${matchedPrize.name}! +${winAmount} coins!`
        } else {
          message = '😢 Try again! Better luck next time!'
        }

        setCoins(coins - 100 + winAmount)
        setTotalWon(totalWon + winAmount)
        setResult({ message, winAmount })
        setSpinning(false)
      }
    }, 100)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-4">
            🎰 Spin & Win Game 🎰
          </h2>
          <p className="text-white/80 text-xl">
            Spin the slots and win MOON COINS! 100 coins per spin
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-xl rounded-3xl p-8 border-4 border-yellow-400/50 shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <div className="bg-black/30 rounded-2xl px-6 py-3 border-2 border-yellow-400/50">
              <p className="text-yellow-400 text-sm font-semibold">Your Balance</p>
              <p className="text-white text-3xl font-bold">{coins} 🪙</p>
            </div>
            <div className="bg-black/30 rounded-2xl px-6 py-3 border-2 border-green-400/50">
              <p className="text-green-400 text-sm font-semibold">Total Won</p>
              <p className="text-white text-3xl font-bold">{totalWon} 🪙</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {slots.map((slot, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${slot.color} rounded-2xl p-8 flex flex-col items-center justify-center transform transition-all duration-300 ${
                  spinning ? 'animate-spin-slow scale-110' : 'hover:scale-105'
                } shadow-2xl border-4 border-white/30`}
              >
                <div className="text-7xl mb-2">{slot.emoji}</div>
                <p className="text-white font-bold text-xl">{slot.name}</p>
                <p className="text-white/80 text-sm">{slot.value} pts</p>
              </div>
            ))}
          </div>

          {result && (
            <div className={`mb-6 p-6 rounded-2xl text-center font-bold text-xl ${
              result.winAmount > 0 
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse' 
                : 'bg-gradient-to-r from-gray-600 to-gray-700'
            } text-white shadow-xl`}>
              {result.message}
            </div>
          )}

          <button
            onClick={spinSlots}
            disabled={spinning || coins < 100}
            className={`w-full py-6 rounded-2xl font-bold text-2xl transform transition-all duration-300 ${
              spinning || coins < 100
                ? 'bg-gray-600 cursor-not-allowed opacity-50'
                : 'bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:from-yellow-500 hover:via-orange-600 hover:to-pink-600 hover:scale-105 shadow-2xl'
            } text-white`}
          >
            {spinning ? '🎰 SPINNING... 🎰' : coins < 100 ? '❌ Not Enough Coins' : '🎰 SPIN NOW! (100 coins) 🎰'}
          </button>

          {coins < 100 && (
            <button
              onClick={() => setCoins(1000)}
              className="w-full mt-4 py-4 rounded-2xl font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transform hover:scale-105 transition-all duration-300"
            >
              🎁 Get Free Coins (1000) 🎁
            </button>
          )}
        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">🏆 Prize Table 🏆</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {prizes.map((prize, index) => (
              <div key={index} className="bg-black/30 rounded-xl p-4 text-center border border-white/10 hover:border-white/30 transition-all">
                <div className="text-4xl mb-2">{prize.emoji}</div>
                <p className="text-white font-semibold">{prize.name}</p>
                <p className="text-yellow-400 text-sm">{prize.value} pts</p>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-center mt-4 text-sm">
            💡 Match 3 symbols for 3x multiplier! Match 2 for base value!
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpinGame
