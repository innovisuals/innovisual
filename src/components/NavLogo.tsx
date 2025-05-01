
import React from "react";

const NavLogo: React.FC = () => {
  // Using the same logo from the footer
  const logoPath = "/lovable-uploads/23f553fa-c357-4e2b-9a30-c9f874d4f3b1.png";
  
  return (
    <div className="nav-logo-container absolute left-1/2 transform -translate-x-1/2">
      <img 
        src={logoPath} 
        alt="INNOVISUAL Logo" 
        className="h-10 w-auto"
      />
    </div>
  );
};

export default NavLogo;
