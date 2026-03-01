import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Hero from "@/app/components/features/Hero";
import FintechFeatures from "./components/features/FintechFeatures";
import ComplianceSecurityCard from "./components/features/FinancialSolutions";
import ApiDeveloperSection from "./components/features/EnterpriseProtection";
import EnterpriseProtection from "./components/features/EnterpriseProtection";
import SuccessStories from "./components/features/SuccessStories";
import PricingSection from "./components/features/PricingSection";
import CTASection from "./components/features/CTASection";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    // We apply the background images here via inline style for layering and positioning
    <main 
      className="min-h-screen overflow-hidden bg-[#0B1121] relative"
      style={{
        // Order: top layer first. Dots repeat, gradient doesn't.
        // REPLACE PATHS WITH YOUR ACTUAL FILENAMES
        backgroundImage: 'url(/images/BackgroundPattern.png), url(/images/BackgroundGradient.png)', 
        backgroundRepeat: 'repeat, no-repeat',
        backgroundPosition: 'center center, left center',
        // 'cover' scales the gradient image to cover the height.
        backgroundSize: 'auto, cover', 
      }}
    >
      <Navbar />
      <Hero />
      <FintechFeatures/>
      <ComplianceSecurityCard/>
      <EnterpriseProtection/>
      <SuccessStories/>
      <PricingSection/>
      <CTASection/>
      <Footer/>
    </main>
  );
}
