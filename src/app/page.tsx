import { ClosingSection } from "@/components/ClosingSection";
import { CountdownSection } from "@/components/CountdownSection";
import { EnvelopeSection } from "@/components/EnvelopeSection";
import { GallerySection } from "@/components/GallerySection";
import { GiftSection } from "@/components/GiftSection";
import { HeroSection } from "@/components/HeroSection";
import { InvitationSection } from "@/components/InvitationSection";
import { RSVPSection } from "../components/RSVPSection";
import { StorySection } from "@/components/StorySection";
import { VenueSection } from "@/components/VenueSection";

export default function Home() {
  return (
    <main className="bg-[#f5f0e8] text-neutral-950">
      <HeroSection />

      <InvitationSection />

      <StorySection />

      <CountdownSection />

      <VenueSection />

      <GallerySection />

      <RSVPSection />

      <GiftSection />

      <ClosingSection />

      <EnvelopeSection />
    </main>
  );
}
