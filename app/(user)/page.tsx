import CTASection from "@/components/Home/CTASection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HeroSection from "@/components/Home/HeroSection";
import ProductsSection from "@/components/Home/ProductsSection";


export default function HomePage() {
  return (
    <main className="bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden">

      <HeroSection />

      <FeaturesSection />

      <ProductsSection />

      <CTASection />

    </main>
  );
}