import { useContext, useState } from "react";
import { LanguageContext } from "../Context/LanguageContext";

const PasswordChange = () => {
  const { language } = useContext(LanguageContext);
  const isBengali = language === "bn"; // বাংলা হলে সত্য

  const passwordData = [
    { id: 1, label: isBengali ? "বর্তমান গোপন নম্বর" : "Current Password" },
    { id: 2, label: isBengali ? "গোপন নম্বর" : "New Password" },
    { id: 3, label: isBengali ? "নিশ্চিত করুন নতুন গোপন নম্বর" : "Confirm New Password" },
  ];

  const [passwords, setPasswords] = useState(
    passwordData.reduce((acc, item) => ({ ...acc, [item.id]: "" }), {})
  );

  const handlePasswordChange = (id, value) => {
    setPasswords((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="bg-white pb-4">
      <div className="mx-auto px-2 lg:px-0 lg:m-5 max-w-5xl md:max-w-5xl lg:max-w-7xl">
        <div className="bg-informationBackground">
          {passwordData.map((item) => (
            <div
              key={item.id}
              className="flex flex-row lg:grid lg:grid-cols-3 lg:justify-items-center items-center md:justify-around p-6 px-3 lg:px-20 md:px-6 lg:gap-x-20 lg:p-6 gap-1 md:gap-4 justify-around lg:justify-between"
            >
              <h3 className="lg:text-md text-sm lg:w-auto w-1/3 text-left lg:text-right">
                {item.label}
              </h3>

              <input
                type="password"
                placeholder={isBengali ? "এখানে পাসওয়ার্ড পূরণ করুন" : "Enter your password"}
                className="bg-informationBackground outline-none"
                value={passwords[item.id]}
                onChange={(e) => handlePasswordChange(item.id, e.target.value)}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f56908"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mx-auto max-w-[300px] lg:max-w-4xl">
        <button className="w-full p-2 text-white justify-items-center bg-common-blue">
          {isBengali ? "জমা দিন" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default PasswordChange;
