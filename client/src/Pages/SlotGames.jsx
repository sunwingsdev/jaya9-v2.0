
import slotgamesImage from "../assets/slotgames.jpg";
import SlotImages from "../components/SlotGames/SlotImages";
import FindGames from "../components/ReuseableComponents/FindGames";
import GameOptions from "../components/ReuseableComponents/GameOptions";
import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";

const SlotGames = () => {
  const { language } = useContext(LanguageContext);

  const gameOptions = [
    
      { "id": "jili", "label": "JILI", "hidden": false },
      { "id": "tito", "label": "TITO", "hidden": false },
      { "id": "pp", "label": "PP", "hidden": true },
      { "id": "pg", "label": "PG", "hidden": true },
      { "id": "smart", "label": "SMART", "hidden": true },
      { "id": "spg", "label": "SPG", "hidden": true },
      { "id": "fc", "label": "FC", "hidden": true },
      { "id": "jdb", "label": "JDB", "hidden": true },
      { "id": "rt", "label": "RT", "hidden": true }
    
  ];
  return (
    <div>
      <img
        src={slotgamesImage}
        alt=""
        className="w-full h-32 md:h-auto lg:h-auto object-cover"
      />
      {/* খেলা অনুসন্ধান করুন */}
      <FindGames/>

      {/* select options */}
      <GameOptions options={gameOptions}/>

      <SlotImages language={language}/>
    </div>
  );
};

export default SlotGames;
