import React from "react";
const ScrollingTextBar: React.FC = () => {
  // We'll duplicate the text multiple times to ensure smooth infinite scrolling
  const scrollText = "Let's talk: we luisteren, we denken mee en je hoort binnen 24 uur van ons. ";
  // Add proper spacing between repeated instances
  const repeatedText = Array(10).fill(scrollText).join(" • ");
  return <div className="w-full bg-[#5c899d] text-white overflow-hidden py-0">
      
    </div>;
};
export default ScrollingTextBar;