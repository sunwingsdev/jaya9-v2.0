import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

const Marquee = () => {
  const { language } = useContext(LanguageContext);

  // ভাষার ভিত্তিতে টেক্সট সেট করা
  const text = {
    bn: [
      "WWW.JAYA9.APP এখন আমাদের অফিসিয়াল ওয়েবসাইট:",
      "WWW.JAYA9.APP আপনার বিশ্বস্ত প্ল্যাটফর্ম JAYA9",
      "Jaya9 এ স্বাগতম : বিশ্বস্ত ক্রিকেট এক্সচেঞ্জ এবং বেটিং প্ল্যাটফর্ম!"
    ],
    en: [
      "WWW.JAYA9.APP is now our official website:",
      "WWW.JAYA9.APP Your trusted platform JAYA9",
      "Welcome to Jaya9: A trusted cricket exchange and betting platform!"
    ]
  };

  return (
    <div className="flex justify-evenly bg-common-blue overflow-hidden py-2 relative">
      <div className="w-5/6 text-white overflow-hidden">
        <span className="w-full absolute top-1 left-0 md:left-8 lg:left-12 text-common-orange text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="28"
            fill="currentColor"
          >
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm6.29-3c-.52 0-1.02-.2-1.41-.59-.78-.78-.78-2.05 0-2.83.39-.39.89-.59 1.41-.59s1.02.2 1.41.59c.78.78.78 2.05 0 2.83-.39.39-.89.59-1.41.59zM12 16c-2.76 0-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2c0 2.76-2.24 5-5 5zm5.3-4.71c-.39-.39-.39-1.02 0-1.41 1.17-1.17 1.17-3.07 0-4.24-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0 1.95 1.95 1.95 5.12 0 7.07-.39.39-1.02.39-1.41-.01z" />
          </svg>
        </span>

        <div className="w-full text-sm">
          <div className="marquee block">
            {text[language]?.map((item, index) => (
              <span key={index} className="mx-4">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
