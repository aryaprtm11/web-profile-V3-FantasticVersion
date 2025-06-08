import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import { BorderBeam } from "./border-beam";
import { ShimmerButton } from "./shimmer-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLaptopCode,
    faCircleInfo,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { ShinyButton } from "./shiny-button";
import { useState } from "react";

interface ProjectData {
  title: string;
  img: string;
  images: string[];
  body: string;
  demoLink: string;
  detailsLink: string;
  fullDescription: string;
  technologies: string[];
  position: string[]; // Changed to array to support multiple positions
  tasks: string[];
  duration: string;
  startDate: string;
  endDate: string;
}

// Mapping untuk tech stack icons
const techIconMap: { [key: string]: string } = {
  "PHP": "./project-logo/php.png",
  "MySQL": "./project-logo/Mysql.png",
  "Postgresql": "./project-logo/postgresql.png",
  "HTML": "./project-logo/Html.png",
  "CSS": "./project-logo/CSS.png",
  "JavaScript": "./project-logo/Js.png",
  "Tiled": "./project-logo/tiled.png", // Using tiled as fallback for Unity
  "C#": "./project-logo/type.png", // Using typescript as fallback for C#
  "Aseprite": "./project-logo/aseprite.png",
  "Game Design": "./project-logo/Figma.png", // Using Figma for design
  "Node.js": "./project-logo/Js.png", // Using JS icon for Node.js
  "MongoDB": "./project-logo/postgresql.png", // Using postgresql as fallback
  "Express.js": "./project-logo/Js.png", // Using JS icon for Express
  "Laravel": "./project-logo/laravel.png",
  "Bootstrap": "./project-logo/Bootstrap(2).png",
  "Chart.js": "./project-logo/Js.png", // Using JS icon for Chart.js
  "Tailwind": "./project-logo/Tailwind.png",
  "React": "./project-logo/React.png",
  "TypeScript": "./project-logo/type.png",
  "Firebase": "./project-logo/firebase.png",
  "Flutter": "./project-logo/flutter.png",
  "Dart": "./project-logo/dart.png",
  "Python": "./project-logo/Python.png",
  "MaterialUI": "./project-logo/MUI.png",
  "Figma": "./project-logo/Figma.png",
  "Arduino": "./project-logo/ide.png",
  "NextJS": "./project-logo/next.png"
};

// Function to get tech icon
const getTechIcon = (techName: string): string | null => {
  return techIconMap[techName] || null;
};

export function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const list: ProjectData[] = [
    {
      title: "Website Agenda Surat Desa",
      img: "./project-exp/agenda-surat/Agenda.jpg",
      images: ["./project-exp/agenda-surat/Agenda-detail-1.jpg", "./project-exp/agenda-surat/Agenda-detail-2.png", "./project-exp/agenda-surat/Agenda-detail-3.png"],
      body: "The project is one of the flagship work programs of my Community Service (KKN) to develop a letter agenda management website in Seloretno village.",
      demoLink: "#",
      detailsLink: "#",
      fullDescription: "This comprehensive letter agenda management system was developed during my Community Service (KKN) program in Seloretno village. The system helps village administrators manage and track official letters efficiently.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Laravel"],
      position: ["Full Stack Developer"],
      tasks: ["Designing a database for the mail management system“, ”Developing admin and user interfaces", "Implementation of mail tracking system", "Application testing and deployment"],
      duration: "1 months",
      startDate: "2025-01-10",
      endDate: "2025-02-02"
    },
    {
      title: "Gozy Cat",
      img: "./gozy.png",
      images: ["./gozy.png", "./gozy-2.png", "./gozy-3.png"],
      body: "The Adventure of Gozy Cat is a 2D pixel platform game where we can play the main character named Gozy to be able to overcome various obstacles.",
      demoLink: "#",
      detailsLink: "#",
      fullDescription: "A charming 2D pixel art platformer game featuring Gozy Cat as the main character. Players navigate through various levels filled with obstacles, enemies, and collectibles.",
      technologies: ["Python", "Aseprite", "Tiled"],
      position: ["Game Programming"],
      tasks: ["Implementation levels and gameplay mechanics", "Implementation of assessment and collection system", "Game testing and debugging"],
      duration: "2 months",
      startDate: "2024-03-25",
      endDate: "2024-05-20"
    },
    {
      title: "City Bus",
      img: "./project-exp/city-bus/City-Bus.png",
      images: ["./project-exp/city-bus/city-detail-1.jpg", "./project-exp/city-bus/city-detail-2.jpg", "./project-exp/city-bus/city-detail-3.jpg"],
      body: "City Bus is a public service-themed application that provides ticket booking services for city buses to facilitate the public in booking city bus tickets.",
      demoLink: "#",
      detailsLink: "#",
      fullDescription: "A comprehensive bus ticket booking application designed to modernize public transportation services. The app allows users to book tickets, track buses, and manage their travel efficiently.",
      technologies: ["Figma"],
      position: ["UI Design"],
      tasks: ["Designing user interface for bus booking application", "Create wireframe and prototype of booking system", "Designing user experience flow for ticket booking"],
      duration: "5 months",
      startDate: "2024-02-01",
      endDate: "2024-06-30"
    },
    {
      title: "Posyandu Banjar Agung",
      img: "./project-exp/posyandu/PosBan.jpg",
      images: ["./project-exp/posyandu/PosBan-detail-1.jpg", "./project-exp/posyandu/PosBan-detail-2.jpg", "./project-exp/posyandu/PosBan-detail-3.png"],
      body: "The project is one of the flagship work programs of my Community Service (KKN) to develop a letter agenda management website in Seloretno village.",
      demoLink: "#",
      detailsLink: "#",
      fullDescription: "The project is one of the flagship work programs of my Community Service (KKN) to develop a letter agenda management website in Seloretno village.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "Chart.js", "PHP"],
      position: ["Project Manager", "Backend Developer"],
      tasks: ["Develop an authentication system for posyandu cadres", "Determine the features needed and develop a development timeline", "Manage communication between the development team and the posyandu.", "Monitoring system and database performance"],
      duration: "3 months",
      startDate: "2024-10-01",
      endDate: "2024-12-15"
    },
    {
      title: "Uneeds",
      img: "./project-exp/uneeds/Uneeds.png",
      images: ["./project-exp/uneeds/Uneeds-detail-1.jpg", "./project-exp/uneeds/Uneeds-detail-2.jpg", "./project-exp/uneeds/Uneeds-detail-3.jpg"],
      body: "Uneeds is a productivity management app specifically designed to help college students manage their academic life more effectively and organized.",
      demoLink: "https://drive.google.com/file/d/1dTL7KOXJ0TUkTiWOJmm7gIY3YjUtRo1h/view?usp=sharing",
      detailsLink: "https://drive.google.com/file/d/1dTL7KOXJ0TUkTiWOJmm7gIY3YjUtRo1h/view?usp=sharing",
      fullDescription: "Uneeds is a productivity management app specifically designed to help college students manage their academic life more effectively and organized.",
      technologies: ["Flutter", "Dart", "Firebase"],
      position: ["Frontend Developer", "UI/UX Designer"],
      tasks: ["Developing mobile productivity apps with Flutter", "Design a user-friendly interface", "Implementation of task management feature and lecture schedule", "Integration with Firebase for data synchronization"],
      duration: "2 months",
      startDate: "2025-04-02",
      endDate: "2025-05-31"
    },
    {
      title: "Hidroponic Monitoring System",
      img: "./project-exp/hidroponic/hidroponic.jpg",
      images: ["./project-exp/hidroponic/Hidroponic-detail-1.jpg", "./project-exp/hidroponic/Hidroponic-detail-2.jpg", "./project-exp/hidroponic/Hidroponic-detail-3.jpg"],
      body: "This Indoor hydroponic plant automatic monitoring and maintenance system is to facilitate users or gardeners in caring for their hydroponic plants.",
      demoLink: "https://hidroponic-monitor.vercel.app/",
      detailsLink: "https://hidroponic-monitor.vercel.app/",
      fullDescription: "This hydroponic plant maintenance and monitoring automation system is implemented in a pot that is specially designed to effectively carry out its functionality. Through this automated system, the gardener does not have to struggle in monitoring their hydroponic plants as the system will automatically notify the gardener of hydroponic plant care indicator values such as water volume, water temperature, and solar lighting. These values will later be presented in a website that is specifically created to interact with the gardener.",
      technologies: ["Arduino", "Firebase", "Tailwind", "React", "NextJS"],
      position: ["Web Developer", "IoT Developer"],
      tasks: ["Developing a hydroponic plant monitoring website", "Assembling IoT hydroponic pots with several components", "Developing arduino code so that the function of the IoT can run", "Conduct testing of the circuit"],
      duration: "1 months",
      startDate: "2023-10-01",
      endDate: "2023-12-31"
    },
  ];

  const openModal = (project: ProjectData) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="gap-8 grid grid-cols-2 sm:grid-cols-3">
        {list.map((item, index) => (
          <AnimatedContent
              key={index}
              distance={200}
              direction="vertical"
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              scale={1.1}
              threshold={0.2}
          >
              <Card
                  isBlurred
                  shadow="lg"
                  className="border-none bg-[#67729D]/30 dark:bg-default-100/50 backdrop-blur-sm rounded-lg overflow-hidden hover:scale-105"
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
                      <b className="text-white text-xl text-left mt-4 font-poppins">{item.title}</b>
                      <p className="text-white text-sm mt-2 text-left font-poppins">{item.body}</p>
                  </div>
                  <div className="mt-6 justify-between flex space-x-4 text-white text-xs">
                      <ShimmerButton 
                          background="#474F7A" 
                          className="w-auto"
                          onClick={() => {
                            if (item.demoLink && item.demoLink !== '#') {
                              window.open(item.demoLink, '_blank');
                            }
                          }}
                      >
                          <FontAwesomeIcon icon={faLaptopCode} style={{color: "#ffffff",}} className="mr-1"/>
                          Demo
                      </ShimmerButton>
                      <button 
                          onClick={() => openModal(item)}
                          className="rounded-md bg-[#474F7A] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
                          type="button"
                      >
                          <FontAwesomeIcon icon={faCircleInfo} style={{color: "#ffffff",}} className="mr-2"/>
                          See Details 
                      </button>
                  </div>
                  </CardBody>
              </Card>
          </AnimatedContent>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 backdrop-blur-sm z-[10000] flex items-center justify-center p-4 overflow-hidden">
          <div 
            className="absolute inset-0 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          <div className="bg-[#3A366D] border border-white/20 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white font-poppins">{selectedProject.title}</h2>
              <button 
                onClick={closeModal}
                className="text-white hover:text-purple-300 transition-colors duration-200 p-2"
              >
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              </button>
            </div>
            
            {/* Full Width Image */}
            <div className="mb-6">
              <div className="flex gap-3">
                {/* Main Image */}
                <div className="flex-1">
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="flex flex-col gap-2 w-48">
                  {selectedProject.images.slice(0, 3).map((image, index) => (
                    <div
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        currentImageIndex === index 
                          ? 'border-purple-400 shadow-lg scale-105' 
                          : 'border-white/20 hover:border-white/40 hover:scale-102'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${selectedProject.title} ${index + 1}`}
                        className="w-full h-30 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Description & Duration + Tech Stack & Features */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Description & Duration */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white font-poppins mb-3">Description</h3>
                  <p className="text-white/90 text-sm font-poppins leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white font-poppins mb-3">Duration</h3>
                  <p className="text-white/90 text-sm font-poppins">
                    {selectedProject.duration}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white font-poppins mb-3">Work Period</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-white/70 text-sm font-poppins w-20">Start:</span>
                      <span className="text-white/90 text-sm font-poppins">{new Date(selectedProject.startDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white/70 text-sm font-poppins w-20">End:</span>
                      <span className="text-white/90 text-sm font-poppins">{new Date(selectedProject.endDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Tech Stack & Features */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white font-poppins mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => {
                      const iconPath = getTechIcon(tech);
                      return iconPath ? (
                        <div 
                          key={index}
                          className="bg-white/10 backdrop-blur-sm border border-white/20 p-2 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110 group"
                          title={tech} // Tooltip untuk menampilkan nama teknologi saat hover
                        >
                          <Image
                            src={iconPath}
                            alt={tech}
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                      ) : (
                        // Fallback untuk teknologi yang tidak memiliki icon
                        <div 
                          key={index}
                          className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-full text-white text-sm font-poppins hover:bg-white/20 transition-colors duration-200"
                        >
                          {tech}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white font-poppins mb-3">Position</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.position.map((pos, index) => (
                      <span 
                        key={index}
                        className="text-white/90 text-sm font-poppins bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-full"
                      >
                        {pos}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white font-poppins mb-3">Tasks</h3>
                  <ul className="space-y-2">
                    {selectedProject.tasks.map((task, index) => (
                      <li key={index} className="text-white/90 text-sm font-poppins flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4">
              <ShimmerButton 
                background="#474F7A" 
                className="w-auto px-6"
                onClick={() => {
                  if (selectedProject.demoLink && selectedProject.demoLink !== '#') {
                    window.open(selectedProject.demoLink, '_blank');
                  }
                }}
              >
                <FontAwesomeIcon icon={faLaptopCode} className="mr-2"/>
                Live Demo
              </ShimmerButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
