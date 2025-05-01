import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

const NavContactDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ivory"
          className="bg-[#FFFCEF] text-[#5C899D] px-6 py-2 text-xs font-semibold rounded-md transition-all duration-300 hover:scale-[1.04] hover:bg-[#FFFCEF]/90"
        >
          LETS TALK
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[500px] max-h-[90vh] overflow-y-auto bg-[#FFFCEF]/90 p-6 border-[#5C899D]">
        <ContactForm />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavContactDropdown;
