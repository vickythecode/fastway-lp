import Image from 'next/image';

export default function FintechFeatures() {
  return (
    <section className="w-full bg-white py-24 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#0066FF] font-semibold tracking-wider text-sm mb-4 uppercase">
            Why Choose Finech?
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900 tracking-tight">
            Powering the Future of Finance
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Unlock seamless transactions, secure financial services, and limitless scalability with our powerful, API-driven infrastructure.
          </p>
        </div>

        {/* Features Grid - 40/60 Split */}
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Left Card: Global Payments (40%) */}
          <div className="lg:col-span-2 border border-[#EDEDED] rounded-3xl p-8 md:p-10 relative overflow-hidden">
            
            {/* Pattern Overlay Layer - Separated to ensure it sits on the white background */}
            <div 
              className="absolute inset-0 pointer-events-none z-0" 
              style={{ 
                backgroundImage: "url('/images/BackgroundPattern.png')", 
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.6 // Adjust this if the pattern is too harsh or too faint
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                {/* Replaced SVG with Image tag for Global Payments Icon */}
                <Image src="/images/GlobeHemisphereWest.png" alt="Global Payments" width={24} height={24} className="object-contain" />
                <h3 className="text-2xl font-semibold text-gray-900">Global Payments</h3>
              </div>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Accept payments in 100+ currencies with instant settlement, ensuring smooth transactions across borders.
              </p>

              {/* Transaction Rows */}
              <div className="flex flex-col gap-3">
                <TransactionRow amount1="$1,237.58" currency1="USD" flag1="/images/usa.png" amount2="€1,130.32" currency2="EUR" flag2="/images/euro.png" />
                <TransactionRow amount1="$1,237.58" currency1="USD" flag1="/images/usa.png" amount2="£972.29" currency2="GBP" flag2="/images/uk.png" />
                <TransactionRow amount1="$1,237.58" currency1="USD" flag1="/images/usa.png" amount2="¥186,139.31" currency2="JPY" flag2="/images/Japan.png" />
                <TransactionRow amount1="$1,237.58" currency1="USD" flag1="/images/usa.png" amount2="A$1,884.74" currency2="AUD" flag2="/images/usd.png" />
              </div>
            </div>
          </div>

          {/* Right Card: Banking as a Service (60%) */}
          <div className="lg:col-span-3 border border-[#EDEDED] rounded-3xl p-8 md:p-10 relative overflow-hidden bg-white ">
            
            {/* Pattern Overlay Layer - Separated to ensure it sits on the white background */}
            <div 
              className="absolute inset-0 pointer-events-none z-0" 
              style={{ 
                backgroundImage: "url('/images/BackgroundPattern.png')", 
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.6 // Adjust this if the pattern is too harsh or too faint
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                {/* Replaced SVG with Image tag for Banking Icon */}
                <Image src="/images/Bank.png" alt="Banking as a Service" width={24} height={24} className="object-contain" />
                <h3 className="text-2xl font-semibold text-gray-900">Banking as a Service</h3>
              </div>
              <p className="text-gray-500 mb-10 leading-relaxed max-w-lg">
                Issue virtual and physical cards effortlessly, securely hold and manage funds, and seamlessly provide a wide range of financial services.
              </p>

              {/* Increased form width slightly by changing to a 12-column sub-grid (5 spans for images, 7 spans for form) */}
              <div className="grid sm:grid-cols-12 gap-8 items-center mt-6">
                
                {/* Left Side: Two Separate Debit Card Images (Takes 5/12) */}
                <div className="sm:col-span-5 flex flex-col gap-4 w-full justify-center">
                  
                  {/* Card 1 (Black Card) */}
                  <div className="relative w-full h-[180px] drop-shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                    <Image src="/images/debCard1.png" alt="Black Debit Card" fill className="object-contain" />
                  </div>
                  
                  {/* Card 2 (White Card) */}
                  <div className="relative w-full h-[180px] drop-shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                    <Image src="/images/debCard2.png" alt="White Debit Card" fill className="object-contain" />
                  </div>
                  
                </div>

                {/* Right Side: Card Creation Form (Takes 7/12 making it slightly larger) */}
                <div className="sm:col-span-7 bg-white rounded-2xl border border-[#EDEDED] shadow-sm p-6 flex flex-col gap-4">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">Create New Card</h4>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-700">Cardholder Name</label>
                    <input type="text" placeholder="Cardholder Name" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-blue-500 text-gray-900 placeholder:text-gray-400 bg-white" />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-700">Card Type</label>
                    <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-blue-500 text-gray-900 appearance-none bg-white">
                      <option>Virtual</option>
                      <option>Physical</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-700">Card Network</label>
                    <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-blue-500 text-gray-900 appearance-none bg-white">
                      <option>Visa</option>
                      <option>Mastercard</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5 mb-2">
                    <label className="text-xs font-medium text-gray-700">Currency</label>
                    <div className="relative">
                      <select className="w-full text-sm border border-gray-200 rounded-lg pl-8 pr-3 py-2.5 outline-none focus:border-blue-500 text-gray-900 appearance-none bg-white">
                        <option>USD</option>
                        <option>EUR</option>
                      </select>
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4">
                        <Image src="/images/usd.png" alt="USD" fill className="object-cover rounded-full" />
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-[#0066FF] hover:bg-blue-700 text-white font-medium text-sm py-2.5 rounded-lg transition-colors">
                    Create Card Now
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- NEW SECTION ADDED BELOW: 50/50 Split --- */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          
          {/* Scalability Card */}
          <div className="border border-[#EDEDED] rounded-3xl p-8 md:p-10 relative overflow-hidden bg-white ">
            
            {/* Pattern Overlay Layer */}
            <div 
              className="absolute inset-0 pointer-events-none z-0" 
              style={{ 
                backgroundImage: "url('/images/BackgroundPattern.png')", 
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.6
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                {/* Replace with your exact icon from Figma */}
                <Image src="/images/ArrowsOut.png" alt="Scalability" width={24} height={24} className="object-contain" />
                <h3 className="text-2xl font-semibold text-gray-900">Scalability</h3>
              </div>
              <p className="text-gray-500 mb-10 leading-relaxed max-w-lg">
                A robust, API-driven system built to seamlessly support startups and enterprises, providing the flexibility, scalability, and security.
              </p>

              {/* API Table (Using exported Image instead of HTML table) */}
              <div className="relative w-full rounded-2xl overflow-hidden z-20">
                <Image 
                  src="/images/api.png" /* Replace with your actual table image name */
                  alt="API Features Table" 
                  width={600} 
                  height={300} 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>

          {/* Compliance & Security Card */}
          <div className="border border-[#EDEDED] rounded-3xl p-8 md:p-10 relative overflow-hidden bg-white ">
            
            {/* Pattern Overlay Layer */}
            <div 
              className="absolute inset-0 pointer-events-none z-0" 
              style={{ 
                backgroundImage: "url('/images/BackgroundPattern.png')", 
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.6
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                {/* Replace with your exact icon from Figma */}
                <Image src="/images/LockLaminated.png" alt="Compliance & Security" width={24} height={24} className="object-contain" />
                <h3 className="text-2xl font-semibold text-gray-900">Compliance & Security</h3>
              </div>
              <p className="text-gray-500 mb-10 leading-relaxed max-w-lg">
                Built-in KYC, AML, and fraud prevention measures to keep every transaction safe and compliant.
              </p>

              {/* Security Features Grid */}
              <div className="bg-white p-4 rounded-3xl shadow-sm border border-[#EDEDED] relative z-20">
                <div className="grid grid-cols-2 gap-3">
                  {/* Replace all icon paths below with your actual exported Figma icon names */}
                  <SecurityCard title="Tokenization" icon="/images/LockKey.png" />
                  <SecurityCard title="MFA" icon="/images/Password.png" />
                  <SecurityCard title="Fraud Detection" icon="/images/Siren.png" />
                  <SecurityCard title="PCI DSS Compliance" icon="/images/pci.png" />
                  <SecurityCard title="Dispute Protection" icon="/images/dispute.png" />
                  <SecurityCard title="Monitoring" icon="/images/moni.png" />
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* --- END OF NEW SECTION --- */}

      </div>
    </section>
  );
}

function TransactionRow({ amount1, currency1, flag1, amount2, currency2, flag2 }: { amount1: string, currency1: string, flag1: string, amount2: string, currency2: string, flag2: string }) {
  return (
    <div className="group flex items-center justify-between p-4 rounded-xl shadow-sm transition-all duration-300 cursor-pointer border bg-white text-gray-900 border-[#EDEDED] hover:bg-black hover:text-white hover:border-black relative z-20">
      
      {/* Left Currency - Added flex-1 to strictly control width */}
      <div className="flex flex-col gap-0.5 flex-1 items-start">
        <span className="font-semibold text-lg">{amount1}</span>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
          <Image src={flag1} alt={currency1} width={16} height={16} className="rounded-full object-cover w-4 h-4" />
          {currency1}
        </div>
      </div>

      {/* Center Arrow - Replaced SVG with Image and added shrink-0 to prevent squishing */}
      <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors bg-gray-50 group-hover:bg-[#0066FF]">
        {/* Make sure you have this arrow image in your public/images folder */}
        <Image src="/images/arrow-icon.png" alt="Arrow" width={14} height={14} className="object-contain" />
      </div>

      {/* Right Currency - Added flex-1 and items-end to strictly control width */}
      <div className="flex flex-col gap-0.5 flex-1 items-end">
        <span className="font-semibold text-lg">{amount2}</span>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
          <Image src={flag2} alt={currency2} width={16} height={16} className="rounded-full object-cover w-4 h-4" />
          {currency2}
        </div>
      </div>

    </div>
  );
}

{/* --- NEW COMPONENT ADDED FOR SECURITY ICONS (Hover to black) --- */}
function SecurityCard({ title, icon }: { title: string, icon: string }) {
  return (
    <div className="group bg-white text-gray-900 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 transition-colors text-center border border-[#EDEDED] cursor-pointer hover:bg-black hover:border-black hover:text-white">
      
      {/* Persistent white rounded box for the icon */}
      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
        <div className="w-7 h-7 relative">
          <Image 
            src={icon} 
            alt={title} 
            fill 
            className="object-contain" 
          />
        </div>
      </div>

      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}