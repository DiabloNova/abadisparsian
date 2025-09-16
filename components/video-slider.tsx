"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoSliderProps {
  videos: {
    src: string
    title?: string
  }[]
}

export default function VideoSlider({ videos }: VideoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
    setIsPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
    setIsPlaying(false)
  }

  const togglePlay = (videoElement: HTMLVideoElement) => {
    if (isPlaying) {
      videoElement.pause()
    } else {
      videoElement.play()
    }
    setIsPlaying(!isPlaying)
  }

  const currentVideo = videos[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg border">
        {/* Video/Text toggle header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex gap-6">
            <span className="text-base font-medium text-gray-900 font-fanavari">ویدیو</span>
            <span className="text-base text-gray-500 font-fanavari">متن</span>
          </div>
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">★</span>
          </div>
        </div>

        {/* Video container - full size */}
        <div className="relative aspect-[9/16] md:aspect-video bg-gray-100">
          <video
            key={currentIndex} // Added key prop to force re-render when video changes
            className="w-full h-full object-cover"
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onClick={(e) => togglePlay(e.currentTarget)}
          >
            <source src={currentVideo.src} type="video/mp4" />
            مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
          </video>

          {/* Play button overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 text-gray-800 ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Video title/name */}
        <div className="p-4">
          <p className="text-lg font-medium text-gray-900 font-fanavari text-center">
            {currentVideo.title || `تجربه دانشجو ${currentIndex + 1}`}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      {videos.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white z-10 w-12 h-12"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white z-10 w-12 h-12"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </>
      )}

      {/* Video counter and dots */}
      <div className="flex flex-col items-center mt-6 gap-4">
        <div className="text-sm text-gray-600 font-fanavari">
          {currentIndex + 1} از {videos.length}
        </div>
        <div className="flex justify-center gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsPlaying(false)
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#0082C6]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
