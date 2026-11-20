import { Hero } from "@/components/sections/Hero";
import { CoreServices } from "@/components/sections/CoreServices";
import { DomainShowcase } from "@/components/sections/DomainShowcase";
import { Features } from "@/components/sections/Features";
import { CareerOutcomes } from "@/components/sections/CareerOutcomes";
import { CoursesHighlight } from "@/components/sections/CoursesHighlight";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreServices />
      <DomainShowcase />
      <Features />
      <CareerOutcomes />
      <CoursesHighlight />
    </>
  );
}
