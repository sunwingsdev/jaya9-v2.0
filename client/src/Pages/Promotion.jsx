import { useState, useEffect, useContext, useMemo } from "react";
import image1 from "../assets/newimage1.webp";
// import image2 from "../assets/new image-2.webp";
import newimage2 from "../assets/promotiontab2logo1.jpg";
import newimage3 from "../assets/Promotion image-2.webp";
// import image3 from "../assets/new image-3.webp";
import newimage4 from "../assets/promotion image 4.webp";
import image4 from "../assets/new image-4.webp";
// import image5 from "../assets/new image-5.webp";
import image6 from "../assets/promotion image-6.webp";
import newimage6 from "../assets/Promotion new image-6.webp";
// import image7 from "../assets/image7.jpg";
import image8 from "../assets/tab1logo8.jpg";
import image9 from "../assets/tab1logo9.jpg";
import image10 from "../assets/tab1logo10.jpg";
import image11 from "../assets/tab1logo11.jpg";

import image12 from "../assets/tab1logo12.jpg";
import image13 from "../assets/tab1logo13.jpg";
import image14 from "../assets/tab1logo14.jpg";
import image15 from "../assets/tab1logo15.jpg";
import image16 from "../assets/tab1logo16.jpg";
import image17 from "../assets/tab1logo17.jpg";
import image18 from "../assets/tab1logo18.jpg";
import tab2logo1 from "../assets/promotiontab2logo1.jpg";
import Tabs from "../components/Promotion/Tabs";
import TabsContents from "../components/Promotion/TabsContents";
import { LanguageContext } from "../Context/LanguageContext";

const Promotion = () => {
  const { language } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState(1);
  const [promotions, setPromotions] = useState([]);
  const tabData = useMemo(() => [
    {
      id: 1,
      label: language === "bn" ? "সব" : "All",
      data: [
        {
          image: image1,
          title:
            language === "bn"
              ? "দৈনিক গিভঅ্যাওয়ে BPL ২০২৪-২০২৫"
              : "Daily Giveaway BPL 2024-2025",
          description:
            language === "bn"
              ? "প্রতিদিন ৯৯ জন সদস্যের জন্য একটি BPL গিভঅ্যাওয়ে পান !!!"
              : "Get a BPL giveaway for 99 members daily!!!",
          date: "2024-12-24 02:21:30 to 2025-02-08 14:59:59",
          countdown: "6 D 1 H এ শেষ হবে",
          details: true,
          apply: true,
        },
        {
          image: newimage3,
          title:
            language === "bn"
              ? "সুপার লিমিটেড অফার ৩৫০% স্বাগতম বোনাস"
              : "Super Limited Offer 350% Welcome Bonus",
          description:
            language === "bn"
              ? "এখনই নিন টিটো ৩৫০% বোনাস, সীমিত অফার"
              : "Claim Tito 350% Bonus now, limited offer",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: newimage4,
          title:
            language === "bn"
              ? "JAYA9 চমৎকার রেফারেল প্রোগ্রাম"
              : "JAYA9 Excellent Referral Program",
          description:
            language === "bn"
              ? "৳৯,৯৯,৯৯,৯৯৯ পর্যন্ত ২০% ডিপোজিট কমিশন"
              : "20% deposit commission up to ৳9,99,99,999",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: newimage2,
          title:
            language === "bn"
              ? "বিশেষ সীমাহীন আমানত বোনাস +৩%"
              : "Special Unlimited Deposit Bonus +3%",
          description:
            language === "bn"
              ? "জমা করুন এবং প্রতিটি জমার সাথে পান +৩% সীমাহীন বোনাস !!!"
              : "Deposit and get +3% unlimited bonus with every deposit!!!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: image4,
          title:
            language === "bn"
              ? "টুর্নামেন্ট স্লট Jili x Tito ৳৯,৯৯,৯৯৯"
              : "Tournament Slot Jili x Tito ৳9,99,999",
          description:
            language === "bn"
              ? "টুর্নামেন্টে অংশগ্রহণ করুন এবং সমস্ত পুরস্কার জিতে নিন ৳৯,৯৯,৯৯৯"
              : "Join the tournament and win all prizes worth ৳9,99,999",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown:
            language === "bn" ? "332 D 10 H এ শেষ হবে" : "Ends in 332 D 10 H",
          details: true,
          apply: false,
        },

        {
          image: newimage6,
          title:
            language === "bn"
              ? "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০"
              : "Free Birthday Bonus ৳2,000",
          description:
            language === "bn"
              ? "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন"
              : "Turn your special day into a big win",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown:
            language === "bn" ? "332 D 10 H এ শেষ হবে" : "Ends in 332 D 10 H",
          details: true,
          apply: false,
        },
        {
          image: image6,
          title:
            language === "bn"
              ? "সাপ্তাহিক লাকি ড্র আইফোন ১৬ প্রো ম্যাক্স"
              : "Weekly Lucky Draw iPhone 16 Pro Max",
          description:
            language === "bn"
              ? "এখনই তুলে নিন, মিস করবেন না"
              : "Grab it now, don’t miss out",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown:
            language === "bn" ? "332 D 10 H এ শেষ হবে" : "Ends in 332 D 10 H",
          details: true,
          apply: false,
        },
        {
          image: image8,
          title:
            language === "bn"
              ? "স্লট 100% স্বাগতম বোনাস ৳18,000 পর্যন্ত"
              : "Slot 100% Welcome Bonus up to ৳18,000",
          description:
            language === "bn"
              ? "৳18,000 পর্যন্ত ওয়েলকাম বোনাস পান"
              : "Get a welcome bonus up to ৳18,000",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown:
            language === "bn" ? "332 D 10 H এ শেষ হবে" : "Ends in 332 D 10 H",
          details: true,
          apply: false,
        },
        {
          image: image9,
          title:
            language === "bn"
              ? "লাইভ ক্যাসিনো 50% স্বাগতম বোনাস"
              : "Live Casino 50% Welcome Bonus",
          description:
            language === "bn"
              ? "৳20,000 পর্যন্ত স্বাগতম বোনাস পান"
              : "Get a welcome bonus up to ৳20,000",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown:
            language === "bn" ? "332 D 10 H এ শেষ হবে" : "Ends in 332 D 10 H",
          details: true,
          apply: false,
        },
        {
          image: image10,
          title:
            language === "bn"
              ? "স্লট 10% আনলিমিটেড ডিপোজিট বোনাস"
              : "Slot 10% Unlimited Deposit Bonus",
          description:
            language === "bn"
              ? "সীমাহীন বোনাস দাবি উপভোগ করুন এবং প্রতিবার জমা করার সময় স্লটের জন্য ৳10"
              : "Enjoy unlimited bonus claims and get ৳10 for slots every deposit",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown:
            language === "bn" ? "332 D 10 H এ শেষ হবে" : "Ends in 332 D 10 H",
          details: true,
          apply: false,
        },

        {
          image: image11,
          title:
            language === "bn"
              ? "লাইভ ক্যাসিনো 5% আনলিমিটেড ডিপোজিট বোনাস"
              : "Live Casino 5% Unlimited Deposit Bonus",
          description:
            language === "bn"
              ? "সীমাহীন বোনাস দাবি উপভোগ করুন এবং প্রতিবার জমা করার সময় লাইভ ক্যাসি"
              : "Enjoy claiming unlimited bonuses and live casino on every deposit.",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: image12,
          title:
            language === "bn"
              ? "20% সাপ্তাহিক রিলোড বোনাস ৳25,000 পর্যন্ত"
              : "20% Weekly Reload Bonus Up to ৳25,000",
          description:
            language === "bn"
              ? "আপনার সমস্ত প্রিয় স্লট গেমগুলির জন্য সপ্তাহের প্রথম জমাতে ৳25,000 পর্যন্ত বোনা"
              : "Get up to ৳25,000 bonus on your first weekly slot deposit.",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: image13,
          title:
            language === "bn"
              ? "লাইভ ক্যাসিনো 20% সাপ্তাহিক রিলোড বোনাস"
              : "Live Casino 20% Weekly Reload Bonus",
          description:
            language === "bn"
              ? "সপ্তাহের প্রথম জমাতে প্রতি সপ্তাহে ৳25,000 পর্যন্ত বোনাস উপভোগ করুন!"
              : "Enjoy up to ৳25,000 bonus every week on your first deposit!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: image14,
          title:
            language === "bn"
              ? "স্পোর্ট 20% সাপ্তাহিক রিলোড বোনাস"
              : "Sports 20% Weekly Reload Bonus",
          description:
            language === "bn"
              ? "স্পোর্টসবুকের জন্য আপনার সপ্তাহের প্রথম জমাতে প্রতি সপ্তাহে ৳25,000 পর্যন্ত"
              : "Get up to ৳25,000 bonus every week on your first sports deposit.",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: image15,
          title: language === "bn" ? "JAYA র‍্যাঙ্কিং" : "JAYA Ranking",
          description:
            language === "bn"
              ? "ননস্টপ পুরস্কার এবং পুরস্কারের জন্য প্রস্তুত হন"
              : "Get ready for nonstop rewards and prizes.",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: image16,
          title:
            language === "bn"
              ? "লাইভ ক্যাসিনো ৫% সাপ্তাহিক ক্যাশব্যাক"
              : "Live Casino 5% Weekly Cashback",
          description:
            language === "bn"
              ? "শুধুমাত্র 3x টার্নওভার সহ 60,000 পর্যন্ত লাইভ ক্যাসিনোর জন্য ৫% সাপ্তাহিক ক্যাশ"
              : "Enjoy 5% weekly cashback up to ৳60,000 with only 3x turnover.",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: image17,
          title:
            language === "bn"
              ? "স্পোর্ট ৫% সাপ্তাহিক ক্যাশব্যাক"
              : "Sports 5% Weekly Cashback",
          description:
            language === "bn"
              ? "স্পোর্টসবুকের জন্য ৫% সাপ্তাহিক ক্যাশব্যাক উপভোগ করুন মাত্র 3x টার্নওভার সহ ৳60"
              : "Get 5% weekly cashback on sportsbook with just 3x turnover up to ৳60,000.",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: image18,
          title:
            language === "bn"
              ? "স্লট 5% সাপ্তাহিক ক্যাশব্যাক"
              : "Slot 5% Weekly Cashback",
          description:
            language === "bn"
              ? "মাত্র 3x টার্নওভার সহ ৳60,000 পর্যন্ত স্লটের জন্য 5% সাপ্তাহিক ক্যাশব্যাক উপভোগ"
              : "Enjoy 5% weekly cashback on slots up to ৳60,000 with only 3x turnover.",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
      ],
    },

    {
      id: 2,
      label: language === "bn" ? "খেলাধুলা" : "Sports",
      data: [
        {
          image: tab2logo1,
          title:
            language === "bn"
              ? "বিশেষ সীমাহীন আমানত বোনাস +৩%"
              : "Special Unlimited Deposit Bonus +3%",
          description:
            language === "bn"
              ? "জমা করুন এবং প্রতিটি জমার সাথে পান +৩% সীমাহীন বোনাস !!!"
              : "Deposit and get +3% unlimited bonus on each deposit!!!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "2 D 8 H",
          details: true,
          apply: true,
        },
        {
          image: newimage6,
          title:
            language === "bn"
              ? "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০"
              : "Free Birthday Bonus ৳2,000",
          description:
            language === "bn"
              ? "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন"
              : "Turn your special day into a big win!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "7 D 12 H",
          details: false,
          apply: true,
        },
        {
          image: image14,
          title:
            language === "bn"
              ? "স্পোর্ট 20% সাপ্তাহিক রিলোড বোনাস"
              : "Sports 20% Weekly Reload Bonus",
          description:
            language === "bn"
              ? "স্পোর্টসবুকের জন্য আপনার সপ্তাহের প্রথম জমাতে প্রতি সপ্তাহে ৳25,000 পর্যন্ত বোনাস পান"
              : "Get up to ৳25,000 weekly bonus on your first deposit of the week for Sportsbook!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "7 D 12 H",
          details: false,
          apply: true,
        },
        {
          image: image17,
          title:
            language === "bn"
              ? "স্পোর্ট ৫% সাপ্তাহিক ক্যাশব্যাক"
              : "Sports 5% Weekly Cashback",
          description:
            language === "bn"
              ? "স্পোর্টসবুকের জন্য ৫% সাপ্তাহিক ক্যাশব্যাক উপভোগ করুন মাত্র 3x টার্নওভার সহ"
              : "Enjoy 5% weekly cashback for Sportsbook with just 3x turnover!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "7 D 12 H",
          details: false,
          apply: true,
        },
      ],
    },

    {
      id: 3,
      label: language === "bn" ? "লাইভ ক্যাসিনো" : "Live Casino",
      data: [
        {
          image: newimage6,
          title:
            language === "bn"
              ? "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০"
              : "Free Birthday Bonus ৳2,000",
          description:
            language === "bn"
              ? "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন"
              : "Turn your special day into a big win",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "5 D 3 H",
          details: true,
          apply: false,
        },
        {
          image: image9,
          title:
            language === "bn"
              ? "লাইভ ক্যাসিনো 50% স্বাগতম বোনাস"
              : "Live Casino 50% Welcome Bonus",
          description:
            language === "bn"
              ? "৳20,000 পর্যন্ত স্বাগতম বোনাস পান"
              : "Get up to ৳20,000 welcome bonus",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "5 D 3 H",
          details: true,
          apply: false,
        },
        {
          image: image11,
          title:
            language === "bn"
              ? "লাইভ ক্যাসিনো 5% আনলিমিটেড ডিপোজিট বোনাস"
              : "Live Casino 5% Unlimited Deposit Bonus",
          description:
            language === "bn"
              ? "সীমাহীন বোনাস দাবি উপভোগ করুন এবং প্রতিবার জমা করার সময় লাইভ ক্যাসিনো"
              : "Enjoy unlimited bonus claims every time you deposit at Live Casino",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "5 D 3 H",
          details: true,
          apply: false,
        },
        {
          image: image13,
          title:
            language === "bn"
              ? "লাইভ ক্যাসিনো 20% সাপ্তাহিক রিলোড বোনাস"
              : "Live Casino 20% Weekly Reload Bonus",
          description:
            language === "bn"
              ? "সপ্তাহের প্রথম জমাতে প্রতি সপ্তাহে ৳25,000 পর্যন্ত বোনাস উপভোগ করুন!"
              : "Enjoy up to ৳25,000 bonus every week on your first deposit of the week!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "5 D 3 H",
          details: true,
          apply: false,
        },
        {
          image: image16,
          title:
            language === "bn"
              ? "লাইভ ক্যাসিনো ৫% সাপ্তাহিক ক্যাশব্যাক"
              : "Live Casino 5% Weekly Cashback",
          description:
            language === "bn"
              ? "শুধুমাত্র 3x টার্নওভার সহ 60,000 পর্যন্ত লাইভ ক্যাসিনোর জন্য ৫% সাপ্তাহিক ক্যাশব্যাক"
              : "Get 5% weekly cashback up to 60,000 with only 3x turnover for Live Casino",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "5 D 3 H",
          details: true,
          apply: false,
        },
      ],
    },
    {
      id: 4,
      label: language === "bn" ? "স্লট" : "Slot",
      data: [
        {
          image: newimage2,
          title:
            language === "bn"
              ? "সুপার লিমিটেড অফার ৩৫০% স্বাগতম বোনাস"
              : "Super Limited Offer 350% Welcome Bonus",
          description:
            language === "bn"
              ? "এখনই নিন টিটো ৩৫০% বোনাস, সীমিত অফার"
              : "Get Tito 350% Bonus Now, Limited Offer",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: language === "bn" ? "332 D 6 H এ শেষ হবে" : "Ends in 332 D 6 H",
          details: false,
          apply: true,
        },
        {
          image: image4,
          title:
            language === "bn"
              ? "টুর্নামেন্ট স্লট Jili x Tito ৳৯,৯৯,৯৯৯"
              : "Tournament Slot Jili x Tito ৳9,99,999",
          description:
            language === "bn"
              ? "টুর্নামেন্টে অংশগ্রহণ করুন এবং সমস্ত পুরস্কার জিতে নিন ৳৯,৯৯,৯৯৯"
              : "Join the tournament and win all prizes of ৳9,99,999",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: language === "bn" ? "332 D 6 H এ শেষ হবে" : "Ends in 332 D 6 H",
          details: false,
          apply: true,
        },
        {
          image: newimage6,
          title:
            language === "bn"
              ? "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০"
              : "Free Birthday Bonus ৳2,000",
          description:
            language === "bn"
              ? "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন"
              : "Make your special day a big win",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: language === "bn" ? "2158 D 6 H এ শেষ হবে" : "Ends in 2158 D 6 H",
          details: false,
          apply: true,
        },
        {
          image: image8,
          title:
            language === "bn"
              ? "স্লট 100% স্বাগতম বোনাস ৳18,000 পর্যন্ত"
              : "Slot 100% Welcome Bonus up to ৳18,000",
          description:
            language === "bn"
              ? "৳18,000 পর্যন্ত ওয়েলকাম বোনাস পান"
              : "Get a welcome bonus up to ৳18,000",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: language === "bn" ? "332 D 6 H এ শেষ হবে" : "Ends in 332 D 6 H",
          details: false,
          apply: true,
        },
        {
          image: image10,
          title:
            language === "bn"
              ? "স্লট 10% আনলিমিটেড ডিপোজিট বোনাস"
              : "Slot 10% Unlimited Deposit Bonus",
          description:
            language === "bn"
              ? "সীমাহীন বোনাস দাবি উপভোগ করুন এবং প্রতিবার জমা করার সময় স্লটের জন্য"
              : "Enjoy unlimited bonus claims every time you deposit for slots",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: language === "bn" ? "332 D 6 H এ শেষ হবে" : "Ends in 332 D 6 H",
          details: false,
          apply: true,
        },
        {
          image: image12,
          title:
            language === "bn"
              ? "20% সাপ্তাহিক রিলোড বোনাস ৳25,000 পর্যন্ত"
              : "20% Weekly Reload Bonus up to ৳25,000",
          description:
            language === "bn"
              ? "আপনার সমস্ত প্রিয় স্লট গেমগুলির জন্য সপ্তাহের প্রথম জমাতে ৳25,000 পর্যন্ত বোনাস পান"
              : "Get up to ৳25,000 bonus on your first weekly deposit for all your favorite slot games",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: language === "bn" ? "332 D 6 H এ শেষ হবে" : "Ends in 332 D 6 H",
          details: false,
          apply: true,
        },
        {
          image: image16,
          title:
            language === "bn"
              ? "স্লট 5% সাপ্তাহিক ক্যাশব্যাক"
              : "Slot 5% Weekly Cashback",
          description:
            language === "bn"
              ? "মাত্র 3x টার্নওভার সহ ৳60,000 পর্যন্ত স্লটের জন্য 5% সাপ্তাহিক ক্যাশব্যাক উপভোগ করুন"
              : "Enjoy 5% weekly cashback up to ৳60,000 for slots with just 3x turnover",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: language === "bn" ? "332 D 6 H এ শেষ হবে" : "Ends in 332 D 6 H",
          details: false,
          apply: true,
        },
      ],
    },
    { id: 5, label: language === "bn" ? "টেবিল গেম" : "Table Game", data: [] },
    { id: 6, label: language === "bn" ? "লটারি" : "Lottery", data: [] },
    { id: 7, label: language === "bn" ? "VIP" : "VIP", data: [] },
    { id: 8, label: language === "bn" ? "ক্র্যাশ" : "Crash", data: [] }
  ],[language]);
  useEffect(() => {
    const selectedTab = tabData.find((tab) => tab.id === activeTab);
    setPromotions(selectedTab?.data || []);
  }, [activeTab,tabData, language]);

  return (
    <div className="w-full py-4">
      {/* Tabs */}
      <Tabs
        tabData={tabData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* TabsContents */}
      <TabsContents language={language} promotions={promotions} />
    </div>
  );
};

export default Promotion;
