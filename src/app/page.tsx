"use client";

import { CustomCursor } from "@/components/CustomCursor";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SkillsTicker } from "@/components/SkillsTicker";
import { WorkSection } from "@/components/WorkSection";
import { AboutSection } from "@/components/AboutSection";
import { ProcessSection } from "@/components/ProcessSection";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <Hero />
      <SkillsTicker />
      <WorkSection />
      <AboutSection />
      <ProcessSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
}
