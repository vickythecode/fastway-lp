"use client";

import { useState } from 'react';
import Image from 'next/image';

// Data for the interactive security features list
const securityFeatures = [
  {
    id: 0,
    title: 'End-to-End Encryption',
    desc: 'Every transaction is encrypted, safeguarding sensitive financial data from unauthorized access.',
    iconSrc: '/images/lock2.png', // Replace with your exact lock icon
    imageSrc: '/images/Vektor.png', // Replace with your right-side card image export
  },
  {
    id: 1,
    title: 'PCI DSS Level 1 Compliance',
    desc: 'Ensuring the highest level of payment security for processing transactions.',
    iconSrc: '/images/LockLaminated.png', // Replace with your exact PCI lock icon
    imageSrc: '/images/api.png', // Swap if you have different images for each step
  },
  {
    id: 2,
    title: 'AI-Powered Fraud Detection',
    desc: 'Advanced machine learning models analyze transaction patterns to detect and prevent fraudulent activities in real-time.',
    iconSrc: '/images/Sparkle.png', // Replace with your exact AI sparkle icon
    imageSrc: '/images/Vektor.png', 
  },
  {
    id: 3,
    title: 'Regulatory Compliance (KYC, AML, PSD2)',
    desc: 'Built-in compliance solutions to meet global financial regulations and ensure a seamless user verification process.',
    iconSrc: '/images/order.png', // Replace with your exact shield/regulatory icon
    imageSrc: '/images/Vektor.png', 
  }
];

export default function EnterpriseProtection() {
  // State to track the active feature for the blue line indicator
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white py-24 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center  mx-auto mb-20">
          <p className="text-[#0066FF] font-semibold tracking-wider text-base mb-4 uppercase">
            Security & Compliance
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900 tracking-tight">
            Enterprise-Grade Protection for Your Business
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-3xl m-auto">
            Our platform is designed to meet the highest industry standards, ensuring your transactions, customer data, and financial operations remain secure and fully compliant with global regulations.
          </p>
        </div>

        {/* Two-Column Layout: List on Left, Image on Right */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content - Clickable Feature List */}
          <div className="flex flex-col gap-8">
            {securityFeatures.map((feature, index) => {
              const isActive = activeIndex === index;
              
              return (
                <div 
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  // The blue left border indicator logic
                  className={`pl-6 border-l-2 cursor-pointer transition-all duration-300 ${
                    isActive ? 'border-[#0066FF]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-5 h-5 relative flex-shrink-0">
                      <Image 
                        src={feature.iconSrc} 
                        alt={feature.title} 
                        fill 
                        className="object-contain" 
                      />
                    </div>
                    <h3 className={`text-lg font-semibold transition-colors ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[#606060] text-lg leading-relaxed pl-8">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Content - Floating Card with Pattern Background */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square flex items-center justify-center">
            
            {/* Confined Pattern Background for the right side only */}
            <div 
              className="absolute inset-0 pointer-events-none z-0" 
              style={{ 
                backgroundImage: "url('/images/BackgroundPattern.png')", 
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
                opacity: 0.5 
              }}
            />

            {/* Main Feature Image (The Black Credit Card & Badges) */}
            {/* NOTE: Export this entire black card with the floating white badges as one single PNG from Figma! */}
            <div className="relative w-full h-[80%] z-10" style={{ 
                backgroundImage: "url('/images/BackgroundPattern2.png')", 
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 100 // Adjust this if the pattern is too harsh or too faint
              }}>
              <Image 
                key={securityFeatures[activeIndex].imageSrc}
                src={securityFeatures[activeIndex].imageSrc} 
                alt="Security Card Illustration" 
                fill 
                className="object-contain transition-opacity duration-500 ease-in-out" 
              />
            </div>
            
          </div>
        </div>

     {/* Bottom Logo Banner */}
        <div className="mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 max-w-6xl">
          {/* Make sure you export the Logoipsum SVG/PNGs and put them in your images folder */}
          <div className="relative w-32 h-8"><Image src="/images/logoc3.png" alt="Logoipsum" fill className="object-contain" /></div>
          <div className="relative w-32 h-8"><Image src="/images/logoc2.png" alt="Logoipsum" fill className="object-contain" /></div>
          <div className="relative w-32 h-8"><Image src="/images/logoc1.png" alt="Logoipsum" fill className="object-contain" /></div>
          <div className="relative w-32 h-8"><Image src="/images/logoc4.png" alt="Logoipsum" fill className="object-contain" /></div>
        </div>

      </div>
    </section>
  );
}