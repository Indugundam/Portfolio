
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import SkillBar from "./SkillBar";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  visible: boolean;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
  visible,
  index
}) => {
  const floatDelay = index * 0.5; // Different float timing for each card
  
  return (
    <div 
      className={cn(
        "glass-morphism rounded-xl p-6 transition-all duration-700 shadow-lg scale-on-hover",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        delay ? `transition-delay-${delay}` : ""
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        animation: `floating 3s ease-in-out ${floatDelay}s infinite` 
      }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-gradient-blue bg-opacity-10 rounded-lg mb-4 text-primary shadow-sm">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  
  const programmingSkills = [
    { name: "Java", percentage: 95 },
    { name: "Python", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "SQL", percentage: 90 },
    { name: "HTML/CSS", percentage: 85 },
  ];
  
  const developmentSkills = [
    { name: "React", percentage: 80 },
    { name: "Cloud (AWS & Azure)", percentage: 85 },
    { name: "Node.js", percentage: 75 },
    { name: "Git/GitHub", percentage: 90 },
    { name: "Debugging", percentage: 95 },
  ];
  
  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gradient-section scroll-section relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className={cn(
              "text-3xl font-bold mb-4 transition-all duration-700 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            Skills & Expertise
          </h2>
          
          <p 
            className={cn(
              "text-muted-foreground transition-all duration-700 delay-200",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            Here are the technologies and skills I've developed throughout my academic journey and projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <span className="text-xl">💻</span>,
              title: "Programming Languages",
              description: "Proficient in Java, Python, and various web technologies. Experienced in building robust applications."
            },
            {
              icon: <span className="text-xl">☁️</span>,
              title: "Cloud Technologies",
              description: "Experienced with AWS and Azure services. Completed certifications and built cloud-native applications."
            },
            {
              icon: <span className="text-xl">🔍</span>,
              title: "Problem Solving",
              description: "Strong algorithm skills and analytical thinking. Capable of debugging complex issues efficiently."
            },
            {
              icon: <span className="text-xl">🌐</span>,
              title: "Web Development",
              description: "Experience with React, HTML, CSS, and JavaScript to create responsive and interactive web applications."
            },
            {
              icon: <span className="text-xl">🗄️</span>,
              title: "Database Management",
              description: "Proficient in SQL, MySQL, Oracle, and NoSQL databases. Experience in database design and optimization."
            },
            {
              icon: <span className="text-xl">🔄</span>,
              title: "Version Control",
              description: "Experienced with Git and GitHub for collaboration, code management, and version control."
            }
          ].map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={index * 100 + 300}
              visible={visible}
              index={index}
            />
          ))}
        </div>
        
        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto transition-all duration-700 delay-500",
            visible ? "opacity-100" : "opacity-0 translate-y-10"
          )}
        >
          <div className="glass-morphism p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Programming Languages</h3>
            {programmingSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 100}
                inView={visible}
              />
            ))}
          </div>
          
          <div className="glass-morphism p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Development Skills</h3>
            {developmentSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 100 + 300}
                inView={visible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
