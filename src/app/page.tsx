import { ClosingSection } from "@/components/ClosingSection";
import { DetailsSection } from "@/components/DetailsSection";
import { FAQSection } from "@/components/FAQSection";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { RSVPSection } from "../components/RSVPSection";
import { ScrollFillText } from "@/components/ScrollFillText";
import { StorySection } from "@/components/StorySection";

export default function Home() {
  return (
    <main className="bg-[#f5f0e8] text-neutral-950">
      <HeroSection />

      <section className="px-6 md:px-16">
        <ScrollFillText text="you're cordially invited to celebrate the story of two people, one promise, and a day to remember." />
      </section>

      <StorySection />

      <GallerySection />

      <RSVPSection />

      <DetailsSection />

      <FAQSection />

      <ClosingSection />
    </main>
  );
}
