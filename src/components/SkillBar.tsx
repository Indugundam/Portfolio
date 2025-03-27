
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
  inView: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  percentage,
  delay = 0,
  inView
}) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (inView) {
      timeout = setTimeout(() => {
        setWidth(percentage);
      }, delay);
    }
    
    return () => clearTimeout(timeout);
  }, [inView, percentage, delay]);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium text-primary">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary/40 rounded-full overflow-hidden shadow-inner backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-primary to-indigo-500 transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
