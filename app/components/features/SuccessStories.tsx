import Image from 'next/image';

// Data structured exactly into 3 columns for the masonry layout to match your image
const testimonialColumns = [
  // Column 1
  [
    {
      id: 1,
      quote: "Managing enterprise transactions at scale requires reliability. Finech's uptime and real-time monitoring make them the perfect partner.",
      name: "Frances Swann",
      role: "CEO at Toggl",
      avatar: "/images/p1.png", // Export the Toggl avatar
      logo: "/images/c1.png", // Export Toggl logo
      isDark: false,
    },
    {
      id: 2,
      quote: "Security was our top concern, and Finech exceeded expectations. Their PCI DSS compliance and AI-powered fraud detection give us peace of mind.",
      name: "Autumn Philips",
      role: "CTO at Spotify",
      avatar: "/images/p2.png", // Export the Spotify avatar
      logo: "/images/c2.png", // Export Spotify logo
      isDark: true,
    },
    {
      id: 3,
      quote: "Since integrating Finech, our transaction speed increased by 40%, and we've significantly reduced operational costs. The best decision we made.",
      name: "Marcus Doe",
      role: "Founder at TechFlow",
      avatar: "/images/p1.png", 
      logo: "/images/c4.png", 
      isDark: false,
    }
  ],
  // Column 2
  [
    {
      id: 4,
      quote: "Issuing virtual and physical cards used to be complex, but with Finech, we did it in just days. Our customers love the seamless experience!",
      name: "Rhonda Rhodes",
      role: "Risk Manager at Upwork",
      avatar: "/images/p1.png", // Export the Upwork avatar
      logo: "/images/c4.png", // Export Upwork logo
      isDark: false,
    },
    {
      id: 5,
      quote: "Finech has completely transformed our cross-border transactions. With seamless multi-currency support, we now process international payments 50% faster!",
      name: "Paula Mora",
      role: "CFO at Tesla",
      avatar: "/images/p2.png", // Export the Tesla avatar
      logo: "/images/c1.png", // Export Tesla logo
      isDark: false,
    },
    {
      id: 6,
      quote: "From integration to compliance, everything was handled flawlessly. Their support team is incredibly responsive and helpful.",
      name: "Sarah Jenkins",
      role: "VP of Finance at Globex",
      avatar: "/images/p1.png",
      logo: "/images/c1.png",
      isDark: false,
    }
  ],
  // Column 3
  [
    {
      id: 7,
      quote: "Finech's API-first approach allowed us to integrate financial services effortlessly. As our business scaled, their infrastructure adapted without friction.",
      name: "Eddie Lake",
      role: "COO at Zoom",
      avatar: "/images/p1.png", // Export the Zoom avatar
      logo: "/images/c2.png", // Export Zoom logo
      isDark: true,
    },
    {
      id: 8,
      quote: "Finech helped us reduce payout times from days to minutes. Our sellers are happier than ever, and transaction disputes have dropped significantly!",
      name: "Iva Ryan",
      role: "CTO at Discord",
      avatar: "/images/p2.png", // Export the Discord avatar
      logo: "/images/c1.png", // Export Discord logo
      isDark: false,
    },
    {
      id: 9,
      quote: "Embedding financial services into our SaaS product was easier than we imagined. Finech's API saved us months of development time!",
      name: "David Chen",
      role: "Lead Developer at SaaSify",
      avatar: "/images/avatar-placeholder.png",
      logo: "/images/logo-placeholder.png",
      isDark: false,
    }
  ]
];

export default function SuccessStories() {
  return (
    // Slightly off-white background so the pure white cards pop
    <section className="w-full bg-[#F8F9FA] py-24 px-6 relative z-20 overflow-hidden">
      
      {/* Pattern Overlay Layer */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          backgroundImage: "url('/images/BackgroundPattern.png')", 
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          backgroundPosition: 'top center',
          opacity: 0.6 
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#0066FF] font-semibold tracking-wider text-sm mb-4 uppercase">
            Success Story
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900 tracking-tight">
            How Businesses Thrive with Finech
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Join the growing list of companies that trust Finech to power their payments, banking, and financial services. From startups to enterprises, our platform delivers real results—faster transactions, improved security, and effortless scalability.
          </p>
        </div>

        {/* Masonry Grid Layout - 3 Vertical Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {testimonialColumns.map((column, colIndex) => (
            <div 
              key={colIndex} 
              // Added staggered margin-top for the middle column (index 1)
              className={`flex flex-col gap-6 ${colIndex === 1 ? 'md:mt-12 lg:mt-24' : ''}`}
            >
              {column.map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          ))}
        </div>

      </div>

      {/* Gradient Fade Overlay & Floating Button */}
      {/* The background color matches the section bg (#F8F9FA) to fade out perfectly */}
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA]/90 to-transparent z-20 flex items-end justify-center pb-16">
        <button className="bg-[#0066FF] hover:bg-blue-700 text-white px-7 py-3.5 rounded-[14px] font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:-translate-y-1 duration-300">
          Explore Case Studies
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

    </section>
  );
}

// Reusable Testimonial Card Component
function TestimonialCard({ quote, name, role, avatar, logo, isDark }: { 
  quote: string, 
  name: string, 
  role: string, 
  avatar: string, 
  logo: string, 
  isDark: boolean 
}) {
  return (
    <div className={`p-8 md:p-10 rounded-[28px] flex flex-col justify-between gap-56 shadow-sm transition-transform duration-300 hover:shadow-md ${
      isDark ? 'bg-[#121212] text-white border border-gray-800' : 'bg-white border border-gray-100 text-gray-900'
    }`}>
      
      {/* Quote Text */}
      <p className={`text-[17px] leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
        "{quote}"
      </p>

      {/* Author & Logo Footer */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 relative rounded-full overflow-hidden shrink-0 bg-gray-100 border border-gray-200">
            <Image src={avatar} alt={name} fill className="object-cover" />
          </div>
          {/* Name & Role */}
          <div className="flex flex-col">
            <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{name}</span>
            <span className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{role}</span>
          </div>
        </div>
        
        {/* Company Logo */}
        <div className="relative h-6 w-20 flex-shrink-0">
          <Image 
            src={logo} 
            alt="Company Logo" 
            fill 
            // If the card is dark, we make sure the logo is white (invert). If it's a white card, we make it grayscale.
            className={`object-contain object-right ${isDark ? 'brightness-0 invert' : 'grayscale opacity-60'}`} 
          />
        </div>
      </div>
      
    </div>
  );
}