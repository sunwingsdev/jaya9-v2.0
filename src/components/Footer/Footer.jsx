// Import necessary assets and dependencies
import grahoklogo from "../../assets/grahoklogo.svg";
import mullologo from "../../assets/mullologo.svg";
import certificatiologo from "../../assets/gaming_Casino_Analyzer.svg";
import certification2 from "../../assets/certificatio2.svg";
import communitylogo1 from "../../assets/communitylogo1.png";
import communitylogo2 from "../../assets/communitylogo2.png";
import gaminglogo from "../../assets/gaming.webp";
import jayalogo from "../../assets/logo3.png";
import { Link, useLocation } from "react-router-dom";
import CricketBattingFooter from "./FooterComponents/CricketBattingFooter";
import Jaya9FooterText from "./FooterComponents/Jaya9FooterText";
import LiveCasinoBangladeshFooter from "./FooterComponents/LiveCasinoBangladeshFooter";
import Jaya9PlayFooter from "./FooterComponents/Jaya9playFooter";
import BangladeshSeraCasino from "./FooterComponents/BangladeshSeraCasino";
import IbcSports from "./FooterComponents/IbcSports";
import BissostoSeraFooter from "./FooterComponents/BissostoSeraFooter";
import Jaya9LotteryFooter from "./FooterComponents/Jaya9LotteryFooter";
import BangladeshCricketBonus from "./FooterComponents/BangladeshCricketBonus";
import {  useEffect, useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

// Language Data
const languages = {
  bn: {
    payment: "মুল্য পরিশোধ পদ্ধতি",
    support: "গ্রাহক সমর্থন",
    certification: "সার্টিফিকেশন",
    community: "কমিউনিটি ওয়েবসাইট",
    license: "গেমিং লাইসেন্স",
    chatNow: "এখন চ্যাট",
    responsibleGaming: "দায়িত্বশীল গেমিং",
    terms: "শর্তাবলী",
    aboutUs: "আমাদের সম্পর্কে",
    copyright: "কপিরাইট © 2025 [ব্র্যান্ড]। সমস্ত অধিকার সংরক্ষিত।",
  },
  en: {
    payment: "Payment Methods",
    support: "Customer Support",
    certification: "Certification",
    community: "Community Website",
    license: "Gaming License",
    chatNow: "Chat Now",
    responsibleGaming: "Responsible Gaming",
    terms: "Terms & Conditions",
    aboutUs: "About Us",
    copyright: "Copyright © 2025 [Brand]. All rights reserved.",
  },
};

// Footer Component
const Footer = () => {
  const location = useLocation();
    const { language, setLanguage } = useContext(LanguageContext);
  

    useEffect(() => {
      if (language) {
        setLanguage(language);
      }
    }, [language, setLanguage]);

  const footerItems = [
    { title: languages[language].payment, logos: [mullologo] },
    { title: languages[language].support, logos: [grahoklogo], extraText: languages[language].chatNow },
    { title: languages[language].certification, logos: [certificatiologo, certification2] },
    { title: languages[language].community, logos: [communitylogo1, communitylogo2] },
    { title: languages[language].license, logos: [gaminglogo] },
  ];

  const footerComponents = {
    "/cricket": <CricketBattingFooter />,
    "/": <Jaya9FooterText />,
    "/livecasino": <LiveCasinoBangladeshFooter />,
    "/slotgames": <Jaya9PlayFooter />,
    "/tablegames": <BangladeshSeraCasino />,
    "/sports": <IbcSports />,
    "/machdhora": <BissostoSeraFooter />,
    "/lottery": <Jaya9LotteryFooter />,
    "/crash": <BissostoSeraFooter />,
    "/promotion": <BangladeshCricketBonus />,
    "/amanot": <BissostoSeraFooter />,
    "/jayarank": <BissostoSeraFooter />,
    "/nibondon": <BissostoSeraFooter />,
    "/baji": <BissostoSeraFooter />,
    "/turnover": <BissostoSeraFooter />,
    "/sthanantor": <BissostoSeraFooter />,
    "/bonus": <BissostoSeraFooter />,
    "/lenden": <BissostoSeraFooter />,
    "/dabivoutcher": <BissostoSeraFooter />,
    "/puroskar": <BissostoSeraFooter />,
    "/jachaikoron": <BissostoSeraFooter />,
    "/passwordchange": <BissostoSeraFooter />,
    "/bankdetails": <BissostoSeraFooter />,
    "/inbox": <BissostoSeraFooter />,
    "/refference": <BissostoSeraFooter />,
    "/refferelbonus": <BissostoSeraFooter />,
    "/footertab": <BissostoSeraFooter />,
  };

  return (
    <div className="bg-informationBackground min-h-screen py-3">
      <div className="mx-auto max-w-7xl">
        {/* Footer Sections */}
        <div className="grid grid-cols-2 lg:grid-cols-5 px-8 items-center justify-items-center gap-4 font-medium font-serif">
          {footerItems.map((item, index) => (
            <div className="flex flex-col items-center" key={index}>
              <h3 className="whitespace-nowrap text-xs lg:text-md">{item.title}</h3>
              <div className="flex flex-row gap-2 items-center">
                {item.logos.map((logo, i) => (
                  <img key={i} src={logo} alt="" className="w-8 h-8" />
                ))}
                {item.extraText && (
                  <p className="text-common-orange text-xs">{item.extraText}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Footer Component */}
        <div className="px-8 py-4 text-center">
          {footerComponents[location.pathname] || null}
        </div>

        {/* Bottom Footer Section */}
        <div className="flex flex-col pb-20 md:flex-row lg:px-8 space-y-2 lg:flex-row items-center md:justify-between lg:items-center justify-between">
          <div>
            <img src={jayalogo} alt="" className="h-12" />
          </div>
          <div className="space-y-4 lg:pb-6 text-left lg:text-center justify-center">
            <p className="text-common-blue whitespace-nowrap text-sm flex lg:flex-wrap justify-center gap-1 lg:gap-4">
              <Link to="/footertab#tab1">
                <span className="underline pb-1 cursor-pointer hover:text-common-blue transition">
                  {languages[language].responsibleGaming}
                </span>
              </Link>
              <Link to="/footertab#tab4">
                <span className="underline pb-1 cursor-pointer hover:text-common-blue transition">
                  {languages[language].terms}
                </span>
              </Link>
              <Link to="/footertab#tab2">
                <span className="underline pb-1 cursor-pointer hover:text-common-blue transition">
                  {languages[language].aboutUs}
                </span>
              </Link>
            </p>
            <p className="text-gray-600 font-bold text-xs">
              {languages[language].copyright}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
