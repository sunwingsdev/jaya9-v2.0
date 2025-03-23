
import { useContext } from "react";
import liveCasinoImage from "../assets/livecasiono.jpg";
import CasinoImages from "../components/LiveCasino/CasinoImages";
import FindGames from "../components/ReuseableComponents/FindGames";
import GameOptions from "../components/ReuseableComponents/GameOptions";
import { LanguageContext } from "../Context/LanguageContext";

const LiveCasino = () => {
  const { language } = useContext(LanguageContext);
  const gameOptions = [
    { id: "EVO", label: "EVO" },
    { id: "AP", label: "AP" },
    { id: "AE", label: "AE" },
  ];
  return (
    <div>
      <div className="w-full min-w-full   bg-cover">
        <img
          src={liveCasinoImage}
          alt="Live Casino"
          className="w-full h-32 md:h-auto lg:h-auto object-cover"
        />
      </div>

      <FindGames />

      <GameOptions options={gameOptions} />
      

      <CasinoImages language={language} />
    </div>
  );
};

export default LiveCasino;
