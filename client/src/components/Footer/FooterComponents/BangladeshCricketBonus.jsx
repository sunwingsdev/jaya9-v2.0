import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";


const dataBn = [
  {
    title: "বাংলাদেশের সেরা ক্রিকেট ক্যাসিনো বোনাস 2022-2023: আপনার টাকা দ্বিগুণ করুন!",
    content: "Jaya9 চমত্কার অফার jaya9 প্রচার 4D লোটো, লাইভ ক্যাসিনো, স্লট এবং এস্পোর্টস বাজিতে ছাড়ের হার। প্রতি সপ্তাহে খেলোয়াড়দের জন্য নগদ ছাড় পাওয়া যায় যতক্ষণ তারা খেলে! প্রতিটি খেলোয়াড় একটি সাপ্তাহিক 7 দিনের সময়ের উপর ভিত্তি করে একটি নগদ ছাড় পাবেন.jaya9-এর ভিআইপি সদস্যরা এই প্রচার থেকে আরও বেশি উপকৃত হবেন কারণ তারা নগদ ছাড়ের অনেক বেশি শতাংশ পাবেন। jaya9 খেলে এখনই আপনার ছাড় পান!"
  },
  {
    title: "সেরা পান ক্রিকেট ওয়েলকাম বোনাস অনলাইন ক্যাসিনো বাংলাদেশ 2023",
    content: "বাংলাদেশের অনলাইন ক্যাসিনোগুলিকে অবশ্যই অফার এবং প্রচারগুলি নিয়ে আসতে সক্ষম হতে হবে যা আরও নতুন ক্লায়েন্টদের আকর্ষণ করতে পারে এবং তাদের বিদ্যমানগুলিকে এই ধরনের তীব্র প্রতিযোগিতার মুখে রাখতে পারে। বিপণন তাজা এবং আকর্ষণীয় প্রচার তৈরিতে একটি মূল ভূমিকা পালন করে.বর্তমান প্রবণতার ফলস্বরূপ, অনলাইন ক্যাসিনোগুলিকে টিকে থাকতে বা প্রতিদ্বন্দ্বিতা করার জন্য উদ্ভাবনী এবং সৃজনশীল হতে হবে."
  },
  {
    title: "আমাদের ভিআইপি প্রচারগুলি উপভোগ করতে জয়া9 অনলাইন ক্যাসিনো ভিআইপি-তে যোগ দিন",
    content: "jaya9-এর ভিআইপি প্রোগ্রাম তার ভিআইপি সদস্যদের সবকিছুর সেরা অফার করে। সময়ে সময়ে, আমরা আমাদের ভিআইপি সদস্যদের নগদ ছাড়, রেফারেল এবং বোনাস অফার করব. আপনি কি এখনও জয়া9 এর ভিআইপি প্রোগ্রামে যোগ দিয়েছেন? তারপর, পরবর্তী স্তরে আপনার খেলা আনুন! এখন আরো বিস্তারিত জানার জন্য আমাদের ওয়েবসাইট দেখুন. FAQs: একটি ক্যাসিনো স্বাগত বোনাস কি? স্বাগতম বোনাস হল ক্যাসিনো থেকে বিনামূল্যের অফার যা সাধারণত একজন খেলোয়াড়ের প্রথম জমার জন্য বৈধ। সাইন আপ বোনাস হিসাবে পরিচিত, jaya9 আপনাকে একটি অফার করে Crickক্রিকেট ওয়েলকাম বোনাস অনলাইন ক্যাসিনো বাংলাদেশ 2023, তাই আপনি বড় জয় উপভোগ করতে থাকুন এবং বড় খেলতে থাকুন! কিভাবে ক্যাসিনো বোনাস সীমাবদ্ধ? অনেক ক্যাসিনো আছে যেগুলো সব ডিপোজিটে ডিপোজিট বোনাস অফার করে, কিন্তু কিছুর সীমা আছে। ডিপোজিট বোনাস, উদাহরণস্বরূপ, $100 এর বেশি ডিপোজিটের মধ্যে সীমাবদ্ধ হতে পারে। আপনার ক্রেডিট কার্ড ব্যবহার করার আগে এই তথ্য খুঁজে বের করতে ভুলবেন না.ক্যাসিনো বাংলাদেশ | লাইভ ক্যাসিনো বাংলাদেশ | বাংলাদেশ ক্রিকেট বেটিং | বাংলাদেশের শীর্ষ অনলাইন ক্যাসিনো "


  }
];
const dataEn = [
  {
    title: "Best Cricket Casino Bonus in Bangladesh 2022-2023: Double Your Money!",
    content: "Jaya9 offers fantastic promotions with discounted rates on 4D Lotto, Live Casino, Slots, and Esports betting. Players can receive cashback every week as long as they keep playing! Each player will receive a cashback based on a weekly 7-day period. Jaya9's VIP members will benefit even more from this promotion, as they will receive a much higher cashback percentage. Play at Jaya9 now and claim your cashback!"
  },
  {
    title: "Get the Best Cricket Welcome Bonus at Online Casino Bangladesh 2023",
    content: "Online casinos in Bangladesh must offer promotions and deals that attract new clients and retain existing ones in this highly competitive market. Marketing plays a key role in creating fresh and engaging promotions. Due to current trends, online casinos must be innovative and creative to survive and compete."
  },
  {
    title: "Join Jaya9 Online Casino VIP to Enjoy Our Exclusive VIP Promotions",
    content: "Jaya9's VIP program offers the best benefits to its VIP members. From time to time, we provide our VIP members with cashback, referral rewards, and bonus offers. Have you joined Jaya9’s VIP program yet? If not, take your gaming to the next level! Visit our website now for more details.  FAQs:  What is a casino welcome bonus?**  A welcome bonus is a free offer from the casino, usually valid for a player’s first deposit. Also known as a sign-up bonus, Jaya9 offers you a **Cricket Welcome Bonus at Online Casino Bangladesh 2023**, so you can keep enjoying big wins and high-stakes gameplay! -How are casino bonuses restricted?** Many casinos offer deposit bonuses on all deposits, but some have limits. For example, a deposit bonus may be limited to deposits above $100. Always check this information before using your credit card.Casino Bangladesh | Live Casino Bangladesh | Bangladesh Cricket Betting | Top Online Casino in Bangladesh**"
  }
];


const BangladeshCricketBonus = () => {
  const { language } = useContext(LanguageContext);
                const data = language === "bn" ? dataBn : dataEn;
  return (
    <div className="">
      {data.map((item, index) => (
        <div key={index} className=" mb-6 text-left text-sm lg:text-md">
          <h3 className="text-2xl font-sans font-bold">{item.title}</h3>
          <p className="text-base font-sans">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BangladeshCricketBonus;
