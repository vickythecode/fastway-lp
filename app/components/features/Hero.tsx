import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="relative w-full px-6 py-32 min-h-[85vh] flex flex-col items-center justify-center z-10" 
      style={{
        backgroundImage: 'url(/images/BackgroundPattern.png), url(/images/BackgroundGradient.png)', 
        backgroundRepeat: 'repeat, no-repeat',
        backgroundPosition: 'center center, left center',
        backgroundSize: 'auto, cover', 
      }}
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <p className="text-[#0066FF] font-semibold tracking-wider text-sm mb-4 uppercase">
            Finance Solution
          </p>
          <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.1] mb-6 tracking-tight text-white">
            Empowering the <br />
            Next Generation <br />
            of Financial <br />
            Infrastructure, <br />
            Designed for You
          </h1>
          <p className="text-[#FFFFFF] text-lg mb-6 leading-relaxed max-w-6xl">
            Powerful APIs and seamless integrations to help businesses move money, manage risk, and scale globally.
          </p>

          {/* Email Input Form */}
          <div className="flex items-center bg-white p-1.5 rounded-2xl w-full max-w-[17rem] md:max-w-md shadow-xl">
            <div className="pl-3 sm:pl-4 pr-1 sm:pr-2 flex items-center text-gray-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <input 
              type="email" 
              placeholder="Send your email" 
              className="flex-1 min-w-0 bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400 px-2 text-sm sm:text-base"
            />
            <button className="bg-[#0066FF] hover:bg-blue-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-2 flex-shrink-0">
              Talk to Sales
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:block">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Content - Images */}
        <div className="relative h-[600px] w-full hidden lg:block">
          {/* Main Code Snippet Image */}
          <div className="absolute top-6 right-10 w-[450px] z-20 transform hover:-translate-y-2 transition-transform duration-500">
             <Image src="/images/card1.png" alt="API Code" width={450} height={250} className="w-full h-auto drop-shadow-2xl" />
          </div>

          {/* Transfer Card Image */}
          <div className="absolute top-44 left-0 w-[600px] z-10 transform hover:-translate-y-2 transition-transform duration-500">
             <Image src="/images/card2.png" alt="Transfer Detail" width={500} height={200} className="w-full h-auto drop-shadow-2xl" />
          </div>

          {/* Small Metric Cards */}
          <div className="absolute bottom-[-86] right-[300px] z-30 transform hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl">
            <Image 
              src="/images/card3.png" 
              alt="0.01% Failure Rate" 
              width={200} 
              height={200} 
              className="object-contain" 
            />
          </div>

          <div className="absolute bottom-[-100] right-36 z-20 transform hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl">
            <Image 
              src="/images/card4.png" 
              alt="95% Faster Processing" 
              width={170} 
              height={170} 
              className="object-contain" 
            />
          </div>
        </div>
      </div>

      {/* Partner Logos Bottom */}
      <div className="pt-30 w-full max-w-7xl">
        <p className="text-[#FFFFFF] text-lg mb-6 font-medium">Partners in Financial Success</p>
        <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          <Image src="/images/Clogo1.png" alt="Slack" width={100} height={100} className="object-contain h-auto h-[100px]" />
          <Image src="/images/Clogo2.png" alt="Amazon" width={100} height={30} className="object-contain h-auto max-h-[30px]" />
          <Image src="/images/Clogo3.png" alt="Dropbox" width={120} height={30} className="object-contain h-auto max-h-[30px]" />
          <Image src="/images/Clogo4.png" alt="Loom" width={90} height={30} className="object-contain h-auto max-h-[30px]" />
        </div>
      </div>
    </section>
  );
}