'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import Link from 'next/link'

const categories = ['All', 'AI Tools', 'AI Chat', 'Voice AI', 'Analytics', 'Creative', '3D/WebGL', 'Web Dev']

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-[#111] rounded-xl p-6 border border-[#222] hover:border-[#00ff88]/50 transition-all duration-300"
    >
      <div 
        className="absolute top-0 left-0 w-full h-1 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: project.color }}
      />
      
      <div className="flex items-start justify-between mb-4">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
          style={{ backgroundColor: `${project.color}20` }}
        >
          {project.icon}
        </div>
        <span 
          className="text-xs px-2 py-1 rounded-full"
          style={{ backgroundColor: `${project.color}20`, color: project.color }}
        >
          {project.category}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#00ff88] transition-colors">
        {project.name}
      </h3>
      
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 4).map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-300 rounded">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#00ff88] transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#00ff88] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured)
  
  return (
    <main className="min-h-screen cyber-grid">
      <div className="container mx-auto px-6 py-12">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-1 bg-[#00ff88]/10 text-[#00ff88] text-sm rounded-full border border-[#00ff88]/30">
              Available for Projects
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Rousan </span>
            <span className="gradient-text">Raahat</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Solo founder building AI-powered products. From lead generation to voice AI, 
            I create production-ready software that generates value.
          </p>

          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/Fronter-xd" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#00ff88] text-black font-semibold rounded-lg hover:bg-[#00cc6a] transition-colors"
            >
              GitHub Profile
            </a>
            <a 
              href="#projects"
              className="px-6 py-3 border border-[#00ff88]/50 text-[#00ff88] font-semibold rounded-lg hover:bg-[#00ff88]/10 transition-colors"
            >
              View Projects
            </a>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-[#111] rounded-xl p-6 border border-[#222] text-center">
            <div className="text-4xl font-bold gradient-text mb-2">{projects.length}</div>
            <div className="text-gray-400">Projects Built</div>
          </div>
          <div className="bg-[#111] rounded-xl p-6 border border-[#222] text-center">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-gray-400">Production Ready</div>
          </div>
          <div className="bg-[#111] rounded-xl p-6 border border-[#222] text-center">
            <div className="text-4xl font-bold gradient-text mb-2">$10K</div>
            <div className="text-gray-400">30-Day Goal</div>
          </div>
        </motion.section>

        <section id="projects">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Production-ready AI products built with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-12 border-t border-[#222]"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something</h3>
          <p className="text-gray-400 mb-6">
            Need AI-powered solutions? Let's discuss your project.
          </p>
          <a 
            href="mailto:hello@rousanraahat.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00ff88] text-black font-semibold rounded-lg hover:bg-[#00cc6a] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </a>
          
          <div className="mt-12 text-gray-500 text-sm">
            © 2026 Rousan Raahat. Built with Next.js, Tailwind, and Framer Motion.
          </div>
        </motion.footer>
      </div>
    </main>
  )
}
