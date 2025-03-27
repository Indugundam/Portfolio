
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  // Add subtle animated blobs as background decorations
  return (
    <div className="min-h-screen bg-gradient-hero text-foreground overflow-x-hidden relative">
      {/* Background abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/10 dark:bg-blue-900/10 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[15%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-indigo-100/10 dark:bg-indigo-900/10 blur-[100px] animate-pulse-slow animate-delay-300"></div>
        <div className="absolute top-[40%] left-[25%] w-[30vw] h-[30vw] rounded-full bg-purple-100/5 dark:bg-purple-900/5 blur-[80px] animate-pulse-slow animate-delay-500"></div>
      </div>
      
      <Navigation scrolled={scrolled} />
      <main className="w-full mx-auto relative z-10">
        {children}
      </main>
      <footer className={cn(
        "w-full py-8 border-t border-primary/10 transition-all duration-300 ease-in-out backdrop-blur-sm",
        "text-center text-sm text-muted-foreground relative z-10"
      )}>
        <div className="container">
          <p>© {new Date().getFullYear()} Indu Gundam. All rights reserved.</p>
          <p className="mt-1">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
