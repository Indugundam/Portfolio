
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

const Projects = () => {
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
  
  const projects = [
    {
      title: "Lottery Hub",
      description: "A secure platform for managing lottery tickets and results. Implemented real-time updates, ticket verification, and a personalized user dashboard.",
      tags: ["React", "Tailwind CSS", "TypeScript", "Node.js"],
      github: "https://github.com/Indugundam/LotteryHub",
      demo: "https://ticket-treasure-hub.vercel.app/",
      image: "/lovable-uploads/2397f8ca-4049-4f2b-acfa-b034eb63ab52.png"
    },
    {
      title: "Food Finder",
      description: "Web application that helps users discover nearby restaurants, explore menus, and find the best food deals based on their preferences.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Indugundam/Food_Finder",
      demo: "https://food-finder-navy.vercel.app/",
      image: "/lovable-uploads/905fb1e8-8205-4de8-a2b7-402b2a168b5b.png"
    },
    {
      title: "Extensible Desktop Search",
      description: "High-performance desktop application as a robust alternative to Windows' native search tool, leveraging Swings to deliver lightning-fast query results with minimal latency.",
      tags: ["Java", "Swings"],
      image: "/lovable-uploads/9bdc1f4c-16a5-4455-8fcd-e5a1390795e1.png"
    }
  ];
  
  return (
    <section
      id="projects"
      ref={ref}
      className="py-12 scroll-section relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 
            className={cn(
              "text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500 transition-all duration-700",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            Projects
          </h2>
          
          <p 
            className={cn(
              "text-muted-foreground transition-all duration-700 delay-200",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            A collection of projects that showcase my skills and experience in various technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              github={project.github}
              demo={project.demo}
              image={project.image}
              delay={index * 100 + 300}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
