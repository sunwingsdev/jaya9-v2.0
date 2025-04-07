import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

const BankDetails = () => {
  const { language } = useContext(LanguageContext);
  const isBengali = language === "bn"; // ভাষা চেক করা হচ্ছে

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-5xl bg-white lg:min-h-screen rounded-xl m-10 shadow-2xl">
        <div>
          <div className="flex flex-row px-2 md:px-6 lg:px-0 justify-between">
            <h3 className="text-lg text-black font-semibold px-10 pb-3 lg:p-10">
              {isBengali ? "ব্যাংক বিবরণ" : "Bank Details"}
            </h3>
            <button className="bg-common-blue lg:hidden lg:w-auto hover:bg-blue-900 rounded-sm text-white text-sm px-10 py-1">
              {isBengali ? "যোগ করুন" : "Add"}
            </button>
          </div>
          <div className="px-10 hidden lg:table w-full">
            <div className="mt-2 hidden lg:table w-full">
              <table className="min-w-full border-collapse border-gray-300">
                <thead className="text-black text-sm">
                  <tr>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                      {isBengali ? "ব্যাংক" : "Bank"}
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                      {isBengali ? "ব্যাংক ধারকের নাম" : "Account Holder Name"}
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                      {isBengali
                        ? "ব্যাংক একাউন্ট নম্বর"
                        : "Bank Account Number"}
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap"></th>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                      <button className="bg-common-blue lg:w-auto hover:bg-blue-900 rounded-sm text-white text-sm px-10 py-1">
                        {isBengali ? "যোগ করুন" : "Add"}
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan="5"
                      className="whitespace-nowrap px-4 py-2 text-center text-gray-400"
                    >
                      {isBengali
                        ? "আপনি এখনও একটি ব্যাংক অ্যাকাউন্ট সংরক্ষণ করেন নি"
                        : "You have not saved a bank account yet"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
