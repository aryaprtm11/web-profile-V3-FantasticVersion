'use client'

import { useState, useCallback, Suspense, lazy } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faTerminal, faCertificate } from "@fortawesome/free-solid-svg-icons";
import GradientText from "../GradientText/GradientText";
import BlurText from "../BlurText/BlurText";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import { Button, ButtonGroup } from "@heroui/button";

// Lazy load komponen
const Project = lazy(() => import("../UI/project").then(module => ({ default: module.Project })));
const Certif = lazy(() => import("../UI/certif").then(module => ({ default: module.Certif })));
const Tech = lazy(() => import("../UI/tech").then(module => ({ default: module.Tech })));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
  </div>
);

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('project');
  
  // Memoize kategori untuk optimasi
  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  return (
    <section id="portofolio" className="container mx-auto px-4 py-12">
      <AnimatedContent>
        <GradientText
          colors={["#E4B1F0", "#7E60BF", "#FFE1FF", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-center mb-3">Portofolio</h2>
        </GradientText>
      </AnimatedContent>
      <AnimatedContent>
        <div className="flex justify-center w-full">
          <BlurText
            text="Let's have a look at my portofolio showcase"
            delay={50}
            animateBy="words"
            direction="top"
            className="text-white font-poppins text-lg sm:text-xl mb-8 text-center"
          />
        </div>
      </AnimatedContent>
      
      <AnimatedContent>
        <div className="flex flex-col sm:flex-row justify-center items-center border-none m-4 mb-8 gap-2 sm:gap-0">
          <Button
            onClick={() => handleCategoryChange('project')}
            className={`bg-background/60 hover:bg-[#67729D] dark:bg-default-100/50 p-6 sm:p-12 font-poppins text-white text-base sm:text-xl flex flex-col items-center px-8 sm:px-28 w-full sm:w-auto ${activeCategory === 'project' ? 'bg-[#67729D]' : ''}`}
          >
            <FontAwesomeIcon icon={faTerminal} className="text-lg sm:text-xl mb-2 text-white" />
            Project
          </Button>
          <Button
            onClick={() => handleCategoryChange('certificate')}
            className={`bg-background/60 hover:bg-[#67729D] dark:bg-default-100/50 p-6 sm:p-12 font-poppins text-white text-base sm:text-xl flex flex-col items-center px-8 sm:px-28 w-full sm:w-auto ${activeCategory === 'certificate' ? 'bg-[#67729D]' : ''}`}
          >
            <FontAwesomeIcon icon={faCertificate} className="text-lg sm:text-xl mb-2 text-white" />
            Certificates
          </Button>
          <Button
            onClick={() => handleCategoryChange('techStack')}
            className={`bg-background/60 hover:bg-[#67729D] dark:bg-default-100/50 p-6 sm:p-12 font-poppins text-white text-base sm:text-xl flex flex-col items-center px-8 sm:px-28 w-full sm:w-auto ${activeCategory === 'techStack' ? 'bg-[#67729D]' : ''}`}
          >
            <FontAwesomeIcon icon={faCubes} className="text-lg sm:text-xl mb-2 text-white" />
            Tech Stack
          </Button>
        </div>
      </AnimatedContent>
    
      <div className="flex flex-wrap justify-center gap-8">
        <Suspense fallback={<LoadingSpinner />}>
          {activeCategory === 'project' && <Project />}
          {activeCategory === 'certificate' && <Certif />}
          {activeCategory === 'techStack' && <Tech />}
        </Suspense>
      </div>
    </section>
  );
} 