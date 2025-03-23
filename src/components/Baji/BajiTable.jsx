

const BajiTable = ({activeTab,commonColumns,selectedOption,setSelectedOption,dateInput,setDateInput,overviewColumns,toggleSort,sortOrder}) => {
    return (
        <div className=" ">
          <table className="w-full">
            <thead className="whitespace-nowrap text-gray-400">
              {/* Filters row */}

              {activeTab !== "Overview" && (
                <tr className="">
                  <th
                    colSpan={commonColumns.length}
                    className="lg:p-2 px-4 text-left"
                  >
                    <div className="flex flex-col lg:flex-row text-gray-400 justify-around  lg:items-center space-y-3 lg:space-x-4">
                      {/* Select Input */}
                      <div className="w-full max-w-xs  px-3">
                        <select
                          value={selectedOption}
                          onChange={(e) => {
                            setSelectedOption(e.target.value);
                            console.log("Selected Data:", e.target.value);
                          }}
                          className="p-2 w-full  lg:w-auto lg:pr-20  text-black font-medium border border-gray-300 rounded"
                        >
                          <option value="">Provider</option>
                          <option value="option1">BETSWIZ</option>
                        </select>
                      </div>

                      {/* Text (h3 tag) */}
                      <h3 className=" text-sm hidden lg:flex font-semibold">
                        মোট বেটের পরিমাণ ৳ 0.00
                      </h3>

                      {/* Date Input */}
                      <div className="relative w-full p-3 max-w-xs">
                        <input
                          type="date"
                          value={dateInput}
                          onChange={(e) => {
                            setDateInput(e.target.value);
                            console.log("Selected Date:", e.target.value);
                          }}
                          className="p-2  w-full  border text-black font-medium border-gray-300 rounded"
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
                          className="icon-cross absolute top-0 right-16  "
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
                          className="icon-search absolute top-0 right-10 "
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </div>
                    </div>
                  </th>
                </tr>
              )}

              {/* Column headers */}
              <tr className="border-y text-sm hidden lg:flex justify-around border-gray-400">
                {(activeTab === "Overview"
                  ? overviewColumns
                  : commonColumns
                ).map((col, index) => (
                  <th
                    key={index}
                    className={`p-2 text-left flex items-center gap-2 ${
                      index === 0 ? "cursor-pointer" : ""
                    }`}
                    onClick={index === 0 ? toggleSort : undefined} // Sorting only on 1st column
                  >
                    {col}
                    {index === 0 && // Show sort icons only for first column
                      (sortOrder === "asc" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="gray"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 5l-7 7h14l-7-7z"></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="gray"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 19l7-7H5l7 7z"></path>
                        </svg>
                      ))}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Placeholder row for no data */}
              <tr>
                <td
                  colSpan={
                    activeTab === "Overview"
                      ? overviewColumns.length
                      : commonColumns.length
                  }
                  className="text-center pt-2 lg:pt-0 text-pretty text-gray-400"
                >
                  কোন তথ্য নেই
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    );
};

export default BajiTable;