
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import BlogCard from "./BlogCard";

const Blog = () => {
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
  
  // Real blog posts from Indu's Medium account with updated dates
  const blogPosts = [
    {
      title: "System Informer",
      excerpt: "A deep dive into System Informer, an open-source diagnostic and system utility tool for Windows that provides detailed insights into system performance, processes, services, and more.",
      image: "/lovable-uploads/45bed4f9-1910-417f-a309-2e5e37b45697.png",
      date: "Dec 2024",
      url: "https://medium.com/@indugundam/system-informer-eb952516b199",
    },
    {
      title: "Engineering is No Longer a Passion, It's a Fashion",
      excerpt: "Exploring how engineering education has evolved from a passionate pursuit of knowledge to a fashionable career choice, and the implications this shift has on the quality of engineering graduates.",
      image: "/lovable-uploads/03d2463d-c668-4125-9d50-ec4949632903.png",
      date: "Oct 2024",
      url: "https://medium.com/@indugundam/engineering-is-no-longer-a-passion-its-a-fashion-2d2829eda634",
    },
    {
      title: "How the Web Became What It is Today",
      excerpt: "A journey through the history and evolution of the web - from ARPANET and Tim Berners-Lee's invention to Web 3.0 and beyond. Exploring key technologies, protocols, and paradigm shifts.",
      image: "/lovable-uploads/305e4ca5-bc56-47ff-9797-b2f18fd96823.png",
      date: "Sep 2024",
      url: "https://medium.com/@indugundam/how-the-web-became-what-it-is-today-e7cda47c1c1b",
    },
  ];
  
  return (
    <section
      id="blog"
      ref={ref}
      className="py-12 scroll-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 
            className={cn(
              "text-3xl font-bold mb-4 text-primary transition-all duration-700",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            Blog
          </h2>
          
          <p 
            className={cn(
              "text-muted-foreground transition-all duration-700 delay-200",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            Thoughts, ideas, and insights on technology and development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              date={post.date}
              url={post.url}
              delay={index * 100 + 300}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
