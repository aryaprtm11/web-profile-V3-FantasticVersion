'use client'

import { Meteors } from "./components/UI/meteors";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import { Ripple } from "./components/UI/ripple";
import Navbar from "./components/Layout/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import PortfolioSection from "./components/Sections/PortfolioSection";
import ContactSection from "./components/Sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-transparent">
      <Ripple mainCircleOpacity={0.8} />
      <SplashCursor/>
      <Meteors number={30} />
      
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
