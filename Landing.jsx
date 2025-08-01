import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const GeekBotLanding = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Hero */}
      <section className="text-center py-20 px-4 bg-black">
        <h1 className="text-5xl  text-transparent font-bold mb-4 bg-gradient-to-bl from-lime-400 to-cyan-400 bg-clip-text">IT'S-A ME, GEEKBOT! 🍄</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-6">
          Welcome to the Mushroom Kingdom of AI! Level up your chats, collect power-ups, and rescue your productivity from boring bots! 🏰
        </p>
        <div className="flex justify-center gap-4">
          <button className=" bg-gradient-to-br from-lime-400 to-cyan-400  hover:border-4-lime-400 px-6 py-3 rounded-lg font-semibold cursor-pointer" onClick={() => navigate('/chat')}> START ADVENTURE!</button>
          {/* WATCH DEMO */}
          <button
            className="border border-gray-400 hover:border-white px-6 py-3 rounded-lg font-semibold cursor-pointer"
            onClick={() => setShowVideo(true)}
          >
            🎮 WATCH DEMO
          </button>
          {showVideo && (
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center">
              <div className="relative w-full max-w-3xl px-4">
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500 z-50"
                >
                  &times;
                </button>
                <div className="aspect-w-16 aspect-h-9">
                  <video
                    src="/demo.mp4"
                    controls
                    autoPlay
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          )}


        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-black mb-5">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-300"> POWER-UP FEATURES</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-shadow-gray-300">
          <div className="bg-[#1b1b1b] p-6 rounded-lg hover:border-2 border-lime-400 ">
            <h3 className="text-xl font-semibold text-white mb-2">🍄 Power-Up Conversations</h3>
            <p>Chat with super AI that boosts your brain like a 1-UP!</p>
          </div>
          <div className="bg-[#1b1b1b] p-6 rounded-lg hover:border-2 border-lime-400 ">
            <h3 className="text-xl font-semibold text-white mb-2">⚡ Warp Speed Fast</h3>
            <p>Faster than Mario through World 1-1. Instant replies!</p>
          </div>
          <div className="bg-[#1b1b1b] p-6 rounded-lg border-lime-400 hover:border-2 ">
            <h3 className="text-xl font-semibold text-white mb-2">🏰 Fortress Secure</h3>
            <p>Your data is guarded better than Peach in the castle.</p>
          </div>
          <div className="bg-[#1b1b1b] p-6 rounded-lg border-lime-400 hover:border-2 ">
            <h3 className="text-xl font-semibold text-white mb-2">🌍 World-Wide Access</h3>
            <p>Use it anywhere — from World 1-1 to infinity!</p>
          </div>
        </div>
      </section>


      {/* Terminal Preview */}
      <section className="relative py-20 px-6 bg-gradient-to-r bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-lime-600/50 rounded-2xl shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-lime-400 to-cyan-400 p-4 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-black font-bold">GEEKBOT TERMINAL v8.0</span>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono text-green-300 space-y-4">
              <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                <span>SCORE: 999999 | LIVES: ∞</span>
                <span className="animate-pulse">⚡ ONLINE</span>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-600">
                <p className="mb-4">
                  <span className="text-lime-400 font-semibold">Player:</span>
                  <span className="text-white ml-2">How can I become a coding superhero like Mario? 🦸‍♂️</span>
                </p>

                <p className="mb-4">
                  <span className="text-cyan-400 font-semibold">GeekBot:</span>
                  <span className="text-white ml-2">Wahoo! Great question! 🍄</span>
                </p>

                <div className="ml-4 space-y-2 text-green-200">
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-400">🎯</span>
                    <span>Practice coding daily like collecting coins!</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-400">🏰</span>
                    <span>Build epic projects like constructing castles!</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-400">⭐</span>
                    <span>Learn from other heroes in the community!</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-400">🔥</span>
                    <span>Never give up — every game over teaches you something!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}

      <section className="bg-black py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-300 mb-10"> HERO REVIEWS</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-gray-200">
          <div className="bg-[#121212] p-6 rounded shadow">
            <p className="text-2xl mb-2">🍄</p>
            <p className="text-lg font-semibold">Mario Mario</p>
            <p className="text-sm mt-2">"Mamma mia! This GeekBot is better than a Super Star!"</p>
          </div>
          <div className="bg-[#121212] p-6 rounded shadow">
            <p className="text-2xl mb-2">👑</p>
            <p className="text-lg font-semibold">Princess Peach</p>
            <p className="text-sm mt-2">"GeekBot rescued me from boring chats faster than Mario ever could!"</p>
          </div>
          <div className="bg-[#121212] p-6 rounded shadow">
            <p className="text-2xl mb-2">⭐</p>
            <p className="text-lg font-semibold">Luigi Mario</p>
            <p className="text-sm mt-2">"Even I'm not scared to chat with this AI. It's-a so helpful!"</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-lime-400 to-cyan-400 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4"> READY PLAYER ONE?</h2>
        <p className="text-lg text-white mb-6">Join the adventure and chat with the most super AI in the kingdom!</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-green-800 font-bold px-6 py-3 rounded hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/chat')}> START GAME</button>
          <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-green-800"> LEARN MORE</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] text-center py-6 text-sm text-gray-400">
        © 2025 GEEKBOT KINGDOM. All rights reserved.
      </footer>
    </div>
  );
};

export default GeekBotLanding;
