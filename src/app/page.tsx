import { Hero } from "@/components/sections/Hero";
import { CoursesHighlight } from "@/components/sections/CoursesHighlight";
import { Features } from "@/components/sections/Features";
import { CareerOutcomes } from "@/components/sections/CareerOutcomes";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <CoursesHighlight />
      <Features />
      <CareerOutcomes />
      <Testimonials />
    </>
  );
}
