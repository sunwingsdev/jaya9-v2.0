import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { LanguageContext } from "../../Context/LanguageContext";
import {
  useLazyGetAuthenticatedUserQuery,
  useLoginUserMutation,
} from "../../redux/features/allApis/usersApi/usersApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/slices/authSlice";
import toast from "react-hot-toast";

const LoginModal = ({ isOpenModal, handleClose }) => {
  const { language } = useContext(LanguageContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [getUser] = useLazyGetAuthenticatedUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenModal]);

  const onSubmit = async (data) => {
    console.log(data);
    const { data: loginData } = await loginUser(data);
    if (loginData?.token) {
      const { data: userData } = await getUser(loginData.token);
      dispatch(setCredentials({ token: loginData.token, user: userData }));
      if (userData) {
        toast.success("Login successful!");
        navigate("/");
        reset();
        handleClose();
        return;
      } else {
        toast.error("Login failed!");
      }
    }
  };

  const text = {
    en: {
      welcome: "Welcome to [Brand]",
      username: "Username",
      password: "Password",
      enterHere: "Enter here",
      login: "Login",
      required: "This field is required",
      minLength: "Must be at least 3 characters",
    },
    bn: {
      welcome: "[ব্র্যান্ড] এ স্বাগতম",
      username: "ব্যবহারকারীর নাম",
      password: "গোপন নম্বর",
      enterHere: "এখানে পূরণ করুন",
      login: "প্রবেশ করুন",
      required: "এই ঘরটি পূরণ করা আবশ্যক",
      minLength: "অন্তত ৩টি অক্ষর থাকতে হবে",
    },
  };

  if (!isOpenModal) return null;

  return (
    <div
      className="fixed px-5 lg:px-0 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-md shadow-md w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row px-5 py-3 items-center justify-between bg-common-blue">
          <h2 className="font-semibold text-white">{text[language].welcome}</h2>
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-red-500"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-5 text-black">
          <div className="mb-4">
            <label htmlFor="username" className="block text-black mb-1">
              {text[language].username}
            </label>
            <input
              id="username"
              type="text"
              className={`w-full p-2 border rounded-md focus:ring-1 focus:ring-red-500 ${
                errors.username ? "border-red-500" : ""
              }`}
              placeholder={text[language].enterHere}
              {...register("username", {
                required: text[language].required,
                minLength: {
                  value: 3,
                  message: text[language].minLength,
                },
              })}
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-black mb-1">
              {text[language].password}
            </label>
            <input
              id="password"
              type="password"
              className={`w-full p-2 border rounded-md focus:ring-1 focus:ring-red-500 ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder={text[language].enterHere}
              {...register("password", {
                required: text[language].required,
                minLength: {
                  value: 3,
                  message: text[language].minLength,
                },
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          >
            {isLoading ? "Loading..." : text[language].login}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
