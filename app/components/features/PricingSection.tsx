import Image from 'next/image';

// Step 1: Define the pricing data structure based on the design
const pricingPlans = [
  {
    id: 1,
    title: 'Starter Plan',
    price: '$0',
    priceSubtext: '/ month',
    discountText: '$19 for next month',
    description: 'Perfect for freelancers, small businesses, and early-stage startups who need a simple way to accept payments.',
    features: [
      'Process up to $10,000/month in transactions',
      'Accept Credit/Debit Cards & Bank Transfers',
      'Basic fraud protection for secure payments',
      'Standard API access for simple integrations'
    ],
    buttonText: 'Start Now',
    isDark: false,
  },
  {
    id: 2,
    title: 'Growth Plan',
    badge: 'MOST POPULAR',
    price: '$99',
    priceSubtext: '/ month',
    discountText: 'Discount 30% off',
    description: 'Best for growing businesses, SaaS platforms, and e-commerce stores looking for seamless transactions and fraud prevention.',
    features: [
      'Process up to $250,000/month in transactions',
      'Accept payments via Cards, Bank & Digital Wallets',
      'Advanced fraud protection & chargeback',
      'Full API access + Webhooks for integrations',
      '24/7 chat & email support for faster issue resolution',
      'Faster settlement speed (T+1) for better cash flow'
    ],
    buttonText: 'Choose Plan',
    isDark: true, // This triggers the dark highlighted styling
  },
  {
    id: 3,
    title: 'Scale Plan',
    price: 'Custom',
    priceSubtext: 'Pricing',
    discountText: 'Contact Us Now',
    description: 'Ideal for enterprises, marketplaces, and businesses processing high transaction volumes that need instant settlements and premium support.',
    features: [
      'Process up to $1,000,000/month in transactions',
      'Accept payments via all methods and local',
      'AI-powered fraud detection & real-time monitoring',
      'Dedicated API support with enterprise-grade',
      'Priority customer support via phone, chat & email',
      'Instant settlements for seamless cash flow',
      'Multi-currency support to expand globally'
    ],
    buttonText: 'Discuss Now',
    isDark: false,
  }
];

export default function PricingSection() {
  return (
    <section className="w-full bg-white py-24 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#0066FF] font-semibold tracking-wider text-sm mb-4 uppercase">
            Pricing Plan
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900 tracking-tight">
            Find the Right Plan for Your Business
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Transparent pricing with powerful features. Whether you're just starting out or processing high-volume transactions, we have a plan for you.
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Reusable Sub-component for individual pricing cards
function PricingCard({ 
  title, 
  badge, 
  price, 
  priceSubtext, 
  discountText, 
  description, 
  features, 
  buttonText, 
  isDark 
}: { 
  title: string, 
  badge?: string,
  price: string, 
  priceSubtext: string, 
  discountText: string, 
  description: string, 
  features: string[], 
  buttonText: string, 
  isDark: boolean 
}) {
  return (
    <div className={`relative flex flex-col p-8 md:p-10 rounded-[32px] overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl ${
      isDark 
        ? 'bg-[#111111] text-white shadow-2xl border border-gray-800' 
        : 'bg-white text-gray-900 shadow-sm border border-gray-100 hover:border-gray-200'
    }`}>
      
      {/* Background Pattern (Only clearly visible on the dark card in the design) */}
      {isDark && (
        <div 
          className="absolute inset-0 pointer-events-none z-0" 
          style={{ 
            backgroundImage: "url('/images/BackgroundPattern.png')", 
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            opacity: 0.15 
          }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Title Row */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          {badge && (
            <span className="text-[#0066FF] text-[10px] font-bold uppercase tracking-wider">
              {badge}
            </span>
          )}
        </div>

        {/* Pricing Block */}
        <div className="mb-2">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold tracking-tight">{price}</span>
            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>{priceSubtext}</span>
          </div>
          <p className={`mt-2 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
            {discountText}
          </p>
        </div>

        {/* Description */}
        <p className={`mt-6 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {description}
        </p>

        {/* Divider */}
        <div className={`w-full h-px my-8 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}></div>

        {/* Features List */}
        <div className="flex flex-col flex-grow">
          <p className={`text-[10px] font-bold tracking-widest uppercase mb-6 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Features
          </p>
          <ul className="flex flex-col gap-4 mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                {/* Blue Checkmark Icon */}
                <div className="mt-0.5 shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <span className={`text-[14px] leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <button className={`w-full py-4 rounded-xl font-semibold text-[15px] transition-colors mt-auto ${
          isDark 
            ? 'bg-[#0066FF] hover:bg-blue-700 text-white' 
            : 'bg-white border border-[#0066FF] text-[#0066FF] hover:bg-blue-50'
        }`}>
          {buttonText}
        </button>

      </div>
    </div>
  );
}