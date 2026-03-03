import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import OffersSection from "@/components/OffersSection";
import BigStatsBanner from "@/components/BigStatsBanner";
import TopDealsSection from "@/components/TopDealsSection";
import ReviewsSection from "@/components/ReviewsSection";
import FeaturedSection from "@/components/FeaturedSection";
import BestDealsSection from "@/components/BestDealsSection";
import PartnersSection from "@/components/PartnersSection";
import ReferralSection from "@/components/ReferralSection";
import AppSection from "@/components/AppSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-page overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <OffersSection />
      <BigStatsBanner />
      <TopDealsSection />
      <ReviewsSection />
      <FeaturedSection />
      <BestDealsSection />
      <PartnersSection />
      <ReferralSection />
      <AppSection />
      <Footer />
    </main>
  );
}
