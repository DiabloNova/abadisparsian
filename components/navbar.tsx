"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, Sun, Moon, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isUniversityMenuOpen, setIsUniversityMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const toggleTheme = () => {
    setIsDark(!isDark)
    // Add theme toggle logic here
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Hamburger Menu */}
          <div className="flex items-center space-x-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  {/* Menu Header */}
                  <div className="p-6 border-b">
                    <div className="flex items-center space-x-3">
                      <img src="/logo.png" alt="آبادیس پارسیان لوگو" className="w-10 h-10 object-contain" />
                      <h2 className="text-lg font-fanavari text-gray-800">آبادیس پارسیان</h2>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="flex-1 p-4 space-y-2">
                    <Link
                      href="/"
                      className="block p-3 rounded-lg hover:bg-gray-100 text-gray-700 font-ibm-regular transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      صفحه اصلی
                    </Link>

                    <Link
                      href="/submit-info"
                      className="block p-3 rounded-lg hover:bg-gray-100 text-gray-700 font-ibm-regular transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      ثبت اطلاعات آنلاین
                    </Link>

                    {/* Universities Menu with Submenu */}
                    <div>
                      <button
                        onClick={() => setIsUniversityMenuOpen(!isUniversityMenuOpen)}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 text-gray-700 font-ibm-regular transition-colors"
                      >
                        <span>فهرست دانشگاه های روسیه</span>
                        {isUniversityMenuOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {isUniversityMenuOpen && (
                        <div className="mr-4 mt-2 space-y-1">
                          <Link
                            href="/universities"
                            className="block p-2 rounded-lg hover:bg-gray-50 text-gray-600 font-ibm-regular text-sm transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            دانشگاه های مورد تایید وزارت علوم
                          </Link>
                          <a
                            href="#"
                            className="block p-2 rounded-lg hover:bg-gray-50 text-gray-600 font-ibm-regular text-sm transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            دانشگاه های مورد تایید وزارت بهداشت
                          </a>
                          <a
                            href="#"
                            className="block p-2 rounded-lg hover:bg-gray-50 text-gray-600 font-ibm-regular text-sm transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            سایر دانشگاه ها
                          </a>
                        </div>
                      )}
                    </div>

                    <Link
                      href="/opportunities"
                      className="block p-3 rounded-lg hover:bg-gray-100 text-gray-700 font-ibm-regular transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      فرصت های تحصیلی ویژه
                    </Link>

                    <a
                      href="#"
                      className="block p-3 rounded-lg hover:bg-gray-100 text-gray-700 font-ibm-regular transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      مرکز دانش
                    </a>

                    <Link
                      href="/blog"
                      className="block p-3 rounded-lg hover:bg-gray-100 text-gray-700 font-ibm-regular transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      مجله آبادیس
                    </Link>
                  </div>

                  {/* Bottom Buttons */}
                  <div className="p-4 border-t">
                    <div className="grid grid-cols-2 gap-3">
                      <Link href="/about">
                        <Button
                          variant="outline"
                          className="font-fanavari bg-transparent w-full"
                          onClick={() => setIsOpen(false)}
                        >
                          درباره ما
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button
                          variant="outline"
                          className="font-fanavari bg-transparent w-full"
                          onClick={() => setIsOpen(false)}
                        >
                          تماس با ما
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <img src="/logo.png" alt="آبادیس پارسیان لوگو" className="w-12 h-12 object-contain" />
                {isHomePage && <h1 className="text-xl font-fanavari text-gray-800">آبادیس پارسیان</h1>}
              </Link>
            </div>
          </div>

          {/* Right side: Theme, Search, and Auth buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button variant="ghost" size="sm" className="p-2" onClick={toggleTheme}>
              {isDark ? <Sun className="w-5 h-5 text-gray-600" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </Button>

            {/* Search Icon */}
            <Button variant="ghost" size="sm" className="p-2">
              <Search className="w-5 h-5 text-gray-600" />
            </Button>

            {/* Auth Buttons */}
            <Link href="/online-registration">
              <Button
                size="sm"
                className="font-ibm-regular"
                style={{ backgroundColor: "#ED3237" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d12b30")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ED3237")}
              >
                ثبت نام آنلاین
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
