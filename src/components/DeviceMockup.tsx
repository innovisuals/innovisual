
import React, { useState } from "react";

interface DeviceMockupProps {
  children?: React.ReactNode; // Optional children
  type?: "phone" | "tablet";
  className?: string;
  useCustomImage?: boolean;
  videoSrc?: string;  // Prop for video source
  poster?: string;    // Prop for video poster image
  autoPlay?: boolean; // New prop for autoPlay
  loop?: boolean;     // New prop for loop
  muted?: boolean;    // New prop for muted
  controls?: boolean; // New prop to toggle controls
}

const DeviceMockup: React.FC<DeviceMockupProps> = ({
  children,
  type = "phone",
  className = "",
  useCustomImage = false,
  videoSrc,
  poster,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Render content based on whether we have a video source
  const renderContent = () => {
    if (videoSrc) {
      return (
        <video 
          src={videoSrc}
          poster={poster}
          className="w-full h-full object-cover"
          controls={controls}
          playsInline
          preload="auto"
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          onLoadedData={() => setIsVideoLoaded(true)}
        />
      );
    }
    return children;
  };

  if (useCustomImage) {
    return (
      <div className={`device-mockup relative ${className}`}>
        <div className="relative w-full max-w-xs mx-auto">
          {/* For custom image mockup, we'll use a different approach */}
          <div className="phone-frame relative">
            {/* Video content - positioned absolutely to be placed precisely */}
            {videoSrc && (
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="phone-screen-area">
                  {renderContent()}
                </div>
              </div>
            )}
            
            {/* Smartphone frame image on top */}
            <img 
              src="/lovable-uploads/6a145880-22fa-490b-9e91-8616cfc0e313.png" 
              alt="Modern smartphone mockup" 
              className="w-full h-auto relative z-10 pointer-events-none"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`device-mockup relative ${className}`}>
      <div className={`relative ${type === "phone" ? "w-64" : "w-80"} mx-auto`}>
        {/* Modern iPhone/Galaxy style device frame with curved corners and dynamic island */}
        <div className="shadow-xl rounded-[2.5rem] overflow-hidden bg-black border border-gray-700">
          {/* Camera island */}
          <div className="absolute top-0 inset-x-0 mx-auto flex justify-center z-10">
            <div className="h-7 w-24 bg-black rounded-b-3xl flex items-center justify-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
              <div className="w-4 h-1 rounded-full bg-black border border-gray-700"></div>
              <div className="w-3 h-3 rounded-full bg-gray-700 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
              </div>
            </div>
          </div>
          
          {/* Power button with subtle texture */}
          <div className="absolute top-24 -right-1 w-1.5 h-14 bg-gray-800 rounded-l-md transform">
            <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-md"></div>
          </div>
          
          {/* Volume buttons with subtle texture */}
          <div className="absolute top-20 -left-1 w-1.5 h-8 bg-gray-800 rounded-r-md transform">
            <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 rounded-r-md"></div>
          </div>
          <div className="absolute top-32 -left-1 w-1.5 h-8 bg-gray-800 rounded-r-md transform">
            <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 rounded-r-md"></div>
          </div>
          
          {/* Screen with subtle inner shadow */}
          <div className={`bg-white overflow-hidden ${type === "phone" ? "pt-9 px-1 pb-1" : "pt-10 px-2 pb-2"} relative shadow-inner`}>
            {/* Subtle screen reflections */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none z-10 opacity-50"></div>
            
            {/* Content */}
            <div className="w-full h-full rounded-[2rem] overflow-hidden">
              {renderContent()}
            </div>
          </div>
          
          {/* Home indicator */}
          <div className="h-1 w-16 bg-gray-600 mx-auto mb-1 rounded-full"></div>
        </div>
        
        {/* Phone shadow */}
        <div className="absolute -bottom-4 inset-x-0 h-4 bg-gradient-to-t from-black/10 to-transparent rounded-full filter blur-md"></div>
      </div>
    </div>
  );
};

export default DeviceMockup;
