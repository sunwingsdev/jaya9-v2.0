import ImageSlider from "../components/Home/ImageSlider";
import HomeTabs from "../components/Home/HomeTabs";
import ReferralLive from "../components/Home/ReferralLive";
import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";
import NoticeMarquee from "@/components/Home/Marquee";

const Home = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <ImageSlider />

      <NoticeMarquee />

      <HomeTabs language={language} />
      <ReferralLive language={language} />
    </div>
  );
};

export default Home;
