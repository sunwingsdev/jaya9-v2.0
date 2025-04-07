
import { Link } from 'react-router-dom';
import warninglogo from "../../assets/warning.svg";

const TabWithdraw = ({activeTab,language,paymentMethods,selectedMethod,setSelectedMethod,setSelectedChannel,setSelectedAmount,setSelectedBonus,selectedChannel,selectedAmount,reloadBalance,loading,balance}) => {
    return (
        <div>
        {activeTab === "withdraw" && (
            <div className="px-4 rounded-b-md">
              <div className="bg-common-blue px-3 py-2 flex-col space-y-4">
                <div className="flex flex-row items-center">
                  <h3 className="text-white">
                    
                  {language === "bn" ? "প্রধান ওয়ালেট" : "Main Wallet"}

                    </h3>
                  <button onClick={reloadBalance} className="ml-2">
                    {loading ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" h-5 w-5 text-orange-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <path d="M20.49 15a9 9 0 1 1 2.13-9" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f56908"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <path d="M20.49 15a9 9 0 1 1 2.13-9" />
                      </svg>
                    )}
                  </button>
                </div>
  
                <div className="text-white flex items-center justify-end">
                  <span className="pb-2 pr-1 text-4xl">৳</span>
                  <span className="text-2xl">
                    {loading ? "..." : balance.toFixed(2)}
                  </span>
                </div>
              </div>
  
              <div className="flex flex-row items-center gap-4 mb-2 bg-amanotcardcolor p-3">
                <img src={warninglogo} alt="" className="w-8 h-auto" />
                <h3>Phone number is not verified.</h3>
                <Link to="/jachaikoron">
                  <p className="text-common-orange underline  text-sm">
                    
                  {language === "bn" ? "যাচাই করুন" : "Verify"}


                  </p>
                </Link>
              </div>
              <div className="bg-amanotcardcolor p-3 relative">
                <h3 className="text-lg font-semibold mb-3 py-2 border-b border-black">
                  
                {language === "bn" ? "মূল্য উত্তোলন পদ্ধতি" : "Withdrawal Method"}


                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.name}
                      className={`relative shadow-md p-1 rounded-lg cursor-pointer transition-all ${
                        selectedMethod === method.name
                          ? "bg-common-blue text-white"
                          : "bg-gray-200 "
                      }`}
                      onClick={() => {
                        setSelectedMethod(method.name);
                        setSelectedChannel(null);
                        setSelectedAmount(""); // Reset amount on method change
                        setSelectedBonus(""); // Reset bonus
                      }}
                    >
                      {/* Absolute Positioned Text */}
                      <span className="absolute -top-2 -right-2 bg-common-orange text-white text-xs px-1 rounded-md">
                        {method.percentage}
                      </span>
                      <img
                        src={method.logo}
                        alt={method.name}
                        className={`h-6 mx-auto mb-2 ${
                          selectedMethod === method.name
                            ? "brightness-0 invert"
                            : ""
                        }`}
                      />
                      <h4 className="text-center text-md font-semibold">
                        {method.name}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* {selectedMethod && (
        <div className="bg-amanotcardcolor p-3 mt-2">
          <h3 className="text-lg font-semibold mb-3 py-2 border-b border-black">
            উত্তোলন চ্যানেল
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4 items-center">
            {channelsData[selectedMethod]?.map((channel, index) => (
              <div
                key={index}
                className={`shadow-md p-2 rounded-lg cursor-pointer transition-all ${
                  selectedChannel?.name === channel.name
                    ? "bg-common-blue text-white"
                    : "bg-gray-200 "
                }`}
                onClick={() => {
                  setSelectedChannel(channel);
                  setSelectedAmount(channel.amounts[0]); // Default first amount
                }}
              >
                <div className="flex flex-row items-center justify-center">
                  {channel.logo && (
                    <img
                      src={channel.logo}
                      alt={channel.name}
                      className="h-6 mx-auto"
                    />
                  )}
                  <h4 className="text-center text-md font-semibold">
                    {channel.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )} */}
  
              {selectedChannel && (
                <>
                  <div className="bg-amanotcardcolor p-3 mt-2">
                    <h3 className="text-lg font-semibold mb-3 py-2 border-b border-black">
                      
                      {language === "bn" ? "পরিমাণ" : "Amount"}

                    </h3>
                    {/* <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
              {selectedChannel.amounts.map((amount) => (
                <div
                  key={amount}
                  className={`shadow-md p-2 rounded-lg cursor-pointer transition-all ${
                    selectedAmount === amount
                      ? "bg-common-blue text-white"
                      : "bg-gray-200 "
                  }`}
                  onClick={() => {
                    setSelectedAmount(amount);
                    console.log("Selected Amount:", amount); // Console log added
                  }}
                >
                  <h4 className="text-center text-sm font-semibold">
                    ৳ {amount}
                  </h4>
                </div>
              ))}
            </div> */}
                  </div>
  
                  <div className="mb-4 p-3  bg-amanotcardcolor flex flex-row items-center ">
                    <label className=" text-2xl mb-2 h-auto text-green-700 font-medium">
                      {" "}
                      ৳
                    </label>
                    <input
                      type="number"
                      // value={selectedAmount || ""}
                      placeholder="ন্যূনতম ৳ 500.00 - সর্বোচ্চ ৳ 25,000.00"
                      className="w-full px-1 py-1 bg-amanotcardcolor outline-none  rounded-md text-sm"
                    />
                  </div>
  
                  <div className="bg-amanotcardcolor p-3">
                    <h3 className="text-lg  font-semibold mb-1 border-b border-black">
                      
                    {language === "bn" ? "মোবাইল নম্বর" : "Phone Number"}

                    </h3>
                    <div className="w-fit pl-4 pr-20 py-2 bg-gray-200 text-gray-500 border border-gray-500 font-semibold rounded-md text-center cursor-pointer">
                      017XXXXXXXX
                    </div>
                  </div>
                </>
              )}
  
              <button
                className="w-full bg-common-red text-white py-2 rounded-md"
                disabled={!selectedChannel || !selectedAmount}
              >
                
                {language === "bn" ? "উত্তোলন" : "Withdraw"}

              </button>
            </div>
          )}
          </div>
    );
};

export default TabWithdraw;