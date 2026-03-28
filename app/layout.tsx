import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rousan Raahat | AI Developer & Builder',
  description: 'Solo founder building AI-powered products. Portfolio of 7 production-ready projects including lead generation, RAG chatbots, voice AI, and 3D visualizations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  )
}
