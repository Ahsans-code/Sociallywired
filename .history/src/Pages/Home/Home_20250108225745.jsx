import { useLocation } from "react-router-dom";
import {ContactForm, CreativeWorks, Hero, InfiniteSlider, Videos, WorkProcess }from "../../components/Components";
import { useEffect } from "react";


export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.sectionId) {
      const section = document.getElementById(location.state.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <div>
        <Hero />
        <WorkProcess />
        <InfiniteSlider />
        <Videos />
        <CreativeWorks />
        {/* <CardVerticalSlider /> */}
        <ContactForm />
      </div>
    </>
  );
}
