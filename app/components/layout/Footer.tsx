import Image from 'next/image';
import Link from 'next/link';

// Data structure for the footer links to keep the code clean
const footerSections = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Blog'],
  },
  {
    title: 'Products',
    links: ['Payments', 'API & Developer Docs', 'Pricing', 'Security'],
  },
  {
    title: 'Resources',
    links: ['Help Center', 'FAQs', 'Case Studies', 'Webinars'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Compliance', 'Security & Trust'],
  },
  {
    title: 'Contact',
    links: ['Support', 'Partnerships'],
  },
];

export default function Footer() {
  return (
    // Clean off-white background with the pattern overlay
    <footer className="w-full bg-[#FAFAFA] pt-20 pb-10 px-6 relative z-20 overflow-hidden border-t border-gray-100">
      
      {/* Pattern Overlay Layer */}
      <div 
        className="absolute inset-10 pointer-events-none z-0" 
        style={{ 
          backgroundImage: "url('/images/BackgroundPattern.png')", 
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
          opacity: 100 
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section: Logo & Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 mb-20">
          
          {/* Column 1: Logo and Email */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-6">
            <Link href="/" className="relative w-28 h-8 block">
              {/* Ensure you export your blue/black 'finech' logo from Figma */}
              <Image 
                src="/images/Logo.png" 
                alt="Finech Logo" 
                fill 
                className="object-contain object-left" 
              />
            </Link>
            <a 
              href="mailto:support@finech.com" 
              className="text-[15px] font-medium text-gray-900 hover:text-[#0066FF] transition-colors"
            >
              support@finech.com
            </a>
          </div>

          {/* Columns 2-6: Mapped Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="font-semibold text-gray-900 text-xl mb-6">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href="#" 
                      className="text-gray-500 hover:text-[#0066FF] text-base font-medium transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Section: Copyright & Auth Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-200/60">
          
          <p className="text-gray-500 text-base">
            © 2025 Finech. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/login" 
              className="text-[14px] font-medium text-gray-900 hover:text-[#0066FF] transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="text-[14px] font-medium text-gray-900 hover:text-[#0066FF] transition-colors"
            >
              Sign Up
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}