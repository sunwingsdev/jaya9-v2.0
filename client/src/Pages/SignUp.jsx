import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import signUpImage from "../assets/bd-desktop-679a25600aae8.jpg";
import { LanguageContext } from "../Context/LanguageContext";
import { RxReload } from "react-icons/rx";
import { useAddUserMutation } from "../redux/features/allApis/usersApi/usersApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const generateRandomCode = () => {
  return Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit code
};

const SignUp = () => {
  const [addUser, { isLoading }] = useAddUserMutation();
  const { language } = useContext(LanguageContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [generatedCode, setGeneratedCode] = useState(generateRandomCode());
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      verificationCode: "",
      currency: "",
      phoneNumber: "",
      email: "",
      referralCode: "",
      agreeTerms: false,
    },
  });

  const translations = {
    en: {
      title: "Sign Up",
      username: "Username",
      password: "Password",
      confirmPassword: "Confirm Password",
      verificationCode: "Verification Code",
      currency: "Currency",
      phoneNumber: "Phone Number",
      email: "Email",
      referralCode: "Referral Code",
      mandatoryField: "This is a mandatory field",
      fillHere: "Fill up here",
      agreeTerms:
        "I am of legal age and I agree with the Terms and Conditions.",
      back: "Back",
      complete: "Complete",
      next: "Next",
      step1: "Step 1: Account Information",
      step2: "Step 2: Verification & Details",
      sendCode: "Send Code",
      validation: {
        required: "This field is required",
        minLength: "Minimum length should be 4",
        maxLength: "Maximum length should be 4",
        numeric: "Code must be numeric",
        passwordMatch: "Passwords must match",
        validEmail: "Please enter a valid email",
        phoneNumber: "Please enter a valid phone number",
        agreeTerms: "You must accept the terms and conditions",
      },
    },
    bn: {
      title: "নিবন্ধন",
      username: "ব্যবহারকারীর নাম",
      password: "গোপন নম্বর",
      confirmPassword: "পাসওয়ার্ড নিশ্চিত করুন",
      verificationCode: "যাচাইকরণ কোড",
      currency: "মুদ্রা",
      phoneNumber: "ফোন নম্বর",
      email: "ইমেইল",
      referralCode: "রেফারেল কোড",
      mandatoryField: "এটি একটি বাধ্যতামূলক ক্ষেত্র",
      fillHere: "এখানে পূরণ করুন",
      agreeTerms: "আমি আইনত প্রাপ্তবয়স্ক এবং শর্তাবলীর সাথে সম্মত।",
      back: "পিছনে",
      complete: "সম্পূর্ণ",
      next: "পরবর্তী",
      step1: "ধাপ ১: অ্যাকাউন্ট তথ্য",
      step2: "ধাপ ২: যাচাইকরণ এবং বিবরণ",
      sendCode: "কোড পাঠান",
      validation: {
        required: "এই ক্ষেত্রটি প্রয়োজন",
        minLength: "ন্যূনতম দৈর্ঘ্য ৪ হওয়া উচিত",
        maxLength: "সর্বোচ্চ দৈর্ঘ্য ৪ হওয়া উচিত",
        numeric: "কোড অবশ্যই সংখ্যায় হতে হবে",
        passwordMatch: "পাসওয়ার্ড মিলতে হবে",
        validEmail: "একটি বৈধ ইমেইল দিন",
        phoneNumber: "একটি বৈধ ফোন নম্বর দিন",
        agreeTerms: "আপনাকে শর্তাবলী গ্রহণ করতে হবে",
      },
    },
  };

  const t = translations[language] || translations.bn;

  const password = watch("password");

  const onSubmit = async (data) => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      // eslint-disable-next-line no-unused-vars
      const { confirmPassword, agreeTerms, verificationCode, ...userInfo } =
        data;
      const result = await addUser(userInfo);
      if (result.error) {
        toast.error(result.error.data.message);
        return;
      }
      if (result.data.insertedId) {
        toast.success("User successfully registered");
        reset();
        navigate("/");
        return;
      }
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const validateStep1 = async () => {
    const isValid = await trigger(["username", "password", "confirmPassword"]);
    if (isValid) {
      setCurrentStep(2);
    }
  };

  const handleReloadCode = () => {
    setGeneratedCode(generateRandomCode());
  };

  return (
    <div className="mt-5 lg:px-40">
      <div className="flex flex-col lg:flex-row gap-2 lg:border-4 border-common-blue p-8">
        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/3 space-y-4">
          <div>
            <h3 className="text-common-orange hidden lg:flex text-center border-b border-common-orange">
              {t.title}
            </h3>
            <div className="flex justify-between my-4">
              <span
                className={`font-bold ${
                  currentStep === 1 ? "text-common-orange" : "text-gray-500"
                }`}
              >
                {t.step1}
              </span>
              <span
                className={`font-bold ${
                  currentStep === 2 ? "text-common-orange" : "text-gray-500"
                }`}
              >
                {t.step2}
              </span>
            </div>
          </div>

          {currentStep === 1 ? (
            <>
              <div>
                <h3 className="text-black">{t.username}</h3>
                <input
                  type="text"
                  {...register("username", {
                    required: t.validation.required,
                  })}
                  placeholder={t.fillHere}
                  className={`w-full p-2 border ${
                    errors.username ? "border-red-500" : "border-gray-400"
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-red-500`}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div>
                <h3 className="text-black">{t.password}</h3>
                <input
                  type="password"
                  {...register("password", {
                    required: t.validation.required,
                    minLength: {
                      value: 6,
                      message: t.validation.minLength,
                    },
                  })}
                  placeholder={t.fillHere}
                  className={`w-full p-2 border ${
                    errors.password ? "border-red-500" : "border-gray-400"
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-red-500`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <h3 className="text-black">{t.confirmPassword}</h3>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: t.validation.required,
                    validate: (value) =>
                      value === password || t.validation.passwordMatch,
                  })}
                  placeholder={t.fillHere}
                  className={`w-full p-2 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-400"
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-red-500`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="text-black">{t.verificationCode} *</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    {...register("verificationCode", {
                      required: t.validation.required,
                      minLength: {
                        value: 4,
                        message: t.validation.minLength,
                      },
                      maxLength: {
                        value: 4,
                        message: t.validation.maxLength,
                      },
                      pattern: {
                        value: /^[0-9]{4}$/,
                        message: t.validation.numeric,
                      },
                      validate: (value) =>
                        generatedCode
                          ? value === generatedCode ||
                            "Invalid verification code"
                          : true,
                    })}
                    maxLength={4}
                    className={`w-full p-2 border ${
                      errors.verificationCode
                        ? "border-red-500"
                        : "border-gray-400"
                    } rounded-md focus:outline-none focus:ring-1 focus:ring-red-500`}
                    placeholder="1234"
                  />
                  <p className="bg-common-blue text-white px-4 py-2 rounded-md whitespace-nowrap inline-flex items-center gap-2">
                    {generatedCode}{" "}
                    <span className="cursor-pointer" onClick={handleReloadCode}>
                      <RxReload />
                    </span>
                  </p>
                </div>
                {errors.verificationCode && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.verificationCode.message}
                  </p>
                )}
              </div>
              <div>
                <h3 className="text-black">{t.currency} *</h3>
                <select
                  {...register("currency", {
                    required: t.validation.required,
                  })}
                  className={`w-full p-2 border ${
                    errors.currency ? "border-red-500" : "border-gray-400"
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-red-500`}
                >
                  <option value="">{t.fillHere}</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="BDT">BDT</option>
                </select>
                {errors.currency && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.currency.message}
                  </p>
                )}
              </div>
              <div>
                <h3 className="text-black">{t.phoneNumber} *</h3>
                <div className="flex">
                  <span className="p-2 border border-gray-400 rounded-l-md bg-gray-100">
                    +880
                  </span>
                  <input
                    type="tel"
                    {...register("phoneNumber", {
                      required: t.validation.required,
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: t.validation.phoneNumber,
                      },
                    })}
                    className={`w-full p-2 border ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-400"
                    } rounded-r-md focus:outline-none focus:ring-1 focus:ring-red-500`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
              <div>
                <h3 className="text-black">{t.email}</h3>
                <input
                  type="email"
                  {...register("email", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t.validation.validEmail,
                    },
                  })}
                  placeholder={t.fillHere}
                  className={`w-full p-2 border ${
                    errors.email ? "border-red-500" : "border-gray-400"
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-red-500`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <h3 className="text-black">{t.referralCode}</h3>
                <input
                  type="text"
                  {...register("referralCode")}
                  placeholder={t.fillHere}
                  className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  {...register("agreeTerms", {
                    required: t.validation.agreeTerms,
                  })}
                  className="mr-2"
                />
                <label htmlFor="agreeTerms" className="text-sm">
                  {t.agreeTerms}
                </label>
              </div>
              {errors.agreeTerms && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.agreeTerms.message}
                </p>
              )}
            </>
          )}

          <div className="flex justify-between items-center">
            {currentStep === 2 && (
              <button
                type="button"
                onClick={handleBack}
                className="bg-gray-500 text-white px-6 py-2 rounded-md"
              >
                {t.back}
              </button>
            )}
            {currentStep === 1 ? (
              <button
                type="button"
                onClick={validateStep1}
                className="bg-common-blue text-white px-6 py-2 rounded-md ml-auto"
              >
                {t.next}
              </button>
            ) : (
              <button
                type="submit"
                disabled={isLoading}
                className="bg-common-blue text-white px-6 py-2 rounded-md ml-auto"
              >
                {isLoading ? "Loading..." : t.complete}
              </button>
            )}
          </div>
        </form>

        {/* Image Section */}
        <div className="lg:w-2/3">
          <img
            src={signUpImage}
            alt="Sign Up Illustration"
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
