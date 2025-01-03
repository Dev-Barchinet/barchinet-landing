import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowWeWork } from "@/components/HowWeWork";
import { Intro } from "@/components/Intro";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Intro />
      <div className="my-16 max-w-screen-xl mx-auto px-10">
        <VideoPlayer videoSrc="/assets/videos/landing.mp4" />
      </div>
      <HowWeWork />
      <ContactUs />
      <Footer />
    </div>
  );
}
