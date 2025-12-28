import { useState } from 'react'

function WalletConnect({ onConnect, isConnected, walletAddress, balance }) {
  const [showDropdown, setShowDropdown] = useState(false)

  const connectWallet = () => {
    // Fake wallet address generator
    const fakeAddress = '0x' + Math.random().toString(16).substr(2, 8).toUpperCase() + '...' + Math.random().toString(16).substr(2, 4).toUpperCase()
    onConnect(fakeAddress)
  }

  const disconnectWallet = () => {
    onConnect(null)
    setShowDropdown(false)
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      {!isConnected ? (
        <button
          onClick={connectWallet}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
        >
          <span className="text-xl">👛</span>
          Connect Wallet
        </button>
      ) : (
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center gap-3 hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
          >
            <span className="text-xl">✅</span>
            <div className="text-left">
              <div className="text-xs opacity-80">Connected</div>
              <div className="text-sm font-mono">{walletAddress}</div>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <span className="text-sm font-bold">{balance.toFixed(2)} SOL</span>
            </div>
          </button>

          {showDropdown && (
            <div className="absolute top-full right-0 mt-2 bg-gray-900 border-2 border-purple-500 rounded-2xl p-4 min-w-[250px] shadow-2xl">
              <div className="mb-3">
                <div className="text-gray-400 text-xs mb-1">Wallet Address</div>
                <div className="text-white font-mono text-sm break-all">{walletAddress}</div>
              </div>
              <div className="mb-3">
                <div className="text-gray-400 text-xs mb-1">Balance</div>
                <div className="text-white font-bold text-lg">{balance.toFixed(4)} SOL</div>
                <div className="text-gray-400 text-xs">≈ ${(balance * 180).toFixed(2)} USD</div>
              </div>
              <button
                onClick={disconnectWallet}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default WalletConnect
