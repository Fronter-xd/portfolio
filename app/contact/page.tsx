'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import emailjs from '@emailjs/browser'

const projectTypes = [
  'AI Development',
  'Lead Generation Tool',
  'Chatbot / RAG System',
  'Voice AI Assistant',
  'Analytics Dashboard',
  'Web Application',
  'Other'
]

const EMAILJS_SERVICE_ID = 'service_jfwmb79'
const EMAILJS_TEMPLATE_ID = 'template_x308egr'
const EMAILJS_PUBLIC_KEY = 'aSewlw9M_Xf8jI40-'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' })
    } catch (error) {
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
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="container mx-auto px-6 py-16 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00ff88] transition-colors mb-8 text-sm">
            ← Back
          </Link>

          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-3">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-gray-500">
              Have a project in mind? Let&apos;s discuss how I can help.
            </p>
          </div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#0d0d0d] rounded-2xl p-8 border border-[#1a1a1a] text-center"
            >
              <div className="w-14 h-14 bg-[#00ff88]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Message Sent!</h2>
              <p className="text-gray-500 mb-6 text-sm">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-5 py-2.5 bg-[#161616] text-white rounded-lg hover:bg-[#1f1f1f] transition-colors border border-[#262626] text-sm"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="bg-[#0d0d0d] rounded-2xl p-8 border border-[#1a1a1a]">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff88] transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff88] transition-colors text-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-gray-300 text-sm font-medium mb-2">Project Type</label>
                  <select
                    id="projectType"
                    name="project_type"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors text-sm"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-gray-300 text-sm font-medium mb-2">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors text-sm"
                  >
                    <option value="">Select budget</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000+">$10,000+</option>
                    <option value="Let's discuss">Let&apos;s discuss</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff88] transition-colors resize-none text-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 bg-[#00ff88] text-black font-semibold rounded-lg hover:bg-[#00cc6a] transition-colors text-sm disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-center mt-4 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm mb-2">Prefer direct contact?</p>
            <a 
              href="mailto:rousanraahat@gmail.com"
              className="text-[#00ff88] hover:underline text-sm"
            >
              rousanraahat@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
