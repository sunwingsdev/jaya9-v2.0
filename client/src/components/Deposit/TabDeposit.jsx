

const TabDeposit = ({activeTab,language,paymentMethods,selectedMethod,setSelectedMethod,setSelectedChannel,setSelectedAmount,setSelectedBonus,channelsData,selectedChannel,selectedAmount,bonusOptions,selectedBonus,setModalOpen}) => {
    return (
        <div>
           {activeTab === "deposit" && (
          <div className="p-4 rounded-b-md ">
            <div className="bg-amanotcardcolor p-3 relative">
              <h3 className="text-lg font-semibold mb-3 py-2 border-b border-black">
                
                {language === "bn" ? "মূল্য পরিশোধ পদ্ধতি" : "Payment Method"}
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
                {paymentMethods?.map((method) => (
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
                      setSelectedAmount(""); // Reset the amount on method change
                      setSelectedBonus(""); // Reset bonus when changing method
                    }}
                  >
                    {/* Absolute Positioned Text */}
                    <span className="absolute -top-2 -right-2 bg-common-orange text-white text-xs px-1  rounded-md">
                      {method.percentage}
                    </span>
                    {/* <span className="absolute top-4 left-0 bg-common-orange text-white text-xs px-1  rounded-md">
                      {method.absolutelogo}
                    </span> */}

                    <img
                      src={method.logo}
                      alt={method.name}
                      className={`h-6 mx-auto mb-2 hover:opacity-70 ${
                        selectedMethod === method.name ? 'brightness-0 invert':''
                      }`}
                    />
                    <h4 className="text-center text-md font-semibold">
                      {method.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {selectedMethod && (
              <>
                <div className="bg-amanotcardcolor p-3 mt-2">
                  <h3 className="text-lg font-semibold mb-3 py-2 border-b border-black">
                    
                    {language === "bn" ? "আমানত চ্যানেল" : "Deposit Channel"}
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4 items-center bg-amanotcardcolor">
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
              </>
            )}

            {selectedChannel && (
              <>
                <div className="bg-amanotcardcolor p-3 mt-2">
                  <h3 className="text-lg font-semibold mb-3 py-2 border-b border-black">
                    
                  {language === "bn" ? "পরিমাণ" : "Amount"}

                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
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
                  </div>
                </div>

                <div className="mb-4 p-3 border-b border-black bg-amanotcardcolor flex flex-row items-center ">
                  <label className=" text-2xl mb-2 h-auto text-green-700 font-medium">
                    {" "}
                    ৳
                  </label>
                  <input
                    type="number"
                    value={selectedAmount || ""}
                    className="w-full px-1 py-1 bg-amanotcardcolor  rounded-md text-sm"
                  />
                </div>

                {/* Bonus Select Field */}
                <div className="mb-4 p-3 bg-amanotcardcolor mt-2">
                  <label className="block text-lg font-semibold mb-3 py-2 border-b border-black">
                    
                  {language === "bn" ? "আমানত বোনাস" : "Deposit Bonus"}


                  </label>
                  <select
                    value={selectedBonus}
                    onChange={(e) => setSelectedBonus(e.target.value)}
                    className="w-full lg:w-auto h-full px-3 py-1 border-2 border-black text-xs  truncate  md:text-base font-semibold"
                  >
                    <option className='text-sm md:text-base' value="">No Bonus</option>
                    {bonusOptions?.map((bonus) => (
                      <option className='text-sm md:text-base' key={bonus} value={bonus}>
                        ৳ {bonus}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <button
              className="w-full bg-common-blue text-white py-2 rounded-md"
              disabled={!selectedChannel || !selectedAmount}
              onClick={() => setModalOpen(true)}
            >
              
              {language === "bn" ? "আমানত " : "Deposit "}

            </button>
          </div>
        )} 
        </div>
    );
};

export default TabDeposit;