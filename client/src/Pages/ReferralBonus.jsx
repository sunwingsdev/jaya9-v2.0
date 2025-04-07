import { useContext } from "react";
import ReferralExpired from "../components/ReferralBonus/ReferralExpired";
import { LanguageContext } from "../Context/LanguageContext";

const ReferralBonus = () => {
  const { language } = useContext(LanguageContext);

  

  

  return (
    <div className="bg-informationBackground">
      <div className="mx-auto max-w-4xl lg:max-w-7xl">
        <div className="flex flex-col md:flex-row bg-white p-5 gap-3 border-b border-gray-400 items-center md:justify-center lg:justify-start relative">
          <button className="bg-common-blue w-full md:w-auto hover:bg-blue-900 rounded-sm text-white text-sm px-10 md:px-14 py-1">
            {language === "bn" ? "দাবী" : "Claim"}
          </button>
          <button className="bg-gray-200 w-full md:w-auto rounded-sm hover:bg-gray-400 px-8 md:px-10 text-sm py-1">
            {language === "bn" ? "ডাউনলাইন রিপোর্ট" : "Downline Report"}
          </button>
          
        </div>

        <ReferralExpired language={language} />
      </div>
    </div>
  );
};

export default ReferralBonus;
