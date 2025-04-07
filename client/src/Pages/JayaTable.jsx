import { useContext, useState } from "react";
import bgimage from "../assets/jayabg.jpeg";
import JayaLoginRegister from "../components/JayaTable/JayaLoginRegister";
import JayaTablePagination from "../components/JayaTable/JayaTablePagination";
import { LanguageContext } from "../Context/LanguageContext";

const Jayatable = () => {
  const { language } = useContext(LanguageContext);
  const [page, setPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const itemsPerPage = 10;

  const levels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];

  const rewardsBn = [
    "বিনামূল্যে\n৳20",
    "বিনামূল্যে\n৳10",
    "বিনামূল্যে\n৳10",
    "বিনামূল্যে\n৳15",
    "বিনামূল্যে\n৳50",
    "বিনামূল্যে\n৳20",
    "বিনামূল্যে\n৳30",
    "বিনামূল্যে\n৳40",
    "বিনামূল্যে\n৳50",
    "বিনামূল্যে\n৳60",
    "বিনামূল্যে\n৳70",
    "বিনামূল্যে\n৳80",
    "বিনামূল্যে\n৳90",
    "বিনামূল্যে\n৳100",
    "বিনামূল্যে\n৳110",
    "বিনামূল্যে\n৳120",
    "বিনামূল্যে\n৳130",
    "বিনামূল্যে\n৳140",
    "বিনামূল্যে\n৳150",
    "বিনামূল্যে\n৳160",
  ];

  const rewardsEn = [
    "Free\n৳20",
    "Free\n৳10",
    "Free\n৳10",
    "Free\n৳15",
    "Free\n৳50",
    "Free\n৳20",
    "Free\n৳30",
    "Free\n৳40",
    "Free\n৳50",
    "Free\n৳60",
    "Free\n৳70",
    "Free\n৳80",
    "Free\n৳90",
    "Free\n৳100",
    "Free\n৳110",
    "Free\n৳120",
    "Free\n৳130",
    "Free\n৳140",
    "Free\n৳150",
    "Free\n৳160",
  ];

  const requirementsBn = [
    "৳300",
    "৳800",
    "৳1300",
    "৳1800",
    "৳2300",
    "৳3100",
    "৳3900",
    "৳4700",
    "৳5500",
    "৳6300",
    "৳7100",
    "৳7900",
    "৳8700",
    "৳9500",
    "৳10300",
    "৳11100",
    "৳11900",
    "৳12700",
    "৳13500",
    "৳14300",
  ];

  const requirementsEn = [
    "৳300",
    "৳800",
    "৳1300",
    "৳1800",
    "৳2300",
    "৳3100",
    "৳3900",
    "৳4700",
    "৳5500",
    "৳6300",
    "৳7100",
    "৳7900",
    "৳8700",
    "৳9500",
    "৳10300",
    "৳11100",
    "৳11900",
    "৳12700",
    "৳13500",
    "৳14300",
  ];

  const rewards = language === "bn" ? rewardsBn : rewardsEn;
  const requirements = language === "bn" ? requirementsBn : requirementsEn;

  const totalPages = Math.ceil(levels.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div
      style={{ backgroundImage: `url(${bgimage})` }}
      className="bg-cover bg-center"
    >
      {/* jayaLoginRegister */}
      <JayaLoginRegister
        language={language}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />

      {/* jayaTablePagination */}
      <JayaTablePagination
        language={language}
        levels={levels}
        startIndex={startIndex}
        endIndex={endIndex}
        rewards={rewards}
        requirements={requirements}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Jayatable;
