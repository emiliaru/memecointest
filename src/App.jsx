import { useState } from 'react'
import Hero from './components/Hero'
import SpinGame from './components/SpinGame'
import WalletConnect from './components/WalletConnect'

function App() {
  const [walletAddress, setWalletAddress] = useState(null)
  const [walletBalance, setWalletBalance] = useState(5.0) // Fake balance in SOL
  const [totalEarned, setTotalEarned] = useState(0)
  const [totalSpent, setTotalSpent] = useState(0)

  const handleWalletConnect = (address) => {
    setWalletAddress(address)
    if (address) {
      // Simulate random balance between 5-15 SOL
      setWalletBalance(Math.random() * 10 + 5)
    } else {
      // Reset on disconnect
      setTotalEarned(0)
      setTotalSpent(0)
    }
  }

  const handleSpinPayment = (cost) => {
    setWalletBalance(prev => prev - cost)
    setTotalSpent(prev => prev + cost)
  }

  const handleWinPayout = (amount) => {
    setWalletBalance(prev => prev + amount)
    setTotalEarned(prev => prev + amount)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <WalletConnect 
        onConnect={handleWalletConnect}
        isConnected={!!walletAddress}
        walletAddress={walletAddress}
        balance={walletBalance}
      />
      <Hero />
      <SpinGame 
        walletConnected={!!walletAddress}
        walletBalance={walletBalance}
        onSpinPayment={handleSpinPayment}
        onWinPayout={handleWinPayout}
        totalEarned={totalEarned}
        totalSpent={totalSpent}
      />
      
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/50 text-sm">
            © 2025 MEMECOIN ROULETTE. Made with 💜
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
