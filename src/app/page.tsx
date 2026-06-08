import { BuiltForSection } from "@/components/BuiltForSection";
import { CareCompanionSection } from "@/components/CareCompanionSection";
import { CollectionSection } from "@/components/CollectionSection";
import { CraftsmanshipSection } from "@/components/CraftsmanshipSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { WhySylvaAurisSection } from "@/components/WhySylvaAurisSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CollectionSection />
        <WhySylvaAurisSection />
        <CareCompanionSection />
        <CraftsmanshipSection />
        <BuiltForSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
