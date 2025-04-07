const TabsContents = ({ promotions, language }) => {
  return (
    <div>
      {promotions.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 py-1 px-4 lg:px-16">
          {promotions.map((item, index) => (
            <div key={index} className="relative bg-gray-200 shadow-lg rounded-xl">
              <img src={item.image} alt="promotion" className="w-full h-38 lg:h-60" />
              <div className="pl-2 space-y-2">
                <h2 className="mt-2 text-lg font-bold">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
                <div className="hidden lg:flex flex-row gap-2 items-center">
                  <svg width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="28" fill="#ffffff" stroke="#333" strokeWidth="2" />
                    <line x1="32" y1="32" x2="32" y2="16" stroke="#333" strokeWidth="3" strokeLinecap="round" />
                    <line x1="32" y1="32" x2="44" y2="32" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="32" cy="32" r="3" fill="#333" />
                  </svg>
                  <p className="text-xs text-gray-600">{item.date}</p>
                </div>

                <div className="absolute lg:bottom-20 right-2 bg-common-blue text-white px-2 py-1 text-xs rounded">
                  {item.countdown}
                </div>

                <div className="mt-4 flex gap-2">
                  {item.details && (
                    <button
                      style={{
                        background:
                          "linear-gradient(90deg, #fbc103 0%, #f79604 15%, #f79604 30%, #fbc103 55%, #fbc103)",
                      }}
                      className="text-white text-xs px-3 py-1 rounded"
                    >
                      {language === "bn" ? "বিস্তারিত" : "Details"}
                    </button>
                  )}
                  {item.apply && (
                    <button
                      style={{
                        background:
                          "linear-gradient(90deg, #fbc103 0%, #f79604 15%, #f79604 30%, #fbc103 55%, #fbc103)",
                      }}
                      className="text-white text-xs px-3 py-1 rounded"
                    >
                      {language === "bn" ? "আবেদন" : "Apply"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center py-4 px-4 lg:px-16">
          <p className="text-gray-600">
            {language === "bn"
              ? "অনুগ্রহ করে সাথেই থাকুন। নতুন প্রচার আপনার পথে আসছে।"
              : "No Selected Promotion"}
          </p>
        </div>
      )}
    </div>
  );
};

export default TabsContents;
