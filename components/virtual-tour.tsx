"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Maximize2, Minimize2, ExternalLink } from "lucide-react"

export default function VirtualTour() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className="w-full">
      <Card className="overflow-hidden shadow-lg">
        <CardContent className="p-0">
          {/* Tour Header */}
          <div
            className="p-4 text-white relative"
            style={{
              background: "linear-gradient(to right, #2563eb, #9333ea)",
              backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
              backgroundColor: "#2563eb",
            }}
          >
            <div className="flex items-center justify-between relative z-10">
              <div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "#ffffff !important", textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                >
                  تور مجازی ۳۶۰ درجه
                </h3>
                <p className="text-sm" style={{ color: "#dbeafe !important", textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
                  دانشگاه اقتصاد عالی مسکو (HSE)
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleFullscreen}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <a href="https://virtualtourcompany.co.uk/HSE/index.html" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Virtual Tour Iframe */}
          <div className={`relative bg-gray-100 ${isFullscreen ? "fixed inset-0 z-50" : ""}`}>
            {isFullscreen && (
              <div className="absolute top-4 right-4 z-10">
                <Button variant="outline" size="sm" onClick={toggleFullscreen} className="bg-white/90 hover:bg-white">
                  <Minimize2 className="w-4 h-4" />
                </Button>
              </div>
            )}

            <iframe
              src="https://virtualtourcompany.co.uk/HSE/index.html"
              className={`w-full border-0 ${isFullscreen ? "h-screen" : "h-96 md:h-[500px]"}`}
              title="HSE University Virtual Tour"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Tour Description */}
          <div className="p-6 bg-white">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">درباره دانشگاه HSE</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  دانشگاه اقتصاد عالی مسکو یکی از معتبرترین دانشگاه های روسیه در زمینه علوم اقتصادی، مدیریت و علوم
                  اجتماعی است. این دانشگاه با امکانات مدرن و کیفیت آموزشی بالا، محیطی ایده آل برای تحصیل فراهم می کند.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">امکانات دانشگاه</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• کتابخانه مدرن با منابع غنی</li>
                  <li>• آزمایشگاه های پیشرفته</li>
                  <li>• خوابگاه های مجهز</li>
                  <li>• مراکز ورزشی و تفریحی</li>
                  <li>• محیط بین المللی</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="text-white"
                  style={{ backgroundColor: "#0082c6" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#006ba3")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0082c6")}
                >
                  درخواست مشاوره برای HSE
                </Button>
                <Button variant="outline">اطلاعات بیشتر درباره دانشگاه</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
