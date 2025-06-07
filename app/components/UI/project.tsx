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
  position: string;
  tasks: string[];
  duration: string;
  startDate: string;
  endDate: string;
}

export function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const list: ProjectData[] = [
    {
      title: "Website Agenda Surat Desa",
      img: "./agenda.png",
      images: ["./agenda.png", "./agenda-2.png", "./agenda-3.png"],
      body: "The project is one of the flagship work programs of my Community Service (KKN) to develop a letter agenda management website in Seloretno village.",
      demoLink: "#",
      detailsLink: "#",
      fullDescription: "This comprehensive letter agenda management system was developed during my Community Service (KKN) program in Seloretno village. The system helps village administrators manage and track official letters efficiently.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      position: "Full Stack Developer",
      tasks: ["Merancang database untuk sistem manajemen surat", "Mengembangkan interface admin dan user", "Implementasi sistem tracking surat", "Testing dan deployment aplikasi"],
      duration: "3 months",
      startDate: "2023-07-01",
      endDate: "2023-09-30"
    },
    {
      title: "Gozy Cat",
      img: "./gozy.png",
      images: ["./gozy.png", "./gozy-2.png", "./gozy-3.png"],
      body: "The Adventure of Gozy Cat is a 2D pixel platform game where we can play the main character named Gozy to be able to overcome various obstacles.",
      demoLink: "#",
      detailsLink: "#",
      fullDescription: "A charming 2D pixel art platformer game featuring Gozy Cat as the main character. Players navigate through various levels filled with obstacles, enemies, and collectibles.",
      technologies: ["Unity", "C#", "Pixel Art", "Game Design"],
      position: "Game Developer",
      tasks: ["Merancang level dan gameplay mechanics", "Membuat animasi karakter Gozy Cat", "Implementasi sistem scoring dan collectibles", "Testing dan debugging game"],
      duration: "4 months",
      startDate: "2023-01-15",
      endDate: "2023-05-15"
    },
    {
      title: "City Bus",
      img: "./City Bus.png",
      images: ["./City Bus.png", "./city-bus-2.png", "./city-bus-3.png"],
      body: "City Bus is a public service-themed application that provides ticket booking services for city buses to facilitate the public in booking city bus tickets.",
      demoLink: "#",
      detailsLink: "#",
      fullDescription: "A comprehensive bus ticket booking application designed to modernize public transportation services. The app allows users to book tickets, track buses, and manage their travel efficiently.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express.js"],
      position: "Mobile App Developer",
      tasks: ["Mengembangkan aplikasi mobile dengan React Native", "Membuat REST API untuk booking system", "Integrasi dengan sistem pembayaran", "Implementasi real-time tracking bus"],
      duration: "5 months",
      startDate: "2024-02-01",
      endDate: "2024-06-30"
    },
    {
      title: "BeCare",
      img: "./BeCare.png",
      images: ["./BeCare.png", "./becare-2.png", "./becare-3.png"],
      body: "BeCare is a mobile health app that enhances well-being and fosters a supportive community, ready to listen and assist users with their health concerns.",
      demoLink: "#",
      detailsLink: "#",
      fullDescription: "A comprehensive health and wellness mobile application that connects users with healthcare professionals and creates a supportive community for health-related discussions and support.",
      technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
      position: "Flutter Developer",
      tasks: ["Mengembangkan aplikasi mobile dengan Flutter", "Integrasi dengan Firebase untuk real-time chat", "Implementasi sistem konsultasi kesehatan", "Membuat fitur community dan health tracking"],
      duration: "6 months",
      startDate: "2023-08-01",
      endDate: "2024-01-31"
    },
    {
      title: "Posyandu Banjar Agung",
      img: "./banjar.jpg",
      images: ["./banjar.jpg", "./banjar-2.jpg", "./banjar-3.jpg"],
      body: "The project is one of the flagship work programs of my Community Service (KKN) to develop a letter agenda management website in Seloretno village.",
      demoLink: "#",
      detailsLink: "#",
      fullDescription: "A digital health monitoring system developed for Posyandu Banjar Agung to track maternal and child health records, vaccination schedules, and health statistics for the community.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "Chart.js"],
      position: "Web Developer",
      tasks: ["Mengembangkan sistem monitoring kesehatan ibu dan anak", "Membuat dashboard untuk data kesehatan", "Implementasi sistem jadwal vaksinasi", "Training penggunaan sistem ke staff Posyandu"],
      duration: "3 months",
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
                      <ShimmerButton background="#474F7A" className="w-auto">
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
                  <h3 className="text-lg font-semibold text-white font-poppins mb-3">Periode Pengerjaan</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-white/70 text-sm font-poppins w-20">Mulai:</span>
                      <span className="text-white/90 text-sm font-poppins">{new Date(selectedProject.startDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white/70 text-sm font-poppins w-20">Selesai:</span>
                      <span className="text-white/90 text-sm font-poppins">{new Date(selectedProject.endDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Tech Stack & Features */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white font-poppins mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-white text-sm font-poppins"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white font-poppins mb-3">Posisi</h3>
                  <p className="text-white/90 text-sm font-poppins bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-full inline-block">
                    {selectedProject.position}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white font-poppins mb-3">Tugas</h3>
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
              <ShimmerButton background="#474F7A" className="w-auto px-6">
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
