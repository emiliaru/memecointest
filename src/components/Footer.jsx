function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-4">
              🌙 MOON COIN
            </h3>
            <p className="text-white/70">
              The most chwytliwy memecoin in the galaxy! Join us on our journey to the moon! 🚀
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-4">🔗 Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors duration-300">
                  📄 Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors duration-300">
                  📊 Chart
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors duration-300">
                  🔍 Audit
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors duration-300">
                  💬 Community
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold text-white mb-4">🌐 Social Media</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transform hover:scale-110 transition-all duration-300">
                <span className="text-2xl">🐦</span>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transform hover:scale-110 transition-all duration-300">
                <span className="text-2xl">💬</span>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transform hover:scale-110 transition-all duration-300">
                <span className="text-2xl">📱</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 mb-2">
            ⚠️ Disclaimer: This is a memecoin for entertainment purposes. Always DYOR (Do Your Own Research)!
          </p>
          <p className="text-white/50 text-sm">
            © 2025 MOON COIN. All rights reserved. Made with 💜 by the community
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
