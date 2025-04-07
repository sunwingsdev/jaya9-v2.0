import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const InActiveGames = () => {
  const [data, setData] = useState([
    {
      gamename: "game01",
      position: 8,
      href: 5300,
      countusers: 2300,
      create: 14,
      status: "inactive",
    },
    {
      gamename: "game02",
      position: 8,
      href: 5300,
      countusers: 2300,
      create: 14,
      status: "inactive",
    },
    {
      gamename: "game03",
      position: 8,
      href: 5300,
      countusers: 2300,
      create: 14,
      status: "inactive",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) =>
    item.gamename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddGames = () => {
    const newGames = {
      gamename: "New Game",
      position: 0,
      href: 0,
      countusers: 0,
      create: new Date().getDate(),
      status: "active",
    };
    setData([newGames, ...data]);
  };
  return (
    <div>
      {/* Header */}
      <div className="bg-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-2">
        <div className="flex flex-row items-start justify-between w-full mb-4 md:mb-0">
          <h1 className="text-2xl text-white font-bold">Inactive Games</h1>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded md:w-2/5 block md:hidden whitespace-nowrap"
            onClick={handleAddGames}
          >
            Add Games
          </button>
        </div>

        <div className="flex w-1/2 gap-4">
          <form className="md:w-3/5 hidden md:flex flex-row items-center">
            <input
              type="text"
              placeholder="Search Game Name..."
              className="py-2 px-1 w-full outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-white p-3">
              <IoIosSearch />
            </button>
          </form>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded md:w-2/5 hidden md:block whitespace-nowrap"
            onClick={handleAddGames}
          >
            Add Games
          </button>
        </div>
        <form className="w-full flex flex-row items-center md:hidden">
          <input
            type="text"
            placeholder="Search Game Name..."
            className="py-2 px-1 w-full outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-white p-3">
            <IoIosSearch />
          </button>
        </form>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-[#3b3b3b] text-center">
          <thead>
            <tr className="bg-[#3b3b3b] text-white">
              <th className="px-4 py-2 whitespace-nowrap">Game Name</th>
              <th className="px-4 py-2 whitespace-nowrap">Position D-B</th>
              <th className="px-4 py-2 whitespace-nowrap">Href Link</th>
              <th className="px-4 py-2 whitespace-nowrap">Count Users</th>
              <th className="px-4 py-2 whitespace-nowrap">Create Date</th>
              <th className="px-4 py-2 whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-[#cacaca]"
                } text-black`}
              >
                <td className="px-4 py-2 font-medium whitespace-nowrap">
                  {item.gamename}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{item.position}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.href}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {item.countusers}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{item.create}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      item.status.toLowerCase() === "active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {item.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No game categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InActiveGames;
