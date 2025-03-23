import { Link } from "react-router-dom";
import toolbarhomelogo from "../../assets/toolbar-icon-home.svg";
import toolbarpromotionlogo from "../../assets/toolbar-icon-promotion.svg";
import toolbardepositlogo from "../../assets/toolbar-icon-deposit.svg";
import toolbarprofile from "../../assets/toolbar-icon-profile.svg";

const BottomNavbarOne = () => {
    return (
        <div className="fixed  p-2 bg-toolbarbackground text-sm  bottom-0 grid grid-cols-4 lg:hidden left-0 w-full  text-white">
                  <Link to="/">
                    <div className=" flex flex-col gap-1 items-center  ">
                      <img src={toolbarhomelogo} alt="" className="w-5 h-auto" />
                      <button>বাড়ি</button>
                    </div>
                  </Link>
                  <Link to="/promotion">
                    <div className=" flex flex-col gap-1 items-center  ">
                      <img src={toolbarpromotionlogo} alt="" className="w-5 h-auto" />
                      <button>প্রমোশন</button>
                    </div>
                  </Link>
        
                  <Link to="/amanot">
                    <div className="  flex flex-col gap-1 items-center  text-white">
                      <img src={toolbardepositlogo} alt="" className="w-5 h-auto" />
                      <button>আমানত</button>
                    </div>
                  </Link>
        
                  <Link to="/information">
                    <div className="   flex flex-col gap-1 items-center  text-white">
                      <img src={toolbarprofile} alt="" className="w-5 h-auto" />
                      <button>প্রোফাইল</button>
                    </div>
                  </Link>
                </div>
    );
};

export default BottomNavbarOne;