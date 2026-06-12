import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { VerticalServiceTimeline } from "@/components/VerticalServiceTimeline";
import { ProductStoryRail } from "@/components/ProductStoryRail";
import { SpecialEquipmentSection } from "@/components/SpecialEquipmentSection";
import { SafetySection } from "@/components/SafetySection";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <VerticalServiceTimeline />
      <ProductStoryRail />
      <SpecialEquipmentSection />
      <SafetySection />
      <FinalCTA />
    </main>
  );
}
