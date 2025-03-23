import Bdlogo from "../../assets/BD.png"; // Ensure the correct path

const BDTModal = ({ isOpenLanguage, toggleCloseLanguage, toggleLanguage, currentLang = "bn" }) => {
  if (!isOpenLanguage) return null;

  const handleLanguageChange = (lang) => {
    toggleLanguage(lang);  // ভাষা পরিবর্তন করবে
    toggleCloseLanguage(); // Modal বন্ধ করবে
  };

  
  const text = {
    en: {
      title: "Currency & Language",
      currency: "BDT English",
      english: "English",
      bengali: "বাংলা",
    },
    bn: {
      title: "মুদ্রা এবং ভাষা",
      currency: "BDT বাংলা",
      english: "ইংরেজি",
      bengali: "বাংলা",
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20" onClick={toggleCloseLanguage}>
      <div className="bg-white pb-6 rounded-md shadow-md w-64" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-row px-5 py-3 items-center justify-between bg-common-blue">
          <h2 className="font-thin text-white">{text[currentLang].title}</h2>
          <button onClick={toggleCloseLanguage} className="text-gray-600 hover:text-common-orange">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center pt-3 space-x-3">
          <div className="flex flex-row items-center gap-2 font-bold">
            <img src={Bdlogo} alt="BD Logo" className="h-8" />
            <h3 className="text-black text-xs">{text[currentLang].currency}</h3>
          </div>
          <div className="flex flex-col space-y-2">
            <button onClick={() => handleLanguageChange("en")} className="border p-2 rounded-md text-black font-bold w-32 text-center hover:border-common-blue hover:text-common-blue">
              {text[currentLang].english}
            </button>
            <button onClick={() => handleLanguageChange("bn")} className="border p-2 rounded-md text-black font-bold w-32 text-center hover:border-common-blue hover:text-common-blue">
              {text[currentLang].bengali}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BDTModal;
