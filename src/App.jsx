import { useEffect, useRef, useState } from "react";
import CourseAccessSection from "./components/CourseAccessSection/CourseAccessSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import FixedPricingSection from "./components/FixedPricingSection/FixedPricingSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const heroRef = useRef(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Header initial />
      {showSticky && <Header />}
      <main>
        <HeroSection ref={heroRef} />
        <FeaturesSection />
        <CourseAccessSection />
        <FixedPricingSection />
      </main>
      <Footer />
      <ScrollToTop visible={showSticky} />
    </>
  );
}

export default App;
