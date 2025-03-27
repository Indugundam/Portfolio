
import { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex flex-col items-center justify-center py-12 overflow-hidden scroll-section"
    >
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div 
            className={cn(
              "px-4 py-2 rounded-full glass-morphism inline-flex items-center mb-8 transition-all duration-700 shadow-sm",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            <span className="text-sm font-medium">Bachelor of Information Technology</span>
          </div>
          
          <h1 
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight transition-all duration-700",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Hello, I'm Indu Gundam</span>
          </h1>
          
          <div 
            className={cn(
              "h-12 md:h-16 overflow-hidden transition-all duration-700 delay-300",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            <AnimatedText 
              text="Developer, Problem Solver, Innovation Enthusiast"
              className="text-2xl md:text-3xl text-muted-foreground font-light"
              speed={35}
            />
          </div>
          
          <div 
            className={cn(
              "mt-8 max-w-xl text-muted-foreground text-balance leading-relaxed transition-all duration-700 delay-500",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            <p>
              Passionate student with a focus on Java, Cloud technologies, and Web development. 
              Building solutions that solve real problems.
            </p>
          </div>
          
          <div
            className={cn(
              "mt-10 space-x-4 transition-all duration-700 delay-700",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-blue text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all duration-300 shadow-md"
            >
              View My Work
            </a>
            
            <a
              href="#contact"
              className="px-6 py-3 glass-morphism rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div 
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 float transition-all duration-700 delay-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center justify-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
