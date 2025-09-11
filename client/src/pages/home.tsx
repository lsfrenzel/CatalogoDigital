import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SystemsShowcase from "@/components/SystemsShowcase";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";
import CustomSystemsMessage from "@/components/CustomSystemsMessage";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <SystemsShowcase />
        
        {/* Custom Systems Message */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <CustomSystemsMessage variant="banner" className="mx-auto" />
          </div>
        </section>
        
        <Benefits />
        <Comparison />
      </main>
      <Footer />
    </>
  );
}
