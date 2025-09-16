"use client"

import { useEffect, useRef } from "react"

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation variables
    const lines: Array<{
      x: number
      y: number
      dx: number
      dy: number
      color: string
      length: number
      angle: number
      speed: number
    }> = []

    const colors = [
      "rgba(237, 50, 55, 0.1)", // Brand Orange
      "rgba(0, 130, 198, 0.1)", // Brand Blue
      "rgba(55, 52, 53, 0.05)", // Brand Text (very light)
      "rgba(237, 50, 55, 0.08)", // Brand Orange (lighter)
      "rgba(0, 130, 198, 0.08)", // Brand Blue (lighter)
      "rgba(55, 52, 53, 0.03)", // Brand Text (very very light)
    ]

    // Create lines
    for (let i = 0; i < 15; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        length: Math.random() * 200 + 100,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      lines.forEach((line) => {
        // Update position
        line.x += line.dx
        line.y += line.dy
        line.angle += line.speed

        // Bounce off edges
        if (line.x < 0 || line.x > canvas.width) line.dx *= -1
        if (line.y < 0 || line.y > canvas.height) line.dy *= -1

        // Draw line
        ctx.save()
        ctx.translate(line.x, line.y)
        ctx.rotate(line.angle)

        const gradient = ctx.createLinearGradient(-line.length / 2, 0, line.length / 2, 0)
        gradient.addColorStop(0, "transparent")
        gradient.addColorStop(0.5, line.color)
        gradient.addColorStop(1, "transparent")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.lineCap = "round"

        ctx.beginPath()
        ctx.moveTo(-line.length / 2, 0)
        ctx.lineTo(line.length / 2, 0)
        ctx.stroke()

        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
