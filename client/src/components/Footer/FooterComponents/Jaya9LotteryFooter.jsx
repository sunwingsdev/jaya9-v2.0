import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";


const dataBn = [
  {
    title: "Jaya9-তে লটারি বিজয়ী হন- বিশ্বস্ত লটারি প্ল্যাটফর্ম",
    content: "অনলাইন লটারি বাংলাদেশ বাংলাদেশে এক ধরনের অনলাইন ক্যাসিনো বেটিং পাওয়া যায়। অনলাইন ক্যাসিনো উপভোগ করার জন্য এটি বিশ্বের সেরা লটারি গেমিং প্ল্যাটফর্ম. ক্যাসিনোর অন্যতম জনপ্রিয় এবং প্রাচীনতম গেম অনলাইন লটারি বাংলাদেশ Jaya9 বিশ্বস্ত বাংলাদেশ অনলাইন ক্যাসিনোতে। jaya9 ক্যাসিনোতে লটারি গেমের বিভিন্ন ধরণের এবং আকার রয়েছে। তারা খেলোয়াড়দের জন্য খেলা সহজ. আপনি মজা এবং আনন্দ করতে চান? যদি হ্যাঁ, আপনি জুয়া ক্লাবে লটারি গেম খেলা শুরু করতে পারেন৷ জুয়ার ক্লাবে লটারি গেম খেলে উত্তেজনাপূর্ণ অফার পাওয়া যায়."
  },
  {
    title: "লটারি খেলার পদ্ধতি কি??",
    content: "লটারি খেলা খুব সহজ। যে কেউ অনলাইন ক্যাসিনো গেম খেলে লটারি গেম খেলতে পারে। লটারি খেলতে আপনাকে অবশ্যই লটারি প্লেয়ার হিসেবে নিবন্ধন করতে হবে এবং অর্থ জমা করতে হবে। তারপর টাকা জমা দিয়ে টিকিট কিনুন. আসুন অপেক্ষা করা যাক ভাগ্যবান লটারি বিজয়ীর ফলাফলের জন্য."
  },
  {
    title: "Jaya9 এ লটারি খেলার সুবিধা কি কি?",
    content: "আপনি অনেক কারণে jaya9 অনলাইন ক্যাসিনোতে লটারি গেম খেলে থাকলে এটি সাহায্য করবে। এই লটারি গেম খেলার জন্য আমাদের কাছে কিছু সহজ গেমিং টিপস আছে। বিস্তারিত জানতে আমাদের ওয়েবসাইট দেখুন. এখনই আপনার অনলাইন লটারি টিকিট বাংলাদেশ পান! আপনি লটারি গেম খেলতে প্রয়োজন? আজই আপনার লটারি টিকিট অনলাইন বাংলাদেশ দেখুন। তারপর, Jaya9 জুয়া ক্লাবে আপনার ভাগ্যবান নম্বরগুলি আবিষ্কার করুন৷ তারপর, যখনই আপনি ক্যাসিনোতে লটারি গেম খেলবেন তখন আপনার ভাগ্যবান নম্বরটি খেলুন৷."
  },
  {
    title: "আজকের সেরা লটারি গেম 2022-23 ব্যবহার করে দেখুন",
    content: "বাংলাদেশে জয়া9 ক্লাবের চেয়ে সামাজিক জুয়ার ক্লাব খেলার জন্য আর কোন ভালো জায়গা নেই! ইন-গেম ফ্রি এক্সট্রা আপনি লেভেল বাড়ার সাথে সাথে আরও মূল্যবান হয়ে ওঠে।"
  },
  {
    title: "অনলাইন লটারি জিতুন এটিকে সরিয়ে দিয়ে!",
    content: "সর্বদা উচ্চ স্তরের খেলোয়াড় আছে যারা লটারি গেম খেলে এবং দ্রুত অর্থ উপার্জন করে। নিঃসন্দেহে, লটারি ক্যাসিনো বাজারে সবচেয়ে বিখ্যাত গেমগুলির মধ্যে একটি। খেলোয়াড়দের সম্পদ বৃদ্ধির জন্য এটি একটি দ্রুত এবং কার্যকর উপায়.আপনি কি এক রাতে ধনী হতে চান? এখন আপনি অনলাইনে বাংলাদেশ লটারির টিকিট কিনতে পারবেন। অনলাইন ক্যাসিনো বাংলাদেশ আপনার দিনটিকে আরও চিত্তাকর্ষক এবং লাভজনক করতে লটারি গেম অফার করে। বড় জয়ের জন্য বিশ্বের সেরা ক্যাসিনো গেম খেলুন. আজ আপনার ভাগ্যবান দিন। উপভোগ করুন! JAYA9 ক্যাসিনো 2023 | লাইভ ক্যাসিনো বাংলাদেশ | সেরা অনলাইন ক্রিকেট এক্সচেঞ্জ | বাংলাদেশের সেরা ক্রিকেট ক্যাসিনো"
  }
];
const dataEn = [
  {
    title: "Win the Lottery at Jaya9 – Trusted Lottery Platform",
    content: "Online lottery in Bangladesh is a type of online casino betting available in the country. It is one of the best lottery gaming platforms in the world for enjoying online casino games. Online lottery in Bangladesh is one of the most popular and oldest casino games, available at Jaya9, a trusted online casino in Bangladesh. Jaya9 casino offers various types and formats of lottery games. These games are easy for players to play. Do you want fun and excitement? If yes, you can start playing lottery games at the gambling club. Playing lottery games at the gambling club comes with exciting offers."
  },
  {
    title: "How to Play the Lottery?",
    content: "Playing the lottery is very easy. Anyone who plays online casino games can play lottery games. To play the lottery, you must first register as a lottery player and deposit funds. Then, purchase a ticket with the deposited money. Now, let’s wait for the lucky lottery winner’s results."
  },
  {
    title: "What Are the Benefits of Playing the Lottery at Jaya9?",
    content: "Playing lottery games at Jaya9 online casino offers many benefits. We have some easy gaming tips to help you play these lottery games. Visit our website for more details. Get your online lottery ticket in Bangladesh now! Do you need to play the lottery game? Check out your online lottery ticket in Bangladesh today. Then, discover your lucky numbers at the Jaya9 gambling club. Whenever you play a lottery game at the casino, play your lucky number!"
  },
  {
    title: "Try the Best Lottery Games of 2022-23 Today",
    content: "There is no better place to play social gambling club games in Bangladesh than Jaya9 Club! In-game free extras become more valuable as you level up."
  },
  {
    title: "Win Online Lottery by Trying It Now!",
    content: "There are always high-level players who play lottery games and earn money quickly. Undoubtedly, lottery casino games are among the most famous games in the market. It is a fast and effective way for players to increase their wealth. Do you want to become rich overnight? Now, you can buy lottery tickets online in Bangladesh. Online casino Bangladesh offers lottery games to make your day more exciting and profitable. Play the world’s best casino games for big wins. Today is your lucky day. Enjoy! JAYA9 Casino 2023 | Live Casino Bangladesh | Best Online Cricket Exchange | Best Cricket Casino in Bangladesh."
  }
];

const Jaya9LotteryFooter = () => {
  const { language } = useContext(LanguageContext);
              const data = language === "bn" ? dataBn : dataEn;
  return (
    <div className="">
      {data.map((item, index) => (
        <div key={index} className="mb-6 text-left">
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <p className="text-base">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Jaya9LotteryFooter;
