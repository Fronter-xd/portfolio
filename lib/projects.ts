export interface Project {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  tech: string[]
  category: string
  icon: string
  color: string
  github: string
  demo?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'apex-lead-gen',
    name: 'Apex-Lead-Gen',
    shortDescription: 'AI-powered lead generation engine',
    fullDescription: 'Multi-platform lead generation tool using PRAW, Tweepy, and Llama-3 to identify and score potential customers with automated outreach messaging.',
    tech: ['Python', 'PRAW', 'Tweepy', 'Llama-3', 'PostgreSQL'],
    category: 'AI Tools',
    icon: '🎯',
    color: '#00ff88',
    github: 'https://github.com/Fronter-xd/apex-lead-gen',
    featured: true,
  },
  {
    id: 'sentinel-private-ai',
    name: 'Sentinel-Private-AI',
    shortDescription: 'On-premise RAG document chatbot',
    fullDescription: 'Private document RAG chatbot with custom vector store, Ollama integration, and Edge-TTS for secure AI-powered document analysis.',
    tech: ['Next.js', 'LangChain', 'Ollama', 'Edge-TTS', 'ChromaDB'],
    category: 'AI Chat',
    icon: '🔒',
    color: '#8b5cf6',
    github: 'https://github.com/Fronter-xd/sentinel-private-ai',
    demo: 'https://sentinel-private-ai.vercel.app',
    featured: true,
  },
  {
    id: 'echo-voice-support',
    name: 'Echo-Voice-Support',
    shortDescription: 'Real-time voice AI assistant',
    fullDescription: 'Voice-powered customer support with Whisper STT, Llama-3 LLM, and Edge-TTS for natural real-time conversations.',
    tech: ['Python', 'Whisper', 'Ollama', 'Edge-TTS', 'WebSocket'],
    category: 'Voice AI',
    icon: '🎙️',
    color: '#f59e0b',
    github: 'https://github.com/Fronter-xd/echo-voice-support',
    featured: true,
  },
  {
    id: 'nova-dashboard',
    name: 'Nova-Dashboard',
    shortDescription: 'Real-time analytics dashboard',
    fullDescription: 'D3.js-powered analytics dashboard with real-time charts, sentiment maps, and lead tracking for data-driven decisions.',
    tech: ['Next.js', 'D3.js', 'Framer Motion', 'TypeScript'],
    category: 'Analytics',
    icon: '📊',
    color: '#3b82f6',
    github: 'https://github.com/Fronter-xd/nova-dashboard',
    demo: 'https://nova-dashboard.vercel.app',
    featured: true,
  },
  {
    id: 'horizon-stories',
    name: 'Horizon-Stories',
    shortDescription: 'Cinematic scroll storytelling',
    fullDescription: 'Immersive scroll-triggered storytelling experience with GSAP animations, parallax effects, and luxury dark theme.',
    tech: ['Next.js', 'GSAP', 'Framer Motion', 'Lenis'],
    category: 'Creative',
    icon: '✨',
    color: '#d4af37',
    github: 'https://github.com/Fronter-xd/horizon-stories',
    demo: 'https://horizon-stories.vercel.app',
    featured: false,
  },
  {
    id: 'stellar-3d',
    name: 'Stellar-3D',
    shortDescription: '3D AI deployment globe',
    fullDescription: 'Interactive 3D globe with floating AI nodes showing global deployment status, HUD overlay, and React Three Fiber visualization.',
    tech: ['React', 'Three.js', 'React Three Fiber', 'Zustand'],
    category: '3D/WebGL',
    icon: '🌍',
    color: '#06b6d4',
    github: 'https://github.com/Fronter-xd/stellar-3d',
    demo: 'https://stellar-3d.vercel.app',
    featured: false,
  },
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    shortDescription: 'Personal portfolio showcase',
    fullDescription: 'Professional portfolio showcasing all projects with modern dark theme, smooth animations, and mobile-responsive design.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web Dev',
    icon: '👨‍💻',
    color: '#ec4899',
    github: 'https://github.com/Fronter-xd/portfolio',
    featured: false,
  },
]
