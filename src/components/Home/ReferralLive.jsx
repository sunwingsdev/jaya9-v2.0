
import banner from "../../assets/jaya9Banner.jpg";
import fieldimage from "../../assets/footballfield.webp";

const ReferralLive = ({language}) => {
    const data = [
        {
          id: 1,
          title: "AUSTRALIA TOUR OF SRILANKA,2025",
          description: "2025-01-29  10:30:00",
          extraInfo1: "Sri Lanka 2.56",
          extraInfo2: "Australia 1.99",
        },
        {
          id: 2,
          title: "BANGLADESH PREMIER LEAGUE, 2024-25",
          description: "2025-01-29 13:30:00",
          extraInfo1: "Rangpur Riders 1.51",
          extraInfo2: "Chittagong Kings 2.14",
        },
        {
          id: 3,
          title: "BANGLADESH PREMIER LEAGUE, 2024-25",
          description: "2025-01-29 18:30:00",
          extraInfo1: "Dhaka Capitals 2.26",
          extraInfo2: "Fortune Barishal 1.58",
        },
        {
          id: 4,
          title: "INTERNATIONAL LEAGUE T20, 2025",
          description: "2025-01-29 20:30:00",
          extraInfo1: "Desert Vipers 1.74",
          extraInfo2: "Gulf Giants 2.00",
        },
        {
          id: 5,
          title: "BANGLADESH WOMEN TOUR OF WEST INDIES, 2025",
          description: "2025-01-30 04:00:00",
          extraInfo1: "West Indies Women 1.29",
          extraInfo2: "Bangladesh Women 2.24",
        },
        {
          id: 6,
          title: "ENGLAND TOUR OF INDIA, 2025",
          description: "2025-01-31 19:30:00",
          extraInfo1: "India 1.55",
          extraInfo2: "England 2.52",
        },
      ];
      const bgImage = [fieldimage];
    return (
        <div className="w-full mx-auto max-w-[370px] md:max-w-2xl   lg:max-w-6xl ">
                <div className="  ">
                  <h3>

                  {language === "bn" ? "রেফারেল প্রোগ্রাম" : "Referral Program"}
                  </h3>
                  <img src={banner} alt="" className="w-full  " />
                </div>
        
                <div className=" mt-12 mx-auto max-w-[300px] md:max-w-none lg:max-w-none  ">
                  <div className="overflow-x-auto  pb-6 pt-8 ">
                    <div className="flex space-x-6 w-full">
                      {data.map((item, index) => (
                        <div
                          key={item.id}
                          className="relative bg-cover bg-center text-white p-6 shadow-lg flex-shrink-0 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] snap-start"
                          style={{
                            backgroundImage: `url(${bgImage})`,
                            height: "250px",
                          }}
                        >
                          <div className="absolute -top-9 left-2 px-4 py-2   bg-opacity-60 rounded-md">
                            {index < 4 ? (
                              <div className="flex space-x-2 flex-row">
                                <h3 className="font-bold text-black ">Live</h3>
                                <button className="bg-green-500 px-8  text-white text-sm rounded">
                                  Now
                                </button>
                              </div>
                            ) : (
                              <h3 className="font-bold text-black">Pre-Match</h3>
                            )}
                          </div>
        
                          <div className="bg-opacity-50 p-4 font-bold h-full flex flex-col items-center justify-between">
                            <div>
                              <h3 className="text-xl font-bold">{item.title}</h3>
                              <p className="mb-2 text-center">{item.description}</p>
                            </div>
                            <div className="flex justify-between   space-x-24 text-sm opacity-80">
                              <p>{item.extraInfo1}</p>
                              <p>{item.extraInfo2}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
    );
};

export default ReferralLive;