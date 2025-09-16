"use client"

import { useState } from "react"
import { Clock, X } from "lucide-react"

export default function StoreHoursModal() {
  const [isOpen, setIsOpen] = useState(false)

  const storeHours = [
    { day: "شنبه", hours: "۹:۰۰ - ۱۸:۰۰", isToday: false },
    { day: "یکشنبه", hours: "۹:۰۰ - ۱۸:۰۰", isToday: true },
    { day: "دوشنبه", hours: "۹:۰۰ - ۱۸:۰۰", isToday: false },
    { day: "سه‌شنبه", hours: "۹:۰۰ - ۱۸:۰۰", isToday: false },
    { day: "چهارشنبه", hours: "۹:۰۰ - ۱۸:۰۰", isToday: false },
    { day: "پنج‌شنبه", hours: "۹:۰۰ - ۱۷:۰۰", isToday: false },
    { day: "جمعه", hours: "تعطیل", isToday: false },
  ]

  return (
    <>
      {/* Floating Clock Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="ساعات کاری"
        >
          <Clock className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
        </button>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-t-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent" />
              <div className="relative flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-1">ساعات کاری</h2>
                  <p className="text-orange-100 text-sm">دفتر مشاوره آباد پارسیان</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-3">
                {storeHours.map((item, index) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                      item.isToday ? "bg-orange-50 border border-orange-200" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <span className={`font-medium ${item.isToday ? "text-orange-700" : "text-gray-700"}`}>
                      {item.day}
                      {item.isToday && (
                        <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full mr-2">امروز</span>
                      )}
                    </span>
                    <span
                      className={`text-sm ${
                        item.hours === "تعطیل"
                          ? "text-red-500 font-medium"
                          : item.isToday
                            ? "text-orange-600 font-medium"
                            : "text-gray-600"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div
                className="mt-6 p-4 rounded-lg border"
                style={{ backgroundColor: "#0082c6", borderColor: "#0082c6" }}
              >
                <h3 className="font-semibold text-white mb-2">تماس فوری</h3>
                <p className="text-white/90 text-sm mb-2">برای مشاوره فوری می‌توانید با ما تماس بگیرید:</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">۰۲۱-۱۲۳۴۵۶۷۸</span>
                  <button
                    className="text-xs text-white px-3 py-1 rounded-full transition-colors"
                    style={{ backgroundColor: "#ED3237" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d12b30")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ED3237")}
                  >
                    تماس
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
