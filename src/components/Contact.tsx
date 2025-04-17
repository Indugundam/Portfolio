import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Send, Github, Linkedin, AtSign, Smartphone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { useIsMobile } from "@/hooks/use-mobile";
import { Textarea } from "@/components/ui/textarea";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [visible, setVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      setFormErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: typeof formErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof typeof formErrors] = err.message;
          }
        });
        setFormErrors(newErrors);
      }
      return false;
    }
  };
  
  // Direct email client method
  const handleEmailRedirect = () => {
    // Validate form first
    if (!validateForm()) {
      return;
    }
    
    const subject = encodeURIComponent("Message from Portfolio Website");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:indugundam2004@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", message: "" });
  };
  
  // Handle form submission (now just shows a toast and calls the redirect)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setFormStatus("sending");
    
    // Simulate sending
    setTimeout(() => {
      handleEmailRedirect();
      setFormStatus("success");
      toast.success("Message prepared in your email client!");
    }, 500);
  };
  
  const contactInfo = [
    { 
      icon: <AtSign className="w-5 h-5" />,
      label: "Email",
      value: "indugundam2004@gmail.com",
      href: "mailto:indugundam2004@gmail.com"
    },
    { 
      icon: <Smartphone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9676067989",
      href: "tel:+919676067989"
    },
    { 
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Visakhapatnam, AP",
      href: "#"
    },
    { 
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/indugundam",
      href: "https://github.com/Indugundam/LotteryHub"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/indugundam",
      href: "https://linkedin.com/in/indugundam"
    },
  ];
  
  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 scroll-section relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className={cn(
              "text-3xl font-bold mb-4 transition-all duration-700 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            Get In Touch
          </h2>
          
          <p 
            className={cn(
              "text-muted-foreground transition-all duration-700 delay-200",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div 
              className={cn(
                "transition-all duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <div className="glass-morphism p-8 rounded-xl h-full">
                <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith('http') ? "_blank" : undefined}
                      rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-indigo-500/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-indigo-500/20 transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-indigo-500 transition-all">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div 
              className={cn(
                "transition-all duration-700 delay-300",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <form onSubmit={handleSubmit} className="glass-morphism p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Send Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-2 border rounded-lg bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-1 transition-all",
                        formErrors.name 
                          ? "border-red-500 focus:ring-red-500" 
                          : "border-primary/10 focus:ring-primary"
                      )}
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-2 border rounded-lg bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-1 transition-all",
                        formErrors.email 
                          ? "border-red-500 focus:ring-red-500" 
                          : "border-primary/10 focus:ring-primary"
                      )}
                      placeholder="Your email"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={cn(
                        "w-full px-4 py-2 border rounded-lg bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-1 transition-all resize-none",
                        formErrors.message 
                          ? "border-red-500 focus:ring-red-500" 
                          : "border-primary/10 focus:ring-primary"
                      )}
                      placeholder="Your message"
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className={cn(
                        "w-full px-6 py-3 flex items-center justify-center space-x-2 rounded-lg font-medium transition-all",
                        formStatus === "sending" ? "bg-gradient-blue/70 cursor-not-allowed" : "bg-gradient-blue hover:shadow-lg",
                        "text-primary-foreground shadow-md"
                      )}
                    >
                      {formStatus === "sending" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Preparing...</span>
                        </>
                      ) : formStatus === "success" ? (
                        <span>Message Ready!</span>
                      ) : formStatus === "error" ? (
                        <span>Try again</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleEmailRedirect}
                      className="w-full px-6 py-3 flex items-center justify-center space-x-2 rounded-lg font-medium transition-all bg-white/10 hover:bg-white/20 text-foreground shadow-md"
                    >
                      <AtSign className="w-4 h-4" />
                      <span>Open Mail App</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
