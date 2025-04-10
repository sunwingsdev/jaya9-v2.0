import { useState, useEffect, useContext, useMemo } from "react";
import DepositTabs from "../components/Deposit/DepositTabs";
import TabDeposit from "../components/Deposit/TabDeposit";
import TabWithdraw from "../components/Deposit/TabWithdraw";
import DepositModal from "../components/Deposit/DepositModal";
import { LanguageContext } from "../Context/LanguageContext";
import { useGetPaymentMethodsQuery } from "@/redux/features/allApis/paymentMethodApi/paymentMethodApi";
import { useSelector } from "react-redux";
import { uploadImage } from "@/hooks/files";
import toast from "react-hot-toast";
import { useAddDepositMutation } from "@/redux/features/allApis/depositsApi/depositsApi";

const Deposit = () => {
  const { language } = useContext(LanguageContext);
  const { singleUser } = useSelector((state) => state.auth);
  const { data: paymentMethods } = useGetPaymentMethodsQuery();
  const [addDeposit, { isLoading }] = useAddDepositMutation();
  const [activeTab, setActiveTab] = useState("deposit");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedBonus, setSelectedBonus] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [tempInputValues, setTempInputValues] = useState({});

  const depositMethods = paymentMethods?.filter(
    (method) => method.paymentType === "deposit" && method.status === "active"
  );

  const channels = useMemo(
    () => [
      { name: "agent", amounts: [500, 1000, 2000] },
      { name: "merchant", amounts: [300, 800, 1500] },
      { name: "personal", amounts: [100, 600, 1200] },
    ],
    []
  );

  const bonusOptionsBn = [
    "TITO 350% WELCOME OFFER - 350.00%",
    "স্লট 100% স্বাগতম বোনাস ৳18,000 পর্যন্ত - 100.00%",
    "লাইভ ক্যাসিনো 50% স্বাগতম বোনাস - 50.00%",
    "স্লট 10% আনলিমিটেড ডিপোজিট বোনাস - 10.00%",
  ];

  const bonusOptionsEn = [
    "TITO 350% WELCOME OFFER - 350.00%",
    "Slots 100% Welcome Bonus up to ৳18,000 - 100.00%",
    "Live Casino 50% Welcome Bonus - 50.00%",
    "Slots 10% Unlimited Deposit Bonus - 10.00%",
  ];

  const bonusOptions = language === "bn" ? bonusOptionsBn : bonusOptionsEn;

  const [balance, setBalance] = useState(Math.floor(Math.random() * 1000));
  const [loading, setLoading] = useState(false);

  // Auto-select first method and channel
  useEffect(() => {
    if (depositMethods?.length && !selectedMethod) {
      setSelectedMethod(depositMethods[0]);
    }
  }, [depositMethods, selectedMethod]);

  useEffect(() => {
    if (!selectedChannel && channels.length) {
      setSelectedChannel(channels[0]);
    }
  }, [channels, selectedChannel]);

  const reloadBalance = () => {
    setLoading(true);
    setTimeout(() => {
      setBalance(Math.floor(Math.random() * 1000));
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (selectedMethod?.numbers?.length > 0) {
      const filteredNumbers = selectedMethod?.numbers?.filter(
        (number) =>
          number.isActive &&
          number.channel?.trim().toLowerCase() ===
            selectedChannel?.name?.trim().toLowerCase()
      );

      if (filteredNumbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredNumbers.length);
        setRandomNumber(filteredNumbers[randomIndex].number);
      } else {
        setRandomNumber(null);
      }
    }
  }, [modalOpen, selectedMethod, selectedChannel]);

  const handleInputChange = (name, value) => {
    setTempInputValues((prevValues) => ({
      ...prevValues,
      [name]: value, // Update the temporary state
    }));
  };

  const handleSubmit = async () => {
    const paymentInputs = [];
    for (const [name, value] of Object.entries(tempInputValues)) {
      if (value instanceof File) {
        try {
          const { filePath } = await uploadImage(value);
          paymentInputs.push({ [name]: filePath });
          // eslint-disable-next-line no-unused-vars
        } catch (error) {
          toast.error("Failed to upload file. Please try again.");
          continue;
        }
      } else {
        paymentInputs.push({ [name]: value });
      }
    }
    const updatedFormData = {
      amount: selectedAmount,
      paymentMethod: selectedMethod?.method,
      depositChannel: selectedChannel?.name,
      bonusId: selectedBonus,
      userId: singleUser?._id,
      depositNumber: randomNumber,
      paymentInputs: paymentInputs,
    };
    const result = await addDeposit(updatedFormData);
    if (result.error) {
      toast.error(result.error.data.error);
    } else if (result.data.insertedId) {
      toast.success("Deposit added successfully");
      // Reset form data and close modal
      setSelectedMethod(depositMethods[0]);
      setTempInputValues({});
      setSelectedBonus("");
      setSelectedAmount(null);
      setModalOpen(false);
    }
  };

  return (
    <div>
      <DepositTabs
        language={language}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="max-w-3xl mx-auto">
        <TabDeposit
          language={language}
          activeTab={activeTab}
          paymentMethods={depositMethods}
          selectedMethod={selectedMethod}
          setSelectedMethod={setSelectedMethod}
          selectedChannel={selectedChannel}
          setSelectedChannel={setSelectedChannel}
          selectedAmount={selectedAmount}
          setSelectedAmount={setSelectedAmount}
          selectedBonus={selectedBonus}
          setSelectedBonus={setSelectedBonus}
          channels={channels}
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
            selectedAmount={selectedAmount}
            selectedMethod={selectedMethod}
            selectedChannel={selectedChannel}
            user={singleUser}
            randomNumber={randomNumber}
            tempInputValues={tempInputValues}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        )}

        <TabWithdraw
          activeTab={activeTab}
          language={language}
          paymentMethods={depositMethods}
          selectedMethod={selectedMethod}
          setSelectedMethod={setSelectedMethod}
          selectedChannel={selectedChannel}
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
