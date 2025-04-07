const RewardTable = ({ language }) => {
  const isBn = language === "bn";

  return (
    <div>
      <div className="mt-2 hidden lg:table w-full">
        <table className="min-w-full border-collapse border-gray-300">
          <thead className="bg-gray-200 text-sm">
            <tr>
              <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                {isBn ? "লেনদেনের তারিখ" : "Transaction Date"}
              </th>
              <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                {isBn ? "লেনদেন নাম্বার" : "Transaction Number"}
              </th>
              <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                {isBn ? "পূর্বের ব্যালেন্স" : "Balance Before"}
              </th>
              <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                {isBn ? "পরবর্তী ব্যালেন্স" : "Balance After"}
              </th>
              <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                {isBn ? "পরিমাণ" : "Amount"}
              </th>
              <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                {isBn ? "ক্রিয়াকলাপ" : "Activity"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-700">
                2025-02-03 03:02:13
              </td>
              <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-700">
                REG173852293326A9ECD
              </td>
              <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-700">
                0.00
              </td>
              <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-700">
                18.00
              </td>
              <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-700">
                18.00
              </td>
              <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-700">
                {isBn ? "রেজিস্টার কয়েন" : "Register Coin"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Responsive Design */}
      <div className="mt-2 w-full text-xs lg:hidden">
        <div className="grid grid-cols-2 md:grid-cols-3">
          {/* Left Side - Headers */}
          <div className="whitespace-nowrap text-xs font-semibold flex flex-col">
            <div className="px-4 py-2">
              {isBn ? "লেনদেনের তারিখ" : "Transaction Date"}
            </div>
            <div className="px-4 py-2">
              {isBn ? "লেনদেন নাম্বার" : "Transaction Number"}
            </div>
            <div className="px-4 py-2">
              {isBn ? "পূর্বের ব্যালেন্স" : "Balance Before"}
            </div>
            <div className="px-4 py-2">
              {isBn ? "পরবর্তী ব্যালেন্স" : "Balance After"}
            </div>
            <div className="px-4 py-2">
              {isBn ? "পরিমাণ" : "Amount"}
            </div>
            <div className="px-4 py-2">{isBn ? "ক্রিয়াকলাপ" : "Activity"}</div>
          </div>

          {/* Right Side - Data */}
          <div className="text-gray-700 whitespace-nowrap flex flex-col">
            <div className="px-4 py-2 text-left">2025-02-03 03:02:13</div>
            <div className="px-4 py-2 text-left">REG173852293326A9ECD</div>
            <div className="px-4 py-2 text-left">0.00</div>
            <div className="px-4 py-2 text-left">18.00</div>
            <div className="px-4 py-2 text-left">18.00</div>
            <div className="px-4 py-2 text-left">
              {isBn ? "রেজিস্টার কয়েন" : "Register Coin"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardTable;
