"use client";
import React, { useRef, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
// import emailjs from '@emailjs/browser';
// import { EMAILJS_CONFIG } from '@/lib/emailjs-config';

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');
    
    if (form.current) {
      try {
        // Create hidden iframe to submit form (bypasses CORS)
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.name = 'contact-form-frame';
        document.body.appendChild(iframe);
        
        // Set form target to iframe
        form.current.target = 'contact-form-frame';
        form.current.action = 'https://api.web3forms.com/submit';
        form.current.method = 'POST';
        
        // Submit form to iframe
        form.current.submit();
        
        // Listen for iframe load (indicates form submitted)
        iframe.onload = () => {
          setSubmitStatus('success');
          form.current?.reset();
          setIsLoading(false);
          
          // Clean up
          document.body.removeChild(iframe);
        };
        
        // Fallback timeout
        setTimeout(() => {
          if (iframe.parentNode) {
            setSubmitStatus('success');
            form.current?.reset();
            setIsLoading(false);
            document.body.removeChild(iframe);
          }
        }, 3000);
        
      } catch (error) {
        console.error('Submit Error:', error);
        setSubmitStatus('error');
        setIsLoading(false);
      }
    }
  };

  const github = useRef<HTMLButtonElement>(null);
  const linkedin = useRef<HTMLButtonElement>(null);
  const insta = useRef<HTMLButtonElement>(null);

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="">
      <form className="my-8" onSubmit={handleSubmit} ref={form}>
        {/* Web3Forms Configuration - Hidden fields */}
        <input type="hidden" name="access_key" value="361a30ef-21d6-4c4c-8438-0cd108afc2a0" />
        <input type="hidden" name="redirect" value="false" />
        
        <div className="mb-4 w-full">
          <LabelInputContainer>
            <Label htmlFor="name" className="text-white text-xl font-poppins">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Tyler"
              type="text"
              className="border-none outline-none w-full bg-[#4c5269]/40"
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-white text-xl font-poppins">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            className="border-none outline-none w-full bg-[#4c5269]/40"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject" className="text-white text-xl font-poppins">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Discuss about project"
            type="text"
            className="border-none outline-none w-full bg-[#4c5269]/40"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message" className="text-white text-xl font-poppins">
            Message
          </Label>
          <textarea
            id="message"
            name="message"
            placeholder="Hello I want to discuss about some project..."
            className="border-1 border-white w-full rounded-lg p-4 resize-none h-32 bg-[#4c5269]/40 text-white font-poppins text-base"
            required
          />
        </LabelInputContainer>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm font-poppins">
            ✅ Pesan berhasil dikirim! Terima kasih telah menghubungi saya.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm font-poppins">
            ❌ Terjadi kesalahan. Silakan coba lagi atau hubungi langsung via email.
          </div>
        )}

        <button
          className="group/btn relative block h-14 w-full rounded-md bg-gradient-to-br from-blue-950 to-purple-700 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="inline-flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Mengirim...
              </span>
            </>
          ) : (
            "Send Message →"
          )}
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-wrap justify-center gap-6 mt-4">
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