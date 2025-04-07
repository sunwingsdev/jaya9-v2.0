
import fishingImage from "../assets/fishing.jpg";
import FindGames from "../components/ReuseableComponents/FindGames";
import GameOptions from "../components/ReuseableComponents/GameOptions";

const Fishing = () => {
  const gameOptions = [
    { id: "jili", label: "JILI" },
    { id: "tito", label: "TITO" },
    { id: "spg", label: "SPG" }
  ];
  
  return (
    <div>
      <div>
        <div>
          <img
            src={fishingImage}
            alt=""
            className="w-full h-32 md:h-auto lg:h-auto object-cover"
          />
        </div>
        <FindGames/>
        
       <GameOptions options={gameOptions}/>
        
      </div>
    </div>
  );
};

export default Fishing;
