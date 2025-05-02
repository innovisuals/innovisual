import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { ContactFormData, ContactPreference } from "@/types/contact-form";

interface ContactFormProps {
  prefillEmail?: string | null;
}

const ContactForm: React.FC<ContactFormProps> = ({
  prefillEmail
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors,
      isValid
    },
    setValue,
    trigger,
    reset
  } = useForm<ContactFormData>({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: prefillEmail || "",
      phone: "",
      contactReason: null,
      message: "",
      contactPreference: null
    }
  });
  
  const { toast } = useToast();
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [selectedPreference, setSelectedPreference] = useState<string | null>(null);
  
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('https://formspree.io/f/xjkynrod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          contactReason: data.contactReason,
          message: data.message || '',
          contactPreference: data.contactPreference
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      toast({
        title: "SAMEN INNOVEREN!",
        description: "We nemen zo snel mogelijk contact met u op.",
        className: "bg-[#5C899D] text-[#FFFCEF] rounded-xl shadow-md border border-[#5C899D]"
      });
      
      // Reset form after successful submission
      reset();
      setSelectedReason(null);
      setSelectedPreference(null);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Oeps, er ging iets mis",
        description: "Probeer opnieuw of mail ons op hello@innovisual.nl .",
        className: "bg-[#5C899D] text-[#FFFCEF] rounded-xl shadow-md border border-[#5C899D]",
        variant: "destructive"
      });
    }
  };

  const nameValue = watch("name");
  const emailValue = watch("email");
  const phoneValue = watch("phone");
  
  return <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8 animate-fade-in bg-[#5C899D]/10 rounded-none md:rounded-xl p-8 shadow-sm px-[35px] py-[35px]">
      {/* Introduction Text */}
     <div className="space-y-2">
  <p className="text-[#5C899D] text-lg font-medium">
    Laten we kennismaken.
  </p>

      {/* Step 1: Personal Information */}
      <div className="space-y-4">
        <Input placeholder="Naam" autoComplete="off" {...register("name", {
        required: "Naam is verplicht"
      })} className={`w-full text-lg font-medium h-[64px] border rounded-lg px-4 py-5 focus:ring-2 focus:outline-none placeholder:text-lg
            ${nameValue && !errors.name ? "bg-[#5C899D] text-[#FFFCEF] placeholder-[#FFFCEF] border-[#5C899D]" : "bg-[#FFFCEF] text-[#5C899D] placeholder-[#5C899D] border-[#5C899D] hover:bg-[#5C899D] hover:text-[#FFFCEF] hover:placeholder-[#FFFCEF]"}
            ${errors.name ? "border-red-500" : ""}`} />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}

        <Input type="email" placeholder="E-mail" autoComplete="off" {...register("email", {
        required: "E-mail is verplicht",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Ongeldig E-mailadres"
        }
      })} className={`w-full text-lg font-medium h-[64px] border rounded-lg px-4 py-5 focus:ring-2 focus:outline-none placeholder:text-lg
            ${emailValue && !errors.email ? "bg-[#5C899D] text-[#FFFCEF] placeholder-[#FFFCEF] border-[#5C899D]" : "bg-[#FFFCEF] text-[#5C899D] placeholder-[#5C899D] border-[#5C899D] hover:bg-[#5C899D] hover:text-[#FFFCEF] hover:placeholder-[#FFFCEF]"}
            ${errors.email ? "border-red-500" : ""}`} />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

        <Input type="tel" placeholder="Telefoonnummer" autoComplete="off" {...register("phone", {
        required: "Telefoonnummer is verplicht",
        pattern: {
          value: /^[0-9\s+()-]+$/,
          message: "Ongeldig telefoonnummer"
        }
      })} className={`w-full text-lg font-medium h-[64px] border rounded-lg px-4 py-5 focus:ring-2 focus:outline-none placeholder:text-lg
            ${phoneValue && !errors.phone ? "bg-[#5C899D] text-[#FFFCEF] placeholder-[#FFFCEF] border-[#5C899D]" : "bg-[#FFFCEF] text-[#5C899D] placeholder-[#5C899D] border-[#5C899D] hover:bg-[#5C899D] hover:text-[#FFFCEF] hover:placeholder-[#FFFCEF]"}
            ${errors.phone ? "border-red-500" : ""}`} />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>
       </div>

      {/* Step 2: Contact Reason */}
      <div className="space-y-2">
        <p className="text-[#5C899D] text-lg font-medium">Ik wil graag…</p>
        <div className="flex flex-col items-center space-y-3">
          <div
            onClick={() => {
              setSelectedReason("pilot");
              setValue("contactReason", "pilot", { shouldValidate: true });
              trigger("contactReason");
            }}
            className={`transition-all px-6 py-4 rounded-lg cursor-pointer border text-left w-full ${
              selectedReason === "pilot"
                ? "bg-[#5C899D] text-[#FFFCEF] border-[#5C899D]"
                : "bg-[#FFFCEF] text-[#5C899D] border-[#5C899D] hover:bg-[#5C899D] hover:text-[#FFFCEF]"
            }`}
          >
            …deelnemen aan de pilotfase van INNOVISUAL
          </div>

          <div
            onClick={() => {
              setSelectedReason("question");
              setValue("contactReason", "question", { shouldValidate: true });
              trigger("contactReason");
            }}
            className={`transition-all px-6 py-4 rounded-lg cursor-pointer border text-left w-full ${
              selectedReason === "question"
                ? "bg-[#5C899D] text-[#FFFCEF] border-[#5C899D]"
                : "bg-[#FFFCEF] text-[#5C899D] border-[#5C899D] hover:bg-[#5C899D] hover:text-[#FFFCEF]"
            }`}
          >
            …contact over een vraag of een ander onderwerp
          </div>

          {selectedReason === "question" && (
            <div className="space-y-2 pt-2">
              <Textarea
                placeholder="Laat hier een toelichting achter."
                rows={2}
                {...register("message")}
                className="w-full h-[150px] text-lg font-medium bg-[#FFFCEF] text-[#5C899D] placeholder-[#5C899D] rounded-lg px-4 py-3 border border-[#5C899D] resize-none"
              />
              <p className="text-xs text-[#5C899D] text-center">
                Misschien staat je antwoord al in onze{" "}
                <Link to="/faq" className="underline">
                  FAQ
                </Link>
              </p>
            </div>
          )}
        </div>
        {errors.contactReason && <p className="text-red-500 text-sm">{errors.contactReason.message}</p>}
      </div>

      {/* Step 3: Contact Preference */}
    <div className="space-y-2">
  <p className="text-[#5C899D] text-lg font-medium">Hoe mogen we contact met u opnemen?</p>
  <div className="flex gap-4">
    {[{
      value: "email" as ContactPreference,
      fullLabel: "per E-mail",
      shortLabel: "E-mail"
    }, {
      value: "phone" as ContactPreference,
      fullLabel: "telefonisch",
      shortLabel: "Telefonisch"
    }, {
      value: "whatsapp" as ContactPreference,
      fullLabel: "via WhatsApp",
      shortLabel: "WhatsApp"
    }].map(option => (
      <div
        key={option.value}
        onClick={() => {
          setSelectedPreference(option.value);
          setValue("contactPreference", option.value, { shouldValidate: true });
          trigger("contactPreference");
        }}
        className={`transition-all p-4 rounded-lg cursor-pointer border text-sm text-center whitespace-nowrap w-full ${
          selectedPreference === option.value
            ? "bg-[#5C899D] text-[#FFFCEF] border-[#5C899D]"
            : "bg-[#FFFCEF] text-[#5C899D] border-[#5C899D] hover:bg-[#5C899D] hover:text-[#FFFCEF]"
        }`}
      >
        {/* Mobiel kort, desktop uitgebreid */}
        <span className="block md:hidden">{option.shortLabel}</span>
        <span className="hidden md:block">{option.fullLabel}</span>
      </div>
    ))}
  </div>
  {errors.contactPreference && (
    <p className="text-red-500 text-sm">{errors.contactPreference.message}</p>
  )}
</div>

      {/* Step 4: Submit Button */}
      <Button type="submit" disabled={!isValid || !selectedReason || !selectedPreference} variant="ivory" className="w-full w-full text-lg font-medium px-10 py-8
 transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100">
        LETS TALK
      </Button>
    </form>;
};

export default ContactForm;
