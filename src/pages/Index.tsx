
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import { Toaster } from "sonner";

const Index = () => {
  useEffect(() => {
    // Add fade-in class to sections when they enter the viewport
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          if (entry.target.classList.contains("observe-once")) {
            observer.unobserve(entry.target);
          }
        } else {
          if (!entry.target.classList.contains("observe-once")) {
            entry.target.classList.remove("is-visible");
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll(".fade-in-section");
    
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Layout>
      <Toaster position="top-right" />
      <div className="space-y-0">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </div>
    </Layout>
  );
};

export default Index;
