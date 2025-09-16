import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import { Calendar, User, ArrowLeft, Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "راهنمای کامل انتخاب رشته در دانشگاه های روسیه",
      excerpt:
        "در این مقاله به طور کامل در مورد نحوه انتخاب رشته مناسب در دانشگاه های روسیه صحبت می کنیم و راهکارهای مفیدی ارائه می دهیم.",
      date: "۱۵ آذر ۱۴۰۳",
      author: "تیم آبادیس پارسیان",
      category: "مشاوره تحصیلی",
      image: "/university-guidance.jpg",
      readTime: "۵ دقیقه",
    },
    {
      id: 2,
      title: "مدارک مورد نیاز برای اخذ پذیرش از دانشگاه های روسیه",
      excerpt: "فهرست کاملی از مدارک لازم برای درخواست پذیرش از دانشگاه های روسیه و نکات مهم در مورد آماده سازی آن ها.",
      date: "۱۰ آذر ۱۴۰۳",
      author: "تیم آبادیس پارسیان",
      category: "مدارک و پذیرش",
      image: "/documents-admission.jpg",
      readTime: "۷ دقیقه",
    },
    {
      id: 3,
      title: "بهترین دانشگاه های پزشکی روسیه برای دانشجویان ایرانی",
      excerpt:
        "معرفی برترین دانشگاه های پزشکی روسیه که برای دانشجویان ایرانی مناسب هستند و دارای اعتبار بین المللی می باشند.",
      date: "۵ آذر ۱۴۰۳",
      author: "تیم آبادیس پارسیان",
      category: "دانشگاه ها",
      image: "/medical-university.jpg",
      readTime: "۶ دقیقه",
    },
    {
      id: 4,
      title: "هزینه های تحصیل و زندگی در روسیه",
      excerpt:
        "بررسی کامل هزینه های تحصیل، اقامت، غذا و سایر مخارج زندگی در شهرهای مختلف روسیه برای دانشجویان بین المللی.",
      date: "۱ آذر ۱۴۰۳",
      author: "تیم آبادیس پارسیان",
      category: "هزینه ها",
      image: "/cost-living-russia.jpg",
      readTime: "۸ دقیقه",
    },
    {
      id: 5,
      title: "فرآیند اخذ ویزای تحصیلی روسیه",
      excerpt: "راهنمای گام به گام برای اخذ ویزای تحصیلی روسیه، مدارک مورد نیاز و نکات مهم در مصاحبه کنسولگری.",
      date: "۲۵ آبان ۱۴۰۳",
      author: "تیم آبادیس پارسیان",
      category: "ویزا",
      image: "/visa-process.jpg",
      readTime: "۹ دقیقه",
    },
    {
      id: 6,
      title: "مقایسه سیستم آموزشی روسیه با ایران",
      excerpt: "بررسی تفاوت های سیستم آموزشی روسیه با ایران و مزایای تحصیل در دانشگاه های روسیه برای دانشجویان ایرانی.",
      date: "۲۰ آبان ۱۴۰۳",
      author: "تیم آبادیس پارسیان",
      category: "سیستم آموزشی",
      image: "/education-system.jpg",
      readTime: "۱۰ دقیقه",
    },
  ]

  const categories = ["همه", "مشاوره تحصیلی", "مدارک و پذیرش", "دانشگاه ها", "هزینه ها", "ویزا", "سیستم آموزشی"]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-fanavari-bold">بلاگ آبادیس پارسیان</h1>
          <p className="text-gray-600 font-fanavari">آخرین مقالات و راهنماهای تحصیل در روسیه</p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "همه" ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-orange-500 hover:text-white font-fanavari"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 font-fanavari-bold">مقالات ویژه</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.slice(0, 2).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-4 right-4 bg-orange-500 font-fanavari">{post.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-fanavari-bold line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 font-fanavari line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="font-fanavari">{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span className="font-fanavari">{post.author}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full font-fanavari bg-transparent">
                    ادامه مطلب
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 font-fanavari-bold">همه مقالات</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-40 object-cover" />
                  <Badge className="absolute top-3 right-3 bg-orange-500 text-xs font-fanavari">{post.category}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 font-fanavari-bold line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 font-fanavari line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="font-fanavari">{post.date}</span>
                    <span className="font-fanavari">{post.readTime}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full font-fanavari bg-transparent">
                    ادامه مطلب
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
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
