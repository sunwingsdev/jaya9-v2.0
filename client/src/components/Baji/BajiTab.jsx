

const BajiTab = ({tabs,activeTab,setActiveTab}) => {
    return (
        <div
          className="flex overflow-x-auto whitespace-nowrap text-xs space-x-2 items-center lg:justify-around mb-4"
          role="tablist"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeTab === tab}
              className={`px-4 py-2 font-bold rounded transition-all duration-300 ease-in-out ${
                activeTab === tab ? "bg-common-blue text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "Overview" && (
                <div className="flex items-center">
                  {/* Custom SVG Logo */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={activeTab === "Overview" ? "white" : "black"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block  pt-1 mr-2 md:hidden"
                  >
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <path d="M20.49 15a9 9 0 1 1 2.13-9" />
                  </svg>
                  <span>{tab}</span>
                </div>
              )}
              {tab !== "Overview" && tab}
            </button>
          ))}
        </div>
    );
};

export default BajiTab;