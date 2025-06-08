'use client'

import { useMemo } from 'react';
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import SplitText from "../SplitText/SplitText";
import RotatingText from "../RotatingText/RotatingText";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import { InteractiveHoverButton } from "../UI/interactive-hover-button";

export default function HeroSection() {
  // Memoize komponen yang sering di-render ulang
  const memoizedRotatingText = useMemo(() => (
    <RotatingText
      texts={['Web Development', 'Web Designer', 'Digital Product', 'UI UX Designer']}
      mainClassName="px-2 sm:px-2 md:px-3 bg-[#FF8F00] text-white overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg font-poppins text-2xl font-bold inline-flex transition-all"
      staggerFrom={"last"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={3000}
    />
  ), []);

  return (
    <header id="home" className="container mx-auto h-screen pt-32">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-6 mx-auto">
          <div className="flex items-center h-full -mt-8">
            <div className="flex flex-col gap-4">
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <div className="mt-4 mx-auto max-w-xl">
                  <SplitText
                    text="Hello, im Arya Pratama!"
                    className="font-poppins text-5xl font-bold text-start text-white"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>
              </AnimatedContent>
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <div className="flex items-center gap-2">
                  <SplitText
                    text="i'm a"
                    className="font-poppins text-5xl font-bold text-start text-white"
                    delay={75}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  {memoizedRotatingText}
                </div>
              </AnimatedContent>
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                threshold={0.2}
              >
                <p className="text-xl mb-8 font-polta mt-4 mx-auto max-w-xl text-white leading-relaxed">
                  I am a student with Informatics Engineering study program and studying at Institut Teknologi Sumatera. 
                  I have a sense of wanting to try something new that can improve my soft skills and hard skills. Not only have an interest in the IT world, 
                  but I also have an interest in the business field. My plan in the next 5 years is to become a Backend Developer. During college I often 
                  participated in several committee activities, volunteered, and also participated in planning a project with my teammates.
                </p>
              </AnimatedContent>
              <AnimatedContent>
                <div className="">
                  <a href="#contact"> <InteractiveHoverButton>Let's Connect</InteractiveHoverButton></a>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
        <div className="col-span-6 flex items-center justify-center -mt-8">
          <ProfilePhoto size={450} />
        </div>
      </div>
    </header>
  );
} 