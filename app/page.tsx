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
            className="mb-8"
          >
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-[#00ff88] via-[#00cc6a] to-[#059669] flex items-center justify-center text-4xl font-bold text-white shadow-2xl shadow-[#00ff88]/30 relative">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00cc6a] animate-pulse opacity-20" />
              <span className="relative">RR</span>
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-white">Rousan </span>
            <span className="gradient-text">Raahat</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-xl mx-auto mb-2 font-medium">
            AI Developer & Software Engineer
          </p>
          
          <p className="text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed">
            Building intelligent solutions with cutting-edge AI technology. 
            Specializing in machine learning, automation, and scalable software.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <motion.a 
              href="https://github.com/Fronter-xd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-6 py-3.5 bg-[#24292f] text-white rounded-xl hover:bg-[#2f3339] transition-all shadow-lg shadow-black/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <div className="text-left">
                <div className="text-sm font-semibold">GitHub</div>
                <div className="text-xs text-gray-400">@Fronter-xd</div>
              </div>
              <svg className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/rousan-raahat-610424224/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-6 py-3.5 bg-[#0A66C2] text-white rounded-xl hover:bg-[#004182] transition-all shadow-lg shadow-[#0A66C2]/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div className="text-left">
                <div className="text-sm font-semibold">LinkedIn</div>
                <div className="text-xs text-blue-200">Rousan Raahat</div>
              </div>
              <svg className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-2"
          >
            <Link 
              href="/contact"
              className="px-8 py-3.5 bg-[#00ff88] text-black font-semibold rounded-xl hover:bg-[#00cc6a] transition-all shadow-lg shadow-[#00ff88]/20 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </Link>
            <a 
              href="#projects"
              className="px-8 py-3.5 border border-[#333] text-gray-300 font-medium rounded-xl hover:bg-[#161616] transition-all inline-flex items-center gap-2"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#00ff88]/10 to-[#00cc6a]/5 rounded-2xl p-8 border border-[#00ff88]/20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="text-5xl font-bold gradient-text mb-2">{projects.length}</div>
              <div className="text-gray-400 font-medium">Projects Delivered</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#8b5cf6]/10 to-[#7c3aed]/5 rounded-2xl p-8 border border-[#8b5cf6]/20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6]/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="text-5xl font-bold text-[#8b5cf6] mb-2">100%</div>
              <div className="text-gray-400 font-medium">Open Source</div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-8"
        >
          <Link href="/about">
            <span className="text-gray-500 hover:text-[#00ff88] transition-colors text-sm font-medium cursor-pointer">Learn more about me →</span>
          </Link>
        </motion.section>

        <section id="projects">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">Featured Work</h2>
            <p className="text-gray-500 max-w-md mx-auto">
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
          className="bg-gradient-to-br from-[#0d0d0d] to-[#111] rounded-3xl p-10 mb-16 border border-[#1a1a1a] text-center max-w-2xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00ff88]/5 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl font-bold text-white mb-3">Let&apos;s Build Something Great</h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto text-sm">
              Available for freelance projects, collaborations, and full-time opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                href="/contact"
                className="px-6 py-3 bg-[#00ff88] text-black font-semibold rounded-lg hover:bg-[#00cc6a] transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Start a Conversation
              </Link>
              <a 
                href="https://github.com/Fronter-xd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#333] text-gray-300 font-medium rounded-lg hover:bg-[#161616] transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Explore GitHub
              </a>
            </div>
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-8 border-t border-[#1a1a1a]"
        >
          <div className="flex justify-center gap-4 mb-4">
            <a 
              href="https://github.com/Fronter-xd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#161616] flex items-center justify-center hover:bg-[#24292f] transition-colors"
            >
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/rousan-raahat-610424224/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#161616] flex items-center justify-center hover:bg-[#0A66C2] transition-colors"
            >
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="mailto:rousanraahat@gmail.com"
              className="w-10 h-10 rounded-full bg-[#161616] flex items-center justify-center hover:bg-[#00ff88] transition-colors group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
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
