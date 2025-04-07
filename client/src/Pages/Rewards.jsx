import { useContext, useState } from "react";
import RewardTable from "../components/Rewards/RewardTable";
import AutoOpenModal from "../components/AutoModal/AutoModal";
import TopReward from "../components/Rewards/TopReward";
import { LanguageContext } from "../Context/LanguageContext";

const Rewards = () => {
  const [dateInput, setDateInput] = useState("");
  const { language } = useContext(LanguageContext);

  const text = {
    bn: {
      rewards: "পুরস্কার",
    },
    en: {
      rewards: "Rewards",
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-5xl bg-white lg:min-h-screen rounded-xl m-10 shadow-2xl">
        <div>
          <h3 className="text-lg px-10 pb-3 lg:p-10">{text[language].rewards}</h3>
          <div className="px-10">
            <TopReward language={language} />
            <RewardTable language={language} dateInput={dateInput} setDateInput={setDateInput} />
          </div>
        </div>
        <div>
          <AutoOpenModal language={language} />
        </div>
      </div>
    </div>
  );
};

export default Rewards;
