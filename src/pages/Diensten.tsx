
import React, { useEffect } from "react";

const Diensten: React.FC = () => {
  useEffect(() => {
    document.title = "Diensten | INNOVISUAL";
  }, []);

  return (
    <div className="min-h-screen bg-white w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#5c899d]">Diensten</h1>
        <p className="text-gray-600">Inhoud volgt binnenkort.</p>
      </div>
    </div>
  );
};

export default Diensten;
