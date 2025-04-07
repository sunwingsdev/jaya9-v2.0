import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const submenus = [
  { name: "Sprots Live TV", path: "/dashboard/games-api/sports-live-tv" },
  { name: "BetFair API", path: "/dashboard/games-api/betfair-api" },
  { name: "Sports Radar API", path: "/dashboard/games-api/sports-radar-api" },
  { name: "Odds Jam API", path: "/dashboard/games-api/odds-jam-api" },
  { name: "Bet Construct API", path: "/dashboard/games-api/bet-construct-api" },
  { name: "Kambi API", path: "/dashboard/games-api/kambi-api" },
  { name: "Pinnacle API", path: "/dashboard/games-api/pinnacle-api" },
  { name: "SoftSwiss API", path: "/dashboard/games-api/softswiss-api" },
  { name: "Betradar API", path: "/dashboard/games-api/betradar-api" },
  { name: "Evolution API", path: "/dashboard/games-api/evolution-api" },
  {
    name: "Pragmatic Play API",
    path: "/dashboard/games-api/pragmatic-play-api",
  },
  { name: "Playtech API", path: "/dashboard/games-api/playtech-api" },
  { name: "NetEnt API", path: "/dashboard/games-api/netent-api" },
  {
    name: "Betsoft Gaming API",
    path: "/dashboard/games-api/betsoft-gaming-api",
  },
];

const GamesApi = () => {
  const [selectedApi, setSelectedApi] = useState(null);
  const location = useLocation();
  const [formData, setFormData] = useState({
    apiKey: "",
    licenseKey: "",
    gameProviderKey: "",
    providerIp: "",
    secretPin: "",
    gameFile: null,
  });
  // const { addToast } = useToasts();

  useEffect(() => {
    const selected = submenus.find((menu) => menu.path === location.pathname);
    setSelectedApi(selected);
  }, [location.pathname]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setFormData({ ...formData, gameFile: files[0] });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Prepare data for console log
  //   const dataToLog = { ...formData };
  //   if (formData.gameFile) {
  //     dataToLog.gameFile = formData.gameFile.name;
  //   }

  //   addToast("Invalid api key", {
  //     appearance: "error",
  //     autoDismiss: true,
  //   });
  // };

  return (
    <div className="bg-[#222222] p-2 rounded-md shadow-lg mx-auto">
      <h1 className="text-center text-lg lg:text-3xl font-semibold mb-4 text-white">
        Games API Key
      </h1>

      <div className="bg-white rounded-lg p-6 shadow-xl">
        <h2 className="text-center text-2xl font-semibold text-black mb-6">
          {selectedApi?.name}
        </h2>

        <form
          className="space-y-4"
          // onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4">
              <label
                htmlFor="apiKey"
                className="text-gray-700 font-semibold p-2"
              >
                API Key
              </label>
              <input
                type="text"
                id="apiKey"
                placeholder="Enter API Key"
                value={formData.apiKey}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#14815f] focus:outline-none"
              />

              <label
                htmlFor="licenseKey"
                className="text-gray-700 font-semibold"
              >
                License Key
              </label>
              <input
                type="text"
                id="licenseKey"
                placeholder="Enter License Key"
                value={formData.licenseKey}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#14815f] focus:outline-none"
              />

              <label
                htmlFor="gameProviderKey"
                className="text-gray-700 font-semibold"
              >
                Game Provider Key
              </label>
              <input
                type="text"
                id="gameProviderKey"
                placeholder="Enter Game Provider Key"
                value={formData.gameProviderKey}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#14815f] focus:outline-none"
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="providerIp"
                className="text-gray-700 font-semibold"
              >
                Provider IP
              </label>
              <input
                type="text"
                id="providerIp"
                placeholder="Enter Provider IP"
                value={formData.providerIp}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#14815f] focus:outline-none"
              />

              <label htmlFor="gameFile" className="text-gray-700 font-semibold">
                Game file
              </label>
              <input
                type="file"
                id="gameFile"
                onChange={handleFileChange}
                className="w-full"
              />

              <label
                htmlFor="secretPin"
                className="text-gray-700 font-semibold"
              >
                Secret Pin
              </label>
              <input
                type="text"
                id="secretPin"
                placeholder="Enter Secret Pin"
                value={formData.secretPin}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#14815f] focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Save API
          </button>
        </form>
      </div>
    </div>
  );
};

export default GamesApi;
