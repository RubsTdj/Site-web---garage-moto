import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnersBanner from "@/components/PartnersBanner";
import ProblemSection from "@/components/ProblemSection";
import AutomationSection from "@/components/AutomationSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import PortailClientSection from "@/components/PortailClientSection";
import DashboardSection from "@/components/DashboardSection";
import HowItWorks from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PartnersBanner />
        <ProblemSection />
        <AutomationSection />
        <FeaturesGrid />
        <PortailClientSection />
        <DashboardSection />
        <HowItWorks />
        <BenefitsSection />
        <Testimonials />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
