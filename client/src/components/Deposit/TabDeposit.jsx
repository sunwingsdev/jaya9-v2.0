import toast from "react-hot-toast";

const TabDeposit = ({
  activeTab,
  language,
  paymentMethods,
  selectedMethod,
  setSelectedMethod,
  setSelectedChannel,
  setSelectedAmount,
  setSelectedBonus,
  channels,
  selectedChannel,
  selectedAmount,
  bonusOptions,
  selectedBonus,
  setModalOpen,
}) => {
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
                  onClick={() => setSelectedMethod(method)}
                  className={`relative shadow-md p-1 rounded-lg cursor-pointer transition-all ${
                    selectedMethod?._id === method?._id
                      ? "bg-common-blue text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <span className="absolute -top-2 -right-2 bg-common-orange text-white text-xs px-1 rounded-md">
                    {method.percentage}
                  </span>
                  <img
                    src={`${import.meta.env.VITE_BASE_API_URL}${method.image}`}
                    alt={method.name}
                    className={`h-6 mx-auto mb-2 hover:opacity-70 ${
                      selectedMethod?._id === method?._id
                        ? "brightness-0 invert"
                        : ""
                    }`}
                  />
                  <h4 className="text-center text-md font-semibold capitalize">
                    {method.method}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {selectedMethod && (
            <div className="bg-amanotcardcolor p-3 mt-2">
              <h3 className="text-lg font-semibold mb-3 py-2 border-b border-black">
                {language === "bn" ? "আমানত চ্যানেল" : "Deposit Channel"}
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4 items-center">
                {channels?.map((channel, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedChannel(channel);
                      setSelectedAmount(channel.amounts[0]);
                    }}
                    className={`shadow-md p-2 rounded-lg cursor-pointer transition-all ${
                      selectedChannel?.name === channel.name
                        ? "bg-common-blue text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    <div className="flex justify-center">
                      <h4 className="text-center text-md font-semibold">
                        {language === "bn"
                          ? channel.name === "agent"
                            ? "এজেন্ট"
                            : channel.name === "merchant"
                            ? "মার্চেন্ট"
                            : channel.name === "personal"
                            ? "পার্সোনাল"
                            : channel.name
                          : channel.name.charAt(0).toUpperCase() +
                            channel.name.slice(1)}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                      onClick={() => setSelectedAmount(amount)}
                      className={`shadow-md p-2 rounded-lg cursor-pointer transition-all ${
                        selectedAmount === amount
                          ? "bg-common-blue text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      <h4 className="text-center text-sm font-semibold">
                        ৳ {amount}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4 p-3 border-b border-black bg-amanotcardcolor flex items-center">
                <label className="text-2xl text-green-700 font-medium">৳</label>
                <input
                  type="number"
                  value={selectedAmount || 0}
                  onChange={(e) => setSelectedAmount(Number(e.target.value))}
                  className="w-full px-1 py-1 bg-amanotcardcolor rounded-md text-sm"
                />
              </div>

              <div className="mb-4 p-3 bg-amanotcardcolor mt-2">
                <label className="block text-lg font-semibold mb-3 py-2 border-b border-black">
                  {language === "bn" ? "আমানত বোনাস" : "Deposit Bonus"}
                </label>
                <select
                  value={selectedBonus}
                  onChange={(e) => setSelectedBonus(e.target.value)}
                  className="w-full lg:w-auto px-3 py-1 border-2 border-black text-xs md:text-base font-semibold"
                >
                  <option value="">
                    {language === "bn" ? "কোন বোনাস না" : "No Bonus"}
                  </option>
                  {bonusOptions?.map((bonus) => (
                    <option key={bonus} value={bonus}>
                      ৳ {bonus}
                    </option>
                  ))}
                </select>
              </div>

              <button
                className="w-full bg-common-blue text-white py-2 rounded-md disabled:bg-slate-300"
                disabled={!selectedChannel}
                onClick={() => {
                  !selectedAmount
                    ? toast.error("Select an amount")
                    : setModalOpen(true);
                }}
              >
                {language === "bn" ? "আমানত" : "Deposit"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TabDeposit;
