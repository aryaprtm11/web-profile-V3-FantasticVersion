import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

export function Certif() {
  const list = [
    {
      title: "Python Dasar",
      img: "./py-dasar.png",
    },
    {
      title: "Python Lanjutan",
      img: "./py-lanjut.png",
    },
    {
      title: "Python Struktur Data",
      img: "./py-asd.png",
    },
    {
      title: "Nusa Code",
      img: "./nusa.png",
    },
    {
      title: "Aiesec Local Project",
      img: "./aiesec-lp.png",
    },
    {
        title: "Aiesec Future Leaders",
        img: "./aiesec-afl.png",
    },
    {
        title: "Hmif Mengabdi",
        img: "./hmif.png",
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
              className="flex flex-col bg-[#67729D] rounded-lg"
              >
              <CardBody className="flex flex-col p-4 justify-between flex-1">
                  <div className="flex flex-col items-start">
                  <Image
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg" // Consistent image size (fixed height)
                      src={item.img}
                  />
                  </div>
              </CardBody>
              </Card>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}
