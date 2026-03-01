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
    <main >
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