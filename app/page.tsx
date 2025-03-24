'use client'

import Image from "next/image";
import { useState } from 'react';
import Lanyard from "./components/Lanyard/Lanyard";
import SplitText from "./components/SplitText/SplitText";
import RotatingText from "./components/RotatingText/RotatingText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import { Meteors } from "./components/UI/meteors";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import { InteractiveHoverButton } from "./components/UI/interactive-hover-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCubes,
  faTerminal,
  faCertificate,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import GradientText from "./components/GradientText/GradientText";
import CountUp from "./components/CountUp/CountUp";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { MarqueeDemo } from "./components/UI/exp-card";
import { BorderBeam } from "./components/UI/border-beam";
import { Ripple } from "./components/UI/ripple";
import { ShootingStars } from "./components/UI/shooting-stars";
import { StarsBackground } from "./components/UI/stars-background";
import { Globe } from "./components/UI/globe";
import {Button, ButtonGroup} from "@heroui/button";
import { Project } from "./components/UI/project";
import { Certif } from "./components/UI/certif";
import { Tech } from "./components/UI/tech";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('project');
  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#251e47]">
      <Ripple
        mainCircleOpacity={1.0}
      />
      <SplashCursor/>
      <ShootingStars />
      <StarsBackground />
      <Meteors number={30} />
      <header id="home" className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
        <nav className="fixed top-0 left-0 right-0 bg-[#67729D] bg-opacity-25 z-50 rounded-3xl w-[60%] mx-auto mt-5">
          <div className="container mx-auto px-12 py-4 flex justify-between items-center">
            <h1 className="font-shrik text-3xl font-bold text-white">ARYA PRATAMA</h1>
            <ul className="flex space-x-4">
              <li><a href="#home" className="font-poppins font-bold text-white hover:text-gray-800">About Me</a></li>
              <li><a href="#experience" className="font-poppins font-bold text-white hover:text-gray-800 ml-4">Experience</a></li>
              <li><a href="#portofolio" className="font-poppins font-bold text-white hover:text-gray-800 ml-4">Portofolio</a></li>
              <li><a href="#contact" className="font-poppins font-bold text-white hover:text-gray-800 ml-4">Contact</a></li>
            </ul>
          </div>
        </nav>

          <div className="col-span-6 mx-auto">
            <div className="flex items-center h-full">
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
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>
                <BlurText
                  text="I am a student with Informatics Engineering study program and studying at Institut Teknologi Sumatera. 
                  I have a sense of wanting to try something new that can improve my soft skills and hard skills. Not only have an interest in the IT world, 
                  but I also have an interest in the business field. My plan in the next 5 years is to become a Backend Developer. During college I often 
                  participated in several committee activities, volunteered, and also participated in planning a project with my teammates."
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-8 font-polta mt-4 mx-auto max-w-xl text-white"
                />
                <AnimatedContent>
                  <div className="">
                    <a href="google.com"> <InteractiveHoverButton>Let's Connect</InteractiveHoverButton></a>
                  </div>
                </AnimatedContent>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            
          </div>
        </div>
      </header>

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
              text="Let’s have a look at my experience"
              delay={50}
              animateBy="words"
              direction="top"
              className="text-white font-poppins text-xl text-center"
            />
          </div>
        </AnimatedContent>

        <AnimatedContent>
          <div style={{ transform: 'scale(0.65)' }}>
            <Globe className="mb-10" />
          </div>
        </AnimatedContent>


        <div className="flex justify-center mb-10 mt-96">
          <AnimatedContent
            distance={50}
          >
            <Card 
              isBlurred
              className="border-none bg-background/60 dark:bg-default-100/50 max-w-[400px] m-4 pr-20"
              shadow="sm"
            >
              <CardBody className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faTerminal} className="text-4xl mr-10 text-white bg-[#67729D] p-6 rounded-full" />
                    <div className="flex flex-col">
                      <span className="text-xl font-poppins text-white">Total Project</span>
                      <CountUp
                        from={0}
                        to={5}
                        separator=","
                        duration={2}
                        className="text-4xl font-bold text-white"
                      />
                    </div>
                  </div>
                </div>
              </CardBody>
              <BorderBeam duration={8} size={300} />
            </Card>
          </AnimatedContent>

          <AnimatedContent
            distance={100}
          > 
            <Card 
              isBlurred
              className="border-none bg-background/60 dark:bg-default-100/50 max-w-[400px] m-4 pr-20"
              shadow="sm"
            >
              <CardBody className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCertificate} className="text-4xl mr-10 text-white bg-[#67729D] p-6 rounded-full" />
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
            <BorderBeam duration={8} size={300} />
            </Card>
          </AnimatedContent>

          <AnimatedContent
            distance={150}
          >
            <Card 
              isBlurred
              className="border-none bg-background/60 dark:bg-default-100/50 max-w-[400px] m-4 pr-20"
              shadow="sm"
            >
              <CardBody className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                  <FontAwesomeIcon icon={faPeopleArrows} className="text-4xl mr-10 text-white bg-[#67729D] p-6 rounded-full" />
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
              <BorderBeam duration={8} size={300} />
            </Card>
          </AnimatedContent>
        </div>

        <AnimatedContent>
          <div className="flex flex-wrap justify-center gap-8">
            <MarqueeDemo></MarqueeDemo>
          </div>
        </AnimatedContent>
    </section>

    <section id="portofolio" className="container mx-auto px-4 py-12">
      <AnimatedContent>
        <GradientText
          colors={["#E4B1F0", "#7E60BF", "#FFE1FF", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
        >
          <h2 className="text-4xl font-poppins font-bold text-center mb-3">Portofolio</h2>
        </GradientText>
      </AnimatedContent>
      <AnimatedContent>
        <div className="flex justify-center w-full">
          <BlurText
            text="Let’s have a look at my portofolio showcase"
            delay={50}
            animateBy="words"
            direction="top"
            className="text-white font-poppins text-xl mb-8 text-center"
          />
        </div>
      </AnimatedContent>
      
      <AnimatedContent>
          <ButtonGroup className="flex justify-center items-center border-none m-4 mb-8">
            <Button
              onClick={() => setActiveCategory('project')}
              className={`bg-background/60 hover:bg-[#67729D] dark:bg-default-100/50 p-12 font-poppins text-white text-xl flex flex-col items-center px-28 ${activeCategory === 'project' ? 'bg-[#67729D]' : ''}`}
            >
              <FontAwesomeIcon icon={faTerminal} className="text-xl mb-2 text-white" />
              Project
            </Button>
            <Button
              onClick={() => setActiveCategory('certificate')}
              className={`bg-background/60 hover:bg-[#67729D] dark:bg-default-100/50 p-12 font-poppins text-white text-xl flex flex-col items-center px-28 ${activeCategory === 'certificate' ? 'bg-[#67729D]' : ''}`}
            >
              <FontAwesomeIcon icon={faCertificate} className="text-xl mb-2 text-white" />
              Certificates
            </Button>
            <Button
              onClick={() => setActiveCategory('techStack')}
              className={`bg-background/60 hover:bg-[#67729D] dark:bg-default-100/50 p-12 font-poppins text-white text-xl flex flex-col items-center px-28 ${activeCategory === 'techStack' ? 'bg-[#67729D]' : ''}`}
            >
              <FontAwesomeIcon icon={faCubes} className="text-xl mb-2 text-white" />
              Tech Stack
            </Button>
          </ButtonGroup>
      </AnimatedContent>
    
      <div className="flex flex-wrap justify-center gap-8">
        {activeCategory === 'project' && <Project />}
        {activeCategory === 'certificate' && <Certif />}
        {activeCategory === 'techStack' && <Tech />}
      </div>
    </section>

    <section id="contact" className="container mx-auto px-4 py-12">
      <AnimatedContent>
        <GradientText
          colors={["#E4B1F0", "#7E60BF", "#FFE1FF", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
        >
          <h2 className="text-4xl font-poppins font-bold text-center mb-3">Contact</h2>
        </GradientText>
      </AnimatedContent>
      <AnimatedContent>
        <div className="flex justify-center w-full">
          <div className="text-center max-w-4xl">
            <BlurText
              text="I am always open to opportunities to work together or provide services regarding digital products or want to establish a relationship with me can follow my social media below"
              delay={50}
              animateBy="words"
              direction="top"
              className="text-white font-poppins text-xl mb-8"
            />
          </div>
        </div>
      </AnimatedContent>

      <div className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="col-span-2 ...">
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[400px] m-4 pr-20"
            shadow="sm"
          >
            <CardBody>
            <GradientText
              colors={["#E4B1F0", "#7E60BF", "#FFE1FF", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
            >
              <h2 className="text-3xl font-poppins font-bold text-left mb-3">Get in Touch</h2>
            </GradientText>
            <div>
              <form action="">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" className="border" />
                <label htmlFor="email">Email</label>
                <input type="text" />
                <label htmlFor="subject">Subject</label>
                <input type="text" />
                <label htmlFor="Message">Message</label>
              </form>
            </div>

            </CardBody>
          </Card>
        </div>
        <div className="col-span-2 row-span-2 ...">03</div>
        <div className="row-span-3 ...">01</div>
      </div>
    </section>
  </div>
  );
}
