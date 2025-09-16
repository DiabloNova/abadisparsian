"use client"

export default function AnimatedSocialIcons() {
  return (
    <div className="relative flex justify-center items-center min-h-[120px] py-8">
      <div className="flex justify-center gap-6 md:gap-8">
        {/* Instagram */}
        <div className="relative group">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gradient-to-r from-purple-600 to-orange-500 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">
              Instagram
            </div>
          </div>
          <a
            href="https://instagram.com/abadisparsian"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              width="28"
              height="28"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 text-gray-700 group-hover:text-white transition-colors duration-300"
            >
              <path
                clipRule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                fillRule="evenodd"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        {/* LinkedIn */}
        <div className="relative group">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div
              className="text-white text-xs px-3 py-1 rounded-md whitespace-nowrap"
              style={{ backgroundColor: "#0082c6" }}
            >
              LinkedIn
            </div>
          </div>
          <a
            href="#"
            className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl group overflow-hidden"
          >
            <div
              className="absolute inset-0 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"
              style={{ backgroundColor: "#0082c6" }}
            ></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="relative z-10 text-gray-700 group-hover:text-white transition-colors duration-300"
            >
              <circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" />
              <path
                d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        {/* WhatsApp */}
        <div className="relative group">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">WhatsApp</div>
          </div>
          <a
            href="https://wa.me/79267806667"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl group overflow-hidden"
          >
            <div className="absolute inset-0 bg-green-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="relative z-10 text-gray-700 group-hover:text-white transition-colors duration-300"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        {/* YouTube */}
        <div className="relative group">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-red-600 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">YouTube</div>
          </div>
          <a
            href="#"
            className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl group overflow-hidden"
          >
            <div className="absolute inset-0 bg-red-600 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="relative z-10 text-gray-700 group-hover:text-white transition-colors duration-300"
            >
              <path
                d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
