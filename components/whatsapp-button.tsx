"use client"

import type React from "react"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  className?: string
  children?: React.ReactNode
}

export default function WhatsAppButton({
  phoneNumber = "989307080740",
  message = "سلام، برای مشاوره تحصیلی با شما تماس گرفتم",
  className = "",
  children,
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white font-fanavari ${className}`}
    >
      {children || (
        <>
          <MessageCircle className="w-4 h-4 ml-2" />
          درخواست مشاوره
        </>
      )}
    </Button>
  )
}
