import type { Metadata } from 'next'
import './globals.css'
import './custom.css'

export const metadata: Metadata = {
  title: 'TATA Class Edge - Interactive Learning Platform',
  description: 'An interactive learning platform for students and teachers, featuring rich multimedia content and engaging educational resources.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black fade-in">{children}</body>
    </html>
  )
}
