import { useState } from 'react'
import Hero from './components/Hero'
import SpinGame from './components/SpinGame'
import Tokenomics from './components/Tokenomics'
import Footer from './components/Footer'
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
      <Tokenomics />
      <Footer />
    </div>
  )
}

export default App
