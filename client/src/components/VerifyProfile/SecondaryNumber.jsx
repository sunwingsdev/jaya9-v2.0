

const SecondaryNumber = ({isAddNumberOpen,setIsAddNumberOpen,isBengali,otp,handleChangeOtp,handleReload,generatedOtp,memberInfo}) => {
    return (
        <div>
            {isAddNumberOpen && (
            <div
              className="fixed inset-0 z-50 px-3 lg:px-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsAddNumberOpen(false); // Modal বন্ধ হবে যদি বাহিরের জায়গায় ক্লিক করা হয়
                }
              }}
            >
              <div className="bg-white p rounded-lg w-96 shadow-lg">
                <div className="flex flex-row justify-between bg-common-blue p-4">
                  <h3 className=" text-lg text-white ">
                  {isBengali ? "ফোন নম্বর নিশ্চিত করুন" : "Verify Phone Number"}
                  </h3>
                  <svg
                    onClick={() => setIsAddNumberOpen(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-2 text-gray-500 cursor-pointer"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div className="p-3">
                  <div className=" py-3">
                    <label className="block text-sm font-medium">
                      
                      {isBengali ? "ভেরিফিকেশন কোড" : "Verification Code"}
                    </label>
                    <div className="flex flex-row items-center  space-x-4">
                      <input
                        type="tel"
                        name="otp"
                        value={otp}
                        onChange={handleChangeOtp}
                        maxLength="6"
                        className="w-full p-2 border border-gray-500 rounded"
                      />
                      <div className="flex flex-row-reverse font-bold bg-common-blue gap-2 px-2 py-2 items-center">
                        <svg
                          onClick={handleReload}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="auto"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="cursor-pointer pt-2"
                        >
                          <polyline points="23 4 23 10 17 10"></polyline>
                          <path d="M20.49 15a9 9 0 1 1 2.13-9" />
                        </svg>
                        <button className="   text-white rounded">
                          {generatedOtp}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        প্রথম ফোন নাম্বার
                        {isBengali ? "প্রথম ফোন নাম্বার" : "First Phone Number"}
                      </label>
                      <input
                        type="tel"
                        name="otp"
                        maxLength=""
                        placeholder={memberInfo.mobile}
                        readOnly
                        className="w-full p-2 bg-gray-200 border outline-none border-gray-500 rounded"
                      />
                    </div>
                  </div>

                  <div className="flex py-2 gap-1 flex-row">
                    <button className=" px-2 text-white font-bold rounded-sm whitespace-nowrap text-sm bg-custom-orange">
                      OTP অনুরোধ করুন
                      {isBengali ? "OTP অনুরোধ করুন" : "OTP Request"}
                    </button>
                    <input
                      type="tel"
                      placeholder="এখানে পূরণ করুন"
                      className="w-2/3 p-2 border rounded mb-2 placeholder:text-xs lg:placeholder:text-md"
                    />
                  </div>

                  <button className="bg-gray-200 text-gray-400 px-4 py-2 rounded w-full mt-2">
                    
                    {isBengali ? "জমা দিন" : "SubMit"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
    );
};

export default SecondaryNumber;