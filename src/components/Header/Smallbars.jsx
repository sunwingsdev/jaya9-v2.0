
import { Link } from "react-router-dom";
import Jayalogo from "../../assets/logo3.png";
import Bdlogo from "../../assets/BD.png";

const Smallbars = ({isOpen,setIsOpen,location,language,menuRef,menuItems,toggleOpenLanguage}) => {
    return (
        <div>
            

        {/* Small & Medium Screen - Menu Button */}
        <div className="lg:hidden  absolute top-0 left-0 flex items-center  px-4 py-2 ">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="white"
            >
              <path
                d="M3 6h18M3 12h18m-18 6h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Menu (Small & Medium Screen) */}
        <div
          ref={menuRef}
          className={`fixed  top-0 left-0 h-full overflow-y-auto pb-4 w-3/5  text-black bg-white  shadow-lg transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden
          `}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            ✖
          </button>
          <div className="bg-bg-jaya9-logo-color    py-3">
            <img src={Jayalogo} alt="" className="h-8 lg:h-12   " />
          </div>
          <ul className="flex flex-col  ">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path || "#"}
                onClick={() => setIsOpen(false)}
              >
                <li className={`flex p-4 whitespace-nowrap items-center ${
              location.pathname === item.path
                ? "bg-gray-300  "
                : ""
            } space-x-2 text-center`}>
                  <img src={item.icon} alt={item.name} className="w-8 h-auto" />
                  <span className="text-lg font-medium">{item.name}</span>
                  {item.extra && (
                    <div className="text-sm">{item.extra}</div>
                  )}{" "}
                </li>
                <div className="mt-1 text-xs text-center">{item.logo}</div>{" "}
              </Link>
            ))}
            <li className="flex font-medium gap-3 p-4" onClick={toggleOpenLanguage}>
              <img src={Bdlogo} alt="Language" className="w-8 h-auto" />
              
              {language === "bn" ? "ভাষা" : "Language"}
            </li>
          </ul>
        </div>
        </div>
    );
};

export default Smallbars;