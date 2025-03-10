"use client"

import { useState } from "react"
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

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex flex-col">
          <div className="font-bold text-2xl tracking-tighter">TATA</div>
          <div className="font-bold text-2xl tracking-tighter">class</div>
          <div className="font-bold text-2xl tracking-tighter">edge</div>
          <div className="text-xs mt-1">v.2.0.0</div>
        </div>
        <div className="text-right">
          <div className="text-xl font-medium">04:41 PM</div>
          <div className="text-sm">Mon, Mar 10</div>
          <div className="text-xs mt-1">v0.0.19</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 relative">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-white m-4 rounded-sm text-black relative">
            <div className="absolute inset-0 flex items-center justify-center">
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

            <div className="flex overflow-x-auto">
              <div className="flex-shrink-0 w-28 h-24 bg-blue-500 flex flex-col items-center justify-center p-2">
                <div className="mb-2">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="4" y1="9" x2="20" y2="9" />
                  </svg>
                </div>
                <span className="text-xs uppercase font-semibold">E-BOOKS</span>
              </div>

              <div className="flex-shrink-0 w-28 h-24 bg-blue-600 flex flex-col items-center justify-center p-2 relative">
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

              <div className="flex-shrink-0 w-28 h-24 bg-amber-800 flex flex-col items-center justify-center p-2 text-center">
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

              <div className="flex-shrink-0 w-28 h-24 bg-blue-700 flex flex-col items-center justify-center p-2 text-center border-2 border-white">
                <div className="mb-1">
                  <Play className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold">What were the new revenue-collection...</span>
              </div>

              <div className="flex-shrink-0 w-28 h-24 bg-gray-700 flex flex-col items-center justify-center p-2 text-center relative">
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

              <div className="flex-shrink-0 w-28 h-24 bg-gray-700 flex flex-col items-center justify-center p-2 text-center relative">
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
        <div className="w-16 bg-gray-800 flex flex-col items-center py-4 gap-4">
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

