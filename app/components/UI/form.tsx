"use client";
import React, { useRef } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const github = useRef<HTMLButtonElement>(null);
  const linkedin = useRef<HTMLButtonElement>(null);
  const insta = useRef<HTMLButtonElement>(null);

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 w-full">
          <LabelInputContainer>
            <Label htmlFor="name" className="text-white text-xl font-poppins">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="Tyler"
              type="text"
              className="border-none outline-none w-full bg-[#4c5269]/40"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-white text-xl font-poppins">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            className="border-none outline-none w-full bg-[#4c5269]/40"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject" className="text-white text-xl font-poppins">
            Subject
          </Label>
          <Input
            id="subject"
            placeholder="Discuss about project"
            type="text"
            className="border-none outline-none w-full bg-[#4c5269]/40"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message" className="text-white text-xl font-poppins">
            Message
          </Label>
          <textarea
            id="message"
            placeholder="Hello I want to discuss about some project..."
            className="border-1 border-white w-full rounded-lg p-4 resize-none h-32 bg-[#4c5269]/40 text-white font-poppins text-base"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-14 w-full rounded-md bg-gradient-to-br from-blue-950 to-purple-700 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-wrap justify-center gap-6 mt-4"> {/* Reduced the margin-top here */}
          <button
            ref={github}
            className="group/btn justify-center shadow-input relative flex h-14 w-full items-center space-x-2 rounded-md bg-[#4c5269]/40 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
            onClick={() => handleLinkClick("https://github.com/aryaprtm11")}
          >
            <IconBrandGithub className="h-10 w-10 text-white dark:text-neutral-300 bg-black rounded-full p-2" />
            <span className="text-lg text-white dark:text-neutral-300">GitHub</span>
            <BottomGradient />
          </button>
          <button
            ref={linkedin}
            className="group/btn justify-center shadow-input relative flex h-14 w-full items-center space-x-2 rounded-md bg-[#4c5269]/40 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
            onClick={() => handleLinkClick("https://www.linkedin.com/in/arya-pratama-2a8420265/")}
          >
            <IconBrandLinkedin className="h-10 w-10 text-white dark:text-neutral-300 bg-blue-400 rounded-full p-2" />
            <span className="text-lg text-white dark:text-neutral-300">LinkedIn</span>
            <BottomGradient />
          </button>
          <button
            ref={insta}
            className="group/btn justify-center shadow-input relative flex h-14 w-full items-center space-x-2 rounded-md bg-[#4c5269]/40 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
            onClick={() => handleLinkClick("https://www.instagram.com/arya.prtma11/")}
          >
            <IconBrandInstagram className="h-10 w-10 text-red-700 dark:text-neutral-300 bg-red-400 rounded-full p-2" />
            <span className="text-lg text-white dark:text-neutral-300">Instagram</span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};