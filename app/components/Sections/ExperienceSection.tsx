'use client'

import { Suspense, lazy } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faCertificate, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import GradientText from "../GradientText/GradientText";
import BlurText from "../BlurText/BlurText";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import CountUp from "../CountUp/CountUp";
import { Card, CardBody } from "@heroui/card";
import { MarqueeDemo } from "../UI/exp-card";
import { BorderBeam } from "../UI/border-beam";

// Lazy load Globe component
const Globe = lazy(() => import("../UI/globe").then(module => ({ default: module.Globe })));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
  </div>
);

export default function ExperienceSection() {
  return (
    <section id="experience" className="container mx-auto px-4 py-12">
      <AnimatedContent>
        <GradientText
          colors={["#E4B1F0", "#7E60BF", "#FFE1FF", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
        >
          <h2 className="text-4xl font-poppins font-bold text-center mb-3">Experience</h2>
        </GradientText>
      </AnimatedContent>
      <AnimatedContent>
        <div className="flex justify-center w-full">
          <BlurText
            text="Let's have a look at my experience"
            delay={50}
            animateBy="words"
            direction="top"
            className="text-white font-poppins text-xl text-center"
          />
        </div>
      </AnimatedContent>

      <AnimatedContent>
        <div style={{ transform: 'scale(0.65)' }}>
          <Suspense fallback={<LoadingSpinner />}>
            <Globe className="mb-10" />
          </Suspense>
        </div>
      </AnimatedContent>

      <div className="flex justify-center mb-10 mt-96">
        <AnimatedContent distance={50}>
          <Card 
            isBlurred
            className="border-none bg-[#67729D]/30 dark:bg-default-100/50 max-w-[400px] m-4 pr-20 backdrop-blur-sm"
            shadow="sm"
          >
            <CardBody className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="text-4xl mr-10 text-white bg-gradient-to-br from-blue-950 to-purple-700 p-6 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faTerminal} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-poppins text-white">Total Project</span>
                    <CountUp
                      from={0}
                      to={6}
                      separator=","
                      duration={2}
                      className="text-4xl font-bold text-white"
                    />
                  </div>
                </div>
              </div>
            </CardBody>
            <BorderBeam duration={12} size={300} />
          </Card>
        </AnimatedContent>

        <AnimatedContent distance={100}> 
          <Card 
            isBlurred
            className="border-none bg-[#67729D]/30 dark:bg-default-100/50 max-w-[400px] m-4 pr-20 backdrop-blur-sm"
            shadow="sm"
          >
            <CardBody className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="text-4xl mr-10 text-white bg-gradient-to-br from-blue-950 to-purple-700 p-6 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faCertificate} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-poppins text-white">Certificates</span>
                    <CountUp
                      from={0}
                      to={7}
                      separator=","
                      duration={3}
                      className="text-4xl font-bold text-white"
                    />
                  </div>
                </div>
              </div>
            </CardBody>
            <BorderBeam duration={12} size={300} />
          </Card>
        </AnimatedContent>

        <AnimatedContent distance={150}>
          <Card 
            isBlurred
            className="border-none bg-[#67729D]/30 dark:bg-default-100/50 max-w-[400px] m-4 pr-20 backdrop-blur-sm"
            shadow="sm"
          >
            <CardBody className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="text-4xl mr-10 text-white bg-gradient-to-br from-blue-950 to-purple-700 p-6 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faPeopleArrows} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-poppins text-white">Total Activity</span>
                    <CountUp
                      from={0}
                      to={4}
                      separator=","
                      duration={2}
                      className="text-4xl font-bold text-white"
                    />
                  </div>
                </div>
              </div>
            </CardBody>
            <BorderBeam duration={12} size={300} />
          </Card>
        </AnimatedContent>
      </div>

      <AnimatedContent>
        <div className="flex flex-wrap justify-center gap-8">
          <MarqueeDemo />
        </div>
      </AnimatedContent>
    </section>
  );
} 