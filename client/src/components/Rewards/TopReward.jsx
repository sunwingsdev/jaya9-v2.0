import checkinlogo from "../../assets/reward-checkin.svg";
import iconluckyspin from "../../assets/icon-luckyspin.svg";
import coinEventslogo from "../../assets/coin-event.svg";

const TopReward = ({ language, dateInput, setDateInput }) => {
  const text = {
    bn: {
      coinRewards: "কয়েন পুরস্কার",
      checkIn: "চেক-ইন",
      luckyWheel: "লাকি হুইল",
    },
    en: {
      coinRewards: "Coin Rewards",
      checkIn: "Check-In",
      luckyWheel: "Lucky Wheel",
    },
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center gap-5">
        <div>
          <h3>{text[language].coinRewards}</h3>
        </div>
        <div className="flex flex-row items-center justify-center w-full max-w-xs bg-gray-300 py-1">
          <img src={coinEventslogo} alt="Coin Event" className="w-6 h-6" />
          <h3 className="text-sm ml-2">18</h3>
        </div>

        <div className="flex flex-col items-center">
          <img src={checkinlogo} alt="" className="w-10 h-auto" />
          <h3 className="whitespace-nowrap">{text[language].checkIn}</h3>
        </div>
        <div className="flex flex-col w-full whitespace-nowrap items-center">
          <img src={iconluckyspin} alt="" className="w-10 h-auto" />
          <h3>{text[language].luckyWheel}</h3>
        </div>
      </div>
      {/* date */}
      <div className="relative w-full my-8 lg:my-0 flex justify-end max-w-xs lg:max-w-sm">
        <input
          type="date"
          value={dateInput}
          onChange={(e) => {
            setDateInput(e.target.value);
            console.log("Selected Date:", e.target.value);
          }}
          className="p-2 pr-10 border text-black font-medium border-gray-300 rounded w-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="auto"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon-cross absolute top-0 right-24 lg:right-28"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="auto"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon-search absolute top-0 right-16 lg:right-20"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>
  );
};

export default TopReward;
