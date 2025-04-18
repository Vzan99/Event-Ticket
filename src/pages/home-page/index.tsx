import CreateSection from "./sections/create-section";
import EventsSection from "./sections/events-section";
import HeroSection from "./sections/hero-section";

export default function HomeViewPage() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <EventsSection />
      </div>
      <div>
        <CreateSection />
      </div>
    </div>
  );
}
