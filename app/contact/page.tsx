'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const projectTypes = [
  'Apex-Lead-Gen',
  'Sentinel-Private-AI',
  'Echo-Voice-Support',
  'Nova-Dashboard',
  'Horizon-Stories',
  'Stellar-3D',
  'Others'
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Send to Formspree or your preferred service
      const response = await fetch('https://formspree.io/f/rousanraahat@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', projectType: '', budget: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      // Fallback: Open mailto with form data
      const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
      )
      window.location.href = `mailto:rousanraahat@gmail.com?subject=${subject}&body=${body}`
      setStatus('success')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main className="min-h-screen cyber-grid">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-[#00ff88] hover:underline mb-8">
            ← Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s <span className="gradient-text">Work Together</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Have a project in mind? Fill out the form below and I&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#111] rounded-2xl p-8 border border-[#00ff88]/30 text-center"
            >
              <div className="w-16 h-16 bg-[#00ff88]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
              <p className="text-gray-400 mb-6">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-3 bg-[#00ff88] text-black font-semibold rounded-lg hover:bg-[#00cc6a] transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#111] rounded-2xl p-8 border border-[#222]">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-white font-medium mb-2">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333] rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-white font-medium mb-2">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333] rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000+">$10,000+</option>
                    <option value="Let's discuss">Let&apos;s discuss</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-[#00ff88] text-black font-bold rounded-lg hover:bg-[#00cc6a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-center mt-4">
                  Something went wrong. Please try again or email directly.
                </p>
              )}
            </form>
          )}

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Prefer direct contact?</p>
            <a 
              href="mailto:rousanraahat@gmail.com"
              className="text-[#00ff88] hover:underline text-lg"
            >
              rousanraahat@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
