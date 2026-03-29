'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/lib/projects'

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group block relative bg-[#0d0d0d] rounded-xl p-6 border border-[#1a1a1a] hover:border-[#00ff88]/40 transition-all duration-300 cursor-pointer"
    >
      <div 
        className="absolute top-0 left-0 w-full h-0.5 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: project.color }}
      />
      
      <div className="flex items-start justify-between mb-4">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
          style={{ backgroundColor: `${project.color}15` }}
        >
          {project.icon}
        </div>
        <span 
          className="text-xs px-2.5 py-1 rounded-full font-medium"
          style={{ backgroundColor: `${project.color}15`, color: project.color }}
        >
          {project.category}
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#00ff88] transition-colors flex items-center gap-2">
        {project.name}
        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </h3>
      
      <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, 4).map((tech) => (
          <span key={tech} className="text-xs px-2 py-0.5 bg-[#161616] text-gray-400 rounded font-mono">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-2 border-t border-[#1a1a1a]">
        <span className="flex items-center gap-1.5 text-xs text-gray-500 group-hover:text-[#00ff88] transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View Code
        </span>
        {project.demo && (
          <span className="flex items-center gap-1.5 text-xs text-gray-500 group-hover:text-[#06b6d4] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Demo
          </span>
        )}
      </div>
    </motion.a>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#00ff88] to-[#00cc6a] flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-[#00ff88]/20">
              RR
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-white">Rousan </span>
            <span className="gradient-text">Raahat</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-3 font-light">
            AI Developer & Software Engineer
          </p>
          
          <p className="text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
            Building intelligent solutions with cutting-edge AI technology. 
            Specializing in machine learning, automation, and scalable software.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a 
              href="https://github.com/Fronter-xd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#161616] text-white rounded-lg hover:bg-[#1f1f1f] transition-all border border-[#262626]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="font-medium">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/rousan-raahat-610424224/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#0077b5] text-white rounded-lg hover:bg-[#006097] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="font-medium">LinkedIn</span>
            </a>
            <a 
              href="mailto:rousanraahat@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#00ff88] text-black rounded-lg hover:bg-[#00cc6a] transition-all font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </a>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20 max-w-2xl mx-auto"
        >
          <div className="bg-[#0d0d0d] rounded-xl p-6 border border-[#1a1a1a] text-center">
            <div className="text-3xl font-bold gradient-text mb-1">{projects.length}</div>
            <div className="text-gray-500 text-sm">Projects Delivered</div>
          </div>
          <div className="bg-[#0d0d0d] rounded-xl p-6 border border-[#1a1a1a] text-center">
            <div className="text-3xl font-bold gradient-text mb-1">Open Source</div>
            <div className="text-gray-500 text-sm">Available on GitHub</div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-8"
        >
          <Link href="/about">
            <span className="text-[#00ff88] hover:underline text-sm font-medium cursor-pointer">About me →</span>
          </Link>
        </motion.section>

        <section id="projects">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Featured Work</h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm">
              Production-ready AI applications and tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0d0d0d] rounded-2xl p-8 mb-16 border border-[#1a1a1a] text-center max-w-2xl mx-auto"
        >
          <h2 className="text-xl font-semibold text-white mb-3">Have a project in mind?</h2>
          <p className="text-gray-500 mb-6 text-sm max-w-md mx-auto">
            I&apos;m available for freelance projects, collaborations, and full-time opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-[#00ff88] text-black font-semibold rounded-lg hover:bg-[#00cc6a] transition-colors"
            >
              Start a Conversation
            </Link>
            <a 
              href="https://github.com/Fronter-xd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[#262626] text-gray-300 font-medium rounded-lg hover:bg-[#161616] transition-colors"
            >
              View GitHub
            </a>
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-8 border-t border-[#1a1a1a]"
        >
          <p className="text-gray-600 text-sm">
            © 2026 Rousan Raahat
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Built with Next.js, Tailwind CSS, Framer Motion
          </p>
        </motion.footer>
      </div>
    </main>
  )
}
