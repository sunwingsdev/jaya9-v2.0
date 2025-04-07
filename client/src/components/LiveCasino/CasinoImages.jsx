import  { useState } from 'react';
import lllogo1 from "../../assets/lllogo1.jpg";
import lllogo2 from "../../assets/lllogo2.jpg";
import lllogo3 from "../../assets/lllogo3.webp";
import lllogo4 from "../../assets/lllogo4.webp";
import lllogo5 from "../../assets/lllogo5.jpg";
import lllogo6 from "../../assets/lllogo6.jpg";
import lllogo7 from "../../assets/lllogo7.jpg";
import lllogo8 from "../../assets/lllogo8.jpg";
import lllogo9 from "../../assets/lllogo9.jpg";
import lllogo10 from "../../assets/lllogo10.jpg";
import lllogo11 from "../../assets/lllogo11.webp";
import lllogo12 from "../../assets/lllogo12.jpg";
import lllogo13 from "../../assets/lllogo13.jpg";
import lllogo14 from "../../assets/lllogo14.jpg";
import lllogo15 from "../../assets/lllogo15.jpg";
import lllogo16 from "../../assets/lllogo16.webp";
import lllogo17 from "../../assets/lllogo17 (2).webp";
import lllogo18 from "../../assets/lllogo18 (2).webp";
import lllogo19 from "../../assets/lllogo19.webp";
import lllogo20 from "../../assets/lllogo20.webp";
import lllogo21 from "../../assets/lllog021.webp";
import lllogo22 from "../../assets/lllogo22.webp";
import lllogo23 from "../../assets/lllogo23.webp";
import lllogo24 from "../../assets/lllogo24.webp";
import lllogo25 from "../../assets/lllogo25.webp";
import lllogo26 from "../../assets/lllogo26.webp";
import lllogo28 from "../../assets/lllogo28.webp";
import lllogo29 from "../../assets/lllogo29.webp";
import lllogo30 from "../../assets/lllogo30.webp";
import lllogo31 from "../../assets/lllogo31.webp";
import lllogo32 from "../../assets/lllogo32.webp";
import lllogo33 from "../../assets/lllogo33.webp";
import lllogo34 from "../../assets/lllogo34.webp";
import lllogo35 from "../../assets/lllogo35.webp";
import lllogo36 from "../../assets/lllogo36.webp";
import lllogo37 from "../../assets/llllogo37.webp";
import lllogo38 from "../../assets/lllogo38.webp";
import lllogo39 from "../../assets/lllogo39.webp";
import lllogo40 from "../../assets/lllogo40.webp";
import hoticon from "../../assets/game-icon-hot-mobile.svg";
import newicon from "../../assets/game-icon-new-mobile.svg";


const images = [
    { src: lllogo1, alt: "Image 1", title: "Evolution gaming" },
    { src: lllogo2, alt: "Image 2", title: "Live Lobby" },
    { src: lllogo3, alt: "Image 3", title: "Evo Funky time" },
    { src: lllogo4, alt: "Image 4", title: "Evo Imperial Quest" },
    { src: lllogo5, alt: "Image 5", title: "Crazy Time (20,000x0" },
    { src: lllogo6, alt: "Image 6", title: "Auto Lightning Roulette" },
    { src: lllogo7, alt: "Image 7", title: "Dream Catcher" },
    { src: lllogo8, alt: "Image 8", title: "Live Mega Roulette" },
    { src: lllogo9, alt: "Image 9", title: "Mega Ball" },
    { src: lllogo10, alt: "Image 10", title: "Lighting Dice" },
    { src: lllogo11, alt: "Image 11", title: "Lighting Baccarat" },
    { src: lllogo12, alt: "Image 12", title: "Korean Prosperity Tree" },
    { src: lllogo13, alt: "Image 13", title: "Thai Speed Baccarat A" },
    { src: lllogo14, alt: "Image 14", title: "Lotus Speed Baccarat A" },
    { src: lllogo15, alt: "Image 15", title: "Korean Golden Wealth" },
    { src: lllogo16, alt: "Image 16", title: "Salon Privé Blackjack O" },
    { src: lllogo17, alt: "Image 17", title: "Salon Privé Blackjack P" },
    { src: lllogo18, alt: "Image 18", title: "Salon Privé Blackjack Q" },
    { src: lllogo19, alt: "Image 19", title: "Japanese Speed Blackjack C" },
    { src: lllogo20, alt: "Image 20", title: "Japanese Sic Bo" },
    { src: lllogo21, alt: "Image 21", title: "Emperor Golden Wealth" },
    { src: lllogo22, alt: "Image 22", title: "Korean Salon Privé Baccarat" },
    { src: lllogo23, alt: "Image 23", title: "Korean Speed Blackjack D" },
    { src: lllogo24, alt: "Image 24", title: "Korean Blackjack E" },
    { src: lllogo25, alt: "Image 25", title: "Korean Speed Blackjack G" },
    { src: lllogo26, alt: "Image 26", title: "Easy Blackjack" },
    { src: lllogo28, alt: "Image 28", title: "Speed Super Sic Bo" },
    { src: lllogo29, alt: "Image 29", title: "Crazy Balls" },
    { src: lllogo30, alt: "Image 30", title: "Always 8 Baccarat" },
    { src: lllogo31, alt: "Image 31", title: "Platinum Privé Blackjack 1" },
    { src: lllogo32, alt: "Image 32", title: "Platinum Privé Blackjack 2" },
    { src: lllogo33, alt: "Image 33", title: "Platinum Privé Blackjack 3" },
    { src: lllogo34, alt: "Image 34", title: "Golden Roulette" },
    { src: lllogo35, alt: "Image 35", title: "Crystal Baccarat" },
    { src: lllogo36, alt: "Image 36", title: "Silver Roulette" },
    { src: lllogo37, alt: "Image 37", title: "Diamond Blackjack" },
    { src: lllogo38, alt: "Image 38", title: "Royal Baccarat" },
    { src: lllogo39, alt: "Image 39", title: "Titanic Roulette" },
    { src: lllogo40, alt: "Image 40", title: "Imperial Blackjack" },
  ];
  
  const itemsPerPage = 20; // Number of images per page
  const totalPages = Math.ceil(images.length / itemsPerPage);

const CasinoImages = ({language}) => {
      const [currentPage, setCurrentPage] = useState(1);

      const indexOfLastImage = currentPage * itemsPerPage;
      const indexOfFirstImage = indexOfLastImage - itemsPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
        }
      };
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-4 pt-3 gap-4">
        {currentImages?.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-44 bg-cover bg-center group"
          >
            <figure className="relative w-full h-full">
              {/* Image Container */}
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
              </div>

              {/* Play Button */}
              <button
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
          text-xs bg-custom-orange text-white rounded-sm px-4 py-2 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {language === "bn" ? "এখন খেলুন" : "Play Now"}
              </button>

              {/* Title */}
              <h3
                className="absolute bottom-0 left-0 w-full bg-exchange-color bg-opacity-80 text-white font-bold shadow-exchange-shadow 
          text-xs sm:text-sm md:text-base lg:text-lg text-center px-2 py-1 truncate"
              >
                {image.title}
              </h3>

              {/* Badge */}
              {hoticon && newicon && (
                <div className="absolute top-0 right-0">
                  <img
                    src={index < 10 ? hoticon : newicon}
                    alt="Badge Icon"
                    className="w-8 h-auto"
                  />
                </div>
              )}
            </figure>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center my-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-white text-black font-bold border border-black rounded-md hover:bg-common-blue hover:text-white transition-all disabled:opacity-50"
        >
          Previous
        </button>

        <div className="flex items-center space-x-2 mx-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 text-black border border-gray-300 rounded-md 
                ${
                  currentPage === index + 1
                    ? "bg-common-blue text-white"
                    : "bg-white hover:bg-common-blue hover:text-white"
                } 
                transition-all`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-white font-bold text-black border border-black rounded-md hover:bg-common-blue hover:text-white transition-all disabled:opacity-50"
        >
          Next
        </button>
      </div> 
        </div>
    );
};

export default CasinoImages;