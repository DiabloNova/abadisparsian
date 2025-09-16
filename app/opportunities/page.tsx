import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import {
  Calendar,
  DollarSign,
  MapPin,
  GraduationCap,
  Clock,
  Users,
  BookOpen,
  Award,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react"

export default function OpportunitiesPage() {
  const opportunities = [
    {
      id: 1,
      title: "بورسیه تحصیلی دولت روسیه",
      description: "بورسیه کامل برای تحصیل در بهترین دانشگاه‌های روسیه",
      level: "کارشناسی، کارشناسی ارشد، دکتری",
      deadline: "۱۵ اسفند ۱۴۰۳",
      cost: "رایگان + هزینه زندگی",
      location: "تمام شهرهای روسیه",
      requirements: ["معدل بالای ۱۷", "مدرک زبان روسی یا انگلیسی", "انگیزه‌نامه"],
      badge: "ویژه",
      badgeColor: "bg-red-500",
    },
    {
      id: 2,
      title: "پذیرش بدون آزمون ورودی",
      description: "امکان پذیرش مستقیم در دانشگاه‌های منتخب",
      level: "کارشناسی",
      deadline: "۳۰ تیر ۱۴۰۴",
      cost: "$3,000 - $5,000",
      location: "مسکو، سن پترزبورگ",
      requirements: ["دیپلم", "معدل بالای ۱۶", "مدرک زبان"],
      badge: null,
      badgeColor: "",
    },
    {
      id: 3,
      title: "برنامه تبادل دانشجویی",
      description: "یک ترم تحصیل در روسیه با امکان انتقال واحد",
      level: "کارشناسی ارشد",
      deadline: "۱۰ مهر ۱۴۰۳",
      cost: "$2,500",
      location: "کازان، نووسیبیرسک",
      requirements: ["دانشجوی فعال", "معدل بالای ۱۶", "توصیه‌نامه"],
      badge: null,
      badgeColor: "",
    },
    {
      id: 4,
      title: "دوره‌های کوتاه‌مدت تابستانی",
      description: "دوره‌های تخصصی ۲ ماهه در تابستان",
      level: "همه سطوح",
      deadline: "۱۵ اردیبهشت ۱۴۰۴",
      cost: "$1,500",
      location: "مسکو",
      requirements: ["علاقه به یادگیری", "سطح پایه زبان انگلیسی"],
      badge: null,
      badgeColor: "",
    },
    {
      id: 5,
      title: "بورسیه تحقیقاتی",
      description: "فرصت تحقیق در آزمایشگاه‌های پیشرفته روسیه",
      level: "دکتری، پسادکتری",
      deadline: "۲۰ بهمن ۱۴۰۳",
      cost: "$4,000 + هزینه تحقیق",
      location: "مسکو، سن پترزبورگ",
      requirements: ["سابقه تحقیق", "انتشارات علمی", "پروپوزال تحقیق"],
      badge: "ویژه",
      badgeColor: "bg-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-fanavari-bold">فرصت‌های تحصیلی ویژه</h1>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-fanavari">
            آخرین فرصت‌های تحصیلی و بورسیه‌های موجود در روسیه
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8 shadow-lg font-fanavari">
              مشاوره رایگان
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm shadow-lg font-fanavari"
            >
              تماس با ما
            </Button>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-fanavari-bold">فرصت‌های تحصیلی موجود</h2>
            <p className="text-gray-600 font-fanavari">بهترین فرصت‌ها برای تحصیل در دانشگاه‌های معتبر روسیه</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {opportunities.map((opportunity) => (
              <Card
                key={opportunity.id}
                className="p-0 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 z-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clideo_editor_53e444debb3d4f77ba20ce2eac9805e4-KgDLq6aKkKaHVz7zKzxJ1xpYejWHOt.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-blue-800/80"></div>
                </div>

                {opportunity.badge && (
                  <Badge
                    className={`absolute top-4 right-4 z-20 ${opportunity.badgeColor} text-white font-fanavari shadow-lg`}
                  >
                    {opportunity.badge}
                  </Badge>
                )}

                <CardContent className="p-6 relative z-10">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 font-fanavari-bold drop-shadow-lg">
                      {opportunity.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-3 font-fanavari drop-shadow-md">{opportunity.description}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap className="w-4 h-4 text-blue-300" />
                      <span className="text-sm text-white/90 font-fanavari">{opportunity.level}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-red-400" />
                      <div>
                        <span className="text-sm font-semibold text-white font-fanavari-bold">مهلت ثبت‌نام</span>
                        <p className="text-sm text-white/90 font-fanavari">{opportunity.deadline}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <div>
                        <span className="text-sm font-semibold text-white font-fanavari-bold">هزینه</span>
                        <p className="text-sm text-white/90 font-fanavari">{opportunity.cost}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <div>
                        <span className="text-sm font-semibold text-white font-fanavari-bold">مکان</span>
                        <p className="text-sm text-white/90 font-fanavari">{opportunity.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2 font-fanavari-bold">شرایط</h4>
                    <ul className="space-y-1">
                      {opportunity.requirements.map((req, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                          <span className="text-sm text-white/90 font-fanavari">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 font-fanavari shadow-lg backdrop-blur-sm border border-orange-400/30">
                    درخواست مشاوره
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 font-fanavari-bold">۱۲۰۰+</h3>
              <p className="text-gray-600 text-sm font-fanavari">دانشجوی موفق</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 font-fanavari-bold">۵۰+</h3>
              <p className="text-gray-600 text-sm font-fanavari">دانشگاه همکار</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 font-fanavari-bold">۹۵%</h3>
              <p className="text-gray-600 text-sm font-fanavari">نرخ موفقیت</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 font-fanavari-bold">۱۰+</h3>
              <p className="text-gray-600 text-sm font-fanavari">سال تجربه</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-fanavari-bold">آماده شروع هستید؟</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto font-fanavari">
            همین امروز با ما تماس بگیرید و اولین قدم را برای تحصیل در روسیه بردارید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8 shadow-lg font-fanavari">
              مشاوره رایگان
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 bg-white/10 border-white text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm shadow-lg font-fanavari"
            >
              دانلود کاتالوگ
            </Button>
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
