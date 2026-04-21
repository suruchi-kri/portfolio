"use client";

import { DesignToolShell } from "@/components/chrome/DesignToolShell";
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
    <DesignToolShell>
      <Hero />
      <SkillsTicker />
      <WorkSection />
      <AboutSection />
      <ProcessSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </DesignToolShell>
  );
}
