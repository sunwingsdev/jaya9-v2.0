

const DepositTabs = ({activeTab,setActiveTab,language}) => {
    return (
        <div className="bg-common-blue">
        <div className="flex justify-center w-full mx-auto max-w-3xl p-4">
          <button
            className={`w-full px-4 py-2 text-sm text-white font-semibold ${
              activeTab === "deposit" ? "bg-common-orange" : "bg-uttoloncolor"
            }`}
            onClick={() => setActiveTab("deposit")}
          >
            
            {language === "bn" ? "আমানত" : "Deposit"}
          </button>
          <button
            className={`w-full px-4 py-2 text-sm text-white font-semibold ${
              activeTab === "withdraw" ? "bg-common-orange" : "bg-uttoloncolor"
            }`}
            onClick={() => setActiveTab("withdraw")}
          >
            
            {language === "bn" ? "উত্তোলন" : "Withdraw"}
          </button>
        </div>
      </div>
    );
};

export default DepositTabs;