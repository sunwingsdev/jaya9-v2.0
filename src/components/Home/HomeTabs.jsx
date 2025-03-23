import {  useState } from 'react';
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
import home4 from "../../assets/home4.png";
import home5 from "../../assets/home5.png";
import home6 from "../../assets/home6.png";
import home7 from "../../assets/home7.png";
import home8 from "../../assets/home8.png";
import hotlogo from "../../assets/Hot.svg";
import tab2Img from "../../assets/cricket.png";
import tab3Img from "../../assets/live.png";
import tab4Img from "../../assets/seven.png";
import tab5Img from "../../assets/table.png";
import tab6Img from "../../assets/sports.png";
import tab7Img from "../../assets/fishing.png";
import tab8Img from "../../assets/lottery.png";
import tab9Img from "../../assets/crash.png";
import img2A from "../../assets/betswiz_avatar.png";
import img3A from "../../assets/evo_avatar.png";
import img3B from "../../assets/pp_avatar.png";
import img3C from "../../assets/sexy_v2_avatar.png";
import img4A from "../../assets/jili_avatar.png";
import img4B from "../../assets/tito_avatar.png";
import img4C from "../../assets/pp_avatar.png";
import img4D from "../../assets/pg_avatar.png";
import img4E from "../../assets/smart_avatar.png";
import img4F from "../../assets/spg_avatar.png";
import img4G from "../../assets/fc_avatar.png";
import img4H from "../../assets/jdb_avatar.png";
import img4I from "../../assets/rt_avatar.png";
import img5A from "../../assets/spribe_avatar.png";
import img5B from "../../assets/jili_avatar.png";
import img5C from "../../assets/tito_avatar.png";
import img5D from "../../assets/km_avatar.png";
import img5E from "../../assets/rt_avatar.png";
import img6A from "../../assets/ibc_avatar.png";
import img7A from "../../assets/jili_avatar.png";
import img7B from "../../assets/tito_avatar.png";
import img7C from "../../assets/spg_avatar.png";
import img8A from "../../assets/crash new spribe.webp";
import img8B from "../../assets/crashmenulogo2.webp";
import img8C from "../../assets/crashmenulogo3.webp";
import img8D from "../../assets/crashmenulogo4.webp";
import img8E from "../../assets/crashmenulogo5.webp";
import img8F from "../../assets/crashmenulogo6.webp";

const HomeTabs = ({language}) => {
  
  const tabsData = [
    { id: 1, labelBn: "হট গেমস", labelEn: "Hot Games", tabImage: hotlogo, contentImages: [home1, home2, home3, home4, home5, home6, home7, home8] },
    { id: 2, labelBn: "ক্রিকেট", labelEn: "Cricket", tabImage: tab2Img, contentImages: [img2A], contentImageName: ["Betswizz"] },
    { id: 3, labelBn: "ক্যাসিনো", labelEn: "Casino", tabImage: tab3Img, contentImages: [img3A, img3B, img3C], contentImageName: ["Evo", "Pragmatic", "AE Casino"] },
    { id: 4, labelBn: "স্লট গেম", labelEn: "Slot Games", tabImage: tab4Img, contentImages: [img4A, img4B, img4C, img4D, img4E, img4F, img4G, img4H, img4I], contentImageName: ["JILI", "TITO", "Pragmatic", "PG", "Smart Soft", "Spade", "FC", "JDB", "Red Tiger"] },
    { id: 5, labelBn: "টেবিল খেলা", labelEn: "Table Games", tabImage: tab5Img, contentImages: [img5A, img5B, img5C, img5D, img5E], contentImageName: ["Spribe", "JILI", "TITO", "KingMidas", "Red Tiger"] },
    { id: 6, labelBn: "এসবি", labelEn: "SB", tabImage: tab6Img, contentImages: [img6A], contentImageName: ["IBC"] },
    { id: 7, labelBn: "মাছ ধরা", labelEn: "Fishing", tabImage: tab7Img, contentImages: [img7A, img7B, img7C], contentImageName: ["JILI", "TITO", "Spade"] },
    { id: 8, labelBn: "লটারি", labelEn: "Lottery", tabImage: tab8Img, contentImages: [img5A], contentImageName: ["Spribe"] },
    { id: 9, labelBn: "ক্র্যাশ", labelEn: "Crash", tabImage: tab9Img, contentImages: [img8A, img8B, img8C, img8D, img8E, img8F], contentImageName: ["Spribe", "JILI", "TITO", "Aviatrix", "KingMidas", "SmartSoft"] }
  ];
  
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="w-full max-w-4xl lg:hidden mx-auto ">
      <ul className="flex flex-row gap-1 p-4 bg-homeTabColor shadow-2xl-homeTabColor justify-start items-center overflow-x-auto border-b  pb-2">
        {tabsData.map((tab) => (
          <li
            key={tab.id}
            className={`cursor-pointer p-2  border flex-shrink-0 rounded-md ${activeTab === tab.id ? "border-common-orange " : "hover:border-common-orange "}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="flex flex-col gap-1 text-black  px-2 items-center">
              <img src={tab.tabImage} alt={`Tab ${tab.id}`} className="w-10 h-10 " />
              <span className="whitespace-nowrap text-sm">{language === "bn" ? tab.labelBn : tab.labelEn}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {tabsData.find((tab) => tab.id === activeTab)?.contentImages.map((img, index) => {
          const tab = tabsData.find((tab) => tab.id === activeTab);
          const imageName = tab?.contentImageName?.[index] || "";
          return (
            <div key={index} className="flex flex-col items-center">
              <img src={img} alt={`Content ${index}`} className="w-full md:w-auto h-auto object-cover rounded-md shadow-md" />
              <h3 className="text-common-orange text-sm">{imageName}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeTabs;