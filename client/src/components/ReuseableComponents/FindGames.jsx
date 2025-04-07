import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

const FindGames = () => {
  const { language } = useContext(LanguageContext);
  
  // ভাষার ভিত্তিতে টেক্সট সেট করা
  const text = {
    searchPlaceholder: language === "bn" ? "খেলা অনুসন্ধান করুন" : "Search games",
    exchange: language === "bn" ? "বিনিময়" : "Exchange",
  };

  return (
    <div className="flex flex-row items-center px-4 pt-4">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 105.293 14.707l4.387 4.387a1 1 0 001.414-1.414l-4.387-4.387A8 8 0 0010 2zm-6 8a6 6 0 1112 0 6 6 0 01-12 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <select
          className="shadow-2xl text-gray-600 font-medium p-2 border border-black w-full outline-none max-w-4xl"
        >
          <option value="" disabled selected>
            {text.searchPlaceholder}
          </option>
          <option value="exchange">{text.exchange}</option>
        </select>
      </div>
    </div>
  );
};

export default FindGames;
