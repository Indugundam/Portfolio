import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Download, FileText } from "lucide-react";
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  return <section id="about" ref={ref} className="py-12 scroll-section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-stretch">
            <div className="md:col-span-2 flex flex-col h-full">
              <h2 className={cn("text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500 transition-all duration-700", visible ? "opacity-100" : "opacity-0 translate-y-10")}>
                About Me
              </h2>
              
              <div className={cn("relative overflow-hidden rounded-2xl w-full max-w-xs transition-all duration-700 delay-300 shadow-lg h-full", visible ? "opacity-100" : "opacity-0 translate-y-10")}>
                <div className="h-full bg-gradient-to-br from-blue-100/20 via-indigo-100/20 to-purple-100/20 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center glass-morphism overflow-hidden">
                  <img src="/lovable-uploads/62ed3055-8ec5-4ac4-9803-2b36bf4fd5fe.png" alt="Indu Gundam" className="w-full h-full object-cover" />
                </div>
                
                <div className="absolute inset-0 rounded-2xl border border-primary/10"></div>
              </div>
              
              <div className={cn("mt-6 flex justify-center md:justify-start space-x-4 transition-all duration-700 delay-500", visible ? "opacity-100" : "opacity-0 translate-y-10")}>
                <a href="/lovable-uploads/e8e29d54-c538-460f-8859-76337c73649d.png" target="_blank" className="inline-flex items-center justify-center space-x-2 px-4 py-2 text-sm glass-morphism rounded-lg font-medium hover:bg-white/10 transition-all shadow-md">
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </a>
                
                <a href="/lovable-uploads/e8e29d54-c538-460f-8859-76337c73649d.png" download="Indu_Gundam_Resume.png" className="inline-flex items-center justify-center space-x-2 px-4 py-2 text-sm bg-gradient-blue text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all shadow-md">
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
            
            <div className={cn("md:col-span-3 transition-all duration-700 delay-300 glass-morphism p-6 rounded-2xl shadow-lg flex flex-col justify-center h-full", visible ? "opacity-100" : "opacity-0 translate-y-10")}>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Passionate and dedicated student currently pursuing my undergraduate studies in Information Technology. I have a strong academic background with real-time exposure in implementing various projects in Java, Cloud (Azure), and Web related technologies.
                </p>
                
                <p>
                  My focus lies in problem solving (Algorithms), debugging, and communication skills. I'm committed to continuous learning and applying cutting-edge technologies to solve real-world problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;