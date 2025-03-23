import { useContext, useState } from "react";
import BajiTab from "../components/Baji/BajiTab";
import BajiTable from "../components/Baji/BajiTable";
import { LanguageContext } from "../Context/LanguageContext";

const Baji = () => {
  const { language } = useContext(LanguageContext);

  const tabs = language === "bn"
    ? ["সংক্ষিপ্ত বিবরণ", "ক্রিকেট", "লাইভ ক্যাসিনো", "স্লট গেম", "টেবিল গেম", "স্পোর্টস", "মাছ ধরা"]
    : ["Overview", "Cricket", "Live Casino", "Slot Games", "Table Games", "Sports", "Fishing"];

  const [activeTab, setActiveTab] = useState(language === "bn" ? "সংক্ষিপ্ত বিবরণ" : "Overview");
  const [selectedOption, setSelectedOption] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [sortOrder, setSortOrder] = useState(null); // Sort direction state

  // **Sorting toggle function**
  const toggleSort = () => {
    setSortOrder((prevState) => (prevState === "asc" ? "desc" : "asc"));
  };

  const overviewColumns = language === "bn"
    ? ["তারিখ", "বেট গণনা", "বেট পরিমাণ", "জয়/পরাজয়", "জ্যাকপট অবদান", "জ্যাকপট পরিমাণ"]
    : ["Date", "Bet Count", "Bet Amount", "Win/Loss", "Jackpot Contribution", "Jackpot Amount"];

  const commonColumns = language === "bn"
    ? ["তারিখ", "আইডি", "বেট আইডি", "প্রদানকারী", "গেমের নাম", "বেট পরিমাণ", "বৈধ বেট", "জয়/পরাজয়", "টিপ", "জ্যাকপট অবদান", "জ্যাকপট পরিমাণ"]
    : ["Date", "Id", "Bet Id", "Provider", "Game Name", "Bet Amount", "Valid Bet", "Win/Loss", "Tip", "Jackpot Contribution", "Jackpot Amount"];

  return (
    <div className="bg-informationBackground min-h-screen">
      <div className="mx-auto pt-4 bg-white max-w-7xl min-h-screen">
        {/* Tab buttons */}
        <BajiTab
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Table */}
        <BajiTable 
          activeTab={activeTab}
          commonColumns={commonColumns}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          dateInput={dateInput}
          setDateInput={setDateInput}
          overviewColumns={overviewColumns}
          toggleSort={toggleSort}
          sortOrder={sortOrder}
        />
      </div>
    </div>
  );
};

export default Baji;
