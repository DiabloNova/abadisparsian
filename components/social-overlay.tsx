import { MessageCircle, Instagram } from "lucide-react"

export default function SocialOverlay() {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-3">
      {/* Instagram Button */}
      <a
        href="https://instagram.com/abadisparsian"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="دنبال کردن در اینستاگرام"
      >
        <Instagram className="h-6 w-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/79267806667"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl"
        aria-label="تماس از طریق واتساپ"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}
