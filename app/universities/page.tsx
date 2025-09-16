import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import {
  Search,
  Filter,
  MapPin,
  Users,
  GraduationCap,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react"
import { Suspense } from "react"

// Mock data for universities
const universities = [
  {
    id: 1,
    name: "دانشگاه دولتی مسکو لومونوسوف",
    nameEn: "Lomonosov Moscow State University",
    city: "مسکو",
    ranking: 1,
    students: "47,000",
    established: "1755",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D9%84%D9%88%D9%85%D9%88%D9%86%D9%88%D8%B3%D9%88%D9%81-vvgSrum4wNT73Q1Ls3RlMPadQCom3K.mp4",
    programs: ["پزشکی", "مهندسی", "علوم پایه", "اقتصاد"],
    tuitionFee: "$4,000 - $6,000",
    approved: true,
  },
  {
    id: 2,
    name: "دانشگاه فنی دولتی باومان مسکو",
    nameEn: "Bauman Moscow State Technical University",
    city: "مسکو",
    ranking: 2,
    students: "18,000",
    established: "1830",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87%20%D8%AA%DA%A9%D9%86%D9%88%D9%84%D9%88%DA%98%DB%8C%20%D9%85%D8%B3%DA%A9%D9%88~3-gdBk5sZ1d5bUeCBHM3Orvw65EWehVm.mp4",
    programs: ["مهندسی مکانیک", "مهندسی هوافضا", "رباتیک", "IT"],
    tuitionFee: "$3,500 - $5,500",
    approved: true,
  },
  {
    id: 3,
    name: "دانشگاه دولتی سن پترزبورگ",
    nameEn: "Saint Petersburg State University",
    city: "سن پترزبورگ",
    ranking: 3,
    students: "32,000",
    established: "1724",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87%20%D8%AF%D9%88%D9%84%D8%AA%DB%8C%20%D8%B3%D9%86%20%D9%BE%D8%AA%D8%B1%D8%B2%D8%A8%D9%88%D8%B1%DA%AF-06tb21jKuVnlaC6AoKRFRkCsyLvOK8.mp4",
    programs: ["حقوق", "روانشناسی", "فلسفه", "تاریخ"],
    tuitionFee: "$3,000 - $5,000",
    approved: true,
  },
  {
    id: 4,
    name: "دانشگاه پزشکی سچنوف مسکو",
    nameEn: "Sechenov First Moscow State Medical University",
    city: "مسکو",
    ranking: 4,
    students: "10,000",
    established: "1758",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C%20%D8%B3%DA%86%D9%86%D9%88%D9%81~2-WAU6Dmn0RDwWuhxr70ZurIpQy8BEBk.mp4",
    programs: ["پزشکی عمومی", "دندانپزشکی", "داروسازی", "پرستاری"],
    tuitionFee: "$7,000 - $9,000",
    approved: true,
  },
  {
    id: 5,
    name: "دانشگاه فدرال کازان",
    nameEn: "Kazan Federal University",
    city: "کازان",
    ranking: 5,
    students: "50,000",
    established: "1804",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87%20%D9%81%D8%AF%D8%B1%D8%A7%D9%84%20%DA%A9%D8%A7%D8%B2%D8%A7%D9%86%20~2-wYA16C8DznAOdfGyjM4xA9rnZVbqf8.mp4",
    programs: ["زیست‌شناسی", "شیمی", "ریاضی", "فیزیک"],
    tuitionFee: "$2,500 - $4,000",
    approved: true,
  },
  {
    id: 6,
    name: "دانشگاه فدرال سیبری",
    nameEn: "Siberian Federal University",
    city: "کراسنویارسک",
    ranking: 6,
    students: "41,000",
    established: "2006",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87%20%DA%A9%D8%A7%D8%B2%D8%A7%D9%86-dWmLKHlaHiZLffd8dyfn2B1nhJDs5j.mp4",
    programs: ["مهندسی معدن", "جنگلداری", "معماری", "هنر"],
    tuitionFee: "$2,000 - $3,500",
    approved: true,
  },
]

function UniversityCard({ university }: { university: (typeof universities)[0] }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <video src={university.video} className="w-full h-48 object-cover" autoPlay muted loop playsInline />
        {university.approved && (
          <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">مورد تأیید</Badge>
        )}
        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
          <span className="text-sm font-semibold text-gray-800">#{university.ranking}</span>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-800 mb-1 font-fanavari-bold">{university.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{university.nameEn}</p>

          <div className="flex items-center text-sm text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="font-fanavari">{university.city}</span>
            <span className="mx-2">•</span>
            <span className="font-fanavari">تأسیس {university.established}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2 text-blue-500" />
            <span className="font-fanavari">{university.students} دانشجو</span>
          </div>
          <div className="flex items-center">
            <GraduationCap className="w-4 h-4 mr-2 text-green-500" />
            <span className="font-fanavari">{university.programs.length} رشته</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2 font-fanavari">رشته های اصلی:</p>
          <div className="flex flex-wrap gap-1">
            {university.programs.slice(0, 3).map((program, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {program}
              </Badge>
            ))}
            {university.programs.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{university.programs.length - 3} رشته دیگر
              </Badge>
            )}
          </div>
        </div>

        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-fanavari">شهریه سالانه:</p>
          <p className="font-semibold text-orange-600">{university.tuitionFee}</p>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 bg-orange-500 hover:bg-orange-600 font-fanavari">درخواست پذیرش</Button>
          <Button variant="outline" className="flex-1 font-fanavari bg-transparent">
            اطلاعات بیشتر
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-gray-600 font-fanavari">در حال بارگذاری دانشگاه‌ها...</p>
    </div>
  )
}

function UniversitiesContent() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-fanavari-bold">دانشگاه های مورد تأیید وزارت علوم</h1>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto font-fanavari">
            فهرست کامل دانشگاه های روسیه که مدارک آن ها توسط وزارت علوم ایران مورد تأیید است
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="جستجوی دانشگاه، شهر یا رشته..."
                  className="pr-10 bg-white/90 backdrop-blur-sm border-white/20 font-fanavari"
                />
              </div>
              <Button variant="secondary" className="px-6 font-fanavari">
                <Filter className="w-4 h-4 mr-2" />
                فیلتر
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">240+</div>
              <p className="text-gray-600 font-fanavari">دانشگاه مورد تأیید</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <p className="text-gray-600 font-fanavari">رشته تحصیلی</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">85</div>
              <p className="text-gray-600 font-fanavari">شهر دانشگاهی</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">15000+</div>
              <p className="text-gray-600 font-fanavari">دانشجوی ایرانی</p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-fanavari-bold">برترین دانشگاه های روسیه</h2>
            <p className="text-gray-600 font-fanavari">دانشگاه های معتبر و مورد تأیید برای تحصیل در روسیه</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university) => (
              <UniversityCard key={university.id} university={university} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 font-fanavari bg-transparent">
              مشاهده دانشگاه های بیشتر
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-fanavari-bold">آماده شروع تحصیل در روسیه هستید؟</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto font-fanavari">
            با مشاوران متخصص ما تماس بگیرید و مسیر تحصیل خود را در بهترین دانشگاه های روسیه آغاز کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 font-fanavari">
              مشاوره رایگان
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 px-8 font-fanavari bg-transparent"
            >
              دانلود کاتالوگ
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content with Suspense for Loading State */}
      <Suspense fallback={<LoadingSpinner />}>
        <UniversitiesContent />
      </Suspense>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <img src="/title-logo.png" alt="آبادیس پارسیان" className="h-6 object-contain brightness-0 invert" />
              </div>
              <p className="text-gray-400 text-sm mb-4 font-fanavari">
                ارائه خدمات تحصیلی برای ادامه تحصیل در بهترین دانشگاه های روسیه
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-fanavari-bold">قوانین</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white font-fanavari">
                    حریم خصوصی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-fanavari">
                    شرایط و قوانین
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white font-fanavari">
                    تماس با ما
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-fanavari-bold">لینک های مربوط</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white font-fanavari">
                    ثبت اطلاعات آنلاین
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white font-fanavari">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="/universities" className="hover:text-white font-fanavari">
                    دانشگاه های روسیه
                  </a>
                </li>
                <li>
                  <a href="/opportunities" className="hover:text-white font-fanavari">
                    فرصت های تحصیلی
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white font-fanavari">
                    بلاگ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-fanavari-bold">آبادیس پارسیان</h4>
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

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 font-fanavari">© ۱۴۰۳ آبادیس پارسیان. شامل حقوق محفوظ است.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button size="sm" className="bg-green-600 hover:bg-green-700 font-fanavari">
                خدمات تحصیلی روسیه
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-fanavari bg-transparent"
              >
                خبرگزاری پارسیان
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
