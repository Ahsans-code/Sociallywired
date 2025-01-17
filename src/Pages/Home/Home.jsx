import { useLocation } from "react-router-dom";
import { AnimateCards, ContactForm, CreativeWorks, Hero, InfiniteSlider, Videos, WorkProcess } from "../../components/Components";
import { useEffect } from "react";
import Test from "../../components/Test";


export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const section = document.getElementById(location.state);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <div>
        <Test/>
        <AnimateCards />
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
