import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Features from "./components/Features";
import LearningPath from "./components/LearningPath";
import LevelUp from "./components/LevelUp";
import BuilderGallery from "./components/BuilderGallery";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Hero />
      <Partners />
      <Features />
      <LearningPath />
      <LevelUp />
      <BuilderGallery />
      <CTA />
      <Footer />
    </main>
  );
}
