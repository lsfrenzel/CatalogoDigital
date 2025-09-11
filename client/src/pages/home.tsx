import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SystemsShowcase from "@/components/SystemsShowcase";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
        <Benefits />
        <Comparison />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
