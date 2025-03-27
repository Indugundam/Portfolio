
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  description: string[];
  visible: boolean;
  delay?: number;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  date,
  description,
  visible,
  delay = 0,
  isLast = false
}) => {
  return (
    <div 
      className="relative"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {!isLast && (
        <div className="absolute top-6 left-4 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10">
          <div 
            className={cn(
              "w-full bg-gradient-to-b from-primary via-primary/80 to-primary/60 transition-all duration-1000",
              visible ? "h-full" : "h-0"
            )}
            style={{ transitionDelay: `${delay + 500}ms` }}
          ></div>
        </div>
      )}
      
      <div className="flex">
        <div className="flex-shrink-0 mr-4">
          <div 
            className={cn(
              "w-8 h-8 rounded-full border-2 border-primary/30 flex items-center justify-center z-10 relative transition-all duration-500 bg-background shadow-md",
              visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            )}
            style={{ transitionDelay: `${delay}ms` }}
          >
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-blue"></div>
          </div>
        </div>
        
        <div 
          className={cn(
            "glass-morphism rounded-xl p-6 mb-10 transition-all duration-700 w-full shadow-lg scale-on-hover",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: `${delay}ms` }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">{title}</h3>
            <span className="text-sm text-primary mt-1 md:mt-0 font-medium">{date}</span>
          </div>
          
          <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500 mb-3">{company}</p>
          
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
