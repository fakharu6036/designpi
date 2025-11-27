import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import FAQSection from "@/components/FAQSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <PricingSection />
      <PortfolioSection />
      <BlogPreviewSection />
      <FAQSection />
      <SiteFooter />
    </div>
  );
}
