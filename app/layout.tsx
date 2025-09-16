import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import BackgroundAnimation from "@/components/background-animation"
import SocialOverlay from "@/components/social-overlay"
import "./globals.css"

const fanavari = localFont({
  src: "../public/fonts/Fanavari-Bold.ttf",
  variable: "--font-fanavari",
  display: "swap",
})

const ibmPlexArabicThin = localFont({
  src: "../public/fonts/IBMPlexSansArabic-Thin.ttf",
  variable: "--font-ibm-plex-arabic-thin",
  display: "swap",
})

const ibmPlexArabicLight = localFont({
  src: "../public/fonts/IBMPlexSansArabic-Light.ttf",
  variable: "--font-ibm-plex-arabic-light",
  display: "swap",
})

const ibmPlexArabicRegular = localFont({
  src: "../public/fonts/IBMPlexSansArabic-Regular.ttf",
  variable: "--font-ibm-plex-arabic-regular",
  display: "swap",
})

const ibmPlexArabicMedium = localFont({
  src: "../public/fonts/IBMPlexSansArabic-Medium.ttf",
  variable: "--font-ibm-plex-arabic-medium",
  display: "swap",
})

const ibmPlexArabicSemiBold = localFont({
  src: "../public/fonts/IBMPlexSansArabic-SemiBold.ttf",
  variable: "--font-ibm-plex-arabic-semibold",
  display: "swap",
})

const ibmPlexArabicBold = localFont({
  src: "../public/fonts/IBMPlexSansArabic-Bold.ttf",
  variable: "--font-ibm-plex-arabic-bold",
  display: "swap",
})

const vipnagor = localFont({
  src: "../public/fonts/VIPNAGOR.ttf",
  variable: "--font-vipnagor",
  display: "swap",
})

export const metadata: Metadata = {
  title: "تحصیل آسان در دانشگاه های روسیه - آبادیس پارسیان",
  description: "راهنمای کامل تحصیل در دانشگاه های روسیه - مشاوره تحصیلی و اخذ پذیرش",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vipnagor.variable} ${fanavari.variable} ${ibmPlexArabicThin.variable} ${ibmPlexArabicLight.variable} ${ibmPlexArabicRegular.variable} ${ibmPlexArabicMedium.variable} ${ibmPlexArabicSemiBold.variable} ${ibmPlexArabicBold.variable} font-sans`}
      >
        <BackgroundAnimation />
        <div className="relative z-10">
          <Suspense fallback={null}>{children}</Suspense>
        </div>
        <SocialOverlay />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
