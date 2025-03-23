import { Link } from "react-router-dom";
import Jayalogo from "../../assets/logo3.png";
import ProbesKorun from "../LoginModal/Login";
import Bdlogo from "../../assets/BD.png";

const TopHeader = ({ amount,language, handleClick, isHovered, setIsHovered, setIsOpenModal, isOpenModal, toggleOpenLanguage }) => {
   

  const text = {
    en: {
      wallet: "Main Wallet",
      login: "Login",
      register: "Sign Up",
      deposit: "Deposit",
      profile: "Profile",
      logout: "Logout",
      currency: "BDT English",
    },
    bn: {
      wallet: "প্রধান ওয়ালেট",
      login: "প্রবেশ করুন",
      register: "নিবন্ধন",
      deposit: "আমানত",
      profile: "প্রোফাইল",
      logout: "লগআউট",
      currency: "BDT বাংলা",
    },
  };

  return (
    <nav className="flex bg-common-blue justify-center lg:justify-around items-center py-2">
      <img src={Jayalogo} alt="Logo" className="h-8 lg:h-12" />

      <ul className="hidden lg:flex space-x-2 items-center text-white font-sans text-sm">
        <div className="flex flex-row gap-2 items-center">
          <h3 className="text-lg">{text[language].wallet}</h3>
          <span className="text-lg">৳ {amount !== null ? amount.toFixed(2) : "*.*"}</span>

          <button onClick={handleClick}>
            <svg
              className={`transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                stroke={isHovered ? "#f56908" : "#f56908"}
                strokeWidth="1.5"
                d="M12 4V1l-4 4 4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H6c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7z"
              />
            </svg>
          </button>
        </div>


        {/* <button onClick={() => setIsOpenModal(true)} className="border border-white px-4 py-2 hover:border-orange-500 outline-none rounded-sm text-white">
          {text[language].login}
        </button> 
        <ProbesKorun isOpenModal={isOpenModal} handleClose={() => setIsOpenModal(false)} />
         <Link to="/nibondon">
          <button className="bg-common-orange px-8 py-2 rounded-sm">{text[language].register}</button>
        </Link> */}


        <Link to="/amanot">
          <button className="px-4 bg-custom-orange py-1 text-lg rounded-sm">{text[language].deposit}</button>
        </Link>
        <Link to="/information">
          <button className="px-4 py-1 hover:border border-common-orange rounded-lg transition-all duration-300 ease-out text-lg">
            {text[language].profile}
          </button>
        </Link>
        <Link to="">
          <button className="px-4 py-1 hover:border border-common-orange rounded-lg text-lg">{text[language].logout}</button>
        </Link>


        <div>
          <span
            className="font-semibold text-lg flex items-center gap-0.5 hover:border border-common-orange px-2 py-1 rounded-lg cursor-pointer"
            onClick={toggleOpenLanguage}
          >
            <span>
              <img src={Bdlogo} alt="BD Logo" className="h-3" />
            </span>
            {text[language].currency}
          </span>

          
        </div>
      </ul>
    </nav>
  );
};

export default TopHeader;
