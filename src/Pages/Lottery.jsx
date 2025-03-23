
import { useContext } from "react";
import lotteryimage from "../assets/lottery.jpg";
import LotteryImage from "../components/Lottery/LotteryImage";
import FindGames from "../components/ReuseableComponents/FindGames";
import GameOptions from "../components/ReuseableComponents/GameOptions";
import { LanguageContext } from "../Context/LanguageContext";

const Lottery = () => {
  const { language } = useContext(LanguageContext);
  const gameOptions = [
    { id: "ibc", label: "IBC" }
  ];
  
  return (
    <div>
      <img
        src={lotteryimage}
        alt=""
        className="w-full h-32 md:h-auto lg:h-auto object-cover"
      />

      <FindGames/>
     <GameOptions options={gameOptions}/>
      
      <LotteryImage language={language}/>
    </div>
  );
};

export default Lottery;
