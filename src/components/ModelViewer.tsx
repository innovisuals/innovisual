
import React, { useEffect, useRef } from "react";

interface ModelViewerProps {
  modelSrc: string;
  alt: string;
  className?: string;
  poster?: string;
  arEnabled?: boolean;
}

const ModelViewer: React.FC<ModelViewerProps> = ({
  modelSrc,
  alt,
  className = "",
  poster,
  arEnabled = true
}) => {
  const viewerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Handle any initialization if needed
    if (viewerRef.current) {
      // Example: you could add event listeners here
      // viewerRef.current.addEventListener('load', () => console.log('Model loaded'));
    }
  }, []);

  // Return JSX instead of void
  return (
    <div className={`model-viewer-container ${className}`}>
      <img 
        src={modelSrc} 
        alt={alt} 
        className="w-full h-full object-contain" 
      />
    </div>
  );
};

export default ModelViewer;
