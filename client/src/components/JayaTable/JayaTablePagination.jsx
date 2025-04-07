
import buttonlogo from "../../assets/vip-level-no2.png";
import coinlogo from "../../assets/deposit-bonus-coin.png";

const JayaTablePagination = ({levels,language,startIndex,endIndex,rewards,requirements,page,setPage,totalPages,}) => {
    return (
        <div className="p-6 text-xs lg:text-md lg:p-16 ">
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              <tr className="text-center bg-zinc-800  ">
                <td className="text-white py-4 p-2">

                {language === "bn" ? "স্তর" : "Level"}
                </td>
                {levels.slice(startIndex, endIndex).map((level, i) => (
                  <td key={i} className="p-2 py-4 relative">
                    <img
                      src={buttonlogo}
                      alt="Level"
                      className="mx-auto rounded-sm w-10 h-10"
                    />
                    <span className="absolute inset-0 flex items-center justify-center font-bold">
                      {level}
                    </span>
                  </td>
                ))}
              </tr>
              <tr className="text-center text-white bg-black opacity-80">
                <td className="p-2">

                {language === "bn" ? "পুরস্কার" : "Reward"}
                </td>
                {rewards.slice(startIndex, endIndex).map((reward, i) => (
                  <td key={i} className="p-2 py-5 whitespace-pre-line relative">
                    <img
                      src={coinlogo}
                      alt="Coin"
                      className="mx-auto w-8 h-8 mb-1"
                    />
                    {reward}
                  </td>
                ))}
              </tr>
              <tr className="text-center text-white bg-black opacity-80">
                <td className="border-t p-2">

                {language === "bn" ? "প্রয়োজনীয়তা" : "Requirement"}
                </td>
                {requirements
                  .slice(startIndex, endIndex)
                  .map((requirement, i) => (
                    <td key={i} className="border-t p-2">
                      {requirement}
                    </td>
                  ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <div className="inline-flex bg-zinc-800 px-6 py-1 rounded">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 mx-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <span className="flex items-center">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`px-4 py-2 mx-1 text-white text-xs ${
                    page === i + 1 ? "bg-common-blue " : ""
                  }`}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="px-4 py-2 mx-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
};

export default JayaTablePagination;