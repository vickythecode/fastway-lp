import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
      {/* Logo */}
     <Link href="/" className="relative w-32 h-8 block flex-shrink-0">
  <Image 
    src="/images/Logo1.png" /* Make sure this matches your exact filename in public/images */
    alt="Finech Logo" 
    fill 
    className="object-contain object-left"
    priority /* Loads the logo immediately since it's at the top of the page */
  />
</Link>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <Link href="/" className="hover:text-white transition-colors">Solutions</Link>
        <Link href="/" className="hover:text-white transition-colors">Integrations</Link>
        <Link href="/" className="hover:text-white transition-colors">Pricing</Link>
        <Link href="/" className="hover:text-white transition-colors">Resources</Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden sm:block">
          Login
        </Link>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-2xl text-sm font-medium transition-all flex items-center gap-2">
          Get Started
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}