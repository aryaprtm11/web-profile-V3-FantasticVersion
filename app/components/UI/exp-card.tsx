import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";

const reviews = [
  {
    name: "AIESEC Local Project",
    body: "Here I am a volunteer in the AIESEC local project by taking the theme of Widyawiyata activities where we focus on education issues in Lampung (SDGs No. 4).",
    img: "/lp.jpg",
  },
  {
    name: "AIESEC Future Leader",
    body: "Joining the AIESEC Future Leaders program gave me the opportunity to practice my leadership skills and network with other friends.",
    img: "/afl.jpg",
  },
  {
    name: "Assistant Practicum PKS 1",
    body: "Became a practicum assistant in the Introduction to Computers and Software 1 course by teaching skills in the field of Ms. Office.",
    img: "/pks1.jpg",
  },
  {
    name: "Assistant Practicum PKS 2",
    body: "Practicum assistant for Introduction to Computer Software course, teaching introduction to C++ programming language.",
    img: "/asprak.jpeg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative flex flex-col items-center w-80 cursor-pointer overflow-hidden rounded-xl border p-6 shadow-lg",
        // light styles
        "border-gray-950/[.1] bg-[#3A366D] hover:bg-[#4A4480]",
        // dark styles
        "dark:border-gray-50/[.1] bg-[#3A366D] hover:bg-[#4A4480]"
      )}
    >
      <div className="flex flex-row items-center justify-center mb-4">
        <img className="rounded-xl w-100 h-60 object-cover" alt="" src={img} />
      </div>
      <figcaption className="text-lg text-white font-medium dark:text-white text-center mb-2">
        {name}
      </figcaption>
      <blockquote className="text-sm text-white dark:text-white text-center">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {/* Pass all reviews to Marquee without splitting */}
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}