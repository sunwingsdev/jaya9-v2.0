const MainWallet = ({
  reloadBalance,
  loading,
  language,
  toggleBalanceVisibility,
  showBalance,
  balance,
}) => {
  return (
    <div className=" lg:px-0">
      <div className="bg-white px-3 mt-2 py-2 flex justify-between flex-row">
        <div className="flex flex-row items-center">
          {/* ভাষা অনুযায়ী টেক্সট */}
          <h3 className="text-common-orange">
            {language === "bn" ? "প্রধান ওয়ালেট" : "Main Wallet"}
          </h3>
          <button onClick={reloadBalance} className="ml-2 pt-1">
            {loading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-orange-300"
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

          <button onClick={toggleBalanceVisibility} className="ml-2">
            {showBalance ? (
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
            ) : (
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
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a17.33 17.33 0 0 1 2.31-3.81" />
                <path d="M9.53 9.53A3 3 0 0 1 12 9c1.66 0 3 1.34 3 3a3 3 0 0 1-.53 1.71" />
                <path d="M1 1l22 22" />
              </svg>
            )}
          </button>
        </div>

        <div className="text-white flex flex-row items-center">
          <span className="pb-2 pr-1 text-2xl text-gray-400">৳</span>
          <span className="text-gray-400">
            {loading ? "..." : showBalance ? balance?.toFixed(2) : "***"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainWallet;
