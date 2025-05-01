import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoaded(true), 300); // lichte vertraging voor smoothness
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ease-out pointer-events-none ${
        loaded ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src="/Logo-5c899d-1200x400.png"
        alt="INNOVISUAL logo"
        className="w-48 mb-6"
      />
      <div className="w-16 h-16 border-2 border-[#5C899D] border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default Preloader;
