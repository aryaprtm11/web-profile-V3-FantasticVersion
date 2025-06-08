'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300">
      <div className="w-[90%] lg:w-[70%] mx-auto mt-5">
        <div className="bg-[#67729D]/30 backdrop-blur-md border border-white/20 rounded-3xl px-6 lg:px-12 py-4 shadow-xl">
          <div className="flex justify-between items-center">
            <h1 className="font-shrik text-2xl lg:text-3xl font-bold text-white hover:text-purple-300 transition-colors duration-300">
              ARYA PRATAMA
            </h1>
            <ul className="flex space-x-2 lg:space-x-6">
              <li>
                <a 
                  href="#home" 
                  className="relative font-poppins font-bold text-white px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-purple-300 hover:shadow-lg group"
                >
                  About Me
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="relative font-poppins font-bold text-white px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-purple-300 hover:shadow-lg group"
                >
                  Experience
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#portofolio" 
                  className="relative font-poppins font-bold text-white px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-purple-300 hover:shadow-lg group"
                >
                  Portofolio
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="relative font-poppins font-bold text-white px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-purple-300 hover:shadow-lg group"
                >
                  Contact
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
} 