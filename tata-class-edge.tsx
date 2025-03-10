"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  ChevronDown,
  Play,
  Volume2,
  MousePointer,
  Maximize,
  Square,
  Move,
  Type,
  Pen,
  Eraser,
  Link2,
  Search,
  RotateCcw,
  RotateCw,
  HelpCircle,
  X,
  Check,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function TataClassEdge() {
  const [showResources, setShowResources] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      {/* GitHub Corner */}
      <a href="https://github.com/Prasanna-kumar-Patra/tata-class-edge2" className="github-corner" aria-label="View source on GitHub">
        <svg width="80" height="80" viewBox="0 0 250 250" style={{
          fill: '#151513',
          color: '#fff',
          position: 'absolute',
          top: 0,
          border: 0,
          right: 0,
          transform: 'scale(1, 1)',
        }} aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{transformOrigin: '130px 106px'}} className="octo-arm"></path>
          <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
        </svg>
      </a>
      <style jsx>{`
        .github-corner:hover .octo-arm {
          animation: octocat-wave 560ms ease-in-out;
        }
        @keyframes octocat-wave {
          0%, 100% { transform: rotate(0); }
          20%, 60% { transform: rotate(-25deg); }
          40%, 80% { transform: rotate(10deg); }
        }
        @media (max-width: 500px) {
          .github-corner:hover .octo-arm {
            animation: none;
          }
          .github-corner .octo-arm {
            animation: octocat-wave 560ms ease-in-out;
          }
        }
      `}</style>
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex flex-col">
          <div className="font-bold text-2xl tracking-tighter">TATA</div>
          <div className="font-bold text-2xl tracking-tighter">class</div>
          <div className="font-bold text-2xl tracking-tighter">edge</div>
          <div className="text-xs mt-1">v.2.0.0</div>
        </div>
        <div className="text-right">
          <div className="text-xl font-medium">{formatTime(currentTime)}</div>
          <div className="text-sm">{formatDate(currentTime)}</div>
          <div className="text-xs mt-1">v2.0.0</div>
          <a 
            href="https://github.com/Prasanna-kumar-Patra/tata-class-edge2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-blue-400 hover:text-blue-300 mt-1 block"
          >
            View on GitHub
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 relative flex-col md:flex-row">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-white m-4 rounded-sm text-black relative">
            <div className="absolute inset-0 flex items-center justify-center fade-in">
              <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Tablet illustration"
                width={200}
                height={150}
                className="opacity-50"
              />
            </div>

            {/* Media Controls */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="bg-gray-700 text-white rounded flex items-center p-1 w-64">
                <Button variant="ghost" size="icon" className="text-white">
                  <Play className="h-5 w-5" />
                </Button>
                <div className="h-2 w-full bg-gray-500 rounded-full mx-2 relative">
                  <div className="absolute left-0 top-0 h-full w-1/4 bg-white rounded-full"></div>
                  <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                </div>
                <Button variant="ghost" size="icon" className="text-white">
                  <Volume2 className="h-5 w-5" />
                </Button>
                <span className="text-xs ml-1">03:30</span>
              </div>
              <div className="mt-4 text-black">
                Click <span className="font-bold text-blue-800">Play</span> to view the animation.
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="bg-gray-800 text-white">
            <div className="flex items-center px-4 py-2">
              <div>
                <h2 className="text-xl font-bold flex items-center">
                  Class 8A | History <ChevronDown className="ml-1 h-4 w-4" />
                </h2>
                <p className="text-sm">3.2 | The British Land Revenue Polici...</p>
              </div>
              <div className="ml-auto">
                <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </div>

            <div className="flex overflow-x-auto scrollbar-hide">
              <div className="flex-shrink-0 w-28 h-24 hover-scale bg-blue-500 flex flex-col items-center justify-center p-2">
                <div className="mb-2">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="4" y1="9" x2="20" y2="9" />
                  </svg>
                </div>
                <span className="text-xs uppercase font-semibold">E-BOOKS</span>
              </div>

              <div className="flex-shrink-0 w-28 h-24 hover-scale bg-blue-600 flex flex-col items-center justify-center p-2 relative">
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-white">
                    <ChevronDown className="h-4 w-4 rotate-90" />
                  </Button>
                </div>
                <div className="mb-2 bg-blue-700 rounded-full px-2 py-1 text-xs">3.2</div>
                <span className="text-xs uppercase font-semibold">CONTENTS</span>
                <div className="absolute right-0 inset-y-0 flex items-center">
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-white">
                    <ChevronDown className="h-4 w-4 -rotate-90" />
                  </Button>
                </div>
              </div>

              <div className="flex-shrink-0 w-28 h-24 hover-scale bg-amber-800 flex flex-col items-center justify-center p-2 text-center">
                <div className="mb-1">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </div>
                <span className="text-xs font-semibold">Comparing Land Re venue Policies</span>
              </div>

              <div className="flex-shrink-0 w-28 h-24 hover-scale bg-blue-700 flex flex-col items-center justify-center p-2 text-center border-2 border-white">
                <div className="mb-1">
                  <Play className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold">What were the new revenue-collection...</span>
              </div>

              <div className="flex-shrink-0 w-28 h-24 hover-scale bg-gray-700 flex flex-col items-center justify-center p-2 text-center relative">
                <div className="absolute top-1 right-1 bg-gray-600 rounded-full p-1">
                  <Check className="h-3 w-3" />
                </div>
                <div className="mb-1">
                  <span className="text-xs font-mono bg-gray-600 px-1 rounded">a b c</span>
                </div>
                <span className="text-xs font-semibold">Exercise</span>
                <div className="absolute bottom-1 right-1">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div className="absolute bottom-1 left-1">
                  <X className="h-5 w-5" />
                </div>
              </div>

              <div className="flex-shrink-0 w-28 h-24 hover-scale bg-gray-700 flex flex-col items-center justify-center p-2 text-center relative">
                <div className="absolute top-1 right-1 bg-gray-600 rounded-full p-1">
                  <Check className="h-3 w-3" />
                </div>
                <div className="mb-1">
                  <span className="text-xs font-mono bg-gray-600 px-1 rounded">a b c</span>
                </div>
                <span className="text-xs font-semibold">Play Quiz</span>
                <div className="absolute bottom-1 right-1">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div className="absolute bottom-1 left-1">
                  <X className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar Tools */}
        <div className="w-16 bg-gray-800 flex flex-col items-center py-4 gap-4 tools-sidebar">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <MousePointer className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Select</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Maximize className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Maximize</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Square className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Rectangle</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Move className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Move</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Type className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Text</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="bg-yellow-500 text-black">
                  <Pen className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Draw</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Eraser className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Erase</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Link2 className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Link</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Search className="h-5 w-5" />
                  <span className="text-xs absolute bottom-0 right-0">100%</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Zoom</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <RotateCcw className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Undo</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <RotateCw className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Redo</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="bg-blue-500 text-white rounded-full">
                  <HelpCircle className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Help</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Accessibility Button */}
      <div className="absolute bottom-4 left-4">
        <Button variant="ghost" size="icon" className="bg-gray-800 text-white rounded-md">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        </Button>
      </div>

      {/* Resources Modal */}
      {showResources && (
        <div className="absolute bottom-20 right-20 bg-gray-900 rounded-lg shadow-lg overflow-hidden w-[500px]">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-medium">Add Resources</h3>
          </div>
          <div className="grid grid-cols-5 gap-2 p-4">
            <div className="flex flex-col items-center justify-center bg-black p-4 rounded-lg">
              <div className="bg-blue-600 rounded-full p-2 mb-2">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <span className="text-xs uppercase">CREATE</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-black p-4 rounded-lg">
              <div className="bg-blue-600 rounded-full p-2 mb-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="8" y1="6" x2="16" y2="6" />
                  <line x1="8" y1="10" x2="16" y2="10" />
                  <line x1="8" y1="14" x2="16" y2="14" />
                  <line x1="8" y1="18" x2="12" y2="18" />
                </svg>
              </div>
              <span className="text-xs uppercase">LIBRARY</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-black p-4 rounded-lg">
              <div className="bg-blue-600 rounded-full p-2 mb-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M20.4 14.5L16 10 4 20" />
                </svg>
              </div>
              <span className="text-xs uppercase">GALLERY</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-black p-4 rounded-lg">
              <div className="bg-blue-600 rounded-full p-2 mb-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M4 4l5 5" />
                  <path d="M4 20l5 -5" />
                  <path d="M20 4l-5 5" />
                  <path d="M20 20l-5 -5" />
                </svg>
              </div>
              <span className="text-xs uppercase">DROPIT</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-black p-4 rounded-lg">
              <div className="bg-blue-600 rounded-full p-2 mb-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <span className="text-xs uppercase">AI-ASSIST</span>
            </div>
          </div>
        </div>
      )}

      {/* Close Button for Modal */}
      {showResources && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-20 right-10 bg-gray-800 text-white rounded-full"
          onClick={() => setShowResources(false)}
        >
          <X className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

