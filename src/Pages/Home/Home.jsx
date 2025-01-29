import { useLocation } from "react-router-dom";
import { About, AnimateCards, ContactForm, CreativeWorks, Hero, Hero2, InfiniteSlider, Statistics, Videos, WorkProcess } from "../../components/Components";
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
        {/* <Test/> */}
        <Hero2/>
        {/* <AnimateCards /> */}

       <About/>
       <Statistics/>
       <WorkProcess />

       <CreativeWorks />
        {/* <Hero /> */}
       
        {/* <Videos /> */}
        
        {/* <InfiniteSlider /> */}
        {/* <CardVerticalSlider /> */}
        <ContactForm />
      </div>
    </>
  );
}
