import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

const Login = ({ isOpenModal, handleClose }) => {
  const { language } = useContext(LanguageContext);
  if (!isOpenModal) return null; // Modal বন্ধ থাকলে কিছুই রেন্ডার হবে না

  const text = {
    en: {
      welcome: "Welcome to [Brand]",
      username: "Username",
      password: "Password",
      enterHere: "Enter here",
      login: "Login"
    },
    bn: {
      welcome: "[ব্র্যান্ড] এ স্বাগতম",
      username: "ব্যবহারকারীর নাম",
      password: "গোপন নম্বর",
      enterHere: "এখানে পূরণ করুন",
      login: "প্রবেশ করুন"
    }
  };

  return (
    <div
      className="fixed px-5 lg:px-0 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClose} // বাইরে ক্লিক করলে বন্ধ হবে
    >
      <div
        className="bg-white rounded-md shadow-md w-80"
        onClick={(e) => e.stopPropagation()} // Modal এ ক্লিক করলে বন্ধ হবে না
      >
        <div className="flex flex-row px-5 py-3 items-center justify-between bg-common-blue">
          <h2 className="font-semibold text-white">{text[language].welcome}</h2>
          <button onClick={handleClose} className="text-gray-600 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <div className="p-5">
          <h3 className="text-black">{text[language].username}</h3>
          <input type="text" className="w-full p-2 border rounded-md focus:ring-1 focus:ring-red-500" placeholder={text[language].enterHere} />

          <h3 className="mt-4 text-black">{text[language].password}</h3>
          <input type="password" className="w-full p-2 border rounded-md focus:ring-1 focus:ring-red-500" placeholder={text[language].enterHere} />

          <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
            {text[language].login}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
