

const Tabs = ({tabData,activeTab,setActiveTab,}) => {
    return (
        <div className="flex w-full overflow-x-auto whitespace-nowrap md:gap-2 gap-4 px-4 md:mx-auto lg:px-0 lg:gap-6 justify-start lg:justify-center bg-gray-200 py-2 mb-4">
  {tabData.map((tab) => (
    <button
      key={tab.id}
      className={`min-w-max py-1 text-sm font-semibold transition-all ${
        activeTab === tab.id
          ? "bg-common-blue text-white shadow-lg px-3 py-1" // Blue background for active tab
          : "bg-gray-200" // Gray background for inactive tabs
      } 
      ${activeTab === tab.id ? "rounded-md" : ""} // Rounded corners for active tab
      sm:px-4 lg:px-6`} // Adjust padding on larger screens
      onClick={() => setActiveTab(tab.id)}
    >
      {tab.label}
    </button>
  ))}
</div>
    );
};

export default Tabs;