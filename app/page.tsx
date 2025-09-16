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
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <img src="/logo.png" alt="آبادیس پارسیان" className="h-6 object-contain brightness-0 invert" />
              </div>
              <p className="text-gray-400 text-sm mb-4 font-fanavari">مشاوره تخصصی تحصیل در روسیه</p>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <a href="https://GitHub.com/DiabloNova" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer">
                    <path
                      d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-fanavari">خدمات</h4>
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
              <h4 className="font-semibold mb-4 font-fanavari">دانشگاه ها</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/universities" className="hover:text-white font-fanavari">
                    دانشگاه های مورد تأیید وزارت علوم
                  </Link>
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
              <h4 className="font-semibold mb-4 font-fanavari">تماس با ما</h4>
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
