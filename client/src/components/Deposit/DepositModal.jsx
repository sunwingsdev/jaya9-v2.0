import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const DepositModal = ({
  setModalOpen,
  setIsOpen,
  isOpen,
  selectedMethod,
  selectedAmount,
  randomNumber,
  user,
  tempInputValues,
  handleInputChange,
  handleSubmit,
  isLoading,
}) => {
  const [timeLeft, setTimeLeft] = useState(359);

  useEffect(() => {
    if (timeLeft <= 0) {
      resetAndClose();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  // Function to reset all input fields and close modal
  const resetAndClose = () => {
    setModalOpen(false);
  };

  // Convert seconds to MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const validateRequiredFields = () => {
    const requiredFields = selectedMethod?.userInputs?.filter(
      (input) => input.isRequired === "required"
    );

    for (const field of requiredFields) {
      if (!tempInputValues[field.name]) {
        toast.error(`Please fill in the required field: ${field.label}`);
        return false;
      }
    }

    return true;
  };

  const handleFormSubmit = () => {
    if (validateRequiredFields()) {
      handleSubmit();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 px-3 lg:px-0 overflow-y-auto bg-gray-800 bg-opacity-50 flex justify-center items-center "
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setModalOpen(false);
        }
      }}
    >
      <div className="bg-white max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full max-h-[90vh] sm:max-h-[80vh] overflow-y-auto rounded-lg shadow-lg relative">
        <div className="flex flex-col w-full border-b pt-6 space-y-4 justify-center items-center">
          <img
            src={`${import.meta.env.VITE_BASE_API_URL}${selectedMethod.image}`}
            alt=""
            className="w-16 h-auto"
          />
          <p className="text-common-blue">সময়সীমা {formatTime(timeLeft)}</p>
        </div>

        <div>
          <button
            onClick={() => setModalOpen(false)}
            className="mt-2 text-gray-500 absolute top-0 right-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="auto"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="py-8 space-y-5 border-b font-semibold">
          <h3 className="text-center">ট্রান্সফার হলে স্ক্রিনশট রাখুন</h3>

          <div className="flex flex-col px-2 lg:px-0 lg:flex-row lg:justify-center gap-2">
            <h3 className="w-1/2 md:text-left text-right whitespace-nowrap">
              ডিপোজিট পরিমাণ :
            </h3>
            <input
              type="text"
              placeholder={`৳ ${selectedAmount}`}
              className="bg-gray-200 shadow-2xl outline-none placeholder:text-sm placeholder:font-bold placeholder:text-center"
              disabled
            />
          </div>

          <div className="flex flex-col px-2 lg:px-0 lg:flex-row gap-2 lg:justify-center">
            <h3 className="w-1/2 md:text-left text-right whitespace-nowrap">
              বিকাশ এজেন্ট নাম্বার :
            </h3>
            <input
              type="tel"
              placeholder={randomNumber || " নাম্বার খুঁজে পাওয়া যায়নি"}
              className="readonly bg-gray-200 outline-none placeholder:text-sm shadow-2xl placeholder:font-bold placeholder:text-center"
              disabled
            />
          </div>
        </div>

        <div className="py-8 space-y-5 border-b font-semibold">
          <div className="flex flex-col px-2 lg:px-0 lg:flex-row gap-2 lg:justify-center">
            <h3 className="w-1/2 md:text-left text-right whitespace-nowrap">
              ক্যাশ আউট ফ্রম :
            </h3>
            <select className="bg-gray-200 shadow-2xl text-gray-400 font-semibold text-sm text-center px-11 py-1 rounded-md outline-blue-400 ">
              <option value={user?.phoneNumber}>{user?.phoneNumber}</option>
            </select>
          </div>

          <div>
            {selectedMethod?.userInputs?.map((item) => (
              <div
                className="flex flex-col px-2 lg:px-0 lg:flex-row gap-2 lg:justify-center"
                key={item?.name}
              >
                <h3 className="w-1/2 md:text-left text-right whitespace-nowrap">
                  {item?.label}:
                </h3>

                {item?.type === "file" ? (
                  <input
                    name={item?.name}
                    type="file"
                    className="bg-gray-200 outline-blue-400 shadow-2xl placeholder:font-bold placeholder:text-center placeholder:truncate placeholder:text-xs"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      handleInputChange(item?.name, file);
                    }}
                    required={item?.isRequired === "required"}
                  />
                ) : (
                  <input
                    name={item?.name}
                    type={item?.type}
                    className="bg-gray-200 outline-blue-400 shadow-2xl placeholder:font-bold placeholder:text-center placeholder:truncate placeholder:text-xs"
                    placeholder={item?.label}
                    value={tempInputValues[item?.name] || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      handleInputChange(item?.name, value);
                    }}
                    required={item?.isRequired === "required"}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="submit"
              onClick={handleFormSubmit}
              disabled={isLoading}
              className="bg-blue-400 px-12 py-2 rounded-lg text-white"
            >
              {isLoading ? "..." : "নিশ্চিত করুন"}
            </button>
          </div>

          <div className="mx-auto w-full max-w-xs">
            <div className="px-2 rounded-lg overflow-hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center gap-2 px-4 py-2 border border-black bg-gray-100 text-sm font-medium text-black"
              >
                <svg
                  className={`h-5 w-5 transition-all duration-1000 ease-in-out ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                কিভাবে ডিপোজিট করবেন?
              </button>
              {isOpen && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedMethod?.instruction,
                  }}
                  className="max-h-48 overflow-y-auto"
                ></div>
              )}
            </div>
          </div>

          <div className="flex flex-row items-center pt-4 justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="black"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12V8a4 4 0 10-8 0v4m-2 0a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2H6z"
              />
            </svg>
            <h3>আপনি একটি সুরক্ষিত সাইটে আছেন</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositModal;
