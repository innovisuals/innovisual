import React from "react";
import ContactForm from "@/components/ContactForm";
import { useIsMobile } from "@/hooks/use-mobile";
import { useInView } from "@/hooks/useInView";

const ContactSection: React.FC<{
  forwardedRef: React.RefObject<HTMLDivElement>;
}> = ({ forwardedRef }) => {
  const isMobile = useIsMobile();
  const [ref, inView] = useInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "150px 0px"
  });

  return (
    <section ref={forwardedRef} className="w-full bg-[#FFFCEF] relative pb-[175px]">
      <div id="lets-talk">
        <div className={`px-4 ${isMobile ? "pt-[75px] pb-12 mt-[-30px]": "pt-[75px] pb-4"} max-w-7xl mx-auto`}>
          <h2
            className={`text-4xl font-bold text-center md:text-center text-[#5c899d] blur-fade-in ${inView ? "visible" : ""}`}
          >
            LET'S TALK!
          </h2>
        </div>

        <div className="w-full flex justify-center max-w-xl mx-auto">
          <div ref={ref} className="w-full">
            <div className={`blur-fade-in ${inView ? "visible" : ""}`} style={{ animationDelay: "200ms" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
