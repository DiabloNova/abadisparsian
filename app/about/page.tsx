import { Globe, Heart, Users, User, Building2 } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">درباره آبادیس پارسیان</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              پیشرو در ارائه خدمات تحصیلی و اخذ پذیرش از دانشگاه های روسیه
            </p>
          </div>

          {/* CEO Message Section */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-right">
                <div className="flex items-center justify-end gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">پیام مدیر عامل</h2>
                    <p className="text-orange-500 font-medium">آبادیس پارسیان</p>
                  </div>
                  <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    09
                  </div>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    شرکت آبادیس پارسیان با بیش از یک دهه تجربه در زمینه ارائه خدمات تحصیلی، افتخار همکاری با معتبرترین
                    دانشگاه‌های روسیه را دارد. ما با درک عمیق از نیازهای دانشجویان ایرانی و شناخت کامل از سیستم آموزشی
                    روسیه، مسیری هموار برای تحصیل در این کشور فراهم می‌کنیم.
                  </p>
                  <p>
                    هدف ما ایجاد پلی مطمئن میان دانشجویان ایرانی و فرصت‌های تحصیلی بی‌نظیر در روسیه است. با تیمی متخصص و
                    مجرب، از ابتدای مسیر تا اتمام تحصیلات، در کنار شما خواهیم بود.
                  </p>
                </div>
              </div>
              <div className="lg:w-80">
                <Image
                  src="/professional-woman-red-blazer-office.jpeg"
                  alt="مدیر عامل آبادیس پارسیان - مشاوره تحصیل در روسیه"
                  width={320}
                  height={400}
                  className="rounded-2xl shadow-md w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Our Knowledge Section */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">دانش ما</h2>
            <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              تیم آبادیس پارسیان متشکل از مشاوران تحصیلی مجرب، متخصصان امور دانشجویی و کارشناسان آشنا به فرهنگ و زبان
              روسی است. ما با بهره‌گیری از دانش روز و تجربه‌های عملی، بهترین راهنمایی‌ها را برای انتخاب رشته، دانشگاه و
              برنامه‌ریزی تحصیلی ارائه می‌دهیم. همچنین با داشتن شبکه‌ای گسترده از روابط با دانشگاه‌های معتبر روسیه، امکان
              اخذ پذیرش از بهترین مؤسسات آموزشی را فراهم می‌کنیم.
            </p>
          </div>

          {/* Vision and Desire Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">چشم انداز ما</h3>
              <p className="text-gray-600 leading-relaxed">
                تبدیل شدن به پیشروترین مرکز ارائه خدمات تحصیلی در منطقه و ایجاد پل ارتباطی میان نظام آموزشی ایران و
                روسیه
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">مطلوب ما</h3>
              <p className="text-gray-600 leading-relaxed">
                ارائه خدمات با کیفیت، شفاف و قابل اعتماد که منجر به موفقیت تحصیلی و رضایت کامل دانشجویان و خانواده‌هایشان
                شود
              </p>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">آمار و ارقام</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">9985</div>
                <div className="text-gray-600">رضایت مندی</div>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">8</div>
                <div className="text-gray-600">کشور</div>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4100</div>
                <div className="text-gray-600">دانشجو</div>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4100</div>
                <div className="text-gray-600">دانش آموز</div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">تیم ما</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">مشاوره</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  تیم مشاوران مجرب ما آماده ارائه بهترین راهنمایی‌ها برای انتخاب رشته و دانشگاه مناسب هستند
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">فرهنگ روسیه</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  متخصصان آشنا به فرهنگ و زبان روسی که شما را با محیط تحصیلی و زندگی در روسیه آشنا می‌کنند
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">مدیر تحصیلی</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  مدیران تحصیلی متخصص که از ابتدای مسیر تا اتمام تحصیلات همراه شما خواهند بود
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
