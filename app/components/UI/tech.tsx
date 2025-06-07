import { Card, CardBody, Image } from "@heroui/react";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

export function Tech() {
  const list = [
    { title: "Figma", img: "./project-logo/Figma.png" },
    { title: "Html", img: "./project-logo/Html.png" },
    { title: "CSS", img: "./project-logo/css.png" },
    { title: "Javascript", img: "./project-logo/Js.png" },
    { title: "Tailwind", img: "./project-logo/Tailwind.png" },
    { title: "React JS", img: "./project-logo/React.png" },
    { title: "Python", img: "./project-logo/Python.png" },
  ];

  return (
    // Bungkus grid dengan container yang memiliki max-width dan mx-auto
    <div className="max-w-6xl mx-auto px-4">
      <div className="gap-8 grid grid-cols-2 sm:grid-cols-6">
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
              key={item.title}
              className="border-none bg-[#67729D]/30 dark:bg-default-100/50 backdrop-blur-sm group relative overflow-hidden"
              shadow="sm"
            >
              <CardBody className="flex flex-col items-center p-4 justify-center flex-1">
                <div className="flex flex-col items-center">
                  <Image
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                    src={item.img}
                  />
                  <b className="text-white text-lg mt-4">{item.title}</b>
                </div>
              </CardBody>
            </Card>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}
