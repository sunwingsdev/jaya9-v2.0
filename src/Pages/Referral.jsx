import { useContext } from "react";
import referralBanner from "../assets/referral_banner2.jpg";
import Commission from "../components/Referral/Commission";
import { LanguageContext } from "../Context/LanguageContext";

const Referral = () => {
  const { language } = useContext(LanguageContext);

  // ✅ ভাষা অনুযায়ী বাটনের টেক্সট সেট করা হলো
  const buttonText = {
    summary: language === "bn" ? "সারসংক্ষেপ" : "Summary",
    report: language === "bn" ? "রেফারেল রিপোর্ট" : "Referral Report",
    history: language === "bn" ? "রিডিম ইতিহাস" : "Redeem History",
  };

  return (
    <div className="bg-informationBackground min-h-screen">
      <div className="mx-auto bg-white max-w-7xl">
        <div className="relative">
          <img src={referralBanner} alt="Referral Banner" />

          <div className="lg:flex hidden flex-row p-5 absolute -bottom-5 -right-5 gap-5 items-center md:justify-center lg:justify-end">
            <button className="bg-common-orange w-full lg:w-auto hover:bg-blue-900 rounded-sm text-white text-sm px-10 py-1">
              {buttonText.summary}
            </button>
            <button className="bg-gray-200 text-black w-full lg:w-auto hover:bg-blue-900 hover:text-white rounded-sm text-sm px-10 py-1">
              {buttonText.report}
            </button>
            <button className="bg-gray-200 w-full hover:text-black lg:w-auto rounded-sm hover:bg-gray-400 px-10 text-sm py-1">
              {buttonText.history}
            </button>
          </div>
        </div>
        <Commission language={language}/>
      </div>
    </div>
  );
};

export default Referral;
