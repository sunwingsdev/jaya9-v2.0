import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../Context/LanguageContext";

const SidebarTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const location = useLocation();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const tabFromHash = location.hash.replace("#", "");
    if (tabFromHash) {
      setActiveTab(tabFromHash);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const tabs = [
    {
      id: "tab1",
      label:
        language === "en"
          ? "Frequently Asked Questions"
          : "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl text-center border-b-4 border-common-blue font-semibold text-common-blue">
            {language === "en"
              ? "Frequently Asked Questions"
              : "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী"}
          </h2>
          <div className="text-sm space-y-5">
            <p className="text-black leading-relaxed">
              {language === "en"
                ? "Frequently Asked Questions"
                : "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী"}
            </p>

            <p className="text-black underline leading-relaxed">
              {language === "en" ? "Age Requirement" : "বয়সের প্রয়োজনীয়তা"}
            </p>
            <p className="text-black leading-relaxed">
              {language === "en"
                ? "Customers must be at least 18 years old and agree to the company's terms."
                : "JAYA9-এর গ্রাহকদের অবশ্যই 18 বছর বা তার বেশি বয়সী হতে হবে এবং কোম্পানির শর্তাবলী মেনে চলতে সম্মত হতে হবে।"}
            </p>

            <p className="text-black underline leading-relaxed">
              {language === "en"
                ? "Forgot Username or Password?"
                : "আপনার ব্যবহারকারী নাম বা পাসওয়ার্ড ভুলে গেছেন?"}
            </p>
            <p className="text-black leading-relaxed">
              {language === "en"
                ? "Customers can click 'Forgot Password' to contact online customer service. After verification, a solution will be provided."
                : "গ্রাহকরা স্বয়ংক্রিয়ভাবে 'পাসওয়ার্ড ভুলে গেছেন' ক্লিক করে অনলাইন গ্রাহক পরিষেবার সাথে লিঙ্ক করতে পারেন। ২৪-ঘন্টা অনলাইন গ্রাহক পরিষেবা পেশাদার যাচাইকরণ পরিকল্পনা পাস করার পরে আপনাকে একটি সমাধান প্রদান করবে।"}
            </p>

            <p className="text-black underline leading-relaxed">
              {language === "en" ? "Deposit Steps" : "জমা করার পদক্ষেপ"}
            </p>
            <p className="text-black leading-relaxed">
              {language === "en"
                ? `1. Click "Deposit" on the top right of the homepage.
                   2. Enter the amount you want to deposit and click "Select Channel".
                   3. Choose a deposit channel based on your preference.
                   (Deposit limits depend on the selected payment channel.)`
                : `1. প্ল্যাটফর্ম আমানত পৃষ্ঠায় প্রবেশ করতে হোমপেজের উপরের ডানদিকে "আমানত" এ ক্লিক করুন।
                   2. আপনি যে পরিমাণ টাকা জমা করতে চান তা প্রবেশ করার পর ডানদিকে "চ্যানেল নির্বাচন করুন" ক্লিক করুন।
                   3. আপনি ডিপোজিট চ্যানেল নিচে ক্লিক করতে পারেন।
                   (রিচার্জের উপরের এবং নিচের সীমা পেমেন্ট চ্যানেলের সাপেক্ষে)`}
            </p>

            <p className="text-black underline leading-relaxed">
              {language === "en"
                ? "How to Withdraw Money"
                : "কিভাবে টাকা তোলা যায়"}
            </p>
            <p className="text-black leading-relaxed">
              {language === "en"
                ? `Click "Withdraw" on the homepage, enter your withdrawal password and amount, and confirm. 
                   First-time withdrawals require linking a bank card. 
                   Minimum withdrawal per transaction is ৳800, and the daily limit is ৳30,000.`
                : `হোম-পৃষ্ঠার উপরের ডানদিকে 'প্রত্যাহার করুন' এ ক্লিক করুন, আপনার তোলার পাসওয়ার্ড এবং আপনি যে পরিমাণ প্রত্যাহার করতে চান তা লিখুন, তারপর 'আপনার আবেদন' এ ক্লিক করুন।
                   প্রথম প্রত্যাহারের জন্য, প্রত্যাহার ব্যাঙ্ক কার্ডটি ব্যাঙ্ক কার্ড বার্তার সাথে আবদ্ধ করুন।
                   প্রতি লেনদেন প্রত্যাহারের সীমা হল ৳800 এবং প্রতিদিন তোলার সীমা হল ৳30,000।`}
            </p>

            <p className="text-black underline leading-relaxed">
              {language === "en"
                ? "Personal Data Security"
                : "ব্যক্তিগত তথ্য নিরাপত্তা"}
            </p>
            <p className="text-black leading-relaxed">
              {language === "en"
                ? "The company guarantees that your personal information will not be shared with third parties. Your data remains secure and confidential."
                : "কোম্পানি গ্যারান্টি দেয় যে আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের সাথে শেয়ার করা হবে না। এছাড়াও আমরা আপনার ব্যক্তিগত তথ্যের নিরাপত্তার নিশ্চয়তা দিই এবং আপনার তথ্য শুধুমাত্র আমাদের কাছে সীমাবদ্ধ করি।"}
            </p>

            <p className="text-black underline leading-relaxed">
              {language === "en" ? "Central Wallet" : "কেন্দ্রীয় ওয়ালেট"}
            </p>
            <p className="text-black leading-relaxed">
              {language === "en"
                ? "All deposits and bonuses are stored in a single central wallet, which you can use for transactions."
                : "সমস্ত আমানত এবং বোনাস একটি একক কেন্দ্রীয় ওয়ালেটে (মানিব্যাগ) জমা করা হয় এবং আপনি বাজি রাখতে পারেন।"}
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "tab2",
      label: language === "en" ? "About Us" : "আমাদের সম্পর্কে",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl text-center border-b-4 border-common-blue font-semibold text-common-blue">
            {language === "en" ? "About Us" : "আমাদের সম্পর্কে"}
          </h2>
          <div className="space-y-4 text-sm">
            <p className="text-black underline leading-relaxed">
              {language === "en" ? "About Us" : "আমাদের সম্পর্কে"}
            </p>
            <p className="text-black leading-relaxed">
              {language === "en"
                ? "JAYA9 is an online entertainment brand and a leading specialist in cricket exchange platforms. Cricket has always been a game of numbers, and JAYA9 stands by its ability to provide extraordinary enjoyment and gaming through cricket betting for our customers. JAYA9 has a long-term ambition to become the world's most popular digital sports betting platform. We will continue to lead the way in making cricket more competitive, entertaining, and engaging for players and enthusiasts alike."
                : "JAYA9 একটি অনলাইন বিনোদন ব্র্যান্ড এবং ক্রিকেট এক্সচেঞ্জ প্ল্যাটফর্মের শীর্ষস্থানীয় বিশেষজ্ঞ। ক্রিকেট সবসময়ই সংখ্যার খেলা, এবং JAYA9 আমাদের গ্রাহকদের জন্য ক্রিকেট বেটিংয়ের মাধ্যমে অসাধারণ আনন্দ এবং গেমিং অভিজ্ঞতা দেওয়ার জন্য প্রতিশ্রুতিবদ্ধ। JAYA9-এর দীর্ঘমেয়াদী লক্ষ্য হল বিশ্বের সবচেয়ে জনপ্রিয় ডিজিটাল স্পোর্টস বেটিং প্ল্যাটফর্ম হয়ে ওঠা। আমরা ক্রিকেটকে আরও প্রতিযোগিতামূলক, বিনোদনমূলক এবং আকর্ষণীয় করে তোলার ক্ষেত্রে নেতৃত্ব দিতে থাকব।"}
            </p>

            <p className="text-black underline leading-relaxed">
              {language === "en" ? "Diverse Products" : "বৈচিত্র্যময় পণ্য"}
            </p>
            <p className="text-black leading-relaxed">
              {language === "en"
                ? "JAYA9 has earned a reputation as the most distinctive and remarkable online entertainment brand, offering gamers a wide range of state-of-the-art online entertainment platforms. No matter what games you prefer, you will find them on an advanced platform featuring stunning visuals, animations, gameplay, adjustable playback speed, performance effects, and sound effects, along with the opportunity to win massive cash prizes."
                : "JAYA9 সবচেয়ে স্বতন্ত্র এবং উল্লেখযোগ্য অনলাইন বিনোদন ব্র্যান্ড হিসাবে খ্যাতি অর্জন করেছে, যা গেমারদের অত্যাধুনিক অনলাইন বিনোদন প্ল্যাটফর্মের বিস্তৃত পরিসর সরবরাহ করে। আপনি যে গেমই পছন্দ করুন না কেন, উন্নত প্ল্যাটফর্মে অত্যাশ্চর্য ভিজ্যুয়াল, অ্যানিমেশন, গেমপ্লে, সমন্বিত প্লেব্যাক স্পিড, পারফরম্যান্স এফেক্ট এবং সাউন্ড এফেক্টসহ বিশাল নগদ পুরস্কার জয়ের সুযোগ পাবেন।"}
            </p>

            <p className="text-black underline leading-relaxed">
              {language === "en"
                ? "Excellent Customer Service"
                : "চমৎকার গ্রাহক সেবা"}
            </p>
            <p className="text-black leading-relaxed">
              {language === "en"
                ? "Our customer service department provides uninterrupted service 24 hours a day, 7 days a week - responding to and resolving your queries as quickly, politely, and efficiently as possible."
                : "আমাদের গ্রাহক পরিষেবা বিভাগ সপ্তাহের ৭ দিন, ২৪ ঘণ্টা নিরবচ্ছিন্ন পরিষেবা প্রদান করে - যত দ্রুত সম্ভব, বিনয়ের সাথে এবং দক্ষতার সাথে আপনার প্রশ্নগুলোর উত্তর দেয় এবং সমস্যা সমাধান করে।"}
            </p>

            <p className="text-black underline leading-relaxed">
              {language === "en"
                ? "Fraud & Security"
                : "জালিয়াতি এবং নিরাপত্তা"}
            </p>
            <p className="text-black leading-relaxed">
              {language === "en"
                ? "Each player can open only one account, and we maintain system integrity and fairness through stringent security controls. If we detect any fraudulent activity, we will close the player's account. According to our terms and conditions, any fraudulently acquired money will be retained by the company."
                : "প্রতিটি খেলোয়াড় শুধুমাত্র একটি অ্যাকাউন্ট খুলতে পারেন, এবং আমরা কঠোর নিরাপত্তা নিয়ন্ত্রণের মাধ্যমে সিস্টেমের সততা এবং ন্যায্যতা বজায় রাখি। যদি আমরা কোনো জালিয়াতির কার্যকলাপ শনাক্ত করি, তাহলে আমরা সেই খেলোয়াড়ের অ্যাকাউন্ট বন্ধ করে দেব। আমাদের শর্তাবলী অনুসারে, কোনো জালিয়াতির মাধ্যমে অর্জিত অর্থ কোম্পানির দ্বারা সংরক্ষিত হবে।"}
            </p>

            <p className="text-black underline leading-relaxed">
              {language === "en" ? "Responsible Gaming" : "দায়িত্বশীল গেমিং"}
            </p>
            <p className="text-black leading-relaxed">
              {language === "en"
                ? "JAYA9 is committed to responsible gaming. We recognize that our customers enjoy betting experiences with us, but we also acknowledge that, at times, a small number of players may develop problematic betting behaviors. In such cases, we encourage these customers to notify us as soon as they recognize the issue so that we can provide realistic assistance and suspend their betting accounts if necessary."
                : "JAYA9 দায়িত্বশীল গেমিং নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ। আমরা বুঝতে পারি যে আমাদের গ্রাহকরা আমাদের সাথে বেটিংয়ের অভিজ্ঞতা উপভোগ করেন, তবে আমরা এটাও স্বীকার করি যে কিছু খেলোয়াড় সময়ে সময়ে সমস্যাযুক্ত বেটিং আচরণ গড়ে তুলতে পারেন। এই ধরনের ক্ষেত্রে, আমরা এই গ্রাহকদের অনুরোধ করি যেন তারা যত দ্রুত সম্ভব আমাদের অবহিত করেন, যাতে আমরা বাস্তবসম্মত সহায়তা দিতে পারি এবং প্রয়োজন হলে তাদের বেটিং অ্যাকাউন্ট স্থগিত করতে পারি।"}
            </p>
          </div>
        </div>
      ),
    },

    {
      id: "tab3",
      label: language === "en" ? "Contact Us" : "যোগাযোগ করুন",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl text-center border-b-4 border-common-blue font-semibold text-common-blue">
            {language === "en" ? "Contact Us" : "যোগাযোগ করুন"}
          </h2>
          <div className="text-sm font-bold space-y-4">
            <h2 className="font-bold text-black">
              {language === "en" ? "Contact Us" : "যোগাযোগ করুন"}
            </h2>
            <p className="text-black">
              <span className="underline">
                {language === "en" ? "Phone" : "ফোন"}:
              </span>{" "}
              <br /> +33756757364 (WhatsApp)
            </p>
            <p className="text-black">
              <span className="underline">
                {language === "en" ? "Email" : "ইমেইল"}:
              </span>{" "}
              <br /> support@oraclesoft.org
            </p>
            <p className="text-black">
              <span className="underline">
                {language === "en" ? "Address" : "ঠিকানা"}:
              </span>{" "}
              <br /> SkyCasino Level 1 Genting Highlands, Malaysia
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "tab4",
      label: language === "en" ? "Terms & Conditions" : "শর্তাবলী",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl text-center border-b-4 border-common-blue font-semibold text-common-blue">
            {language === "en" ? "Terms & Conditions" : "শর্তাবলী"}
          </h2>
          <div className="text-sm">
            <p className="text-black leading-relaxed">
              {language === "en"
                ? "This webpage contains information explaining your rights regarding access and usage of the company’s website. The terms and conditions related to the games and promotions available on the site are published from time to time and are incorporated here by reference."
                : "এই ওয়েবপৃষ্ঠায় এমন তথ্য রয়েছে যা কোম্পানির ওয়েবসাইটে অ্যাক্সেস এবং ব্যবহারের ক্ষেত্রে আপনার অধিকারগুলি ব্যাখ্যা করে। সাইটে উপলব্ধ গেম এবং প্রচার সম্পর্কিত শর্তাদি এবং শর্তাবলী সময়ে সময়ে প্রকাশিত হয়, যা রেফারেন্স ব্যবহার করার সাহায্যে এখানে অন্তর্ভুক্ত করা হয়।"}
            </p>
            <p className="text-black leading-relaxed">
              {language === "en" ? "1. Definition" : "১. সংজ্ঞা"}
              <br /> <br />
            </p>
            <p className="text-black pl-3 leading-relaxed">
              {language === "en"
                ? `1.1 The following provisions outline the phrases and conditions 
       governing your admission and participation in any "Play for Real" 
       services provided by the company, collectively referred to as 
       "The Company," "We," "Us," or "Our." These provisions are intended 
       to be studied in conjunction with the "Betting Rules," "Privacy Policy," 
       and other terms and conditions governing the use of the services and 
       website(s) and their included information (collectively, these "Terms").`
                : `১.১ নিম্নলিখিত বিধানগুলি বাক্যাংশ এবং পরিস্থিতিগুলির রূপরেখা দেয় 
       যা আপনার ভর্তি এবং কোম্পানির দ্বারা সরবরাহিত কোনও "বাস্তবের 
       জন্য খেলুন" পরিষেবাগুলিতে অংশগ্রহণকে নিয়ন্ত্রণ করে বা 
       সম্মিলিতভাবে "দ্য কোম্পানি", "আমরা", "আমাদের" 
       বা "আমাদের" হিসাবে উল্লেখ করা হয়। এই বিধানগুলি "বেটিং বিধি", 
       "গোপনীয়তা নীতি" এবং পরিষেবাগুলি এবং ওয়েবসাইট (গুলি) 
       এবং এর অন্তর্ভুক্ত তথ্য (সম্মিলিতভাবে এই "শর্তাবলী") এর ব্যবহার 
       নিয়ন্ত্রণকারী অন্যান্য শর্তাবলী এবং শর্তাবলী) এর সাথে একত্রে 
       অধ্যয়ন করার জন্য বোঝানো হয়।`}
              <br /> <br />
              {language === "en"
                ? `1.2 "Games" refers to accessing the Internet gaming system and/or 
       services provided on the website(s). The terms "Bet" or "Wager(s)" 
       used in these terms include, without limitation, all services related 
       to wagering, gaming, and gambling provided on the website(s); 
       "Devices" refer to any application-accessing devices, including, 
       but not limited to, personal computers, laptops, mobile phones, 
       PDAs, and handheld devices; "Software" means any computer program, 
       data file, or other content required to enable access to the website(s) 
       and services; "Sportsbook" refers to the online gaming system accessible 
       within the website section, including all related services; "Services" 
       collectively refer to the software and games.`
                : `"১.২ "গেমস" অর্থ ইন্টারনেট গেমিং সিস্টেম অ্যাক্সেস করা 
       এবং / অথবা ওয়েবসাইটে সরবরাহ করা হয়। ব্যবহারের এই শর্তাবলীতে 
       ব্যবহৃত "পণ" বা "বাজি (গুলি)" এর মধ্যে সীমাবদ্ধতা ছাড়াই, 
       ওয়েচারিং, গেমিং এবং জুয়া খেলাওয়েব (গুলি) এ 
       প্রদত্ত যে কোনও এবং / অথবা সমস্ত পরিষেবা (গুলি) এর সাথে সম্পর্কিত; 
       "ডিভাইস (গুলি)" অর্থ যে কোনও অ্যাপ্লিকেশন অ্যাক্সেসিং ডিভাইস, 
       ব্যক্তিগত কম্পিউটার, ল্যাপটপ, মোবাইল ফোন, ব্যক্তিগত ডিজিটাল সহকারী, 
       পিডিএ ফোন, ওয়েবসাইট (গুলি) এবং পরিষেবাদির জন্য ব্যবহৃত 
       হ্যান্ড-হেল্ড ডিভাইসগুলি; "সফ্টওয়্যার" অর্থ যে কোনও কম্পিউটার 
       প্রোগ্রাম, ডেটা ফাইল বা অন্যান্য সামগ্রী যা আপনাকে ওয়েবসাইট (গুলি) 
       এবং পরিষেবাদি ব্যবহার এবং অ্যাক্সেস করতে সক্ষম করার জন্য ডিভাইসে 
       ইনস্টল করা আবশ্যক; "স্পোর্টসবুক" অর্থ অনলাইন গেমিং সিস্টেম 
       অ্যাক্সেসযোগ্য এবং / অথবা সাইট বিভাগে এবং সমস্ত সম্পর্কিত পরিষেবা 
       এবং অনলাইন গেমিং অপারেশনগুলিতে দেওয়া হয়; "পরিষেবা" মানে 
       সফ্টওয়্যার এবং গেমস একসাথে।`}
              <br /> <br />
            </p>

            <p className="text-black leading-relaxed">
              {language === "en" ? "2. Site Usage" : "২. সাইটের ব্যবহার"}
              <br /> <br />
            </p>

            <p className="text-black pl-3 leading-relaxed">
              {language === "en"
                ? `2.1 You can only play money games if you:`
                : `২.১ আপনি শুধুমাত্র অর্থের গেম খেলতে পারেন যদি আপনি:`}
              <br />
              i.{" "}
              {language === "en"
                ? "Are 18 years or older;"
                : "১৮ বছর বা তার বেশি বয়সী;"}{" "}
              <br />
              ii.{" "}
              {language === "en"
                ? "Are legally allowed to play games in any country where you access our website."
                : "যে বয়সে আপনি আইনত যে কোনও দেশে গেমস খেলতে পারবেন যেখানে আপনি আমাদের ওয়েবসাইটে যান"}
              <br /> <br />
              {language === "en"
                ? `2.2 If you are ineligible, the company reserves the right to:`
                : `২.২ আপনি যদি যোগ্য না হন তবে কোম্পানি নিম্নলিখিত অধিকারগুলি সংরক্ষণ করে:`}
              <br />
              i.{" "}
              {language === "en"
                ? "Immediately block your participation in games and withdraw your account."
                : "অবিলম্বে গেমসে আপনার অংশগ্রহণ ব্লক করুন এবং আপনার অ্যাকাউন্ট প্রত্যাহার করুন"}
              <br />
              ii.{" "}
              {language === "en"
                ? "Report to the relevant authorities."
                : "সংশ্লিষ্ট কর্তৃপক্ষের কাছে রিপোর্ট করুন"}
              <br /> <br />
              {language === "en"
                ? `2.3 By clicking the appropriate "Join and Register" button during registration, you acknowledge and accept:`
                : `২.৩ নিবন্ধনের সময় উপযুক্ত "যোগদান এবং নিবন্ধন করুন" বোতামটি ক্লিক করে, আপনি নিম্নলিখিতগুলি স্বীকার করেন এবং গ্রহণ করেন:`}
              <br />
              i.{" "}
              {language === "en"
                ? "You are at least 18 years old;"
                : "আপনার বয়স কমপক্ষে ১৮ বছর;"}
              <br />
              ii.{" "}
              {language === "en"
                ? "You have read, fully understood, and agreed to these terms and conditions;"
                : "আপনি এই বিধি ও শর্তাবলী পড়েছেন, সম্পূর্ণরূপে বুঝতে পেরেছেন এবং সম্মত হয়েছেন;"}
              <br />
              iii.{" "}
              {language === "en"
                ? "These terms and conditions form a legally binding agreement ('Agreement') between you and the company."
                : "এই শর্তাদি এবং শর্তাবলী পরিষেবাগুলির ব্যবহার সম্পর্কিত আপনার এবং কোম্পানির মধ্যে একটি আইনত বাধ্যতামূলক চুক্তি ('চুক্তি') গঠন করে।"}
              <br /> <br />
            </p>

            <p className="text-black leading-relaxed">
              {language === "en" ? "3. Changes" : "৩. পরিবর্তন"}
              <br /> <br />
            </p>

            <p className="text-black pl-3 leading-relaxed">
              {language === "en"
                ? `3.1 We reserve the right to modify, update, and amend these terms at our sole discretion without prior notice. 
       The revised, updated, or amended terms will become effective immediately upon posting on the website(s). 
       Your continued use, access, and participation in our services through our website(s) and devices after such posting 
       constitute your acceptance of the modified or updated terms.`
                : `৩.১ আমরা আমাদের নিজস্ব বিবেচনার ভিত্তিতে, পূর্ব বিজ্ঞপ্তি ছাড়াই এই শর্তাদি সংশোধন, আপডেট এবং সংশোধন করার অধিকার সংরক্ষণ করি। 
       সংশোধিত, আপডেট বা সংশোধিত শর্তাবলী ওয়েবসাইট (গুলি) এ পোস্ট করার সাথে সাথেই কার্যকর হবে। 
       এই ধরনের পোস্টিং অনুসরণ করে আমাদের ওয়েবসাইট (গুলি) এবং ডিভাইস (গুলি) এর মাধ্যমে বা তার মাধ্যমে পরিষেবাগুলিতে আপনার অবিরত ব্যবহার, 
       অ্যাক্সেস এবং অংশগ্রহণ পরিবর্তিত বা আপডেট করা শর্তাবলীর আপনার গ্রহণযোগ্যতা গঠন করে।`}
              <br /> <br />
              {language === "en"
                ? `3.2 You acknowledge and agree that it is your sole responsibility to review modifications, updates, and/or amendments. 
       The company has no obligation to notify you of such changes.`
                : `৩.২ আপনি স্বীকার করেন এবং সম্মত হন যে সংশোধন, আপডেট এবং / অথবা সংশোধনগুলির জন্য পরীক্ষা করা আপনার একমাত্র দায়িত্ব। 
       কোম্পানি আপনাকে এই ধরনের সংশোধনী, আপডেট এবং / অথবা সংশোধন সম্পর্কে অবহিত করার জন্য কোন বাধ্যবাধকতা গ্রহণ করে না।`}
              <br /> <br />
            </p>

            <p className="text-black leading-relaxed">
              {language === "en"
                ? "4. Intellectual Property"
                : "৪. বৌদ্ধিক সম্পত্তি"}
              <br /> <br />
            </p>

            <p className="text-black pl-3 leading-relaxed">
              {language === "en"
                ? `4.1 The website(s), services, and information available to you, including marketing materials, results, statistics, 
       sports data, odds, and betting statistics, are owned by the company and are for personal and non-commercial use only.`
                : `৪.১ ওয়েবসাইট (গুলি), পরিষেবাদি এবং / অথবা অন্যান্য ফর্ম্যাটে আপনার কাছে উপলব্ধ তথ্য, উপকরণ এবং ডেটা সরবরাহ করা হয়েছে 
       বা উপলব্ধ করা হয়েছে, যার মধ্যে রয়েছে বিপণন প্রোগ্রাম এবং উপকরণ, ফলাফল, পরিসংখ্যান, ক্রীড়া তথ্য এবং ক্রীড়ানুষ্ঠান তালিকা, 
       মতভেদ এবং বেটিং পরিসংখ্যান, পাঠ্য, গ্রাফিক্স, ভিডিও এবং অডিও সামগ্রী, যা শুধুমাত্র ব্যক্তিগত এবং অ-বাণিজ্যিক উদ্দেশ্যে ব্যবহার করা হয়।`}
              <br /> <br />
              {language === "en"
                ? `4.2 You may not copy, modify, reproduce, store, distribute, display, publish, transmit, sell, lease, or license any 
       of the provided information without prior consent.`
                : `৪.২ আপনি কোনও উপায়ে বা কোনও উপায়ে আমাদের পূর্ব সম্মতি ছাড়াই অন্য কোনও ব্যক্তি, ওয়েবসাইট বা মিডিয়াতে তথ্য উপলব্ধ করতে, 
       অনুলিপি, সংশোধন, পুনরুত্পাদন, সঞ্চয়, বিতরণ, প্রদর্শন, প্রকাশ, প্রেরণ, বিক্রয়, ভাড়া, লিজ বা লাইসেন্স করতে পারবেন না।`}
              <br /> <br />
              {language === "en"
                ? `4.3 The software, services, and information on the website(s) are protected by copyright, trademarks, 
       and intellectual property laws. You do not acquire any rights or licenses by using the website(s).`
                : `৪.৩ সফ্টওয়্যার, পরিষেবাদি এবং ওয়েবসাইট (গুলি) এ প্রদত্ত তথ্য কপিরাইট, ট্রেডমার্ক এবং বুদ্ধিবৃত্তিক ও মালিকানাধীন অধিকারগুলির 
       অন্যান্য ফর্ম দ্বারা সুরক্ষিত। আপনি স্বীকার করেন যে আপনি আপনার ওয়েবসাইট (গুলি) ব্যবহারের মাধ্যমে সফ্টওয়্যার, পরিষেবাদি 
       এবং তথ্যের কোনও অধিকার, আগ্রহ বা লাইসেন্স অর্জন করেন না।`}
              <br /> <br />
            </p>

            <p className="text-black leading-relaxed">
              {language === "en" ? "5. Terms of Use" : "৫. ব্যবহারের শর্তাবলী"}
              <br /> <br />
            </p>

            <p className="text-black pl-3 leading-relaxed">
              {language === "en"
                ? `As a condition of using the services, you warrant and undertake that you will not use or access the website(s), services, software, and/or any information for any purpose that is unlawful or prohibited under any applicable law or these terms and conditions. Specifically (and in addition to all other representations and warranties described in these terms and conditions), as a condition of your use of the services, you warrant and undertake:  
      i. You are acting on your own behalf and on an individual basis and not on behalf of others;  
      ii. That you are not restricted by limited legal capacity;  
      iii. That you are not classified or determined as a gambler;  
      iv. You are legally 18 years old or older;  
      v. You are fully aware of the risk of losing money related to using the services;  
      vi. You will not use or deposit funds obtained from illegal or unauthorized activities;  
      vii. You are not engaged in criminal or illegal or unauthorized activities and/or do not intend to use your account with us for such activities;  
      viii. Under any applicable law for you or us, you will not allow others to use your account for criminal or other illegal activities, including but not limited to money laundering;  
      ix. You will ensure that your username, account number, and password are kept secure, safe, and protected from unauthorized access or use, and if you lose them, you will notify us immediately in case you forget or lose your account name or password;  
      x. You are solely responsible for all activities related to accessing and using the services via the website(s) and/or device(s) under your username, account number, and password, regardless of whether such access and/or use is authorized or known to you;  
      xi. You will not use the website(s), device(s), software, or information in a way that interferes with the operational performance of the service(s) and website(s) for other users;  
      xii. You will not solicit or seek information related to other users in any way;  
      xiii. You will not upload or distribute any program, file, or data containing viruses that may affect the performance of the device(s), software, services, and/or website(s).`
                : `পরিষেবাগুলির ব্যবহারের শর্ত হিসাবে, আপনি নিশ্চয়তা দেন এবং
      প্রতিশ্রুতি দেন যে আপনি ওয়েবসাইট (গুলি), পরিষেবা, সফ্টওয়্যার এবং
      / অথবা এমন কোনও উদ্দেশ্যে তথ্য ব্যবহার বা অ্যাক্সেস করবেন না যা
      আপনার জন্য প্রযোজ্য যে কোনও আইনের অধীনে বেআইনী বা এই বিধি ও
      শর্তাবলী লঙ্ঘন করে নিষিদ্ধ। বিশেষ করে (এবং এই বিধি ও শর্তাবলীতে
      বর্ণিত অন্যান্য সমস্ত উপস্থাপনা এবং ওয়ারেন্টি ছাড়াও), আপনি আপনার
      পরিষেবাগুলির ব্যবহারের শর্ত হিসাবে ওয়ারেন্ট এবং গ্রহণ করেন:  
      i. আপনি আপনার নিজের পক্ষে এবং একটি পৃথক ভিত্তিতে কাজ করছেন এবং
      অন্যের পক্ষে নয়;  
      ii. যে আপনি সীমিত আইনি ক্ষমতা দ্বারা সীমাবদ্ধ নয়;  
      iii. যে আপনি একটি জুয়াড়ি হিসাবে নির্ণয় বা শ্রেণীবদ্ধ করা হয়
      না;  
      iv. আপনি আইনত 18 বছর বা তার বেশি বয়সী;  
      v. পরিষেবাগুলি ব্যবহার করার সাথে সম্পর্কিত অর্থ হারানোর ঝুঁকি
      সম্পর্কে আপনি সম্পূর্ণরূপে সচেতন;  
      vi. আপনি অবৈধ বা অননুমোদিত ক্রিয়াকলাপ থেকে প্রাপ্ত তহবিল ব্যবহার
      বা জমা করবেন না;  
      vii. আপনি অপরাধমূলক বা অবৈধ বা অননুমোদিত ক্রিয়াকলাপে জড়িত নন এবং
      / অথবা এই ধরনের ক্রিয়াকলাপের সাথে সম্পর্কিত আমাদের সাথে আপনার
      অ্যাকাউন্ট ব্যবহার করতে ইচ্ছুক নন;  
      viii. আপনার বা আমাদের জন্য প্রযোজ্য যে কোন আইনের অধীনে, আপনি
      অন্যদেরকে অপরাধমূলক বা অন্যান্য অবৈধ ক্রিয়াকলাপের জন্য আপনার
      অ্যাকাউন্ট ব্যবহার করার অনুমতি দেবেন না, যার মধ্যে রয়েছে তবে অর্থ
      পাচারের মধ্যে সীমাবদ্ধ নয়;  
      ix. আপনার ব্যবহারকারীর নাম, অ্যাকাউন্ট নম্বর এবং পাসওয়ার্ড
      নিরাপদ, নিরাপদ এবং অননুমোদিত অ্যাক্সেস বা ব্যবহার থেকে সুরক্ষিত
      রাখতে এবং আপনি যদি এটি হারিয়ে ফেলেন তবে আপনি অবিলম্বে আমাদের
      অবহিত করেন তা নিশ্চিত করার জন্য, আপনার অ্যাকাউন্টের নাম বা
      পাসওয়ার্ড ভুলে যান বা হারান;  
      x. আপনার ব্যবহারকারীর নাম, অ্যাকাউন্ট নম্বর এবং পাসওয়ার্ডের অধীনে
      ওয়েবসাইট (গুলি) এবং / অথবা ডিভাইস (গুলি) এর মাধ্যমে পরিষেবাগুলিতে
      অ্যাক্সেস এবং ব্যবহারের সাথে সম্পর্কিত সমস্ত ক্রিয়াকলাপের জন্য
      একমাত্র দায়বদ্ধ, এই ধরনের অ্যাক্সেস এবং / অথবা ব্যবহার আপনার কাছে
      অনুমোদিত বা পরিচিত কিনা তা নির্বিশেষে;  
      xi. ওয়েবসাইট (গুলি), ডিভাইস (গুলি), সফ্টওয়্যার বা তথ্য এমনভাবে
      ব্যবহার না করা যা অন্যান্য ব্যবহারকারীদের জন্য পরিষেবা (গুলি) এবং
      ওয়েবসাইট (গুলি) এর কার্যকরী কর্মক্ষমতাতে হস্তক্ষেপ করে;  
      xii. অন্যান্য ব্যবহারকারীদের সাথে সম্পর্কিত তথ্য পাওয়ার জন্য কোনও
      উপায়ে অনুরোধ বা সন্ধান করবেন না;  
      xiii. ভাইরাস ধারণকারী কোনও প্রোগ্রাম, ফাইল বা ডেটা আপলোড বা বিতরণ
      করতে পারে না এবং ডিভাইস (গুলি), সফ্টওয়্যার, পরিষেবাদি এবং / অথবা
      সাইট (গুলি) এর কর্মক্ষমতাকে প্রভাবিত করতে পারে।`}
            </p>

            <p className="text-black leading-relaxed">
              {language === "en"
                ? "6. Registration and Membership"
                : "6. নিবন্ধন এবং সদস্যপদ"}
              <br /> <br />
            </p>
            <p className="text-black pl-3 leading-relaxed">
              {language === "en"
                ? `6.1 To place a bet with the company, you must complete membership registration.
       We reserve the right to reject your membership application without reference or attribution.
       <br /> 
       6.2 You represent and warrant that all information provided at the time of registration is accurate, 
       true, and complete in all respects, including your name, source of funds (including relevant bank account and card numbers), and residential address.
       <br />
       6.3 We will take reasonable and appropriate steps to ensure that any personal information disclosed to us remains confidential. 
       We will not disclose or report your personal data or betting information unless required by applicable laws and regulations.
       <br />
       6.4 It is solely your responsibility to keep your personal information confidential. 
       We reserve the right to disclose and transfer your personal information to our respective payment settlement service providers and financial institutions 
       to the extent necessary to complete payment transactions.
       <br />
       6.5 It is solely your responsibility to ensure that applicable laws do not prohibit you from using and accessing the website(s) and/or participating in the services.
       <br />
       6.6 We reserve the right to request further proof of identification and age verification from you to validate your membership application 
       (such as a valid photo identification). If any changes occur in your personal details, you must immediately notify us of the relevant changes.
       <br />
       6.7 We reserve the right to verify your name and address via postal means. 
       The company, at its sole discretion, may conduct additional security checks on any information you provide. 
       By agreeing to these terms and conditions, you consent to any identity verification or background checks that may be conducted against you.
       <br /><br />`
                : `6.1 কোম্পানির সাথে বাজি স্থাপন করতে, আপনাকে অবশ্যই সদস্যতা নিবন্ধন সম্পূর্ণ করতে হবে।
       আমরা আপনার সদস্যপদ আবেদন প্রত্যাখ্যান করার অধিকার সংরক্ষণ করি আপনার রেফারেন্স ছাড়াই বা কোনও কারণে অ্যাট্রিবিউশন ছাড়াই।
       <br />
       6.2 আপনি প্রতিনিধিত্ব করেন এবং অঙ্গীকার করেন যে নিবন্ধন সম্পন্ন করার সময় প্রদত্ত সমস্ত তথ্য সঠিক, 
       সত্য এবং সমস্ত ক্ষেত্রে সম্পূর্ণ, আপনার নাম, তহবিলের উত্স (প্রাসঙ্গিক ব্যাংক অ্যাকাউন্ট এবং কার্ড নম্বর সহ) এবং আপনার আবাসিক ঠিকানা সহ।
       <br />
       6.3 আমাদের কাছে প্রকাশিত কোনও ব্যক্তিগত তথ্য গোপন রাখা হয় তা নিশ্চিত করার জন্য আমরা যুক্তিসঙ্গত এবং উপযুক্ত পদক্ষেপ গ্রহণ করব।
       আমরা আপনার ব্যক্তিগত ডেটা বা বেটিং তথ্য রিপোর্ট বা প্রকাশ করব না যদি না আমাদের প্রযোজ্য আইন এবং প্রবিধান দ্বারা এটি করার প্রয়োজন হয়।
       <br />
       6.4 আপনার ব্যক্তিগত তথ্য গোপন রাখা আপনার একমাত্র দায়িত্ব।
       আমরা আপনার ব্যক্তিগত তথ্য প্রকাশ এবং আমাদের নিজ নিজ পেমেন্ট সেটেলমেন্ট পরিষেবা প্রদানকারী এবং আর্থিক প্রতিষ্ঠানগুলিতে অর্থ প্রদানের সমাপ্তির জন্য 
       প্রয়োজনীয় পরিমাণে প্রকাশ এবং স্থানান্তর করার অধিকার রাখি।
       <br />
       6.5 আপনার জন্য প্রযোজ্য আইনগুলি আপনাকে ওয়েবসাইট (গুলি) ব্যবহার এবং অ্যাক্সেস করতে এবং 
       / অথবা পরিষেবাগুলিতে ব্যবহার এবং অংশগ্রহণ করতে বাধা দেয় না তা নিশ্চিত করা আপনার একমাত্র দায়িত্ব।
       <br />
       6.6 আমরা আপনার সদস্যপদ আবেদন (যেমন বৈধ ছবি সনাক্তকরণ) যাচাই করার জন্য আপনার কাছ থেকে সনাক্তকরণ এবং বয়সের আরও প্রমাণের অনুরোধ করার অধিকার রাখি।
       যদি আপনার তথ্য বিবরণে কোনও পরিবর্তন হয় তবে আপনি অবিলম্বে প্রাসঙ্গিক পরিবর্তন সম্পর্কে আমাদের অবহিত করবেন।
       <br />
       6.7 আমরা পোস্টের মাধ্যমে আপনার নাম এবং ঠিকানা নিশ্চিত করার অধিকার রাখি।
       কোম্পানী, তার নিজস্ব বিবেচনার ভিত্তিতে, আপনার প্রদত্ত যে কোনও তথ্যের উপর অতিরিক্ত নিরাপত্তা পরীক্ষা করতে পারে।
       এই বিধি ও শর্তাবলীর সাথে সম্মত হয়ে, আপনি আপনার বিরুদ্ধে করা হতে পারে এমন কোনও পরিচয় যাচাইকরণ বা চেক, 
       অ্যাক্সেস, ব্যবহার এবং সংরক্ষণ করতে কোম্পানির সাথে সম্মত হন।
       <br /><br />`}
            </p>

            <p className="text-black leading-relaxed">
              {language === "en" ? "7. Bet Placement" : "7. বেট এর প্লেসমেন্ট"}
              <br /> <br />
            </p>
            <p className="text-black pl-3 leading-relaxed">
              {language === "en" ? (
                <>
                  7.1 We accept bets on games advertised through our website(s)
                  and/or device(s). All such bets are subject to the applicable
                  betting rules for each event or game, as well as these terms
                  and conditions. If any obvious error or mistake occurs, or if
                  an incorrect participant is quoted for an event, all bets
                  placed on that event will be void. In the case of any system
                  error, the company reserves the right to cancel any and all
                  bets.
                  <br /> <br />
                  7.2 Notwithstanding any other provision in these terms, the
                  company reserves the right to reject all or part of any bet
                  placed at our absolute discretion, without providing a reason.
                  <br /> <br />
                  7.3 We only accept bets placed via the Internet under these
                  terms and conditions. Bets placed by other means (post, email,
                  fax, etc.) will be deemed invalid.
                  <br /> <br />
                  7.4 The company reserves the right to suspend and/or close a
                  customer’s account if it is believed that they have violated
                  these terms, engaged in fraud, hacking, or other unfair
                  practices.
                  <br /> <br />
                  7.5 All forms of &quot abnormal betting, &quot including the
                  use of artificial intelligence or bots, will be invalid.
                  <br /> <br />
                  7.6 If your username and password are correctly entered and
                  your account has sufficient funds, bets will be validly
                  placed.
                  <br /> <br />
                  7.7 You are responsible for all transactions using:
                  <br /> i. Your name;
                  <br /> ii. Your account number;
                  <br /> iii. Your username and password.
                  <br /> <br />
                  7.8 Bets are considered valid when the transaction ID appears
                  on your screen and is reflected in your transaction history.
                  <br /> <br />
                  7.9 Betting is not allowed after an event has started or when
                  the result is known.
                  <br /> <br />
                  7.10 Unless otherwise stated, the final result of an event or
                  match will be determined on the day of its conclusion.
                  <br /> <br />
                  7.11 The company does not recognize suspended games or
                  protests for betting purposes.
                  <br /> <br />
                  7.12 You acknowledge that all odds, lines, and handicaps are
                  subject to fluctuations without notice.
                  <br /> <br />
                  7.13 We will not accept multiple bets placed on the same event
                  from you.
                </>
              ) : (
                <>
                  7.1 আমরা ওয়েবসাইট (গুলি) এবং / অথবা ডিভাইস (গুলি) এর মাধ্যমে
                  বিজ্ঞাপিত গেমগুলিতে বাজি গ্রহণ করি। এই ধরনের সমস্ত বাজি
                  প্রতিটি ইভেন্ট বা গেমের জন্য প্রযোজ্য বেটিং বিধিগুলির পাশাপাশি
                  এই শর্তাদি এবং শর্তাবলীর সাপেক্ষে। যদি কোনও সুস্পষ্ট ভুল বা
                  ত্রুটি ঘটে বা কোনও ভুল অংশগ্রহণকারীকে কোনও ইভেন্টের জন্য
                  উদ্ধৃত করা হয়, তবে সেই ইভেন্টে স্থাপন করা সমস্ত বাজি অকার্যকর
                  হয়ে যাবে। কোম্পানির গেমিং সিস্টেমের কোনও ত্রুটির ক্ষেত্রে,
                  কোম্পানি যে কোনও এবং সমস্ত বাজি বাতিল করার অধিকার সংরক্ষণ করে।
                  <br /> <br />
                  7.2 এই শর্তাবলীতে অন্য কোনও বিধান থাকা সত্ত্বেও, কোম্পানী
                  আমাদের পরম বিবেচনার ভিত্তিতে, কোনও কারণ ছাড়াই স্থাপন করা কোনও
                  বাজির সমস্ত, বা অংশ, প্রত্যাখ্যান করার অধিকার সংরক্ষণ করে।
                  <br /> <br />
                  7.3 আমরা শুধুমাত্র এই শর্তাবলী এবং শর্তাবলী অনুযায়ী
                  ইন্টারনেটের মাধ্যমে তৈরি করা বাজি গ্রহণ করি। বিটগুলি অন্য কোনও
                  উপায়ে গ্রহণ করা হয় না (পোস্ট, ইমেল, ফ্যাক্স বা অন্যথায় হোক
                  না কেন) এবং ফলাফল নির্বিশেষে অকার্যকর হবে।
                  <br /> <br />
                  7.4 কোম্পানী যে কোনও সময় গ্রাহকের অ্যাকাউন্ট স্থগিত এবং /
                  অথবা বন্ধ করার অধিকার সংরক্ষণ করে যদি এটি বিশ্বাস করা হয় যে
                  আপনি এই শর্তাদির কোনও লঙ্ঘন করেছেন বা প্রতারণা, হ্যাক, আক্রমণ,
                  ম্যানিপুলেট বা স্বাভাবিক বেটিং আত্মাগুলিকে ক্ষতিগ্রস্থ করার
                  উপায় হিসাবে কাজ করেছেন।
                  <br /> <br />
                  7.5 কৃত্রিম বুদ্ধিমত্তা বা ইন্টারনেট &quot বট &quot ব্যবহার সহ
                  সমস্ত ফর্ম &quot অস্বাভাবিক বাজি &quot পূর্ব বিজ্ঞপ্তি ছাড়াই
                  অকার্যকর হবে।
                  <br /> <br />
                  7.6 আপনার ব্যবহারকারীর নাম এবং পাসওয়ার্ড সঠিকভাবে প্রবেশ করা
                  হলে, যদি আপনার অ্যাকাউন্টে পর্যাপ্ত তহবিল থাকে তবে বেটস বৈধ
                  স্থাপন করা হবে।
                  <br /> <br />
                  7.7 আপনি নিম্নলিখিতগুলির যে কোনও একটি ব্যবহারের মাধ্যমে ঘটে
                  যাওয়া সমস্ত ক্রিয়াকলাপ এবং লেনদেনের জন্য দায়বদ্ধ:
                  <br /> i. তোমার নাম;
                  <br /> ii. আপনার অ্যাকাউন্ট নম্বর;
                  <br /> iii. আপনার ব্যবহারকারীর নাম এবং পাসওয়ার্ড।
                  <br /> <br />
                  7.8 বেটগুলি বৈধ বলে বিবেচিত হবে এবং কোম্পানির দ্বারা গৃহীত হবে
                  যখন লেনদেনের আইডিটি আপনার স্ক্রিনে প্রদর্শিত হয় এবং আপনার
                  লেনদেনের ইতিহাসে সঠিকভাবে প্রতিফলিত হয়।
                  <br /> <br />
                  7.9 একটি ইভেন্ট শুরু হওয়ার পরে বেটিং অনুমোদিত নয় এবং / অথবা
                  যেখানে আপনার বাজির প্লেসমেন্টের সময় কোনও ইভেন্টের ফলাফল জানা
                  যায়।
                  <br /> <br />
                  7.10 অন্যথায় বলা না হলে, একটি ম্যাচ বা ইভেন্টের শেষ ফলাফল
                  বেটিং উদ্দেশ্যে তার উপসংহারের দিনে নির্ধারিত হতে পারে।
                  <br /> <br />
                  7.11 কোম্পানী স্থগিত গেম, বিক্ষোভ বা বেটিং উদ্দেশ্যে বিপরীত
                  সিদ্ধান্ত স্বীকার করে না।
                  <br /> <br />
                  7.12 আপনি স্বীকার করেন যে কোনও এবং সমস্ত প্রতিকূলতা, লাইন এবং
                  প্রতিবন্ধকতাগুলি কোনও নোটিশ ছাড়াই ওঠানামা সাপেক্ষে।
                  <br /> <br />
                  7.13 আমরা এখন আর আপনার কাছ থেকে একটি ইভেন্টে একসাথে স্থাপন করা
                  কোনও বাজি গ্রহণ করব না।
                </>
              )}
            </p>

            <p className="text-black leading-relaxed">
              {language === "en"
                ? "8. Software License"
                : "8. সফ্টওয়্যার লাইসেন্স"}
              <br /> <br />
            </p>
            <p className="text-black pl-3 leading-relaxed">
              {language === "en" ? (
                <>
                  8.1 You acknowledge and agree that the software available to
                  you is the property of the company and you have no rights over
                  it. You may not adapt, copy, modify, reproduce, store,
                  distribute, display, publicly perform, broadcast, publish,
                  transmit, sell, rent, lease, or license the software or
                  otherwise make it available to any person, website, or any
                  other medium and/or device.
                  <br />
                  8.2 The company grants you a personal, non-exclusive,
                  non-transferable, and revocable license to install and use the
                  software on your device(s) (&quot License &quot), provided
                  that such installation and use are done through the primary
                  user of the device.
                  <br />
                  8.3 The software is licensed and distributed by the company
                  solely to enable software users to access and fully utilize
                  the services.
                  <br />
                  8.4 You are not permitted to:
                  <br />
                  i. Install or load the software on a server of another
                  networked device;
                  <br />
                  ii. Copy, distribute, transfer, or assign the software to any
                  other person;
                  <br />
                  iii. Rent, lease, sublicense, or transfer the software to any
                  third party.
                  <br />
                </>
              ) : (
                <>
                  8.1 আপনি স্বীকার করেন এবং সম্মত হন যে আপনার কাছে উপলব্ধ
                  সফ্টওয়্যারটি কোম্পানির সম্পত্তি এবং আপনার এটির কোনও অধিকার
                  নেই। আপনি অভিযোজন, অনুলিপি, সংশোধন, পুনরুত্পাদন, সঞ্চয়,
                  বিতরণ, প্রদর্শন, সর্বজনীনভাবে সম্পাদন, সম্প্রচার, প্রকাশ,
                  প্রেরণ, বিক্রয়, ভাড়া, লিজ বা লাইসেন্স বা অন্যথায় যোগাযোগ বা
                  অন্য কোনও ব্যক্তি, ওয়েবসাইট বা অন্য কোনও মিডিয়া এবং / অথবা
                  ডিভাইসে এই সফ্টওয়্যারটি উপলব্ধ করতে পারবেন না।
                  <br />
                  8.2 কোম্পানি আপনাকে আপনার ডিভাইস (গুলি) (&quot; লাইসেন্স
                  &quot;) এ সফ্টওয়্যারটি ইনস্টল এবং ব্যবহার করার জন্য একটি
                  ব্যক্তিগত, অ-একচেটিয়া, অ-স্থানান্তরযোগ্য, প্রত্যাহারযোগ্য
                  লাইসেন্স প্রদান করে তবে শর্ত থাকে যে এই ধরনের ইনস্টলেশন এবং
                  ব্যবহার ডিভাইসের মাধ্যমে তৈরি করা হয় যার আপনি প্রাথমিক
                  ব্যবহারকারী।
                  <br />
                  8.3 সফ্টওয়্যারটি শুধুমাত্র সফ্টওয়্যার ব্যবহারকারীদের
                  অ্যাক্সেস করতে এবং পরিষেবাগুলির সম্পূর্ণ ব্যবহার করতে সক্ষম
                  করার উদ্দেশ্যে কোম্পানি দ্বারা লাইসেন্সপ্রাপ্ত এবং বিতরণ করা
                  হয়।
                  <br />
                  8.4 আপনি অনুমতি দেওয়া হয় না:
                  <br />
                  i. অন্য নেটওয়ার্কযুক্ত ডিভাইসের একটি সার্ভারে সফ্টওয়্যারটি
                  ইনস্টল বা লোড করুন;
                  <br />
                  ii. অনুলিপি করুন, বিতরণ করুন, স্থানান্তর করুন, অন্য কোনও
                  ব্যক্তির কাছে সফ্টওয়্যারটি বরাদ্দ করুন;
                  <br />
                  iii. ভাড়া, ইজারা, সাব-লাইসেন্স বা সফ্টওয়্যারটি কোনও তৃতীয়
                  পক্ষের কাছে স্থানান্তর করা।
                  <br />
                </>
              )}
            </p>

            <p className="text-black leading-relaxed">
              {language === "en"
                ? "9. Transaction Settlement"
                : "9. লেনদেনের নিষ্পত্তি"}
              <br /> <br />
            </p>
            <p className="text-black pl-3 leading-relaxed">
              {language === "en"
                ? "9.1 If there is any discrepancy between the bank account and the registered name, the company reserves the right not to process the transaction."
                : "9.1 ব্যাংক অ্যাকাউন্ট এবং নিবন্ধিত নামের মধ্যে কোনও পার্থক্য থাকলে কোম্পানিটি লেনদেন প্রক্রিয়া না করার অধিকার সংরক্ষণ করে।"}{" "}
              <br />
              {language === "en"
                ? "9.2 Your winnings do not include the bet amount and should be considered when placing a bet."
                : "9.2 আপনার winnings বাজি পরিমাণ অন্তর্ভুক্ত করা হয় না এবং এটি একটি বাজি স্থাপন করার সময় বিবেচনা করা উচিত।"}{" "}
              <br />
              {language === "en"
                ? "9.3 The company is not liable for any funds mistakenly credited to the account and reserves the right to cancel any transactions related to such funds. If funds are mistakenly credited to your account, it is your responsibility to notify the company immediately."
                : "9.3 কোম্পানী ত্রুটিতে অ্যাকাউন্টে জমা দেওয়া কোনও তহবিলের জন্য আপনার কাছে দায়বদ্ধ বা দায়বদ্ধ হবে না এবং কোম্পানি এই ধরনের তহবিল সম্পর্কিত কোনও লেনদেন বাতিল করার অধিকার সংরক্ষণ করে। যদি ভুল করে আপনার অ্যাকাউন্টে তহবিল জমা দেওয়া হয় তবে অবিলম্বে কোম্পানিকে অবহিত করা আপনার দায়িত্ব।"}{" "}
              <br />
              {language === "en"
                ? "9.4 You are solely responsible for paying any applicable taxes, fees, charges, or levies on your winnings under applicable laws."
                : "9.4 প্রযোজ্য আইনের অধীনে আপনার জয়ের ক্ষেত্রে প্রযোজ্য হতে পারে এমন সমস্ত কর, ফি, চার্জ বা লেভির অর্থ প্রদান করা আপনার একমাত্র দায়িত্ব।"}{" "}
              <br />
            </p>

            <p className="text-black leading-relaxed">
              {language === "en"
                ? "10. Collection of Winnings"
                : "10. জয়ের সংগ্রহ"}
              <br /> <br />
            </p>
            <p className="text-black pl-3 leading-relaxed">
              {language === "en" ? (
                <>
                  10.1 Your winnings from settled bets will be credited to your
                  account and can be withdrawn in accordance with our terms and
                  conditions. <br />
                  10.2 We will not release your funds unless the full value of
                  your deposit has been fully staked. <br />
                  10.3 Funds can only be withdrawn in the same currency in which
                  the deposit was made. <br />
                  10.4 The bank account used for the original deposit placement
                  must be the same as the registered account name. <br />
                  10.5 The company reserves the right to charge your account for
                  all reasonable fees related to deposits and withdrawals.{" "}
                  <br /> <br />
                </>
              ) : (
                <>
                  10.1 স্থায়ী বাজি থেকে আপনার winnings আপনার অ্যাকাউন্টে জমা
                  দেওয়া হয় এবং আমাদের বিধি ও শর্তাবলী অনুযায়ী প্রত্যাহার করা
                  হবে। <br />
                  10.2 আমরা আপনার আমানতের সম্পূর্ণ মূল্য সম্পূর্ণরূপে স্ট্যাক না
                  করা হলে আমরা আপনার তহবিল প্রকাশ করব না। <br />
                  10.3 তহবিল শুধুমাত্র একই মুদ্রায় আপনার অ্যাকাউন্ট থেকে
                  প্রত্যাহার করা যেতে পারে যেখানে আমানত করা হয়েছিল। <br />
                  10.4 ডিপোজিটের মূল প্লেসমেন্টের জন্য ব্যবহৃত ব্যাংক
                  অ্যাকাউন্টটি অবশ্যই নিবন্ধিত অ্যাকাউন্টের নামের মতো একই হতে
                  হবে। <br />
                  10.5 কোম্পানি ডিপোজিট এবং উইথড্রয়াল উভয়ের সাথে সম্পর্কিত
                  সমস্ত যুক্তিসঙ্গত ফি কভার করার জন্য আপনার অ্যাকাউন্ট চার্জ
                  করার অধিকার সংরক্ষণ করে। <br /> <br />
                </>
              )}
            </p>
            <p className="text-black leading-relaxed">
              {language === "en" ? "11. Promotion" : "১১. প্রমোশন"} <br />{" "}
              <br />
            </p>
            <p className="text-black pl-3 leading-relaxed">
              {language === "en" ? (
                <>
                  11.1 All JAYA9 promotions do not apply to multiple accounts.
                  If there is any connection or usage of multiple accounts, all
                  bonuses and winnings will be forfeited. <br />
                  11.2 The turnover on all non-live table games (such as
                  Blackjack, Video Poker, Craps, American Roulette, Baccarat,
                  and other non-live table games) and non-slot games will not be
                  counted towards the turnover requirements unless specifically
                  stated. Only 1/4 of the bets placed on Roulette will be
                  counted as turnover. Bets with odds lower than DEC 1.5 or CN
                  0.5 will not be considered as valid turnover. <br />
                  11.3 Only settled bet amounts will be counted, whether won or
                  lost, as effective turnover. <br />
                  11.4 The required turnover for all bonuses is counted as an
                  effective rebate. <br />
                  11.5 Bonuses granted are only valid for thirty (30) days from
                  the date of issue, unless otherwise specified in the bonus
                  terms. If the player does not meet the required conditions
                  before expiration, the bonus funds and winnings obtained using
                  the bonus funds will be removed from the player &apos; s
                  account. <br />
                  11.6 JAYA9 reserves the right to unilaterally enforce, modify,
                  amend, terminate, cancel, and/or invalidate any promotion at
                  any time without prior notice. <br />
                  11.7 Any promotions or special offers provided are subject to
                  these terms and conditions. The company reserves the right to
                  suspend, withdraw, or modify these promotions at any time.{" "}
                  <br />
                  11.8 If the company believes that any user is attempting to
                  abuse or exploit any promotion, the company may, at its sole
                  discretion, block, reject, suspend, withhold, or withdraw the
                  promotion from that user. <br />
                  11.9 The company reserves the right to void any or all bets
                  placed by individuals or groups involved in fraudulent
                  promotional activities. The account funds will be forfeited
                  immediately. <br />
                </>
              ) : (
                <>
                  ১১.১ JAYA9 এর সমস্ত প্রচার একাধিক অ্যাকাউন্টে প্রয়োগ করা হয়
                  না, যদি একাধিক অ্যাকাউন্টের মিলন বা ব্যবহার থাকে তবে সমস্ত
                  বোনাস এবং winnings বাজেয়াপ্ত করা হবে। <br />
                  ১১.২ সমস্ত ধরণের অ-লাইভ টেবিল গেমগুলির উপর টার্নওভার (যেমন
                  Blackjack, ভিডিও পোকার, ক্র্যাপস, আমেরিকান রুলেট, Baccarat এবং
                  অন্যান্য অ-লাইভ টেবিল গেম) এবং অ-স্লট গেমগুলি এই টার্নওভারের
                  প্রয়োজনীয়তার দিকে গণনা করা হবে না যদি না বিশেষভাবে বিবৃত
                  হয়। আপনার মোট বাজি থেকে শুধুমাত্র ১/৪ রুলেট উপর তৈরি bets
                  জন্য টার্নওভার হিসাবে গণনা করা হবে। এবং DEC ১.৫ বা CN ০.৫ এর
                  চেয়ে কম প্রতিকূলতার সাথে বাজিগুলি বৈধ টার্নওভার হিসাবে গণনা
                  করা হবে না। <br />
                  ১১.৩ JAYA9 শুধুমাত্র নিষ্পত্তি করা হয়েছে যে বিট পরিমাণ গণনা
                  করা হবে এবং ফলাফল র সাথে জয় বা কার্যকর টার্নওভার হিসাবে
                  হারান। <br />
                  ১১.৪ সমস্ত বোনাস জন্য প্রয়োজনীয় টার্নওভার একটি কার্যকর রিবেট
                  হিসাবে গণনা করা হয়। <br />
                  ১১.৫ প্রদত্ত বোনাসগুলি তাদের জারি করা তারিখ থেকে কেবল ত্রিশ
                  (৩০) দিনের জন্য বৈধ, যদি না অন্যথায় বোনাসের শর্তাবলীতে বর্ণিত
                  হয়। যদি খেলোয়াড় মেয়াদ শেষ হওয়ার আগে পূর্বশর্ত মূল্যে না
                  পৌঁছায় তবে বোনাস তহবিল এবং বোনাস তহবিল ব্যবহার করে জেতা অর্থ
                  খেলোয়াড়ের অ্যাকাউন্ট থেকে সরিয়ে ফেলা হবে। <br />
                  ১১.৬ JAYA9 একতরফাভাবে কার্যকর করার সিদ্ধান্ত নেওয়ার অধিকার
                  সংরক্ষণ করে এবং যে কোনও সময় পূর্ব বিজ্ঞপ্তি ছাড়াই, সংশোধন,
                  পরিবর্তন, বন্ধ, বাতিল এবং / অথবা প্রচারকে অবৈধ করার জন্য।{" "}
                  <br />
                  ১১.৭ যে কোনও প্রচার বা বিশেষ অফার দেওয়া হয় তা এই বিধি ও
                  শর্তাবলীর সাপেক্ষে। কোম্পানী যে কোন সময় এই প্রচারগুলি স্থগিত,
                  প্রত্যাহার বা সংশোধন করার অধিকার সংরক্ষণ করে। <br />
                  ১১.৮ যদি কোম্পানী বিশ্বাস করে যে কোনও ব্যবহারকারী কোনও
                  প্রচারের অপব্যবহার বা অপব্যবহার করার চেষ্টা করছে, তবে সংস্থাটি
                  তার নিজস্ব বিবেচনার ভিত্তিতে, প্রচার থেকে কোনও ব্যবহারকারীকে
                  ব্লক, প্রত্যাখ্যান, স্থগিত, আটকে রাখা বা প্রত্যাহার করতে পারে।{" "}
                  <br />
                  ১১.৯ কোম্পানী যোগাযোগ / সহযোগিতা এবং প্রতারণামূলক প্রচেষ্টায়
                  কাজ করে এমন কোনও ব্যক্তি / গোষ্ঠীর দ্বারা তৈরি সমস্ত বা সমস্ত
                  বাজি বাতিল করার অধিকার সংরক্ষণ করে। সঙ্গে সঙ্গে অ্যাকাউন্টের
                  টাকা বাজেয়াপ্ত করা হবে। <br />
                </>
              )}
            </p>

            <p className="text-black leading-relaxed">
              {language === "en"
                ? "12. Promotional Abuse and Irregular Play"
                : "১২. প্রচারমূলক অপব্যবহার এবং অনিয়মিত খেলা"}
              <br /> <br />
            </p>

            <p className="text-black pl-3 leading-relaxed">
              {language === "en"
                ? "12.1 We have a zero-tolerance policy for bonus abuse, fraud, and taking unfair advantage of us and/or other suspicious activities. At our sole discretion, we reserve the right to block and remove relevant bonuses, winnings, and/or deposits from accounts associated with such activities or behaviors."
                : "১২.১ আমাদের বোনাস অপব্যবহার, জালিয়াতি, আমাদের এবং / অথবা অন্যান্য সন্দেহজনক ক্রিয়াকলাপের অন্যায্য সুবিধা গ্রহণ করার জন্য একটি শূন্য-সহনশীলতা নীতি রয়েছে এবং আমরা আমাদের নিজস্ব বিবেচনার ভিত্তিতে, এই ধরনের ক্রিয়াকলাপ বা আচরণের সাথে সম্পর্কিত অ্যাকাউন্টগুলি থেকে সংশ্লিষ্ট বোনাস এবং বিজয়ী এবং / অথবা আমানতগুলি ব্লক এবং অপসারণ করার অধিকার সংরক্ষণ করি।"}
              <br />
              {language === "en"
                ? "12.2 We reserve the right to review transaction records and logs from time to time for any reason. By accepting these terms, you give prior consent. If, upon review, we determine that you are engaging in or attempting to engage in any strategies that we, at our sole discretion, consider to be:"
                : "১২.২ আমরা যে কোনও কারণে সময়ে সময়ে লেনদেনের রেকর্ড এবং লগগুলি পর্যালোচনা করার অধিকার রাখি। আপনি এর মাধ্যমে এই শর্তাবলীতে অগ্রিম সম্মতি দেন। যদি, পর্যালোচনার পরে, মনে হয় যে আপনি কোনও কৌশলে অংশ নিচ্ছেন বা অংশ নেওয়ার চেষ্টা করছেন যা আমরা, আমাদের নিজস্ব বিবেচনার ভিত্তিতে,"}
              <br />
              {language === "en"
                ? "(i) Promotional abuse; and/or"
                : "(i) প্রচারমূলক অপব্যবহার বলে মনে করি; এবং /অথবা"}
              <br />
              {language === "en"
                ? "(ii) Irregular play;"
                : "(ii) অনিয়মিত বাজানো;"}
              <br />
              {language === "en"
                ? "We reserve the right to deny, withhold, withdraw or revoke any promotions, winnings, or bonuses and may block your access to the website and/or suspend your account. Please note that in such cases, we are under no obligation to refund any funds remaining in your account except for your original deposit amount."
                : "আমরা কোনও প্রচার, winnings বা বোনাস আপনার অধিকার প্রত্যাখ্যান, আটকে রাখা, প্রত্যাহার বা প্রত্যাহার করার বা ওয়েবসাইটে আপনার অ্যাক্সেস বন্ধ করার এবং / অথবা আপনার অ্যাকাউন্ট ব্লক করার অধিকার সংরক্ষণ করি। দয়া করে মনে রাখবেন যে এই ধরনের ক্ষেত্রে আমরা আপনার মূল আমানতের পরিমাণ ব্যতীত আপনার অ্যাকাউন্টে থাকতে পারে এমন কোনও তহবিল ফেরত দেওয়ার কোনও বাধ্যবাধকতা থাকবে না।"}
              <br />
              {language === "en"
                ? "12.3 'Irregular Play' includes, but is not limited to, the following types of play:"
                : "১২.৩ 'অনিয়মিত খেলা' অন্তর্ভুক্ত, কিন্তু সীমাবদ্ধ নয়, নিম্নলিখিত ধরনের খেলা:"}
              <br />
              {language === "en"
                ? "i. Equal, zero, or low-margin bets or hedge betting. For example, betting on black or red in roulette or covering more than 25 of the 37 numbers on the table; betting on both sides, including but not limited to sports and live casino;"
                : "i. সমান, শূন্য বা কম মার্জিনের বাজি বা হেজ বেটিং কোনওভাবেই গ্রহণ করা হবে না। উদাহরণস্বরূপ, রুলেটের উপর কালো বা লাল পণ বা টেবিলের ৩৭ টি সংখ্যার মধ্যে ২৫ টিরও বেশি কভার করে; উভয় পক্ষের উপর পণ, সহ কিন্তু ক্রীড়া এবং লাইভ ক্যাসিনো সীমাবদ্ধ নয়;"}
              <br />
              {language === "en"
                ? "ii. Delayed winnings, e.g., 'free spins' or 'bonus' features started with a bonus or cash funds, then exiting the game and completing the bonus rounds later;"
                : "ii. বিলম্বিত winnings, উদাঃ 'বিনামূল্যে স্পিন' বা 'বোনাস' বৈশিষ্ট্যগুলি একটি বোনাস বা নগদ তহবিল র সাথে শুরু করা হয়, যার পরে প্লেয়ার বিনামূল্যে বোনাস বা বোনাস রাউন্ড থেকে প্রস্থান করে, এবং তারপর পরবর্তী সময়ে যেমন বোনাস wagered হয়েছে হিসাবে সম্পূর্ণ;"}
              <br />
              {language === "en"
                ? "iii. 'Game state abuse' where bonus funds are used to progress through bonus stages, then completing final stages with cash bets;"
                : "iii. 'গেম স্টেট অপব্যবহার' যেখানে বোনাস তহবিলগুলি কেবল বোনাস পর্যায়গুলির মাধ্যমে অগ্রগতির জন্য ব্যবহার করা হয় এবং তারপরে বোনাস তহবিলগুলি মুক্তি বা বাজেয়াপ্ত করা হলে নগদ বাজিগুলির সাথে চূড়ান্ত পর্যায়গুলি সম্পূর্ণ করে;"}
              <br />
              {language === "en"
                ? "12.4 'Promotional Abuse' includes, but is not limited to, the following types of play:"
                : "১২.৪ 'প্রচারমূলক অপব্যবহার' অন্তর্ভুক্ত, কিন্তু সীমাবদ্ধ নয়, নিম্নলিখিত ধরনের খেলা:"}
              <br />
              {language === "en"
                ? "i. Colluding with other players to abuse promotions, engage in fraudulent or unfair activities;"
                : "i. প্রচারমূলক অপব্যবহার, ইচ্ছাকৃত প্রতারণা বা অন্যান্য অন্যায্য আচরণের জন্য অন্যান্য খেলোয়াড়দের সাথে সহযোগিতা করা;"}
              <br />
              {language === "en"
                ? "ii. Depositing and withdrawing funds immediately to abuse promotions. For example, depositing to receive free spins, then betting multiple times your deposit amount before withdrawing;"
                : "ii. পদোন্নতির অপব্যবহার করার উদ্দেশ্যে অবিলম্বে টাকা জমা দিন এবং প্রত্যাহার করুন। উদাহরণস্বরূপ, বিনামূল্যে ঘূর্ণন পেতে ডিপোজিট করুন, তারপর আপনার ডিপোজিট মূল্যের চেয়ে একাধিকবার আপনার ডিপোজিট বাজি ধরুন, যাতে ওয়েবসাইটের শর্তাবলীতে 'নো ডিপোজিট বোনাস' ক্লজ ফান্ডগুলি লঙ্ঘন না করে তাই প্রত্যাহার শুরু করুন;"}
              <br />
              {language === "en"
                ? "iii. Exploiting software or system bugs, errors, or failures in any game;"
                : "iii. আমরা এটি জানি বা না জানি, কোনও সফ্টওয়্যার বা সিস্টেম বাগ, ত্রুটি বা ব্যর্থতার সুবিধা গ্রহণ করুন, যার মধ্যে রয়েছে তবে কোনও গেমের মধ্যে সীমাবদ্ধ নয়;"}
              <br />
              {language === "en"
                ? "iv. Using multiple accounts to claim free spins bonuses multiple times."
                : "iv. একাধিক ফ্রি স্পিন বোনাস বা একাধিকবার অফার পেতে একাধিক অ্যাকাউন্ট ব্যবহার করুন।"}
              <br /> <br />
            </p>

            <p className="text-black leading-relaxed">
              {language === "en" ? "13. Indemnity" : "13. ইনডেমনিটি"}
              <br /> <br />
            </p>
            <p className="text-black pl-3 leading-relaxed">
              {language === "en"
                ? "13.1 You agree to indemnify and hold harmless the Company, our employees, officers, directors, licensees, distributors, affiliates, subsidiaries, and agents from any loss, damage, or claim (including reasonable legal fees) that may arise from any violation of the Terms and Conditions and/or Betting Rules."
                : "13.1 আপনি কোম্পানী, আমাদের কর্মচারী, কর্মকর্তা, পরিচালক, লাইসেন্সধারী, পরিবেশক, অনুমোদিত, সহায়ক সংস্থা এবং এজেন্টদের যে কোনও ক্ষতি, ক্ষতি বা দাবির (যুক্তিসঙ্গত আইনি ফি সহ) জন্য ক্ষতিপূরণ এবং ধরে রাখতে সম্মত হন যা বিধি ও শর্তাবলী এবং / অথবা বেটিং বিধিগুলির কোনও লঙ্ঘন থেকে উদ্ভূত হতে পারে।"}
              <br /> <br />
            </p>

            <p className="text-black leading-relaxed">
              {language === "en" ? "14. Disclaimer" : "১৪. অস্বীকৃতি"}
              <br /> <br />
            </p>

            <p className="text-black pl-3 leading-relaxed">
              {language === "en"
                ? "14.1 The company disclaims all liability for the content, products, and presentations of external or third-party websites in the public domain. The company denies all warranties, representations, and liabilities related to any aspect of the services, websites, and information that may be provided by third parties and, under no circumstances, shall be responsible for any default, breach, or omission by third-party partners."
                : "১৪.১ কোম্পানি পাবলিক ডোমেইনে বাহ্যিক বা তৃতীয় পক্ষের ওয়েবসাইটগুলির সামগ্রী, পণ্য, উপস্থাপনার জন্য সমস্ত দায়বদ্ধতা অস্বীকার করে। কোম্পানী পরিষেবা, ওয়েবসাইট এবং তথ্যের যে কোনও দিক সম্পর্কিত সমস্ত ওয়্যারেন্টি, উপস্থাপনা এবং দায়িত্বগুলি অস্বীকার করে, যা তৃতীয় পক্ষের দ্বারা সরবরাহ করা যেতে পারে এবং কোনও পরিস্থিতিতেই তৃতীয় পক্ষের অংশীদারদের দ্বারা কোনও ডিফল্ট, লঙ্ঘন বা নিষ্ক্রিয়তার জন্য দায়বদ্ধ হবে না।"}
              <br />
              {language === "en"
                ? "14.2 Participation in games is at your own discretion and risk. By playing games, you acknowledge that you do not find the games and/or services offensive, unfair, or inappropriate in any way."
                : "১৪.২ গেমসের সমস্ত অংশগ্রহণ আপনার নিজের বিবেচনার ভিত্তিতে এবং আপনার নিজের ঝুঁকিতে। গেমগুলি খেলে, আপনি স্বীকার করেন যে আপনি গেমস এবং / অথবা পরিষেবাগুলিকে কোনওভাবেই আপত্তিকর, অন্যায্য বা অশালীন বলে মনে করেন না।"}
              <br />
              {language === "en"
                ? "14.3 Some legal jurisdictions do not address the legality of online and/or foreign gambling, while others explicitly deem online and/or foreign gambling illegal. We do not want anyone to use the site and/or services where such use is unlawful. The availability of the service and the site should not be construed as an offer, solicitation, or invitation in any jurisdiction where such use is illegal. It is solely your responsibility to ensure that you always comply with the laws governing you and that you have full legal rights to use our site and services."
                : "১৪.৩ কিছু আইনী বিচারব্যবস্থা অনলাইন এবং / অথবা বিদেশী জুয়া খেলার বৈধতা সম্বোধন করে না যখন অন্যরা বিশেষভাবে অনলাইন এবং / অথবা বিদেশী জুয়া খেলাকে অবৈধ বলে মনে করে। আমরা চাই না যে কেউ সাইট এবং / অথবা পরিষেবাগুলি ব্যবহার করা উচিত যেখানে এই ধরনের ব্যবহার অবৈধ। পরিষেবা এবং সাইটের প্রাপ্যতা এমন কোনও দেশে আমাদের দ্বারা অফার, অনুরোধ বা আমন্ত্রণ হিসাবে construed করা উচিত নয় যেখানে এই ধরনের ব্যবহার অবৈধ। এটি নিশ্চিত করা আপনার একমাত্র দায়িত্ব যে আপনি সর্বদা আপনাকে পরিচালনা করে এমন আইনগুলি মেনে চলেন এবং আপনার সাইট এবং পরিষেবাদি ব্যবহার করার সম্পূর্ণ আইনী অধিকার রয়েছে।"}
              <br />
              {language === "en"
                ? "14.4 The company shall not be liable for any damage or loss resulting from or alleged to result from the website or its content, including, without limitation, delay or interruption in operation or transmission, communication failure, or any errors in the content. The company disclaims all warranties, representations, and liabilities to the fullest extent permitted by law and does not guarantee that the services will be uninterrupted, timely, or error-free."
                : "১৪.৪ অবহেলা সহ কোনও ইভেন্টে, কোম্পানী কোনও ক্ষতি বা ক্ষতির জন্য দায়বদ্ধ থাকবে না বা ওয়েবসাইট বা তার সামগ্রী থেকে ফলাফল বা তার দ্বারা সৃষ্ট বলে মনে করা হয় বা অভিযোগ করা হয়, সীমাবদ্ধতা ছাড়াই, বিলম্ব বা অপারেশন বা ট্রান্সমিশনে বাধা, যোগাযোগ, লাইন ব্যর্থতা, কোনও ব্যক্তির দ্বারা ওয়েবসাইট বা তার সামগ্রীর ব্যবহার বা অপব্যবহার সহ, অথবা সামগ্রীতে কোনও ত্রুটি বা ত্রুটি। কোম্পানী আইন দ্বারা অনুমোদিত সম্পূর্ণ পরিমাণে সমস্ত ওয়্যারেন্টি, উপস্থাপনা এবং দায়িত্বগুলি অস্বীকার করে এবং গ্যারান্টি দেয় না যে পরিষেবাগুলি নিরবচ্ছিন্ন, সময়োপযোগী বা ত্রুটি-মুক্ত হবে।"}
              <br />
              {language === "en"
                ? "14.5 The company does not guarantee that the services provided will meet your expectations or standards, and it is your responsibility to ensure that the necessary configurations and requirements are met. You acknowledge that some or all information may be subject to change or modification."
                : "১৪.৫ কোন পরিস্থিতিতেই কোম্পানী গ্যারান্টি দিতে পারে না যে প্রদত্ত পরিষেবাগুলি আপনার প্রত্যাশা বা মানগুলি পূরণ করবে এবং পরিষেবাগুলির ব্যবহারের জন্য প্রয়োজনীয় কনফিগারেশন এবং প্রয়োজনীয় প্রয়োজনীয়গুলি সর্বাধিক করা হয়েছে তা নিশ্চিত করা আপনার দায়িত্ব।"}
              <br />
              {language === "en"
                ? "14.6 In case of any discrepancy between the results displayed on your device and our server, the results displayed on our server shall govern the outcome of the game. You understand and agree that the company’s records shall be the final authority in determining the terms of your participation, the resulting activities, and the circumstances in which they occurred."
                : "১৪.৬ আপনার ডিভাইস এবং আমাদের সার্ভারে প্রদর্শিত ফলাফলগুলির মধ্যে কোনও পার্থক্যের ক্ষেত্রে, আমাদের সার্ভারে প্রদর্শিত ফলাফলগুলি গেমের ফলাফলগুলি পরিচালনা করবে।"}
              <br />
              {language === "en"
                ? "14.7 The company reserves the right, at its sole discretion, to temporarily or permanently suspend, modify, remove, or add services at any time without liability for any damages resulting from such actions."
                : "১৪.৭ কোম্পানী অবিলম্বে তার নিজস্ব বিবেচনার ভিত্তিতে সাময়িকভাবে বা স্থায়ীভাবে পরিষেবাগুলি বন্ধ, সংশোধন, অপসারণ বা যুক্ত করার অধিকার সংরক্ষণ করে।"}
              <br />
              {language === "en"
                ? "14.8 This disclaimer supersedes all prior understandings, agreements, and contracts. You agree to indemnify the company and its affiliates, employees, agents, and partners against any claims, liabilities, or expenses, including but not limited to attorney fees and court costs, arising from your access to or use of the services and website."
                : "১৪.৮ এই অস্বীকৃতিটি সমস্ত পূর্ববর্তী বোঝাপড়া, চুক্তি এবং চুক্তিগুলিকে ছাড়িয়ে যায়।"}
              <br />
              {language === "en"
                ? "14.9 This disclaimer should be read in its entirety and understood in conjunction with the Terms of Use and Privacy Policy. By using this website, you acknowledge that you have read, understood, and accepted all terms, conditions, privacy policies, and disclaimers."
                : "১৪.৯ এই অস্বীকৃতিটি সম্পূর্ণরূপে পড়া উচিত এবং শুধুমাত্র ব্যবহার এবং গোপনীয়তা নীতি একই শর্তাবলী পড়ার পরে বোঝা উচিত।"}
              <br /> <br />
            </p>

            <p className="text-black leading-relaxed">
              {language === "en"
                ? "15. Cancellation, Termination, and Account Suspension"
                : "১৫. বাতিলকরণ, সমাপ্তি এবং অ্যাকাউন্টের স্থগিতাদেশ"}
              <br />
              <br />
            </p>
            <p className="text-black pl-3 leading-relaxed">
              {language === "en"
                ? "15.1 The Company reserves the right to cancel any winnings, freeze and forfeit any balance in your account, and/or disable your account at any time without cause, including but not limited to if:"
                : "১৫.১ কোম্পানী কোনও winnings বাতিল করার অধিকার সংরক্ষণ করে, আপনার অ্যাকাউন্টে কোনও ব্যালেন্স ফ্রিজ এবং বাজেয়াপ্ত করে এবং / অথবা কোনও কারণ ছাড়াই যে কোনও সময়ে আপনার অ্যাকাউন্টটি অক্ষম করে দেয়, যার মধ্যে রয়েছে তবে সীমাবদ্ধ নয়, যদি:"}
              <br />
              {language === "en"
                ? "i. You have multiple active accounts with the Company;"
                : "i. আপনার কোম্পানির সাথে একাধিক সক্রিয় অ্যাকাউন্ট রয়েছে;"}
              <br />
              {language === "en"
                ? "ii. The name does not match the name on the bank account or other payment accounts used for deposits and withdrawals;"
                : "ii. নামটি ব্যাংক অ্যাকাউন্টের নাম বা অর্থ জমা এবং উত্তোলনের জন্য ব্যবহৃত অন্যান্য পেমেন্ট অ্যাকাউন্টের সাথে মেলে না;"}
              <br />
              {language === "en"
                ? "iii. You participate in a promotion and withdraw funds before meeting the specific promotion requirements;"
                : "iii. আপনি একটি পদোন্নতিতে অংশগ্রহণ করেন এবং সেই নির্দিষ্ট প্রচারের প্রয়োজনীয়তাগুলি পূরণ করার আগে তহবিল প্রত্যাহার করেন;"}
              <br />
              {language === "en"
                ? "iv. You provide false or misleading registration information;"
                : "iv. আপনি ভুল বা বিভ্রান্তিকর নিবন্ধন তথ্য প্রদান করেন;"}
              <br />
              {language === "en"
                ? "v. You fail to provide identification information when requested;"
                : "v. অনুরোধ করা হলে আপনি সনাক্তকরণ তথ্য প্রদান করেন নি;"}
              <br />
              {language === "en"
                ? "vi. You are under the legal age;"
                : "vi. আপনি আইনী বয়সের অধীনে আছেন;"}
              <br />
              {language === "en"
                ? "vii. You access and participate in the services from a jurisdiction where participation is prohibited by law;"
                : "vii. আপনি এমন একটি এখতিয়ার থেকে পরিষেবাগুলিতে অ্যাক্সেস এবং অংশগ্রহণ করেন যেখানে অংশগ্রহণ আইন দ্বারা নিষিদ্ধ;"}
              <br />
              {language === "en"
                ? "viii. You reject any transaction or deposit;"
                : "viii. আপনি যে কোন লেনদেন বা আমানত প্রত্যাখ্যান করেছেন;"}
              <br />
              {language === "en"
                ? "ix. You deposit funds from illegal or unauthorized activities;"
                : "ix. আপনি অবৈধ বা অননুমোদিত ক্রিয়াকলাপ থেকে অর্থ জমা করছেন;"}
              <br />
              {language === "en"
                ? "x. You engage in fraud or attempt to deceive any party, use artificial intelligence or other systems designed to defeat the system, or collude with other players to defraud the Company;"
                : "x. আপনি প্রতারণা করছেন বা কাউকে বা কোনও পক্ষকে ঠকানোর চেষ্টা করছেন বা আপনি সিস্টেমটিকে পরাজিত করার জন্য বিশেষভাবে ডিজাইন করা একটি কৃত্রিম বুদ্ধিমত্তা বা অন্যান্য সিস্টেমকে নিযুক্ত করেছেন বা ব্যবহার করেছেন বা ব্যবহার করেছেন বা আপনি কোম্পানির সাথে প্রতারণা করার জন্য অন্যান্য খেলোয়াড়দের সাথে মিলিত হয়েছেন বলে মনে করা হয়;"}
              <br />
              {language === "en"
                ? "xi. You allow another person to use your account (intentionally or unintentionally);"
                : "xi. আপনি আপনার অ্যাকাউন্ট ব্যবহার করার জন্য অন্য কাউকে (ইচ্ছাকৃতভাবে বা অনিচ্ছাকৃতভাবে) অনুমতি দিয়েছেন বা অনুমতি দিয়েছেন;"}
              <br />
              {language === "en"
                ? "xii. You fail to comply with any of the terms and conditions set forth in this Agreement."
                : "xii. আপনি এই চুক্তিতে বর্ণিত কোনও বিধি ও শর্তাবলী মেনে চলতে ব্যর্থ হন।"}
              <br />
              <br />
              {language === "en"
                ? "15.2 If the provision of services is suspended and/or your account is deactivated, it will only be reinstated after verifying the necessary modifications."
                : "১৫.২ যদি পরিষেবাগুলির বিধান স্থগিত করা হয় এবং / অথবা আপনার অ্যাকাউন্ট নিষ্ক্রিয় করা হয় তবে পরিষেবাগুলির বিধানটি কেবলমাত্র পুনর্বহাল করা হবে এবং / অথবা প্রয়োজনীয় সংশোধন যাচাই করার পরে আপনার অ্যাকাউন্টটি পুনরায় সক্রিয় করা হবে।"}
              <br />
              <br />
              {language === "en"
                ? "15.3 The Company retains authority over granting, maintaining, and closing user accounts at any time. Any decisions related to your account, service, or site usage are final and not subject to review or appeal. We will provide reasonable notice before doing so, unless circumstances legally or practically prevent us from doing so."
                : "১৫.৩ কোম্পানী যে কোনও কারণে যে কোনও সময়ে ব্যবহারকারীর অ্যাকাউন্ট প্রদান, রক্ষণাবেক্ষণ এবং বন্ধ করার উপর কর্তৃত্ব বজায় রাখে। আপনার অ্যাকাউন্টের যে কোনও দিক, পরিষেবা বা সাইটের ব্যবহার সম্পর্কিত সিদ্ধান্তটি চূড়ান্ত এবং পর্যালোচনা বা আপিল করার জন্য উন্মুক্ত হবে না। আমরা এটি করার আগে আপনাকে যুক্তিসঙ্গত নোটিশ দেব, যদি না পরিস্থিতি নির্দেশ করে যে আমরা আইনীভাবে বা কার্যত তা করতে পারি না।"}
              <br />
              <br />
            </p>

            <p className="text-black leading-relaxed">
              16.{" "}
              {language === "en"
                ? "External Websites"
                : "বাহ্যিক ওয়েবসাইটসমূহ"}{" "}
              <br />
              <br />
            </p>
            <p className="text-black pl-3 leading-relaxed">
              16.1{" "}
              {language === "en"
                ? "Links to external websites are provided for your convenience only, and the company is not responsible for ensuring that such links' content is accurate, current, or maintained."
                : "বাহ্যিক ওয়েবসাইটগুলির লিঙ্কগুলি কেবলমাত্র আপনার সুবিধার জন্য সরবরাহ করা হয়, এবং কোম্পানীটির জন্য দায়ী নয় এবং এই ধরনের লিঙ্কগুলির সামগ্রীগুলি সঠিক, বর্তমান বা রক্ষণাবেক্ষণ করা হয় তা নিশ্চিত করার জন্য দায়বদ্ধ নয়।"}{" "}
              <br />
              16.2{" "}
              {language === "en"
                ? "The company is not responsible or liable for the content or privacy practices of external websites."
                : "কোম্পানি বাহ্যিক ওয়েবসাইটগুলির বিষয়বস্তু বা গোপনীয়তা অনুশীলনের জন্য দায়ী বা দায়বদ্ধ নয়।"}{" "}
              <br />
              16.3{" "}
              {language === "en"
                ? "The company shall not be responsible for any harm or damage related to your use of or reliance on any external website links provided on the website(s)."
                : "ওয়েবসাইট (গুলি) এ প্রদত্ত বাহ্যিক ওয়েবসাইটগুলির কোনও লিঙ্ক র আপনার ব্যবহারের সাথে সম্পর্কিত বা যে কোনও উপায়ে যে কোনও ক্ষতি বা ক্ষতির জন্য কোম্পানী দায়বদ্ধ হবে না।"}{" "}
              <br />
              16.4{" "}
              {language === "en"
                ? "Under no circumstances shall the company be associated with, endorse, or be affiliated with any statement, opinion, trade or service mark, logo, symbol, product, service, or operators or owners of external websites."
                : "কোম্পানী কোন পরিস্থিতিতে কোন বিবৃতি, মতামত, বাণিজ্য বা পরিষেবা চিহ্ন, লোগো, প্রতীক, পণ্য, পরিষেবা বা বহিরাগত ওয়েবসাইটের অপারেটর বা মালিকদের সাথে সংযুক্ত বা অনুমোদিত হবে না।"}{" "}
              <br />
              <br />
            </p>

            <p className="text-black leading-relaxed">
              {language === "en"
                ? "17. Adding or Removing Games"
                : "17. গেমস যোগ করা বা বন্ধ করা"}
              <br />
              <br />
            </p>
            <p className="text-black pl-3 leading-relaxed">
              {language === "en"
                ? "17.1 We reserve the right, at our sole discretion, to add new games or features to the website(s) or to restrict, modify, discontinue, or terminate access to any game or feature at any time."
                : "17.1 আমরা আমাদের নিজস্ব বিবেচনার ভিত্তিতে, ওয়েবসাইট (গুলি) এ নতুন গেম বা বৈশিষ্ট্যগুলি যুক্ত করার বা যে কোনও সময়ে যে কোনও সময়ে কোনও গেম বা বৈশিষ্ট্যগুলিতে অ্যাক্সেস সীমাবদ্ধ করতে বা সংশোধন করতে, বন্ধ করতে, বন্ধ করতে, বন্ধ করতে, অ্যাক্সেস সীমাবদ্ধ করতে বা সংশোধন করার অধিকার রাখি।"}
              <br /> <br />
            </p>

            <p className="text-black leading-relaxed">
              {language === "en" ? "18. Warning" : "18. সতর্কীকরণ"}
              <br />
              <br />
            </p>
            <p className="text-black pl-3 leading-relaxed">
              {language === "en"
                ? `18.1 The company reserves the right to seek any remedy for any violation of these terms and conditions,
       including the right to deny or restrict access to the services, website(s), and any specific individual. 
       At any time, at our sole and absolute discretion, we reserve the right to cancel your account or block access 
       from any specific internet address.`
                : `18.1 কোম্পানী এই শর্তাদি এবং শর্তাবলীর যে কোনও লঙ্ঘনের জন্য কোনও প্রতিকার চাওয়ার অধিকার সংরক্ষণ করে, 
       যার মধ্যে রয়েছে পরিষেবাগুলি, ওয়েবসাইট (গুলি) এবং কোনও নির্দিষ্ট ব্যক্তির কাছে অ্যাক্সেস প্রত্যাখ্যান 
       বা সীমাবদ্ধ করার অধিকার, আমাদের নিজস্ব এবং পরম বিবেচনার ভিত্তিতে যে কোনও সময়ে আপনার অ্যাকাউন্ট বাতিল করতে 
       বা কোনও নির্দিষ্ট ইন্টারনেট ঠিকানা থেকে অ্যাক্সেস ব্লক করার অধিকার।`}
              <br />
              {language === "en"
                ? `18.2 You agree to fully and harmlessly indemnify the company and its affiliates, employees, agents, and 
       associates against all claims, demands, liabilities, losses, damages, costs, and expenses, including legal 
       fees and any other fees that may arise as a result of:`
                : `18.2 আপনি কোম্পানী এবং তার সহযোগী, কর্মচারী, এজেন্ট এবং সহযোগীদের সমস্ত দাবি, চাহিদা, দায়, ক্ষতি, ক্ষতি, 
       খরচ এবং ব্যয় সহ, আইনী ফি এবং এর ফলে উদ্ভূত হতে পারে এমন অন্যান্য সমস্ত ফি সহ এবং তার বিরুদ্ধে সম্পূর্ণ 
       এবং নিরীহভাবে ক্ষতিপূরণ দিতে সম্মত হন:`}
              <br />
              i.{" "}
              {language === "en"
                ? "Your breach of the agreement, whether in full or in part;"
                : "আপনার চুক্তির লঙ্ঘন, সম্পূর্ণ বা আংশিকভাবে;"}
              <br />
              ii.{" "}
              {language === "en"
                ? "Violation of any law or third-party rights;"
                : "কোন আইন বা তৃতীয় পক্ষের অধিকার লঙ্ঘন;"}
              <br />
              iii.{" "}
              {language === "en"
                ? "Use of the service and/or site by you or any other person using your login details."
                : "আপনার লগইন বিবরণ ব্যবহার করে আপনার বা অন্য কোনও ব্যক্তির দ্বারা পরিষেবা এবং / অথবা সাইটের ব্যবহার"}
              <br />
              <br />
            </p>

            <p className="text-black leading-relaxed">
              {language === "en" ? "19. Miscellaneous" : "19. বিবিধ"}
              <br />
              <br />
            </p>
            <p className="text-black pl-3 leading-relaxed">
              {language === "en"
                ? "19.1 In case of any inconsistency between the English version of this Agreement and any translated version, the English version shall prevail."
                : "19.1 এই চুক্তির ইংরেজি ভাষার সংস্করণটি এই চুক্তির কোনও অনুবাদিত সংস্করণের মধ্যে কোনও অসঙ্গতির ক্ষেত্রে প্রাধান্য পাবে।"}
              <br />
              {language === "en"
                ? "19.2 This Agreement constitutes the entire understanding and agreement between the Company and you in relation to the services and the website and supersedes any prior agreements, understandings, or arrangements."
                : "19.2 এই চুক্তিটি পরিষেবা এবং ওয়েবসাইটের সাথে সম্পর্কিত কোম্পানি এবং আপনার মধ্যে সম্পূর্ণ বোঝাপড়া এবং চুক্তি গঠন করে এবং কোনও পূর্ববর্তী চুক্তি, বোঝাপড়া বা ব্যবস্থাকে ছাড়িয়ে যায়।"}
              <br />
              <br />
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-informationBackground flex flex-col items-center p-4">
      {/* Main Layout */}
      <div className="flex flex-col md:flex-row max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white text-black flex flex-col p-6 space-y-3 shadow-md md:flex">
          <h3 className="text-center text-xl font-semibold border-b-4 border-common-blue text-common-blue pb-2">
            
            {language === "en" ?"Other Topics":"অন্যান্য বিষয়"}
            
          </h3>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`p-3 text-left rounded-lg transition-all duration-300 font-medium block ${
                activeTab === tab.id
                  ? "bg-informationBackground text-black"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div id="tab-content" className="w-full  md:w-3/4 p-6">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default SidebarTabs;
