import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import icondeposit from "../assets/icon-deposit.svg";
import iconwithdraw from "../assets/icon-withdrawal.svg";
import bajilogo from "../assets/baji.svg";
import transferlogo from "../assets/transfer.svg";
import bonuslogo from "../assets/bonus.svg";
import transactionlogo from "../assets/transaction.svg";
import dabilogo from "../assets/davi.svg";
import puroskarlogo from "../assets/puroskar.svg";
import infologo from "../assets/info.svg";
import passwordresetlogo from "../assets/passwordreset.svg";
import bankdetailslogo from "../assets/bankdetails.svg";
import inboxlogo from "../assets/inbox.svg";
import referellogo from "../assets/referral.svg";
import supportlogo from "../assets/support.svg";
import whatsapplogo from "../assets/whatsapp.svg";
import telegramlogo from "../assets/telegramicon.svg";
import fblogo from "../assets/fb.svg";
import downloadlogo from "../assets/icon-downloadapk.png";
import logouticon from "../assets/icon-logout.svg";

import { useNavigate } from "react-router-dom";
import Navigation from "../components/MainProfile/Navigation";
import Name from "../components/MainProfile/Name";
import MainWallet from "../components/MainProfile/MainWallet";
import MainProfileTabs from "../components/MainProfile/MainProfileTabs";
import { LanguageContext } from "../Context/LanguageContext";
import toast from "react-hot-toast";
import { logout } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFetchUser } from "../hooks/customHook";

const MainProfile = () => {
  const { user, singleUser } = useSelector((state) => state.auth);
  const { language } = useContext(LanguageContext);
  const { fetchUser, isLoading } = useFetchUser(user?._id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showBalance, setShowBalance] = useState(false);
  const reloadBalance = () => {
    if (!user) return;
    fetchUser(user._id);
  };

  const toggleBalanceVisibility = () => {
    setShowBalance((prev) => !prev); // Toggle show/hide
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    toast.success("Logout successful");
    navigate("/");
  };

  const dataBn = [
    {
      title: "তহবিল",
      titleClass: "text-black",
      gridClass: " grid-cols-2 ",
      items: [
        {
          imgSrc: icondeposit,
          label: "আমানত",
          path: "/amanot",
          imgClass: "",
          labelClass: "text-black text-xs lg:text:md",
        },
        {
          imgSrc: iconwithdraw,
          label: "উত্তোলন",
          path: "/amanot",
          imgClass: "",
          labelClass: "text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "  ইতিহাস ",
      titleClass: "text-black",
      gridClass:
        "grid-cols-2 justify-items-center lg:justify-items-center    lg:grid-cols-5 ",
      sectionClass: "mt-2",
      items: [
        {
          imgSrc: bajilogo,
          label: "বাজি রেকর্ড",
          path: "/baji",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: bajilogo,
          label: "টার্নওভার",
          path: "/turnover",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: transferlogo,
          label: "স্থানান্তর রেকর্ড",
          path: "/sthanantor",
          imgClass: "",
          labelClass: " whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: bonuslogo,
          label: "বোনাস",
          path: "/bonus",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: transactionlogo,
          label: "লেনদেন রেকর্ড",
          path: "/lenden",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "ঘটনা",
      titleClass: "text-black",
      gridClass: " grid-cols-2 ",
      items: [
        {
          imgSrc: dabilogo,
          label: "দাবি ভাউচার",
          path: "/dabivoutcher",
          imgClass: "w-12",
          labelClass: "text-black text-xs lg:text:md",
        },
        {
          imgSrc: puroskarlogo,
          label: "পুরস্কার",
          path: "/puroskar",
          imgClass: "w-12 lg:w-auto",
          labelClass: "text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "  প্রোফাইল ",
      titleClass: "text-black",
      gridClass:
        "grid-cols-2 justify-items-center lg:justify-items-center    lg:grid-cols-6 ",
      sectionClass: "mt-2",
      items: [
        {
          imgSrc: infologo,
          label: "ব্যাক্তিগত তথ্য",
          path: "/jachaikoron",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: passwordresetlogo,
          label: "পাসওয়ার্ড পরিবর্তন  করুন",
          path: "/passwordchange",
          imgClass: "",
          labelClass: " whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: bankdetailslogo,
          label: "ব্যাংক বিবরণ",
          path: "/bankdetails",
          imgClass: "",
          labelClass: " whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: inboxlogo,
          label: "ইনবক্স বার্তা",
          path: "/inbox",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: referellogo,
          label: "সুপারিশ",
          path: "/refference",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: referellogo,
          label: "Referral Bonus",
          path: "/refferelbonus",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "  যোগাযোগ করুন ",
      titleClass: "text-black",
      gridClass: "grid-cols-2     lg:grid-cols-4 ",
      sectionClass: "mt-2",
      items: [
        {
          imgSrc: supportlogo,
          label: "24/7 সমর্থন",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: whatsapplogo,
          label: "হোয়াটসঅ্যাপ",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: telegramlogo,
          label: "Telegram",
          imgClass: "w-10",
          labelClass: " whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: fblogo,
          label: "ফেসবুক",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "ডাউনলোড করুন",
      titleClass: "text-black",
      gridClass: " grid-cols-1 ",
      items: [
        {
          imgSrc: downloadlogo,
          label: "অ্যান্ড্রয়েড ডাউনলোড করুন",
          imgClass: "w-12",
          labelClass: "text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "",
      titleClass: "",
      gridClass: " grid-cols-1 ",
      items: [
        {
          onClick: handleLogout,
          imgSrc: logouticon,
          label: "প্রস্থান",
          imgClass: "w-10",
          labelClass: "text-black text-xs lg:text:md",
        },
      ],
    },
  ];
  const dataEn = [
    {
      title: "Funds",
      titleClass: "text-black",
      gridClass: " grid-cols-2 ",
      items: [
        {
          imgSrc: icondeposit,
          label: "Deposit",
          path: "/amanot",
          imgClass: "",
          labelClass: "text-black text-xs lg:text:md",
        },
        {
          imgSrc: iconwithdraw,
          label: "Withdraw",
          path: "/amanot",
          imgClass: "",
          labelClass: "text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "History",
      titleClass: "text-black",
      gridClass:
        "grid-cols-2 justify-items-center lg:justify-items-center lg:grid-cols-5",
      sectionClass: "mt-2",
      items: [
        {
          imgSrc: bajilogo,
          label: "Bet Record",
          path: "/baji",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: bajilogo,
          label: "Turnover",
          path: "/turnover",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: transferlogo,
          label: "Transfer Record",
          path: "/sthanantor",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: bonuslogo,
          label: "Bonus",
          path: "/bonus",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: transactionlogo,
          label: "Transaction Record",
          path: "/lenden",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "Events",
      titleClass: "text-black",
      gridClass: " grid-cols-2 ",
      items: [
        {
          imgSrc: dabilogo,
          label: "Claim Voucher",
          path: "/dabivoutcher",
          imgClass: "w-12",
          labelClass: "text-black text-xs lg:text:md",
        },
        {
          imgSrc: puroskarlogo,
          label: "Rewards",
          path: "/puroskar",
          imgClass: "w-12 lg:w-auto",
          labelClass: "text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "Profile",
      titleClass: "text-black",
      gridClass:
        "grid-cols-2 justify-items-center lg:justify-items-center lg:grid-cols-6",
      sectionClass: "mt-2",
      items: [
        {
          imgSrc: infologo,
          label: "Personal Info",
          path: "/jachaikoron",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: passwordresetlogo,
          label: "Change Password",
          path: "/passwordchange",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: bankdetailslogo,
          label: "Bank Details",
          path: "/bankdetails",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: inboxlogo,
          label: "Inbox Messages",
          path: "/inbox",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: referellogo,
          label: "Recommendation",
          path: "/refference",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: referellogo,
          label: "Referral Bonus",
          path: "/refferelbonus",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "Contact Us",
      titleClass: "text-black",
      gridClass: "grid-cols-2 lg:grid-cols-4",
      sectionClass: "mt-2",
      items: [
        {
          imgSrc: supportlogo,
          label: "24/7 Support",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: whatsapplogo,
          label: "WhatsApp",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: telegramlogo,
          label: "Telegram",
          imgClass: "w-10",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: fblogo,
          label: "Facebook",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "Download",
      titleClass: "text-black",
      gridClass: " grid-cols-1 ",
      items: [
        {
          imgSrc: downloadlogo,
          label: "Download Android",
          imgClass: "w-12",
          labelClass: "text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "",
      titleClass: "",
      gridClass: " grid-cols-1 ",
      items: [
        {
          onClick: handleLogout,
          imgSrc: logouticon,
          label: "Logout",
          imgClass: "w-10",
          labelClass: "text-black text-xs lg:text:md",
        },
      ],
    },
  ];
  const data = language === "bn" ? dataBn : dataEn;
  return (
    <AnimatePresence>
      <motion.div
        key="main-profile"
        initial={{ opacity: 0, y: 50 }} // Entry Animation (নিচ থেকে আসবে)
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth Timing
        className="bg-informationBackground min-h-screen pb-10 relative overflow-hidden "
      >
        <div className="mx-auto  lg:max-w-3xl min-h-screen   ">
          <Navigation navigate={navigate} />

          <Name />

          <div className="px-3 lg:px-0">
            <MainWallet
              reloadBalance={reloadBalance}
              loading={isLoading}
              toggleBalanceVisibility={toggleBalanceVisibility}
              showBalance={showBalance}
              balance={singleUser?.balance}
              language={language}
            />

            <MainProfileTabs data={data} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MainProfile;
