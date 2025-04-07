import ImageSlider from "../components/Home/ImageSlider";
import Marquee from "../components/Home/Marquee";
import HomeTabs from "../components/Home/HomeTabs";
import ReferralLive from "../components/Home/ReferralLive";
import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";

const Home = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <ImageSlider />

      <Marquee />

      <HomeTabs language={language} />
      <ReferralLive language={language} />
    </div>
  );
};

export default Home;
