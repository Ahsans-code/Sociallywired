import {ContactForm, CreativeWorks, Hero, InfiniteSlider, Videos, WorkProcess }from "../../components/Components";


export default function Home() {
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
