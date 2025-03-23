
import cricketImage from "../assets/cricket.jpg";
import FindGames from "../components/ReuseableComponents/FindGames";
import GameOptions from "../components/ReuseableComponents/GameOptions";
import CricketImages from "../components/Cricket/CricketImages";
import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";

const Cricket = () => {
  const { language } = useContext(LanguageContext);
  const gameOptions = [
    { id: "betswiz", label: "BETSWIZ" }
    
  ];
  return (
    <div className="">
      <div>
        <img
          src={cricketImage}
          alt=""
          className="w-full h-32 md:h-auto lg:h-auto object-cover"
        />
       
        <FindGames/>

        
        <GameOptions options={gameOptions}/>

        <CricketImages language={language}/>
        
      </div>
    </div>
  );
};

export default Cricket;
