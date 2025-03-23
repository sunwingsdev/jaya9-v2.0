import { useContext, useState } from "react";
import signUpImage from "../assets/bd-desktop-679a25600aae8.jpg";
import { LanguageContext } from "../Context/LanguageContext";

const SignUp = () => {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const translations = {
    en: {
      title: "Sign Up",
      username: "Username",
      password: "Password",
      confirmPassword: "Confirm Password",
      placeholder: "Enter here",
      submit: "Next",
    },
    bn: {
      title: "নিবন্ধন",
      username: "ব্যবহারকারীর নাম",
      password: "গোপন নম্বর",
      confirmPassword: "পাসওয়ার্ড নিশ্চিত করুন",
      placeholder: "এখানে পূরণ করুন",
      submit: "পরবর্তী",
    },
  };

  const t = translations[language] || translations.bn;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="mt-5 lg:px-40">
      <div className="flex flex-col lg:flex-row gap-2 lg:border-4 border-common-blue p-8">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="lg:w-1/3 space-y-4">
          <div>
            <h3 className="text-common-orange hidden lg:flex text-center border-b border-common-orange">
              {t.title}
            </h3>
          </div>
          <div>
            <h3 className="text-black">{t.username}</h3>
            <input
              type="text"
              name="username"
              placeholder={t.placeholder}
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3 className="text-black">{t.password}</h3>
            <input
              type="password"
              name="password"
              placeholder={t.placeholder}
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3 className="text-black">{t.confirmPassword}</h3>
            <input
              type="password"
              name="confirmPassword"
              placeholder={t.placeholder}
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center items-center">
            <button type="submit" className="bg-common-blue text-white px-6 py-2 rounded-md">
              {t.submit}
            </button>
          </div>
        </form>

        {/* Image Section */}
        <div className="lg:w-2/3">
          <img
            src={signUpImage}
            alt="Sign Up Illustration"
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => console.log("Image clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
