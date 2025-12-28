function Tokenomics() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            💰 Tokenomics 💰
          </h2>
          <p className="text-white/80 text-xl">
            Fair launch, community-driven, moon-bound! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-green-400/50 transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">📊</div>
            <h3 className="text-2xl font-bold text-green-400 mb-2 text-center">Total Supply</h3>
            <p className="text-white text-3xl font-bold text-center">1B MOON</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-blue-400/50 transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🔥</div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2 text-center">Burned</h3>
            <p className="text-white text-3xl font-bold text-center">50%</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-purple-400/50 transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">💧</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-2 text-center">Liquidity</h3>
            <p className="text-white text-3xl font-bold text-center">40%</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-yellow-400/50 transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🎮</div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2 text-center">Rewards</h3>
            <p className="text-white text-3xl font-bold text-center">10%</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-400/50">
          <h3 className="text-3xl font-bold text-center text-purple-300 mb-8">🌟 Why MOON COIN? 🌟</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">✅</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Community Owned</h4>
                  <p className="text-white/70">No team tokens, 100% fair launch for the community</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔒</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Liquidity Locked</h4>
                  <p className="text-white/70">LP tokens locked forever, rug-proof guaranteed</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎯</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Play to Earn</h4>
                  <p className="text-white/70">Unique gaming mechanics with real rewards</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🚀</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Moon Mission</h4>
                  <p className="text-white/70">Strong community backing with diamond hands</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
            <p className="text-white text-2xl font-bold mb-4">📈 Contract Address 📈</p>
            <code className="bg-black/50 text-green-400 px-6 py-3 rounded-lg text-sm md:text-base block font-mono">
              0x1234...5678 (Coming Soon!)
            </code>
            <p className="text-white/80 text-sm mt-4">Always verify the contract address!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
