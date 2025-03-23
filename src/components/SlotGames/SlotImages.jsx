import  { useState } from 'react';
import ttlog1 from '../../assets/ttlogo1.jpg';
import ttlog2 from '../../assets/ttlogo2.jpg';
import ttlog3 from '../../assets/ttlogo3.jpg';
import ttlog4 from '../../assets/ttlogo4.jpg';
import ttlog5 from '../../assets/ttlogo5.jpg';
import ttlog6 from '../../assets/ttlogo7 (2).png';
import ttlog7 from '../../assets/ttlogo7 (2).png';
import ttlog8 from '../../assets/ttlogo8.png';
import ttlog9 from '../../assets/ttlogo9.jpg';
import ttlog10 from '../../assets/ttlogo10.png';
import ttlog11 from '../../assets/ttlogo11.png';
import ttlog12 from '../../assets/ttlogo12.png';
import ttlog13 from '../../assets/ttlogo13.png';
import ttlog14 from '../../assets/ttlogo14.jpg';
import ttlog15 from '../../assets/ttlogo15.png';
import ttlog16 from '../../assets/ttlogo16.png';
import ttlog17 from '../../assets/ttlogo17.jpg';
import ttlog18 from '../../assets/lllogo18 (2).webp';
import ttlog19 from '../../assets/ttlogo19.jpg';
import ttlog20 from '../../assets/lllogo20.webp';

import hoticon from "../../assets/game-icon-hot-mobile.svg";
import newicon from "../../assets/game-icon-new-mobile.svg";

const images = [
  { src: ttlog1, alt: 'Image 1', title: 'Card Matka' },
  { src: ttlog2, alt: 'Image 2', title: 'Andar Bahar' },
  { src: ttlog3, alt: 'Image 3', title: 'Teen Patti' },
  { src: ttlog4, alt: 'Image 4', title: 'Penguine Panic' },
  { src: ttlog5, alt: 'Image 5', title: 'Jackpot Jump' },
  { src: ttlog6, alt: 'Image 6', title: 'Super Slots' },
  { src: ttlog7, alt: 'Image 7', title: 'Lucky Spin' },
  { src: ttlog8, alt: 'Image 8', title: 'Royal Flush' },
  { src: ttlog9, alt: 'Image 9', title: 'Treasure Hunt' },
  { src: ttlog10, alt: 'Image 10', title: 'Cannon Fire' },
  { src: ttlog11, alt: 'Image 11', title: 'Casino Royale' },
  { src: ttlog12, alt: 'Image 12', title: 'Pirate’s Gold' },
  { src: ttlog13, alt: 'Image 13', title: 'Adventure Quest' },
  { src: ttlog14, alt: 'Image 14', title: 'Fruit Frenzy' },
  { src: ttlog15, alt: 'Image 15', title: 'Mystery Mansion' },
  { src: ttlog16, alt: 'Image 16', title: 'Dragon’s Lair' },
  { src: ttlog17, alt: 'Image 17', title: 'Monkey King' },
  { src: ttlog18, alt: 'Image 18', title: 'Jungle Safari' },
  { src: ttlog19, alt: 'Image 19', title: 'Bonus Dice' },
  { src: ttlog20, alt: 'Image 20', title: 'Lucky Dice' }
];
const itemsPerPage = 20; // Number of images per page
const totalPages = Math.ceil(images.length / itemsPerPage);

const SlotImages = ({language}) => {
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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 pt-3">
  {currentImages.map((image, index) => (
    <div
      key={index}
      className="relative w-full h-[160px] bg-cover bg-center group"
    >
      <figure>
        {/* Image Container */}
        <div className="relative w-full h-[160px]">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover rounded-md" // Full height with cover
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
        </div>

        {/* Play Button */}
        <button
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
            whitespace-nowrap text-xs bg-custom-orange text-white rounded-sm px-4 py-2 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {language === "bn" ? "এখন খেলুন" : "Play Now"}
        </button>

        {/* Title (h3) */}
        <h3 className="absolute bottom-0 left-0 w-full bg-exchange-color text-white font-bold shadow-exchange-shadow 
          text-xs sm:text-sm md:text-base lg:text-lg text-center max-h-12 overflow-hidden truncate px-2 py-1 leading-tight">
          {image.title}
        </h3>

        {/* Badge (Hot or New) */}
        <div className="absolute top-0 right-0 flex items-center justify-center text-xs rounded-lg ">
          <img src={index < 10 ? hoticon : newicon} alt="Badge Icon" className="w-8 h-auto" />
        </div>
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

export default SlotImages;