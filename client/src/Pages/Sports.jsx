
import sportsImage from "../assets/sports.jpg";
import SportsImage from "../components/Sports/SportsImage";
import FindGames from "../components/ReuseableComponents/FindGames";
import GameOptions from "../components/ReuseableComponents/GameOptions";
import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";

const Sports = () => {
  const { language } = useContext(LanguageContext);
  const gameOptions = [
    { id: "ibc", label: "IBC" }
  ];
  return (
    <div>
      <img
        src={sportsImage}
        alt=""
        className="w-full h-32 md:h-auto lg:h-auto object-cover"
      />
      
      <FindGames/>
      
      <GameOptions options={gameOptions}/>

      <SportsImage language={language}/>
    </div>
  );
};

export default Sports;
