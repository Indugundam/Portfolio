
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  
  return (
    <section
      id="education"
      ref={ref}
      className="py-20 bg-gradient-section scroll-section relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 
            className={cn(
              "text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500 transition-all duration-700",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            Education & Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div 
              className={cn(
                "glass-morphism p-8 rounded-2xl transition-all duration-700 shadow-lg scale-on-hover",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-xl mr-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Education</h3>
              </div>
              
              <ul className="space-y-6">
                <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:bg-gradient-blue before:rounded-full">
                  <h4 className="text-base font-medium">Bachelor's in Information Technology</h4>
                  <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500 font-medium mt-1">Gayatri Vidya Parishad College (2022-Current)</p>
                  <p className="text-sm text-muted-foreground mt-1">9.62 CGPA</p>
                </li>
                
                <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:bg-gradient-blue before:rounded-full">
                  <h4 className="text-base font-medium">Intermediate</h4>
                  <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500 font-medium mt-1">Narayana Junior College, Kurnool (2020-2022)</p>
                  <p className="text-sm text-muted-foreground mt-1">98.9%</p>
                </li>
                
                <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:bg-gradient-blue before:rounded-full">
                  <h4 className="text-base font-medium">Xth Grade</h4>
                  <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500 font-medium mt-1">Jyothi High School, Bandiātmakur (2020)</p>
                  <p className="text-sm text-muted-foreground mt-1">98.8%</p>
                </li>
              </ul>
            </div>
            
            <div 
              className={cn(
                "glass-morphism p-8 rounded-2xl transition-all duration-700 shadow-lg scale-on-hover",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-xl mr-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Achievements</h3>
              </div>
              
              <ul className="space-y-6">
                <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:bg-gradient-blue before:rounded-full">
                  <h4 className="text-base font-medium">Academic Topper</h4>
                  <p className="text-sm text-muted-foreground mt-1">of our department (2022-2023) and (2023-2024)</p>
                </li>
                
                <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:bg-gradient-blue before:rounded-full">
                  <h4 className="text-base font-medium">Leadership Roles</h4>
                  <p className="text-sm text-muted-foreground mt-1">President, Code Chronicles (2024) and Vice President, AlgoRhythm</p>
                </li>
                
                <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:bg-gradient-blue before:rounded-full">
                  <h4 className="text-base font-medium">Certifications</h4>
                  <p className="text-sm text-muted-foreground mt-1">Google Could, AWS Technologies, and Udemy certified Java Programmer</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
