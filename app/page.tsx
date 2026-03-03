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
import LastChanceSection from "@/components/LastChanceSection";
import TopCashbacksSection from "@/components/TopCashbacksSection";
import HelpSection from "@/components/HelpSection";

export default function Home() {
  return (
    <main className="bg-page overflow-x-hidden pt-[142px]">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <OffersSection />
      <BigStatsBanner />
      <TopDealsSection />
      <LastChanceSection /> 
      <ReviewsSection />
      <FeaturedSection />
      <BestDealsSection />
      <TopCashbacksSection />
      <ReferralSection />
      <PartnersSection />
      
      
      
      <HelpSection />
      <AppSection />
      <Footer />
    </main>
  );
}
