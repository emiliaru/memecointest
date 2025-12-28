import { useState } from 'react'
import Hero from './components/Hero'
import SpinGame from './components/SpinGame'
import WalletConnect from './components/WalletConnect'

function App() {
  const [walletAddress, setWalletAddress] = useState(null)
  const [walletBalance, setWalletBalance] = useState(5.0) // Fake balance in SOL

  const handleWalletConnect = (address) => {
    setWalletAddress(address)
    if (address) {
      // Simulate random balance between 2-10 SOL
      setWalletBalance(Math.random() * 8 + 2)
    }
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
      <SpinGame />
      
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
