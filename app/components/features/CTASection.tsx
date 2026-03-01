import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="w-full bg-white pt-24 px-6 relative z-20">
      
      {/* FIXED: Using dangerouslySetInnerHTML. This creates the custom CSS animation for the infinite marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-full mx-auto">
        
        {/* Main CTA Card Container */}
        <div className="relative w-full bg-[#0B1121] rounded-[32px] overflow-hidden shadow-2xl border border-gray-800 flex flex-col">
          
          {/* Subtle Background Pattern */}
          <div 
            className="absolute inset-0 pointer-events-none z-0" 
            style={{ 
              backgroundImage: "url('/images/BackgroundPattern.png')", 
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto',
              backgroundPosition: 'center',
              opacity: 100 
            }}
          />

          {/* Blue Radial Glow Effect (Left side) */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[800px] h-[600px] bg-[#0066FF]/20 rounded-full blur-[130px] pointer-events-none z-0"></div>

          {/* Top Content Area */}
          <div className="relative z-10 flex flex-col items-center text-center pt-24 pb-20 px-6">
            
            <p className="text-[#0066FF] font-semibold tracking-wider text-sm mb-4 uppercase">
              Finance Solution
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white tracking-tight max-w-3xl leading-tight">
              Ready to Scale Your Payments?
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Join thousands of businesses worldwide using Finech to simplify transactions, enhance security, and drive growth.
            </p>

            {/* Email Input & Button Container */}
            <div className="w-full max-w-lg bg-white rounded-2xl md:p-1.5 p-1 flex items-center shadow-xl focus-within:ring-2 ring-[#0066FF]/50 transition-shadow">
              
              {/* Mail Icon */}
              <div className="pl-5 pr-3 text-gray-400 flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              
              {/* Input Field */}
              <input 
                type="email" 
                placeholder="Send your email" 
                className="flex-1 bg-transparent text-gray-900 placeholder:text-gray-400 outline-none text-[15px] w-full"
              />
              
              {/* Submit Button */}
              <button className="bg-[#0066FF] hover:bg-blue-700 text-white px-6 py-3.5 rounded-full font-medium transition-colors flex items-center gap-2 text-sm flex-shrink-0">
                Talk to Sales
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

            </div>
          </div>

          {/* Bottom Dark Logo Strip - Smooth Infinite Scroll */}
          <div className="relative z-10 bg-[#060A14] border-t border-white/5 py-8 overflow-hidden flex">
            
            {/* The Scrolling Track */}
            <div className="flex w-max animate-marquee items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              
              {/* Set 1 of Logos */}
              <div className="flex items-center gap-12 md:gap-20 pl-12 md:pl-20 shrink-0">
                <div className="relative w-24 h-8"><Image src="/images/Clogo1.png" alt="Amazon" fill className="object-contain" /></div>
                <div className="relative w-28 h-8"><Image src="/images/Clogo2.png" alt="Dropbox" fill className="object-contain" /></div>
                <div className="relative w-24 h-8"><Image src="/images/Clogo3.png" alt="Loom" fill className="object-contain" /></div>
                <div className="relative w-24 h-8"><Image src="/images/Clogo4.png" alt="Medium" fill className="object-contain" /></div>
                <div className="relative w-24 h-8"><Image src="/images/c1.png" alt="Twitch" fill className="object-contain" /></div>
                <div className="relative w-28 h-8"><Image src="/images/c2.png" alt="Discord" fill className="object-contain" /></div>
                <div className="relative w-28 h-8"><Image src="/images/c4.png" alt="Mailchimp" fill className="object-contain" /></div>
              </div>

              {/* Set 2 of Logos (Exact duplicate for seamless looping) */}
              <div className="flex items-center gap-12 md:gap-20 pl-12 md:pl-20 shrink-0" aria-hidden="true">
                <div className="relative w-24 h-8"><Image src="/images/Clogo1.png" alt="Amazon" fill className="object-contain" /></div>
                <div className="relative w-28 h-8"><Image src="/images/Clogo2.png" alt="Dropbox" fill className="object-contain" /></div>
                <div className="relative w-24 h-8"><Image src="/images/Clogo3.png" alt="Loom" fill className="object-contain" /></div>
                <div className="relative w-24 h-8"><Image src="/images/Clogo4.png" alt="Medium" fill className="object-contain" /></div>
                <div className="relative w-24 h-8"><Image src="/images/c1.png" alt="Twitch" fill className="object-contain" /></div>
                <div className="relative w-28 h-8"><Image src="/images/c2.png" alt="Discord" fill className="object-contain" /></div>
                <div className="relative w-28 h-8"><Image src="/images/c4.png" alt="Mailchimp" fill className="object-contain" /></div>
                <div className="relative w-20 h-8"><Image src="/images/Clogo1.png" alt="Zoom" fill className="object-contain" /></div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}