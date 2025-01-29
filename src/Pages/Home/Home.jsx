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
      <div className="relative">

        {/* <Test/> */}
        <div className="z-10 sticky top-0">
        <Hero2 />

        </div>
        {/* <AnimateCards /> */}
        <div className="z-20 sticky top-0 left-0"><About /></div>
      
          <div className="relative z-30"><Statistics /></div>
      
        <div className="z-30 sticky bg-home">
          <WorkProcess />
        </div>

        <div className="z-40 relative top-0 left-0 ">
          <CreativeWorks />
        </div>
        <div className="z-50 relative top-0 left-0  bg-black border-[1px] border-transparent">
          <ContactForm />
        </div>
        {/* <Hero /> */}

        {/* <Videos /> */}

        {/* <InfiniteSlider /> */}
        {/* <CardVerticalSlider /> */}

      </div>
    </>
  );
}
