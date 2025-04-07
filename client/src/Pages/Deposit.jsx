import { useState, useEffect, useContext } from "react";
import bkashlogo from "../assets/bkashlogo.svg";
import nagadlogo from "../assets/nagadlogo.svg";
import rocketlogo from "../assets/rocketlogo.svg";
import upailogo from "../assets/upaylogo.svg";
import bajilogo from "../assets/bajipay.jpeg";
import likeicon from "../assets/icon-recommond (1).svg";
import fastlogo from "../assets/fastpay.png";
import DepositTabs from "../components/Deposit/DepositTabs";
import TabDeposit from "../components/Deposit/TabDeposit";
import TabWithdraw from "../components/Deposit/TabWithdraw";
import DepositModal from "../components/Deposit/DepositModal";
import { LanguageContext } from "../Context/LanguageContext";

const Deposit = () => {
  const { language } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState("deposit");
  const [selectedMethod, setSelectedMethod] = useState("bKash");

  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState({
    name: "Bajipay",
    amounts: [500, 1000, 2000],
  });
  const [selectedAmount, setSelectedAmount] = useState(500); // Default to the first amount in the selected channel
  const [selectedBonus, setSelectedBonus] = useState("");

  const paymentMethods = [
    {
      name: "bKash",
      logo: bkashlogo,
      percentage: "+ 3.0 %",
      absolutelogo: likeicon,
    },
    {
      name: "NAGAD",
      logo: nagadlogo,
      percentage: "+ 3.0 %",
      absolutelogo: likeicon,
    },
    {
      name: "Rocket",
      logo: rocketlogo,
      percentage: "+ 3.0 %",
      absolutelogo: likeicon,
    },
    {
      name: "Upai",
      logo: upailogo,
      percentage: "+ 3.0 %",
      absolutelogo: likeicon,
    },
  ];

  const channelsData = {
    bKash: [
      {
        name: "Bajipay",
        logo: bajilogo,
        amounts: [200, 500, 1000, 2000, 10000, 20000],
      },
      { name: "Speedpay", amounts: [200, 500, 1000, 2000, 10000, 20000] },
    ],
    NAGAD: [
      {
        name: "Bajipay",
        logo: bajilogo,
        amounts: [200, 500, 1000, 2000, 10000, 20000],
      },
      {
        name: "Paybangla",
        logo: bajilogo,
        amounts: [500, 1000, 2000, 10000, 20000],
      },

      { name: "Speedpay", amounts: [200, 500, 1000, 2000, 10000, 20000] },
    ],
    Rocket: [
      { name: "Bajipay", amounts: [200, 500, 1000, 2000, 10000, 20000] },
    ],
    Upai: [
      {
        name: "",
        logo: fastlogo,
        amounts: [200, 500, 1000, 2000, 10000, 20000],
      },
    ],
  };

  const bonusOptionsBn = [
    "TITO 350% WELCOME OFFER - 350.00%",
    "স্লট 100% স্বাগতম বোনাস ৳18,000 পর্যন্ত - 100.00%",
    "লাইভ ক্যাসিনো 50% স্বাগতম বোনাস - 50.00%",
    "স্লট 10% আনলিমিটেড ডিপোজিট বোনাস - 10.00%",
  ]; // Example bonus options
  const bonusOptionsEn = [
    "TITO 350% WELCOME OFFER - 350.00%",
    "Slots 100% Welcome Bonus up to ৳18,000 - 100.00%",
    "Live Casino 50% Welcome Bonus - 50.00%",
    "Slots 10% Unlimited Deposit Bonus - 10.00%",
  ];
  const bonusOptions = language === "bn" ? bonusOptionsBn : bonusOptionsEn;

  const [balance, setBalance] = useState(Math.floor(Math.random() * 1000)); // Initial Balance
  const [loading, setLoading] = useState(false);

  const reloadBalance = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setBalance(Math.floor(Math.random() * 1000)); // Generate new random balance
      setLoading(false); // Stop loading
    }, 1500); // Simulate a delay (1.5s)
  };

  // Set the default selected channel and amount when selectedMethod changes
  useEffect(() => {
    const defaultChannel = channelsData[selectedMethod]?.[0] || {};
    setSelectedChannel(defaultChannel);
    setSelectedAmount(defaultChannel.amounts ? defaultChannel.amounts[0] : "");
  }, [selectedMethod]);

  return (
    <div>
      <DepositTabs
        language={language}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="max-w-3xl mx-auto  ">
        <TabDeposit
          language={language}
          activeTab={activeTab}
          paymentMethods={paymentMethods}
          selectedMethod={selectedMethod}
          setSelectedMethod={setSelectedMethod}
          selectedChannel={selectedChannel}
          setSelectedChannel={setSelectedChannel}
          selectedAmount={selectedAmount}
          setSelectedAmount={setSelectedAmount}
          selectedBonus={selectedBonus}
          setSelectedBonus={setSelectedBonus}
          channelsData={channelsData}
          bonusOptions={bonusOptions}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />

        {modalOpen && (
          <DepositModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}

        <TabWithdraw
          activeTab={activeTab}
          language={language}
          paymentMethods={paymentMethods}
          selectedMethod={selectedMethod}
          setSelectedMethod={setSelectedMethod}
          selectedChannel={setSelectedChannel}
          setSelectedChannel={setSelectedChannel}
          selectedAmount={selectedAmount}
          setSelectedAmount={setSelectedAmount}
          setSelectedBonus={setSelectedBonus}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          reloadBalance={reloadBalance}
          loading={loading}
          balance={balance}
        />
      </div>
    </div>
  );
};

export default Deposit;
