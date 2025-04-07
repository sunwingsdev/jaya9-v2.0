
import tableImage from "../assets/table.jpg";
import TableImages from "../components/TableGames/TableImages";
import FindGames from "../components/ReuseableComponents/FindGames";
import GameOptions from "../components/ReuseableComponents/GameOptions";
import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";

const TableGames = () => {
  const { language } = useContext(LanguageContext);
  const gameOptions = [
    { id: "spribe", label: "SPRIBE"},
    { id: "jili", label: "JILI" },
    { id: "tito", label: "TITO"},
    { id: "km", label: "KM" },
    { id: "rt", label: "RT" }
  ];
  
  return (
    <div>
      <img
        src={tableImage}
        alt=""
        className="w-full h-32 md:h-auto lg:h-auto object-cover"
      />
     
      <FindGames/>
      
      <GameOptions options={gameOptions}/>

      <TableImages language={language}/>
    </div>
  );
};

export default TableGames;
