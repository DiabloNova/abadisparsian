
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="لوگو آبادیس پارسیان"
                className="h-6 object-contain brightness-0 invert"
              />
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
  )
}
