import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import { BorderBeam } from "./border-beam";
import { ShimmerButton } from "./shimmer-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLaptopCode,
    faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { ShinyButton } from "./shiny-button";

export function Project() {
  const list = [
    {
      title: "Website Agenda Surat Desa",
      img: "./agenda.png",
      body: "The project is one of the flagship work programs of my Community Service (KKN) to develop a letter agenda management website in Seloretno village.",
      demoLink: "#",
      detailsLink: "#"
    },
    {
      title: "Gozy Cat",
      img: "./gozy.png",
      body: "The Adventure of Gozy Cat is a 2D pixel platform game where we can play the main character named Gozy to be able to overcome various obstacles.",
      demoLink: "#",
      detailsLink: "#"
    },
    {
      title: "City Bus",
      img: "./City Bus.png",
      body: "City Bus is a public service-themed application that provides ticket booking services for city buses to facilitate the public in booking city bus tickets.",
      demoLink: "#",
      detailsLink: "#"
    },
    {
      title: "BeCare",
      img: "./BeCare.png",
      body: "BeCare is a mobile health app that enhances well-being and fosters a supportive community, ready to listen and assist users with their health concerns.",
      demoLink: "#",
      detailsLink: "#"
    },
    {
      title: "Posyandu Banjar Agung",
      img: "./banjar.jpg",
      body: "The project is one of the flagship work programs of my Community Service (KKN) to develop a letter agenda management website in Seloretno village.",
      demoLink: "#",
      detailsLink: "#"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="gap-8 grid grid-cols-2 sm:grid-cols-3">
        {list.map((item, index) => (
          <AnimatedContent
              distance={200}
              direction="vertical"
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              scale={1.1}
              threshold={0.2}
          >
              <Card
                  key={index}
                  isBlurred
                  shadow="lg"
                  className="flex flex-col bg-[#67729D] rounded-lg overflow-hidden hover:scale-105"
              >
                  <BorderBeam
                      duration={8} 
                      size={300}
                  ></BorderBeam>
                  <CardBody className="flex flex-col p-4 justify-between flex-1">
                  <div className="flex flex-col items-start">
                      <Image
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg" // Consistent image size (fixed height)
                      src={item.img}
                      />
                      <b className="text-white text-xl text-left mt-4">{item.title}</b>
                      <p className="text-white text-sm mt-2 text-left">{item.body}</p>
                  </div>
                  <div className="mt-6 justify-between flex space-x-4 text-white text-xs">
                      <ShimmerButton background="#474F7A" className="w-auto">
                          <FontAwesomeIcon icon={faLaptopCode} style={{color: "#ffffff",}} className="mr-1"/>
                          Demo
                      </ShimmerButton>
                      <button className="rounded-md bg-[#474F7A] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                          <FontAwesomeIcon icon={faCircleInfo} style={{color: "#ffffff",}} className="mr-2"/>
                          See Details 
                      </button>
                  </div>
                  </CardBody>
              </Card>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}
