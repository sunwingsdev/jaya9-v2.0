import { useState, useEffect } from "react";
import coinEventslogo from "../../assets/coin-event.svg";
import coinUnchecklogo from "../../assets/coin_unchecked.svg";
import coinlogo from "../../assets/coin.svg";

const AutoOpenModal = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isBn = language === "bn";

  const images = [
    { src: coinUnchecklogo, number: "1", day: isBn ? "সোম" : "Mon" },
    { src: coinUnchecklogo, number: "2", day: isBn ? "মঙ্গল" : "Tues" },
    { src: coinUnchecklogo, number: "1", day: isBn ? "বৃহস্পতি" : "Thurs" },
    { src: coinUnchecklogo, number: "1", day: isBn ? "বুধ" : "Wed" },
    { src: coinlogo, number: "1", day: isBn ? "শুক্র" : "Fri" },
    { src: coinlogo, number: "2", day: isBn ? "শনি" : "Sat" },
    { src: coinlogo, number: "2", day: isBn ? "রবি" : "Sun" },
  ];

  useEffect(() => {
    setIsOpen(true); // Page load hole modal open
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed z-50">
      {isOpen && (
        <div
          className="fixed px-5 lg:px-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-5 rounded-lg shadow-lg relative w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg py-2 border-b border-gray-400 font-bold mb-2">
              {isBn ? "দৈনিক চেক ইন" : "Daily Check-In"}
            </h2>
            <button
              className="absolute top-7 right-2 text-xl"
              onClick={closeModal}
            >
              ✖
            </button>

            <div className="flex flex-row items-center justify-center bg-gray-300 py-1 mb-4">
              <img src={coinEventslogo} alt="Coin Event" className="w-6 h-6" />
              <h3 className="text-sm ml-2">18</h3>
            </div>

            {/* Grid for the images */}
            <div className="grid grid-cols-7 gap-2 text-center">
              {images.map((image, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-sm font-bold">{image.number}</span>
                  <img src={image.src} alt={`Coin ${index}`} className="w-6 h-6" />
                  <span className="text-xs">{image.day}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center p-3">
              <button className="bg-common-blue px-3 py-1 rounded-lg text-white">
                {isBn ? "আজ চেক ইন করুন" : "Check In Today"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoOpenModal;
