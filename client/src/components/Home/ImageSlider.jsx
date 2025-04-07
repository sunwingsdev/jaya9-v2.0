import  { useEffect, useState } from 'react';
import image1 from "../../assets/newimage1.webp";
import image2 from "../../assets/new image-2.webp";
import image3 from "../../assets/new image-3.webp";
import image4 from "../../assets/new image-4.webp";
import image5 from "../../assets/new image-5.webp";
import image6 from "../../assets/new image-6.webp";
import imageone from "../../assets/image1.jpg";
import imagetwo from "../../assets/image2.jpg";
import imagethree from "../../assets/image3.jpg";
import imagefour from "../../assets/image4.jpg";
import imagesix from "../../assets/image6.jpg";
import imageseven from "../../assets/image7.jpg";

const ImageSlider = () => {
    const images = [image1, image2, image3, image4, image5, image6];
      const imagesLarger = [
        imageone,
        imagetwo,
        imagethree,
        imagefour,
        imagesix,
        imageseven,
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3000); // 3 seconds interval
      
          return () => clearInterval(interval);
        }, [images.length]);
    return (
        <div className="w-full flex flex-col items-center">
        <div className="relative  w-full grid   lg:grid-cols-1 ">
          <img
            src={images[currentIndex]}
            alt=""
            className="w-full h-32 lg:hidden flex md:h-auto  "
          />
          <img
            src={imagesLarger[currentIndex]}
            alt=""
            className="w-full h-auto hidden lg:flex  "
          />

          <div className="absolute bottom-0 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 w-1 lg:w-3 lg:h-3 rounded-full ${
                  currentIndex === index ? "bg-common-orange" : "bg-white"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    );
};

export default ImageSlider;