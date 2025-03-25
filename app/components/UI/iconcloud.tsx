import AnimatedContent from "../AnimatedContent/AnimatedContent";
import { IconCloud } from "./icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconClouds() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <AnimatedContent>
        <div className="relative flex justify-center items-center overflow-hidden min-h-screen scale-110">
            <div className="scale-150">
                <IconCloud images={images} />
            </div>
        </div>
    </AnimatedContent>
  );
}