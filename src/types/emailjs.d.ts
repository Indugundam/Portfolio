
// Type definition for EmailJS
interface EmailJSResponseStatus {
  status: number;
  text: string;
}

interface EmailJS {
  init(userId: string): void;
  send(
    serviceId: string,
    templateId: string,
    templateParams: Record<string, unknown>,
    userId?: string
  ): Promise<EmailJSResponseStatus>;
}

// Extend the Window interface
declare global {
  interface Window {
    emailjs: EmailJS;
  }
}

export {};
