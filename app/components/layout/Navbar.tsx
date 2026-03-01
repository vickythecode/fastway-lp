import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    // Changed to absolute and used translate-x to center it perfectly over the Hero
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 py-8 flex items-center justify-between z-50">
      
      {/* Logo */}
      <Link href="/" className="relative w-28 h-8 block flex-shrink-0">
        <Image 
          src="/images/Logo1.png" 
          alt="Finech Logo" 
          fill 
          className="object-contain object-left"
          priority 
        />
      </Link>

      {/* Center Navigation Links */}
      <div className="hidden md:flex items-center gap-10 text-base font-medium text-gray-400">
        <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
        <Link href="/" className="hover:text-white transition-colors duration-300">Solutions</Link>
        <Link href="/" className="hover:text-white transition-colors duration-300">Integrations</Link>
        <Link href="/" className="hover:text-white transition-colors duration-300">Pricing</Link>
        <Link href="/" className="hover:text-white transition-colors duration-300">Resources</Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-8">
        <Link href="/login" className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors hidden sm:block">
          Login
        </Link>
        
        <button className="bg-[#0066FF] hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
          Get Started
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
            <path 
              d="M1 11L11 1M11 1H3.5M11 1V8.5" 
              stroke="currentColor" 
              strokeWidth="1.8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      
    </nav>
  );
}