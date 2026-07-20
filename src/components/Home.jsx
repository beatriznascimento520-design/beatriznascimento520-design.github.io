import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import Studies from "./Studies";
import Work from "./Work";
import Career from "./Career";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;

    // Two frames: the first lets the section mount, the second lets layout
    // settle so the target lands in the right place.
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [location.state]);

  return (
    <>
      <Hero />
      <Studies />
      <Work />
      <Career />
    </>
  );
}
