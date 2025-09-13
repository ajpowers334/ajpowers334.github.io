import React, { useState } from 'react';
import { Mail, Linkedin, ExternalLink, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will go here
    console.log('Form submitted:', formData);
    // You can integrate with a form service like Netlify Forms or EmailJS
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate or just want to chat about games? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center mb-8">
              <MessageSquare className="w-8 h-8 text-purple-400 mr-4" />
              <h2 className="text-2xl font-bold text-white">Send a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/25 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/25 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/25 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/25 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            
            {/* Contact Methods */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400 mr-4" />
                  <span>Ready to connect via email</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MessageSquare className="w-5 h-5 text-purple-400 mr-4" />
                  <span>Open to collaborative discussions</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-pink-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Find Me Online</h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center p-4 bg-slate-700/50 rounded-lg border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-blue-400 mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-white font-semibold">LinkedIn</div>
                    <div className="text-sm text-gray-400">Professional network & career updates</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-blue-400 transition-colors" />
                </a>

                <a
                  href="#"
                  className="flex items-center p-4 bg-slate-700/50 rounded-lg border border-gray-600/30 hover:border-red-400/50 transition-all duration-300 group"
                >
                  <div className="w-6 h-6 bg-red-500 rounded mr-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xs font-bold">i</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">itch.io</div>
                    <div className="text-sm text-gray-400">Game portfolio & downloadable projects</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-red-400 transition-colors" />
                </a>
              </div>

              <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <p className="text-sm text-purple-300">
                  <strong>Note:</strong> The LinkedIn and itch.io links above are placeholders. 
                  You can easily update them with your actual profile URLs.
                </p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Create Something Amazing</h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you're looking for a collaborator on your next game project, want to discuss 
                game design concepts, or just want to connect with a fellow game enthusiast, I'm always 
                excited to meet new people in the industry.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;