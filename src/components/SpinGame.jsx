import { useState } from 'react'

const prizes = [
  { emoji: '🐕', name: 'BONK', symbol: 'BONK', value: 1000000, solValue: 0.5, color: 'from-orange-400 to-yellow-400' },
  { emoji: '🐸', name: 'PEPE', symbol: 'PEPE', value: 500000, solValue: 0.3, color: 'from-green-400 to-emerald-400' },
  { emoji: '🐶', name: 'WIF', symbol: 'WIF', value: 2000, solValue: 1.2, color: 'from-pink-400 to-purple-400' },
  { emoji: '🦊', name: 'MYRO', symbol: 'MYRO', value: 5000, solValue: 0.8, color: 'from-blue-400 to-cyan-400' },
  { emoji: '🐱', name: 'POPCAT', symbol: 'POPCAT', value: 3000, solValue: 0.6, color: 'from-purple-400 to-pink-400' },
  { emoji: '🐹', name: 'SAMO', symbol: 'SAMO', value: 10000, solValue: 0.4, color: 'from-red-400 to-orange-400' },
  { emoji: '🦆', name: 'DUCK', symbol: 'DUCK', value: 8000, solValue: 0.35, color: 'from-yellow-400 to-orange-400' },
  { emoji: '🐧', name: 'PENGU', symbol: 'PENGU', value: 15000, solValue: 0.25, color: 'from-cyan-400 to-blue-400' },
]

function SpinGame({ walletConnected, walletBalance, onSpinPayment, onWinPayout, totalEarned, totalSpent }) {
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState(null)
  const [slots, setSlots] = useState([prizes[0], prizes[1], prizes[2]])
  
  const SPIN_COST = 0.01 // Cost in SOL per spin
  const HOUSE_EDGE = 0.1 // 10% house edge for profit

  const spinSlots = () => {
    if (spinning) return
    
    // Check if wallet is connected
    if (!walletConnected) {
      setResult({ message: '❌ Please connect your wallet first!', winAmount: 0 })
      return
    }
    
    // Check if enough balance
    if (walletBalance < SPIN_COST) {
      setResult({ message: '❌ Insufficient balance! Need at least 0.01 SOL', winAmount: 0 })
      return
    }

    setSpinning(true)
    setResult(null)
    
    // Charge for spin
    onSpinPayment(SPIN_COST)

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
          const prize = finalSlots[0]
          const solWin = (prize.solValue * 3) * (1 - HOUSE_EDGE) // Apply house edge
          winAmount = solWin
          message = `🎉 JACKPOT! Triple ${prize.symbol}! Won ${prize.value * 3} ${prize.symbol} (+${solWin.toFixed(4)} SOL)!`
          onWinPayout(solWin)
        } else if (twoSame) {
          const matchedPrize = finalSlots[0].name === finalSlots[1].name ? finalSlots[0] : 
                               finalSlots[1].name === finalSlots[2].name ? finalSlots[1] : finalSlots[0]
          const solWin = matchedPrize.solValue * (1 - HOUSE_EDGE) // Apply house edge
          winAmount = solWin
          message = `✨ Nice! Double ${matchedPrize.symbol}! Won ${matchedPrize.value} ${matchedPrize.symbol} (+${solWin.toFixed(4)} SOL)!`
          onWinPayout(solWin)
        } else {
          message = '😢 Try again! Better luck next time!'
          winAmount = 0
        }

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
            🎰 Memecoin Roulette 🎰
          </h2>
          <p className="text-white/80 text-xl mb-3">
            Pay 0.01 SOL per spin and win real Solana memecoins!
          </p>
          <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/50 rounded-full px-6 py-2">
            <p className="text-green-300 text-sm font-semibold">
              💰 0.01 SOL per spin | 10% house edge
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-xl rounded-3xl p-8 border-4 border-yellow-400/50 shadow-2xl">
          {walletConnected ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-black/30 rounded-2xl px-6 py-3 border-2 border-blue-400/50">
                <p className="text-blue-400 text-sm font-semibold">Wallet Balance</p>
                <p className="text-white text-2xl font-bold">{walletBalance.toFixed(4)} SOL</p>
                <p className="text-white/60 text-xs">≈ ${(walletBalance * 180).toFixed(2)} USD</p>
              </div>
              <div className="bg-black/30 rounded-2xl px-6 py-3 border-2 border-green-400/50">
                <p className="text-green-400 text-sm font-semibold">Total Earned</p>
                <p className="text-white text-2xl font-bold">+{totalEarned.toFixed(4)} SOL</p>
                <p className="text-white/60 text-xs">≈ ${(totalEarned * 180).toFixed(2)} USD</p>
              </div>
              <div className="bg-black/30 rounded-2xl px-6 py-3 border-2 border-red-400/50">
                <p className="text-red-400 text-sm font-semibold">Total Spent</p>
                <p className="text-white text-2xl font-bold">-{totalSpent.toFixed(4)} SOL</p>
                <p className="text-white/60 text-xs">≈ ${(totalSpent * 180).toFixed(2)} USD</p>
              </div>
            </div>
          ) : (
            <div className="mb-8 p-6 bg-yellow-500/20 border-2 border-yellow-400/50 rounded-2xl text-center">
              <p className="text-yellow-300 text-lg font-semibold">
                👛 Connect your wallet to start playing!
              </p>
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 mb-8">
            {slots.map((slot, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${slot.color} rounded-2xl p-8 flex flex-col items-center justify-center transform transition-all duration-300 ${
                  spinning ? 'animate-spin-slow scale-110' : 'hover:scale-105'
                } shadow-2xl border-4 border-white/30`}
              >
                <div className="text-7xl mb-2">{slot.emoji}</div>
                <p className="text-white font-bold text-xl">${slot.symbol}</p>
                <p className="text-white/80 text-sm">{slot.value.toLocaleString()} tokens</p>
                <p className="text-yellow-300 text-xs font-bold">≈ {slot.solValue} SOL</p>
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
            disabled={spinning || !walletConnected || walletBalance < SPIN_COST}
            className={`w-full py-6 rounded-2xl font-bold text-2xl transform transition-all duration-300 ${
              spinning || !walletConnected || walletBalance < SPIN_COST
                ? 'bg-gray-600 cursor-not-allowed opacity-50'
                : 'bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:from-yellow-500 hover:via-orange-600 hover:to-pink-600 hover:scale-105 shadow-2xl'
            } text-white`}
          >
            {spinning 
              ? '🎰 SPINNING... 🎰' 
              : !walletConnected 
              ? '👛 Connect Wallet First' 
              : walletBalance < SPIN_COST 
              ? '❌ Insufficient Balance' 
              : `🎰 SPIN NOW! (${SPIN_COST} SOL) 🎰`}
          </button>

          {walletConnected && walletBalance < SPIN_COST && (
            <div className="mt-4 p-4 bg-red-500/20 border-2 border-red-400/50 rounded-2xl text-center">
              <p className="text-red-300 text-sm font-semibold">
                ⚠️ You need at least {SPIN_COST} SOL to spin. Disconnect and reconnect wallet to get new balance.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">🏆 Memecoin Prizes 🏆</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {prizes.map((prize, index) => (
              <div key={index} className="bg-black/30 rounded-xl p-4 text-center border border-white/10 hover:border-white/30 transition-all">
                <div className="text-4xl mb-2">{prize.emoji}</div>
                <p className="text-white font-semibold">${prize.symbol}</p>
                <p className="text-gray-300 text-xs">{prize.value.toLocaleString()} tokens</p>
                <p className="text-yellow-400 text-sm font-bold">≈ {prize.solValue} SOL</p>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-center mt-4 text-sm">
            💡 Match 3 symbols for 3x multiplier! Match 2 for base value!
          </p>
          <p className="text-yellow-400 text-center mt-2 text-xs font-semibold">
            💰 House Edge: 10% | Cost: 0.01 SOL per spin
          </p>
          <p className="text-green-400 text-center mt-1 text-xs font-semibold">
            🎮 Demo Mode - Fake wallet for testing. Payouts are simulated.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpinGame
