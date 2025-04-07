import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";


const dataBn = [
  {
    title: "Jaya9 - প্লে এক্সক্লুসিভ অনলাইন ক্যাসিনো স্লট বাংলাদেশ",
    content: "jaya9 অনলাইন ক্যাসিনোতে, অনলাইন স্লট গেম বাংলাদেশ অনেক বৈচিত্রে উপলব্ধ। একটি নতুন শিরোনাম প্রতি একক গেম মুক্তি হয়. এটি অনলাইন স্লট উত্সাহীদের জন্য একটি ভাল জিনিস যারা নিয়মিত নতুন গেম খেলতে উপভোগ করেন৷"
  },
  {
    title: "আমাদের গেমিং বর্ণনা দেখুন",
    content: "তবে কিছু খেলোয়াড়ের জন্য এটি বিভ্রান্তিকর হতে পারে, কারণ বেছে নেওয়ার জন্য অনেক স্লট রয়েছে। কখনও কখনও খেলার জন্য সঠিক স্লট খুঁজে পাওয়া কঠিন হতে পারে। আমাদের অনলাইন ক্যাসিনো স্লট বাংলাদেশ ক্যাটালগে শুধুমাত্র সেরা ক্যাসিনো স্লট গেমগুলি রয়েছে যা আপনি খেলতে পারেন, তাই আমরা সেগুলিকে আমাদের ক্যাটালগে অন্তর্ভুক্ত করেছি৷"
  },
  {
    title: "আমাদের ক্যাসিনোতে সবচেয়ে জনপ্রিয় স্লট মেশিন",
    content: "একটি বোতামে এক ক্লিকে, আমরা আপনাকে সব সেরা অনলাইন স্লট মেশিন দেখাব। এখানে অনুসন্ধান করা হচ্ছে, এবং এটি প্রয়োজনীয় নয়। এটি আমাদের জনপ্রিয় স্লট মেশিনগুলির নির্বাচন পরীক্ষা করার মতোই সহজ। নীচে তালিকাভুক্ত হল সবচেয়ে জনপ্রিয় JAYA9 অনলাইন স্লট যা খেলোয়াড়রা চেষ্টা করতে আগ্রহী৷ শীর্ষ-র্যাঙ্কযুক্ত JAYA9 অনলাইন ক্যাসিনো স্লটগুলি রিলগুলিকে স্পিনিংকে আগের চেয়ে আরও উত্তেজনাপূর্ণ করে তোলে৷ আমরা এক নম্বর অনলাইন স্লট ক্যাসিনো যা অনেক নতুন খেলোয়াড়দের দ্বারা বেছে নেওয়া হয়েছে যারা এই দুর্দান্ত গেমগুলি উপভোগ করতে চায়৷ স্লটের পাশাপাশি, JAYA9 এবং অন্যান্য প্রদানকারীরা লাইভ ক্যাসিনো গেমের পাশাপাশি বোর্ড গেম অফার করে। আপনি এই সব JAYA9 ক্যাসিনো গেম 24*7 খেলতে পারেন। ক্যাসিনো বাংলাদেশ | লাইভ ক্যাসিনো বাংলাদেশ | বাংলাদেশ ক্রিকেট বেটিং | বাংলাদেশের শীর্ষ অনলাইন ক্যাসিনো"
  }
];
const dataEn = [
  {
    title: "Jaya9 - Play Exclusive Online Casino Slots in Bangladesh",
    content: "At Jaya9 online casino, a wide variety of online slot games are available in Bangladesh. A new title is released for every single game. This is a great advantage for online slot enthusiasts who enjoy playing new games regularly."
  },
  {
    title: "Check Out Our Gaming Descriptions",
    content: "However, for some players, this can be confusing because there are so many slots to choose from. Sometimes, finding the right slot to play can be difficult. Our online casino slots Bangladesh catalog only includes the best casino slot games that you can play, which is why we have included them in our catalog."
  },
  {
    title: "The Most Popular Slot Machines at Our Casino",
    content: "With just a single click of a button, we will show you all the best online slot machines. Searching here is unnecessary. It’s as easy as checking out our selection of popular slot machines. Below is a list of the most popular JAYA9 online slots that players are eager to try. The top-ranked JAYA9 online casino slots make spinning the reels more exciting than ever before. We are the number one online slot casino chosen by many new players who want to enjoy these fantastic games. In addition to slots, JAYA9 and other providers offer live casino games as well as board games. You can play all these JAYA9 casino games 24/7. Casino Bangladesh | Live Casino Bangladesh | Bangladesh Cricket Betting | Top Online Casino in Bangladesh."
  }
];


const Jaya9PlayFooter = () => {
  const { language } = useContext(LanguageContext);
    const data = language === "bn" ? dataBn : dataEn;
  return (
    <div className="">
      {data.map((item, index) => (
        <div key={index} className=" mb-6 text-left">
          <h3 className="text-2xl font-sans font-bold">{item.title}</h3>
          <p className="text-base font-sans">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Jaya9PlayFooter;
