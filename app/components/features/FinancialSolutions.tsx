import Image from 'next/image';

export default function FinancialSolutions() {
  return (
    // Keep the main section's background, padding, and layout as provided
    <section className="w-full bg-[#0B1121] py-32 px-6 relative overflow-hidden z-20">
      
      {/* --- NEW: Background Gradient Image at the bottom --- */}
      <div 
        className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0" 
        style={{ 
          backgroundImage: "url('/images/BackgroundGradient2.png')", 
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          opacity: 0.5 /* Adjust this opacity if you want it brighter/darker */
        }}
      />

      {/* Pattern Overlay Layer: Positioning is key behind all glass cards */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          // Use your provided pattern URL, standard repeat, and opacity for a subtle look
          backgroundImage: "url('/images/BackgroundPattern.png')", 
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          backgroundPosition: 'top center',
          opacity: 100 
        }}
      />
      
      {/* Blue Radial Glow at the bottom for section depth */}
      <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#0066FF]/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mx-auto mb-16">
          <p className="text-[#0066FF] font-semibold tracking-wider text-base mb-4 uppercase">
            Who is it for?
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white tracking-tight md:max-w-7xl">
            Financial Solutions for Every Industry
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
            Our platform empowers you to handle transactions, streamline operations, and integrate financial services seamlessly.
          </p>
        </div>

        {/* 4-Column Grid for Industry Cards (Standard gap and structure) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SolutionCard
            title="For Marketplaces"
            desc="Seamless money movement between buyers and sellers"
            iconSrc="/images/ShoppingCartSimple.png" 
          />
          <SolutionCard
            title="For SaaS Platforms"
            desc="Embed financial services into your software with minimal effort"
            iconSrc="/images/GitMerge.png"
          />
          <SolutionCard
            title="For Fintech Startups"
            desc="Build your own banking solutions with ease"
            iconSrc="/images/Bank1.png"
          />
          <SolutionCard
            title="For Enterprises"
            desc="Custom financial solutions to optimize operations at scale"
            iconSrc="/images/Buildings.png"
          />
        </div>

        {/* --- NEW SECTION: API & Developer --- */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start">
            <p className="text-[#0066FF] font-semibold tracking-wider text-sm mb-4 uppercase">
              API & Developer
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white tracking-tight leading-tight">
              Seamless Integration with <br className="hidden lg:block" /> Powerful Developer Tools
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              Integrate Finech effortlessly with our developer-friendly APIs, designed for speed, security, and scalability.
            </p>
            
            {/* CTA Button */}
            <button className="bg-[#0066FF] hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 mb-12">
              Explore API Docs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            {/* Feature List */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 text-gray-300">
                {/* Replace with your exact Code outline icon */}
                <Image src="/images/Code.png" alt="RESTful APIs" width={20} height={20} className="object-contain" />
                <span className="text-[15px]">RESTful APIs & Webhooks</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                {/* Replace with your exact File/SDK icon */}
                <Image src="/images/FileCode.png" alt="SDKs" width={20} height={20} className="object-contain" />
                <span className="text-[15px]">SDKs for Multiple Languages</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                {/* Replace with your exact Sandbox/Lock icon */}
                <Image src="/images/FileLock.png" alt="Sandbox" width={20} height={20} className="object-contain" />
                <span className="text-[15px]">Sandbox for Testing</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image of Code Block */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            {/* Make sure to export the large code window from Figma as 'api-code-block.png' */}
            <Image 
              src="/images/MainContainer.png" 
              alt="API Code Snippet" 
              fill 
              className="object-contain lg:object-right" 
            />
          </div>

        </div>
        {/* --- END NEW SECTION --- */}

      </div>
    </section>
  );
}

// Sub-component for the dark industry cards with Glass Effect
function SolutionCard({ title, desc, iconSrc }: { title: string, desc: string, iconSrc: string }) {
  return (
    // ACHIEVING GLASSMorphism (Glass Look):
    // 1. Semi-transparent background (Tailwind bg-black/20 or similar hex with alpha)
    // 2. Backdrop Blur (standard 'sm' blur for performance and aesthetics)
    // 3. Crisp, semi-transparent white border for the edge.
    // 4. Preserve existing padding, rounded corners, and group hover properties.
    <div className="bg-[#0B1121]/50 backdrop-blur-sm border border-white/10 rounded-[20px] p-4 flex flex-col group cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-white/20 hover:scale-[1.01]">
      
      {/* Icon Container: Matching glass logic (less transparent, more blur) */}
      <div className="w-full aspect-square bg-[#FFFFFF]/50 rounded-[20px] mb-6 flex items-center justify-center border border-white/5 transition-colors duration-300 group-hover:bg-[#151926]">
        <div className="w-14 h-14 relative group-hover:scale-[1.02] transition-transform">
          {/* Ensure standard white icons from Figma are used with correct paths */}
          <Image src={iconSrc} alt={title} fill className="object-contain" />
        </div>
      </div>
      
      {/* Card Text: Standard styling maintained */}
      <div className="px-2 pb-3">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
      
    </div>
  );
}