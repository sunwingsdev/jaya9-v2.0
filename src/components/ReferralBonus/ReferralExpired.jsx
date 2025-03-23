const ReferralExpired = ({  language }) => {
  const text = {
      bn: {
          recommendation: "সুপারিশ",
          copyLink: "লিংক কপি করুন",
          expiredDate: "মেয়াদ শেষ হওয়া তারিখ :",
          noExpired: "No Expired",
          freeBonus: "Free Bonus ৳",
          deposit: "আমানত",
          turnover: "টার্নওভার",
          referralStatus: "You Referral Status",
          friendsAccepted: "Friend's Accepted",
          friendsComplete: "Friend's Complete"
      },
      en: {
          recommendation: "Recommendation",
          copyLink: "Copy Link",
          expiredDate: "Expired Date:",
          noExpired: "No Expired",
          freeBonus: "Free Bonus ৳",
          deposit: "Deposit",
          turnover: "Turnover",
          referralStatus: "Your Referral Status",
          friendsAccepted: "Friend's Accepted",
          friendsComplete: "Friend's Complete"
      }
  };

  return (
      <div className="bg-white md:p-6 lg:p-10 mt-4">
          <div className="bg-informationBackground p-6 md:p-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-3">
              <div className="w-full md:w-auto">
                  <h3 className="text-gray-600">{text[language].recommendation}</h3>
                  <input type="text" className="px-10 md:px-20 lg:px-32 py-2 rounded-lg w-full" />
              </div>
              <div className="relative md:pt-6">
                  <button className="bg-common-orange w-full md:w-auto text-white text-sm px-10 md:px-12 py-1 rounded-md">
                      {text[language].copyLink}
                  </button>
              </div>
          </div>

          <div className="p-4">
              <div className="flex flex-row justify-between">
                  <h3>{text[language].expiredDate}</h3>
                  <h3 className="font-bold">{text[language].noExpired}</h3>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
                  <div className="bg-common-blue p-6 md:px-10 md:py-10 w-full md:w-2/3 space-y-3">
                      {[text[language].freeBonus, text[language].deposit, text[language].turnover].map((label, index) => (
                          <div key={index} className="flex flex-col md:flex-row items-center md:space-x-3">
                              <h3 className="text-white text-sm w-full md:w-1/2">{label}</h3>
                              <input
                                  type="text"
                                  placeholder="0.00"
                                  className="w-full md:w-auto placeholder:text-black placeholder:text-center px-2 py-1 rounded-md"
                              />
                          </div>
                      ))}
                  </div>

                  <div className="bg-gray-300 w-full md:w-1/3 mt-4 md:mt-0">
                      <div className="py-4 px-8 text-center">
                          <h3 className="text-sm font-bold text-gray-600">{text[language].referralStatus}</h3>
                          <div className="flex flex-row justify-center space-x-6 pt-8">
                              {[text[language].friendsAccepted, text[language].friendsComplete].map((label, index) => (
                                  <div key={index} className="flex flex-col items-center">
                                      <h3 className="text-3xl md:text-4xl text-gray-800 font-bold">0</h3>
                                      <h3 className="text-xs text-gray-800">{label}</h3>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default ReferralExpired;
