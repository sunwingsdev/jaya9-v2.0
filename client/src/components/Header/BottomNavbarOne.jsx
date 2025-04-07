import { Link } from "react-router-dom";
import toolbarhomelogo from "../../assets/toolbar-icon-home.svg";
import toolbarpromotionlogo from "../../assets/toolbar-icon-promotion.svg";
import toolbardepositlogo from "../../assets/toolbar-icon-deposit.svg";
import toolbarprofile from "../../assets/toolbar-icon-profile.svg";

const BottomNavbarOne = ({ language }) => {
  const text = {
    en: {
      home: "Home",
      promotion: "Promotion",
      deposit: "Deposit",
      profile: "Profile",
    },
    bn: {
      home: "বাড়ি",
      promotion: "প্রমোশন",
      deposit: "আমানত",
      profile: "প্রোফাইল",
    },
  };
  
  return (
    <div className="fixed  p-2 bg-toolbarbackground text-sm  bottom-0 grid grid-cols-4 lg:hidden left-0 w-full  text-white">
      <Link to="/">
        <div className=" flex flex-col gap-1 items-center  ">
          <img src={toolbarhomelogo} alt="" className="w-5 h-auto" />
          <button>{text[language].home}</button>
        </div>
      </Link>
      <Link to="/promotion">
        <div className=" flex flex-col gap-1 items-center  ">
          <img src={toolbarpromotionlogo} alt="" className="w-5 h-auto" />
          <button>{text[language].promotion}</button>
        </div>
      </Link>

      <Link to="/amanot">
        <div className="  flex flex-col gap-1 items-center  text-white">
          <img src={toolbardepositlogo} alt="" className="w-5 h-auto" />
          <button>{text[language].deposit}</button>
        </div>
      </Link>

      <Link to="/information">
        <div className="   flex flex-col gap-1 items-center  text-white">
          <img src={toolbarprofile} alt="" className="w-5 h-auto" />
          <button>{text[language].profile}</button>
        </div>
      </Link>
    </div>
  );
};

export default BottomNavbarOne;
