import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

export function Certif() {
  const list = [
    {
      title: "Python Dasar",
      img: "./certificate/py-dasar.png",
    },
    {
      title: "Python Lanjutan",
      img: "./certificate/py-lanjut.png",
    },
    {
      title: "Python Struktur Data",
      img: "./certificate/py-asd.png",
    },
    {
      title: "Nusa Code",
      img: "./certificate/nusa.png",
    },
    {
      title: "Aiesec Local Project",
      img: "./certificate/aiesec-lp.png",
    },
    {
        title: "Aiesec Future Leaders",
        img: "./certificate/aiesec-afl.png",
    },
    {
        title: "Hmif Mengabdi",
        img: "./certificate/hmif.png",
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
              isBlurred
              key={index}
              className="border-none bg-[#67729D]/30 dark:bg-default-100/50 backdrop-blur-sm rounded-lg overflow-hidden hover:scale-105"
              shadow="sm"
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
