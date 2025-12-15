import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import VirtualTour from "@/components/virtual-tour"
import AnimatedUniversityButton from "@/components/animated-university-button"
import Navbar from "@/components/navbar"
import Link from "next/link"
import AnimatedSocialIcons from "@/components/animated-social-icons"
import Timeline from "@/components/timeline"
import VideoSlider from "@/components/video-slider"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
  Users,
  GraduationCap,
  Star,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

export const metadata: Metadata = {
  title: "تحصیل در روسیه با آبادیس پارسیان | مشاوره تخصصی و پذیرش تضمینی",
  description:
    "آبادیس پارسیان با بیش از ۱۰ سال سابقه، ارائه دهنده خدمات مشاوره تحصیلی و اخذ پذیرش از دانشگاه های معتبر روسیه. تحصیل آسان با بهترین هزینه.",
  keywords: [
    "تحصیل در روسیه",
    "دانشگاه های روسیه",
    "مهاجرت تحصیلی به روسیه",
    "پذیرش تحصیلی روسیه",
    "آبادیس پارسیان",
  ],
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1477598_Education_People_1280x720-Asflir2O8d45FuWAfcjN008CXsgF2O.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg font-fanavari">
            تحصیل آسان در دانشگاه های روسیه
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed text-shadow font-ibm-regular">
            تیم پارسیان با بیش از ۱۰ سال تجربه در زمینه مشاوره تحصیلی و اخذ پذیرش از دانشگاه های معتبر روسیه، تخصص لازم
            برای موفقیت شما را دارد
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 shadow-lg font-fanavari">
              مشاوره رایگان
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 bg-white/90 border-white text-gray-800 hover:bg-white hover:text-gray-900 backdrop-blur-sm shadow-lg font-fanavari"
            >
              بیشتر بخوانید
            </Button>
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-fanavari">دانشگاه های برتر روسیه</h2>
            <p className="text-gray-600 font-ibm-regular">دانشگاه های معتبر روسیه که با آن ها همکاری داریم</p>
          </div>

          <div className="mb-16">
            <VirtualTour />
          </div>

          <div className="flex justify-center">
            <AnimatedUniversityButton />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-ibm-semibold">مشاوره تخصصی</h3>
              <p className="text-gray-600 text-sm font-ibm-regular">مشاوره کامل برای انتخاب رشته و دانشگاه مناسب</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-ibm-semibold">پذیرش تضمینی</h3>
              <p className="text-gray-600 text-sm font-ibm-regular">تضمین اخذ پذیرش از دانشگاه های معتبر روسیه</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-ibm-semibold">مدرک تخصصی</h3>
              <p className="text-gray-600 text-sm font-ibm-regular">
                دریافت مدرک معتبر بین المللی از دانشگاه های روسیه
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-fanavari">ما را در شبکه های اجتماعی دنبال کنید</h2>
          <p className="text-blue-100 mb-8 font-ibm-regular">برای دریافت آخرین اخبار و اطلاعات تحصیلی</p>
          <AnimatedSocialIcons />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-fanavari">مراحل اخذ پذیرش به زبان ساده</h2>
            <p className="text-gray-600 font-ibm-regular">جزئیات کامل فرآیند اخذ پذیرش از دانشگاه های روسیه</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-fanavari">پکیج ویژه</h2>
            <p className="text-gray-600 font-ibm-regular">بهترین پکیج های ما برای تحصیل در روسیه</p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="p-6 text-center">
              <CardContent>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-800 mb-2">۲۹۹/۱۲</div>
                  <p className="text-gray-600 font-ibm-regular">پکیج کامل تحصیل در روسیه</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-ibm-regular">مشاوره تخصصی</span>
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-ibm-regular">اخذ پذیرش</span>
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-ibm-regular">ترجمه مدارک</span>
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-ibm-regular">پشتیبانی ۲۴/۷</span>
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                </div>

                <div className="flex gap-2">
                  <WhatsAppButton className="flex-1">درخواست مشاوره</WhatsAppButton>
                  <Link href="/russia-packages">
                    <Button variant="outline" className="flex-1 bg-transparent font-fanavari">
                      اطلاعات بیشتر
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-fanavari">تجربیات دانشجویان</h2>
            <p className="text-gray-600 font-ibm-regular">
              ویدیوهای تجربیات واقعی دانشجویانی که با ما به روسیه رفته اند
            </p>
          </div>

          <VideoSlider
            videos={[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%94%BB%F0%9F%94%BB%F0%9F%94%BB%F0%9F%94%BB%F0%9F%94%BB%F0%9F%94%BB%E2%96%AA%EF%B8%8F%D8%A8%D8%A7%20%D8%A7%D9%86%D8%AA%D8%AE%D8%A7%D8%A8%20%DB%8C%DA%A9%20%D9%85%D9%88%D8%B3%D8%B3%D9%87_%DB%8C%20%D8%A7%D8%B9%D8%B2%D8%A7%D9%85%20%D8%AF%D8%A7%D9%86%D8%B4%D8%AC%D9%88%DB%8C%20%D9%85%D8%B9%D8%AA%D8%A8%D8%B1%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%BE%D8%B0%DB%8C%D8%B1%D8%B4%20%D8%AA%D8%AD%D8%B5%DB%8C%D9%84%DB%8C%20%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87%20%D8%AF%D8%B1%20%D8%AE%D8%A7%D8%B1%D8%AC%20%D8%A7%D8%B2%20%DA%A9%D8%B4%D9%88%D8%B1-owURfbTPcqILBTsNgFKFN5WdmX6Cqm.mp4",
                title: "تجربه دانشجویی - ویدیو اول",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%94%BB%F0%9F%94%BB%F0%9F%94%BB%F0%9F%94%BB%F0%9F%94%BB%F0%9F%94%BB%E2%96%AA%EF%B8%8F%D8%A8%D8%A7%20%D8%A7%D9%86%D8%AA%D8%AE%D8%A7%D8%A8%20%DB%8C%DA%A9%20%D9%85%D9%88%D8%B3%D8%B3%D9%87_%DB%8C%20%D8%A7%D8%B9%D8%B2%D8%A7%D9%85%20%D8%AF%D8%A7%D9%86%D8%B4%D8%AC%D9%88%DB%8C%20%D9%85%D8%B9%D8%AA%D8%A8%D8%B1%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%BE%D8%B0%DB%8C%D8%B1%D8%B4%20%D8%AA%D8%AD%D8%B5%DB%8C%D9%84%DB%8C%20%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87%20%D8%AF%D8%B1%20%D8%AE%D8%A7%D8%B1%D8%AC%20%D8%A7%D8%B2%20%DA%A9%D8%B4%D9%88%D8%B1%20%281%29-tqcGY4TtTyeRDBrEeARUJ5CBPbp7n5.mp4",
                title: "تجربه دانشجویی - ویدیو دوم",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%94%BB%F0%9F%94%BB%F0%9F%94%BB%F0%9F%94%BB%F0%9F%94%BB%F0%9F%94%BB%E2%96%AB%EF%B8%8F%D8%A7%D8%B2%20%D8%A7%DB%8C%D9%86%DA%A9%D9%87%20%D8%AF%D9%88%20%D9%86%D9%81%D8%B1%20%D8%A7%D8%B2%20%D8%B9%D8%B2%DB%8C%D8%B2%D8%A7%D9%86%20%D8%A8%D9%88%D8%B4%D9%87%D8%B1%DB%8C%20%D8%A8%D9%87%20%D9%88%D8%A7%D8%B3%D8%B7%D9%87%20%D9%85%D8%B9%D8%B1%D9%81%DB%8C%20%DA%A9%D9%84%D8%A7%DB%8C%D9%86%D8%AA_%D9%87%D8%A7%DB%8C%20%D9%82%D8%A8%D9%84%DB%8C%20%D8%A8%D9%87%20%D9%85%D8%B1%DA%A9%D8%B2%20%D9%85%D8%A7%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D9%87%20-Hf0VyE4SP1O2tfzqq5BojpWYHMUFcU.mp4",
                title: "تجربه دانشجویی - ویدیو سوم",
              },
            ]}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
