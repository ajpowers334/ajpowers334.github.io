import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] opacity-10 bg-cover bg-center"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-300">Game Designer & Creative Developer</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              <span className="block text-white">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Austin
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              My name is Austin and I am a Game Designer passionate about creating immersive 
              experiences that captivate and inspire players around the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 rounded-full text-cyan-300 font-semibold hover:bg-cyan-400/10 transition-all duration-300"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full opacity-40 animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-400 rounded-full opacity-30 animate-bounce"></div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Game Design</h3>
              <p className="text-gray-300">Creating engaging gameplay mechanics and memorable player experiences.</p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Development</h3>
              <p className="text-gray-300">Bringing creative visions to life through code and interactive systems.</p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Creativity</h3>
              <p className="text-gray-300">Innovative thinking and artistic vision in every project and design decision.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;