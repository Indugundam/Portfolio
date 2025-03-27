
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  url: string;
  delay?: number;
  visible: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  image,
  date,
  url,
  delay = 0,
  visible
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col h-full glass-morphism rounded-2xl overflow-hidden transition-all duration-700 shadow-lg",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white text-sm font-medium px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full shadow-sm">
          {date}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500 transition-all duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
          {excerpt}
        </p>
        <div className="flex items-center text-sm font-medium text-primary">
          <span>Read More</span>
          <ArrowRight 
            className={cn(
              "w-4 h-4 ml-1 transition-transform duration-300", 
              isHovered ? "translate-x-1" : "translate-x-0"
            )} 
          />
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
