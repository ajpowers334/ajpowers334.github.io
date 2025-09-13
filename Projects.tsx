import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  // Placeholder projects - you can easily update these with your actual projects
  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "Brief description of your game project. Explain the core mechanics, target audience, and what makes it unique. This will be replaced with your actual project details.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Unity", "C#", "2D Platformer"],
      links: {
        demo: "#",
        github: "#",
        itch: "#"
      }
    },
    {
      id: 2,
      title: "Project Title 2", 
      description: "Another exciting game project showcasing different skills and technologies. Describe the gameplay, art style, and development challenges you overcame.",
      image: "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Unreal Engine", "Blueprint", "3D Action"],
      links: {
        demo: "#",
        github: "#",
        itch: "#"
      }
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "A third project demonstrating your versatility as a game designer. Perhaps this one shows your skills in puzzle design, narrative, or multiplayer systems.",
      image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["GameMaker", "Puzzle", "Mobile"],
      links: {
        demo: "#",
        github: "#", 
        itch: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my game design portfolio showcasing creativity, technical skills, and passion for interactive experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.links.demo}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Play Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="inline-flex items-center px-6 py-3 border border-cyan-400/50 rounded-full text-cyan-300 font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.links.itch}
                    className="inline-flex items-center px-6 py-3 border border-gray-400/50 rounded-full text-gray-300 font-semibold hover:bg-gray-400/10 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    itch.io
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
          <p className="text-gray-300 mb-6">
            These are just a few examples of my work. I'm always working on new projects and experimenting with different game mechanics and technologies.
          </p>
          <div className="text-sm text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 inline-block">
            <strong>Note:</strong> You can easily update the projects above by replacing the placeholder content with your actual project details, images, and links.
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;