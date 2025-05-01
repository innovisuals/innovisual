
export type ContactReason = 'pilot' | 'question';
export type ContactPreference = 'email' | 'whatsapp' | 'phone';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  contactReason: ContactReason | null;
  message?: string;
  contactPreference: ContactPreference | null;
}
