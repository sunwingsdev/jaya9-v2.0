import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";


const dataBn = [
    {
      title: "ibc স্পোর্টস বেটিং | অনলাইন স্পোর্টস বাংলাদেশ",
      content: "অনলাইন স্পোর্টসবুক Jaya9 – জয় করতে এখনই খেলুন! এশীয় বাজারে, JAYA9 বাংলাদেশ অন্যতম বিশ্বস্ত অনলাইন স্পোর্টস বাংলাদেশ। আমরা সেরা বেটিং গেম এবং পুরস্কার জেতার সুযোগের মতো লোভনীয় অফার প্রদান করি। ক্রিকেট বেটিং হল আমাদের অন্যতম জনপ্রিয় ibc স্পোর্টস বেটিং। আমাদের আছে 99.99% খেলোয়াড়দের জয়ের রেকর্ড।"
    },
    {
      title: "শীর্ষ ক্রিকেট টুর্নামেন্টে বাজি ধরুন",
      content: "আমরা আপনাদের সবাইকে আমাদের ক্রিকেট বেটিং বিভাগটি দেখার জন্য আমন্ত্রণ জানাচ্ছি। বাংলাদেশে ক্রিকেট জনপ্রিয় হওয়ার কারণে, আমরা যারা ক্রিকেটে বাজি পছন্দ করেন তাদের জন্য সবচেয়ে নির্ভরযোগ্য প্ল্যাটফর্ম অফার করি। আপনি শুধু বাজি ধরার সুযোগই পান না, আপনি লাভজনক পুরস্কারও জিততে পারেন। তাহলে, আপনি কিসের জন্য অপেক্ষা করছেন? আজই আমাদের সাথে যোগ দিন!"
    },
    {
      title: "বিশ্বস্ত প্ল্যাটফর্মে ফুটবল বেটিং খেলা",
      content: "বুকমেকাররা ফুটবল লাইনটিকে বাজারের সেরাদের মধ্যে একটি বলে মনে করেন কারণ এটি তাদের কাজের মধ্যে সবচেয়ে বেশি প্রফাইল এলাকাগুলির মধ্যে একটি। আমরা সমস্ত মহাদেশে সংঘটিত সমস্ত জাতীয় চ্যাম্পিয়নশিপের ভবিষ্যদ্বাণী গ্রহণ করি৷"
    },
    {
      title: "প্রায়শই জিজ্ঞাসিত প্রশ্ন: ক্রিকেট বেটিং কি?",
      content: "ক্রিকেট বাজি হল এক ধরনের জুয়া যেখানে আপনি বিভিন্ন ক্রিকেট টুর্নামেন্টে বাজি ধরতে পারেন। জেতার পর, আপনি একচেটিয়া পুরস্কার বা বোনাসও পাচ্ছেন।"
    },
    {
      title: "আমি কি জয়া9 এ নিরাপদে বাজি ধরতে পারি?",
      content: "বেটিং কোম্পানিটি জুয়া কমিশন দ্বারা নিয়ন্ত্রিত হয়, যা এর বিশ্বস্ততা নিশ্চিত করে৷ এর সাথে, আমাদের খেলোয়াড়দের জন্য উচ্চ-নিরাপত্তার নিয়ম রয়েছে। ক্যাসিনো বাংলাদেশ | লাইভ ক্যাসিনো বাংলাদেশ | বাংলাদেশ ক্রিকেট বেটিং | বাংলাদেশের শীর্ষ অনলাইন ক্যাসিনো"
    }
  ];
  const dataEn = [
    {
      title: "IBC Sports Betting | Online Sports Bangladesh",
      content: "Online Sportsbook Jaya9 – Play Now to Win! In the Asian market, Jaya9 Bangladesh is one of the most trusted online sports betting platforms in Bangladesh. We offer irresistible deals, including the best betting games and opportunities to win exciting rewards. Cricket betting is one of our most popular IBC sports betting options. We have a 99.99% win record among players."
    },
    {
      title: "Bet on Top Cricket Tournaments",
      content: "We invite all of you to explore our cricket betting section. Since cricket is highly popular in Bangladesh, we offer the most reliable platform for those who love betting on cricket. Not only do you get the chance to place bets, but you can also win lucrative rewards. So, what are you waiting for? Join us today!"
    },
    {
      title: "Play Football Betting on a Trusted Platform",
      content: "Bookmakers consider football betting lines to be among the best in the market because it is one of the most high-profile areas of their work. We accept predictions for all national championships held across all continents."
    },
    {
      title: "Frequently Asked Question: What is Cricket Betting?",
      content: "Cricket betting is a type of gambling where you can place bets on various cricket tournaments. When you win, you receive exclusive rewards or bonuses."
    },
    {
      title: "Is it Safe to Bet on Jaya9?",
      content: "The betting company is regulated by a gambling commission, ensuring its trustworthiness. Along with this, we have high-security measures in place for our players. Casino Bangladesh | Live Casino Bangladesh | Bangladesh Cricket Betting | Top Online Casino in Bangladesh."
    }
  ];

  const IbcSports = () => {
    const { language } = useContext(LanguageContext);
            const data = language === "bn" ? dataBn : dataEn;
    return (
      <div className="">
        {data.map((item, index) => (
          <div key={index} className="text-left mb-6">
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-base">{item.content}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default IbcSports;
  