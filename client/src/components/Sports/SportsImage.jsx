

import sportslogo from '../../assets/splogo.jpg';

import newicon from "../../assets/game-icon-new-mobile.svg";

const SportsImage = ({language}) => {
    return (
        <div>
            <div className="px-6">
        <div className="relative md:w-5/12 lg:w-2/12   h-auto bg-cover bg-center group">
          <figure className="">
            <div className="relative ">
              <img src={sportslogo} alt="" className="" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
            </div>

            <button
             
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
            whitespace-nowrap text-xs bg-custom-orange text-white rounded-sm px-4 py-2 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {language === "bn" ? "এখন খেলুন" : "Play Now"}
            </button>
            <div className="absolute top-0 right-0 flex items-center justify-center text-xs rounded-lg  transition-opacity duration-300">
                  <img src={newicon} alt="New Icon" className='w-8 h-auto' />
                </div>

            <h3 className="absolute  bottom-0 left-0 bg-exchange-color text-white font-bold w-full shadow-exchange-shadow  text-center ">
              IBC Sports
            </h3>
          </figure>
        </div>
      </div>
        </div>
    );
};

export default SportsImage;