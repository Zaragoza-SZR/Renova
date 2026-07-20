import React from "react";
import IntroOverlay from "../components/IntroOverlay";
import About from "../components/About";
import SliderNew from "../components/Slider";
import NewsSection from "../components/News.jsx";

const Home = () => {
  const [showIntro, setShowIntro] = React.useState(true);
  const [showMainContent, setShowMainContent] = React.useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowMainContent(true);
  };
  return (
    <>
      {showIntro && <IntroOverlay onComplete={handleIntroComplete} />}
      {showMainContent && (
        <>
          <About />
          <SliderNew />
          <NewsSection />
        </>
      )}
    </>
  );
};

export default Home;
