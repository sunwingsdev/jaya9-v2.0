import { useState, useContext } from "react";
import TableData from "../components/ReuseableComponents/TableData";
import { LanguageContext } from "../Context/LanguageContext";

const TransferRecord = () => {
  const { language } = useContext(LanguageContext);
  const [dateInput, setDateInput] = useState("");

  const headers =
    language === "bn"
      ? ["লেনদেনের তারিখ", "যে ওয়ালেট থেকে", "যে ওয়ালেটে", "পরিমাণ", "স্থিতি"]
      : ["Transaction Date", "From Wallet", "To Wallet", "Amount", "Status"];

  const data = [];

  return (
    <div className="bg-informationBackground">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white">
          <div className="p-3">
            <button className="bg-common-blue lg:w-auto hover:bg-blue-900 rounded-sm text-white text-sm px-10 py-1">
              {language === "bn" ? "স্থানান্তর" : "Transfer"}
            </button>
          </div>

          <div className="relative w-full p-3 max-w-xs lg:max-w-sm">
            <input
              type="date"
              value={dateInput}
              onChange={(e) => {
                setDateInput(e.target.value);
                console.log("Selected Date:", e.target.value);
              }}
              className="p-2 pr-10 border text-black font-medium border-gray-300 rounded w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="auto"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon-cross absolute top-0 right-28 lg:right-28"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="auto"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon-search absolute top-0 right-20 lg:right-20"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        <TableData headers={headers} data={data} />
      </div>
    </div>
  );
};

export default TransferRecord;
