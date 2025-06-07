'use client'

import Image from "next/image";
import { useState } from "react";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

interface ProfilePhotoProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

export default function ProfilePhoto({ 
  src = "/assets/profile/profile.png", 
  alt = "Arya Pratama Profile",
  size = 350,
  className = ""
}: ProfilePhotoProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={true}
        config={{ tension: 120, friction: 20 }}
        initialOpacity={0.3}
        animateOpacity
        scale={1.05}
        threshold={0.2}
      >
        <div className="relative group">
          {/* Orbiting Rockets */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Rocket 1 */}
            <div 
              className="absolute"
              style={{ 
                width: size + 100, 
                height: size + 100,
                animation: 'orbit 12s linear infinite'
              }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-3xl">
                🚀
              </div>
            </div>
            
            {/* Rocket 2 */}
            <div 
              className="absolute"
              style={{ 
                width: size + 80, 
                height: size + 80,
                animation: 'orbit 8s linear infinite reverse'
              }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-2xl">
                🛸
              </div>
            </div>
            
            {/* Rocket 3 */}
            <div 
              className="absolute"
              style={{ 
                width: size + 120, 
                height: size + 120,
                animation: 'orbit 15s linear infinite'
              }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-2xl">
                🛰️
              </div>
            </div>
            
            {/* Orbit trails */}
            <div 
              className="absolute border border-purple-300/20 rounded-full"
              style={{ 
                width: size + 100, 
                height: size + 100
              }}
            ></div>
            <div 
              className="absolute border border-blue-300/15 rounded-full"
              style={{ 
                width: size + 80, 
                height: size + 80
              }}
            ></div>
            <div 
              className="absolute border border-purple-200/10 rounded-full"
              style={{ 
                width: size + 120, 
                height: size + 120
              }}
            ></div>
          </div>
          
          {/* Profile photo container */}
          <div className="relative z-10">
            <div 
              className="relative overflow-hidden rounded-full border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-white/10"
              style={{ width: size, height: size }}
            >
              {/* Loading skeleton */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 animate-pulse rounded-full"></div>
              )}
              
              {/* Fallback avatar when image fails */}
              {imageError && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <div className="text-white text-5xl font-bold">AP</div>
                </div>
              )}
              
              {/* Profile image */}
              {!imageError && (
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className={`object-cover object-center transition-all duration-700 hover:scale-110 rounded-full ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </AnimatedContent>
      
      {/* CSS for rocket orbit animation */}
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}</style>
    </div>
  );
} 