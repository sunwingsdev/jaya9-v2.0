
import { useContext } from "react";
import crashImage from "../assets/crash_bd.png";
import CrashImages from "../components/Crash/CrashImages";
import FindGames from "../components/ReuseableComponents/FindGames";
import GameOptions from "../components/ReuseableComponents/GameOptions";
import { LanguageContext } from "../Context/LanguageContext";



const Crash = () => {
const { language } = useContext(LanguageContext);
  const gameOptions = [
    { id: "spribe", label: "SPRIBE" },
    { id: "jili", label: "JILI" },
    { id: "tito", label: "TITO" },
    { id: "aviatrix", label: "Aviatrix" },
    { id: "pp", label: "PP" },
    { id: "km", label: "KM" },
    { id: "smart", label: "SMART" }
  ];
  
  
  return (
    <div>
      <img
        src={crashImage}
        alt=""
        className="w-full h-28 md:h-auto lg:h-auto object-cover"
      />
      <FindGames/>
      <GameOptions options={gameOptions}/>

      <CrashImages language={language}/>
    </div>
  );
};

export default Crash;
