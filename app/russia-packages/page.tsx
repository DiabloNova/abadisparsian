import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import WhatsAppButton from "@/components/whatsapp-button"
import Link from "next/link"
import { CheckCircle, Users, GraduationCap, FileText, Plane, Phone, Mail } from "lucide-react"

export default function RussiaPackagesPage() {
  const packages = [
    {
      title: "پکیج برنز",
      price: "۱۹۹/۱۲",
      description: "مناسب برای دانشجویان مقطع کارشناسی",
      features: [
        "مشاوره تخصصی رایگان",
        "اخذ پذیرش از یک دانشگاه",
        "ترجمه رسمی مدارک",
        "راهنمایی برای اخذ ویزا",
        "پشتیبانی تا زمان ورود به دانشگاه",
      ],
      popular: false,
    },
    {
      title: "پکیج نقره‌ای",
      price: "۲۹۹/۱۲",
      description: "محبوب‌ترین پکیج برای دانشجویان",
      features: [
        "تمام خدمات پکیج برنز",
        "اخذ پذیرش از ۳ دانشگاه",
        "مشاوره انتخاب رشته و دانشگاه",
        "کمک در تهیه مدارک ویزا",
        "راهنمایی اسکان و اقامت",
        "پشتیبانی ۶ ماهه پس از ورود",
      ],
      popular: true,
    },
    {
      title: "پکیج طلایی",
      price: "۴۹۹/۱۲",
      description: "کامل‌ترین پکیج برای تحصیل در روسیه",
      features: [
        "تمام خدمات پکیج‌های قبلی",
        "اخذ پذیرش از ۵ دانشگاه برتر",
        "مشاوره تخصصی انتخاب شهر",
        "کمک کامل در اخذ ویزا",
        "تنظیم اسکان و پذیرایی در فرودگاه",
        "پشتیبانی کامل تا پایان تحصیل",
        "کلاس‌های آمادگی زبان روسی",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-fanavari">پکیج های تحصیلی روسیه</h1>
            <p className="text-xl text-blue-100 mb-8 font-ibm-regular">
              بهترین پکیج های مشاوره و اخذ پذیرش برای تحصیل در دانشگاه های معتبر روسیه
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton className="px-8 py-3">مشاوره رایگان</WhatsAppButton>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 bg-white/10 border-white text-white hover:bg-white hover:text-blue-600 font-fanavari"
                >
                  بازگشت به صفحه اصلی
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-fanavari">انتخاب پکیج مناسب خود</h2>
            <p className="text-gray-600 font-ibm-regular">پکیج های متنوع ما برای هر نیاز و بودجه طراحی شده اند</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "ring-2 ring-blue-600 scale-105" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-fanavari">
                      محبوب ترین
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-800 font-fanavari">{pkg.title}</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 my-4">{pkg.price}</div>
                  <p className="text-gray-600 font-ibm-regular">{pkg.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 ml-2 flex-shrink-0" />
                        <span className="text-gray-700 font-ibm-regular text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <WhatsAppButton
                      className="w-full"
                      message={`سلام، برای اطلاعات بیشتر در مورد ${pkg.title} با شما تماس گرفتم`}
                    >
                      انتخاب این پکیج
                    </WhatsAppButton>
                    <Button variant="outline" className="w-full font-fanavari bg-transparent">
                      مقایسه پکیج ها
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-fanavari">چرا آبادیس پارسیان؟</h2>
            <p className="text-gray-600 font-ibm-regular">مزایای همکاری با ما برای تحصیل در روسیه</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-fanavari">+۱۰ سال تجربه</h3>
              <p className="text-gray-600 text-sm font-ibm-regular">بیش از یک دهه تجربه در اعزام دانشجو به روسیه</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-fanavari">۱۰۰٪ موفقیت</h3>
              <p className="text-gray-600 text-sm font-ibm-regular">تضمین اخذ پذیرش از دانشگاه های معتبر روسیه</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-fanavari">مدارک معتبر</h3>
              <p className="text-gray-600 text-sm font-ibm-regular">
                مدارک تحصیلی معتبر بین المللی و قابل تایید در ایران
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-fanavari">پشتیبانی کامل</h3>
              <p className="text-gray-600 text-sm font-ibm-regular">همراهی از ابتدا تا پایان تحصیل در روسیه</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-fanavari">آماده شروع سفر تحصیلی خود هستید؟</h2>
          <p className="text-blue-100 mb-8 font-ibm-regular max-w-2xl mx-auto">
            همین امروز با مشاوران ما تماس بگیرید و اولین قدم را برای تحصیل در روسیه بردارید
          </p>
          <WhatsAppButton className="px-8 py-3 text-lg">شروع مشاوره رایگان</WhatsAppButton>
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
              <h4 className="font-semibold mb-4 font-fanavari">پکیج ها</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white font-fanavari">
                    پکیج برنز
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-fanavari">
                    پکیج نقره‌ای
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-fanavari">
                    پکیج طلایی
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
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="font-fanavari">info@abadisparsian.com</span>
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
