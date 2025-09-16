import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-fanavari-bold">تماس با ما</h1>
          <p className="text-gray-600 font-fanavari">برای دریافت مشاوره رایگان با ما در تماس باشید</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <CardContent>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 font-fanavari-bold">اطلاعات تماس</h2>

                  <div className="space-y-6">
                    <div className="flex items-center p-4 rounded-lg" style={{ backgroundColor: "#0082c6" }}>
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                        style={{ backgroundColor: "#006ba3" }}
                      >
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white font-fanavari-bold">تلفن</h3>
                        <div className="text-white/90 font-fanavari">
                          <p>09307080740</p>
                          <p>021887555674</p>
                          <p>02188708588</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-green-50 rounded-lg">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 font-fanavari-bold">ایمیل</h3>
                        <p className="text-gray-600 font-fanavari">info@abadisparsian.com</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 font-fanavari-bold">آدرس</h3>
                        <p className="text-gray-600 font-fanavari">
                          تهران - یوسف آباد - خیابان عبدالمجید اکبری - برج سپهر ساعی - طبقه دهم واحد ۱۰۰۴
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 font-fanavari-bold">ساعات کاری</h3>
                        <p className="text-gray-600 font-fanavari">شنبه تا پنج‌شنبه: ۹ تا ۱۸</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Free Consultation Section */}
              <Card className="p-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardContent>
                  <div className="text-center">
                    <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-90" />
                    <h3 className="text-2xl font-bold mb-4 font-fanavari-bold">مشاوره رایگان</h3>
                    <p className="mb-6 font-fanavari">
                      برای دریافت مشاوره رایگان و بررسی شرایط پذیرش، همین الان با ما تماس بگیرید.
                    </p>
                    <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-fanavari">
                      تماس فوری
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6">
              <CardContent>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 font-fanavari-bold">ارسال پیام</h2>
                <p className="text-gray-600 mb-6 font-fanavari">پیام خود را برای ما ارسال کنید</p>

                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-fanavari">
                      نام و نام خانوادگی
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      className="mt-1 font-fanavari"
                      placeholder="نام کامل خود را وارد کنید"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-fanavari">
                      ایمیل
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="mt-1 font-fanavari"
                      placeholder="آدرس ایمیل خود را وارد کنید"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="font-fanavari">
                      شماره تماس
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="mt-1 font-fanavari"
                      placeholder="شماره تماس خود را وارد کنید"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="font-fanavari">
                      موضوع
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 font-fanavari">
                        <SelectValue placeholder="انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation" className="font-fanavari">
                          مشاوره تحصیلی
                        </SelectItem>
                        <SelectItem value="admission" className="font-fanavari">
                          ثبت نام
                        </SelectItem>
                        <SelectItem value="visa" className="font-fanavari">
                          ویزا
                        </SelectItem>
                        <SelectItem value="other" className="font-fanavari">
                          سایر
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-fanavari">
                      پیام
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      className="mt-1 font-fanavari"
                      placeholder="پیام خود را اینجا بنویسید..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 font-fanavari" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    ارسال پیام
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <img src="/title-logo.png" alt="آبادیس پارسیان" className="h-6 object-contain brightness-0 invert" />
              </div>
              <p className="text-gray-400 text-sm mb-4 font-fanavari">مشاوره تخصصی تحصیل در روسیه</p>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-fanavari-bold">خدمات</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white font-fanavari">
                    مشاوره تحصیلی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-fanavari">
                    اخذ پذیرش
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-fanavari">
                    ترجمه مدارک
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-fanavari">
                    اخذ ویزا
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-fanavari-bold">دانشگاه ها</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/universities" className="hover:text-white font-fanavari">
                    دانشگاه های مورد تأیید وزارت علوم
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-fanavari">
                    فهرست کامل دانشگاه های روسیه
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-fanavari">
                    سایر دانشگاه ها
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-fanavari-bold">تماس با ما</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <div className="font-fanavari">
                    <p>09307080740</p>
                    <p>021887555674</p>
                    <p>02188708588</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="font-fanavari">info@abadisparsian.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="font-fanavari">
                    تهران - یوسف آباد - خیابان عبدالمجید اکبری - برج سپهر ساعی - طبقه دهم واحد ۱۰۰۴
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p className="font-fanavari">&copy; ۱۴۰۳ آبادیس پارسیان. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
