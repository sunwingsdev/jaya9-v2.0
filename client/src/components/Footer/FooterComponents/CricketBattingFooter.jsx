import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";


const dataBn = [
  {
    title: "ক্রিকেট বেটিং অ্যাপ ডাউনলোড করুন | সেরা অনলাইন ক্রিকেট এক্সচেঞ্জ | বাংলাদেশ ক্রিকেট বেটিং | ক্রিকেট ক্যাসিনো",
    content: "শীর্ষ বাংলাদেশ ক্রিকেট বেটিং সাইটে বাজি ধরুন 2022-23   আপনি কি বাংলাদেশ ক্রিকেটের জন্য সেরা অনলাইন ক্রিকেট এক্সচেঞ্জ সাইটটি খুঁজে পেতে চান? তারপর, আপনি সঠিক জায়গায় এসেছেন. ফুটবল এবং ক্রিকেটের মতো খেলার জন্য শত শত বাজার, লাভজনক বোনাস এবং বিশ্বস্ত ক্রিকেট ক্যাসিনো লাইসেন্স রয়েছে।"
  },
  {
    title: "আপনার বাজি রাখার জন্য বাংলাদেশের সেরা ক্রিকেট বেটিং সাইটগুলিতে যান",
    content: "আমাদের পেশাদাররা অত্যন্ত সুপারিশ ক্রিকেট ক্যাসিনো যেহেতু এটি সম্পূর্ণ নিরাপদ। আপনি আমাদের বাংলাদেশী বেটিং সাইটগুলির একটিতে নিবন্ধন করতে পারেন বা বাংলাদেশী অনলাইন বেটিং এবং ক্রিকেট এক্সচেঞ্জের অন্যান্য গুরুত্বপূর্ণ দিকগুলি সম্পর্কে আরও জানতে পড়তে পারেন৷"
  },
  {
    title: "আপনার ক্রিকেট বেটিং জার্নি শুরু করার সেরা উপায় কি?",
    content: "দ্য ক্রিকেট এক্সচেঞ্জ আপনাকে আপনার বেটিং যাত্রা শুরু করতে সাহায্য করে| প্রথমে, আপনার প্রয়োজন অনুসারে একটি বেটিং সাইট খুঁজে বের করুন এবং নির্বাচন করুন একটি নতুন অ্যাকাউন্ট তৈরি করুন অ্যাকাউন্টে জমা দিন আপনার বাজি রাখুন উপার্জন প্রত্যাহার সফল হয়েছে"
  },
  {
    title: "বৈশিষ্ট্য",
    content: "ক্রিকেট এক্সচেঞ্জের জন্য মোবাইল বা ট্যাবলেট নিবন্ধন লাইভ স্ট্রিম মান চমৎকার প্রযুক্তিগত সহায়তা সার্বক্ষণিক উপলব্ধ, এবং বাজির ইতিহাস পরিচালনা করা যেতে পারে ক্রিকেট বেটিং গেমগুলি বুকমেকারের ওয়েবসাইটে বিনামূল্যে লাইভ স্ট্রিম করা হয়৷ক্যাশ আউট করার বিকল্প অন্যান্য ভাষা সাইটে উপলব্ধ স্ক্র্যাচ থেকে নির্মিত একটি অ্যাপ্লিকেশ"
  },
  {
    title: "যোগাযোগ করুণ",
    content: "https://www.jaya9.app/cricket/ ডাউনলোড করতে বাংলাদেশ ক্রিকেট বেটিং সফটওয়্যার & ক্রিকেট বেটিং অ্যাপ ডাউনলোড করুন."
  },
  {
    title: "JAYA9 ক্যাসিনো 2023 | লাইভ ক্যাসিনো বাংলাদেশ | বাংলাদেশের সেরা ক্রিকেট ক্যাসিনো",
    content: ""
  }
];

const dataEn = [
  {
    title: "Download Cricket Betting App | Best Online Cricket Exchange | Bangladesh Cricket Betting | Cricket Casino",
    content: "Bet on the top Bangladesh cricket betting site 2022-23. Are you looking for the best online cricket exchange site for Bangladesh cricket? Then you have come to the right place. There are hundreds of markets for games like football and cricket, lucrative bonuses, and trusted cricket casino licenses."
  },
  {
    title: "Visit the Best Cricket Betting Sites in Bangladesh to Place Your Bets",
    content: "Our professionals highly recommend Cricket Casino as it is completely safe. You can register on one of our Bangladeshi betting sites or read more to learn about other important aspects of Bangladeshi online betting and cricket exchange."
  },
  {
    title: "What is the Best Way to Start Your Cricket Betting Journey?",
    content: "The Cricket Exchange helps you start your betting journey. First, find and select a betting site that suits your needs. Create a new account, deposit funds, place your bets, and successfully withdraw your earnings."
  },
  {
    title: "Features",
    content: "Mobile or tablet registration for Cricket Exchange. High-quality live stream. Excellent technical support available 24/7, and betting history can be managed. Cricket betting games are live-streamed for free on the bookmaker's website. Cash-out option available. Other languages are available on the site. An application built from scratch."
  },
  {
    title: "Contact Us",
    content: "Download Bangladesh Cricket Betting Software & Cricket Betting App: https://www.jaya9.app/cricket/"
  },
  {
    title: "JAYA9 Casino 2023 | Live Casino Bangladesh | Best Cricket Casino in Bangladesh",
    content: ""
  }
];


const CricketBattingFooter = () => {
  const { language } = useContext(LanguageContext);
  const data = language === "bn" ? dataBn : dataEn;
  return (
    <div className=" ">
      {data.map((item, index) => (
        <div key={index} className=" mb-6  text-left">
          <h3 className="text-2xl font-sans font-bold">{item.title}</h3>
          <p className="text-base font-sans">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CricketBattingFooter;
