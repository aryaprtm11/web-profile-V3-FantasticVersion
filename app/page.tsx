'use client'

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Meteors } from "./components/UI/meteors";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import { Ripple } from "./components/UI/ripple";
import Navbar from "./components/Layout/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import PortfolioSection from "./components/Sections/PortfolioSection";
import ContactSection from "./components/Sections/ContactSection";
import LoadingScreen from "./components/UI/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="min-h-screen w-full overflow-hidden bg-transparent"
        >
          <Ripple mainCircleOpacity={0.8} />
          <SplashCursor/>
          <Meteors number={30} />
          
          <Navbar />
          <HeroSection />
          <ExperienceSection />
          <PortfolioSection />
          <ContactSection />
        </motion.div>
      )}
    </>
  );
}
