import React from 'react';
import { Heart, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover my journey, passion, and mission in the world of game design
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          
          {/* Background Image */}
          <div className="relative rounded-2xl overflow-hidden h-64 md:h-80">
            <img 
              src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Gaming setup with multiple monitors"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          </div>

          {/* Story Section */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-pink-400 mr-4" />
              <h2 className="text-2xl font-bold text-white">My Passion</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I've been passionate about videogame creation since I was 9 years old. That early spark of curiosity 
              about how games work and how they make players feel has grown into a deep commitment to crafting 
              meaningful interactive experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              What started as simple curiosity has evolved into a comprehensive understanding of game mechanics, 
              player psychology, and the art of digital storytelling. Every project is an opportunity to create 
              something that resonates with players on an emotional level.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-cyan-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">My Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To create games that not only entertain but also inspire, challenge, and connect people. 
                I believe in the power of interactive media to tell stories that matter and create experiences 
                that stay with players long after they've put down the controller.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-purple-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">My Approach</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I approach game design with a player-first mindset, focusing on creating intuitive mechanics 
                and compelling narratives. Every design decision is made with the player's journey and experience 
                at the forefront, ensuring engagement and emotional connection.
              </p>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-pink-500/20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Skills & Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Game Design', 'Level Design', 'Narrative Design', 'User Experience',
                'Prototyping', 'Game Mechanics', 'Player Psychology', 'Creative Direction'
              ].map((skill, index) => (
                <div key={index} className="bg-slate-700/50 rounded-lg p-4 text-center border border-gray-600/30 hover:border-purple-400/50 transition-colors duration-300">
                  <span className="text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;