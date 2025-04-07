import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";


const dataBn = [
    {
      title: "বাংলাদেশের সেরা ক্রিকেট ক্যাসিনো | বাংলাদেশ শীর্ষ অনলাইন ক্যাসিনো | অনলাইন ক্যাসিনো বাংলাদেশ | অনলাইন ক্রিকেটে বাজি বাংলাদেশ",
      content: "জয়া9-এ আপনার ক্রিকেট ফিক্স পান- বাংলাদেশের সেরা ক্রিকেট ক্যাসিনো বাংলাদেশের সেরা ক্রিকেট ক্যাসিনো হল জয়া9, যেখানে আপনি ভাল সময় কাটাতে পারেন। আপনি ক্রিকেট ক্যাসিনোতে বিনামূল্যে এবং আসল অর্থ দিয়ে অনেক গেম খেলতে পারেন। বিভিন্ন ধরণের গেম ব্যবহার করে দেখুন, যা দুর্দান্ত কারণ আপনি প্রতিটি গেমটি কেমন তা সম্পর্কে ধারণা পাবেন।"
    },
    {
      title: "অনলাইন ক্যাসিনো বাংলাদেশে খেলুন এবং রোমাঞ্চের অভিজ্ঞতা নিন",
      content: "বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলা সবসময়ই ভালো। ক্যাসিনো খেলোয়াড়দের সেরা অনলাইন ক্যাসিনো বাংলাদেশ গেম খেলার সুযোগ দেয়। অনলাইন ক্যাসিনো Jaya9 খেলোয়াড়দের জন্য অনলাইন গেমের একটি দুর্দান্ত নির্বাচন অফার করে। উপরন্তু, এর মোবাইল গেমিং বৈশিষ্ট্যগুলির কারণে, খেলোয়াড়রা সম্পূর্ণ স্বাচ্ছন্দ্যে গেমিং উপভোগ করতে পারে৷"
    },
    {
      title: "জয়া9-এ বাংলাদেশের শীর্ষ অনলাইন ক্যাসিনো উপভোগ করুন",
      content: "আপনার আইডি এবং পাসওয়ার্ড ব্যবহার করে জয়া9 ক্যাসিনো অ্যাক্সেস করা যেতে পারে। এছাড়াও, আমাদের অনলাইন ক্যাসিনো গেমগুলি এখন jaya9.co-এ আপনার জন্য উপলব্ধ। আপনার প্রিয় অনলাইন ক্যাসিনো বাংলাদেশ খেলুন এবং অনলাইন স্লট পুরস্কার জিতুন। আজই আমাদের বিশ্বস্ত অনলাইন বাংলাদেশ ক্যাসিনো এজেন্সিতে যোগ দিন!"
    },
    {
      title: "বাংলাদেশের #1 অনলাইন ক্যাসিনো: নিরাপদ এবং বিশ্বস্ত",
      content: "বাংলাদেশের ক্যাসিনো ওয়েবসাইটে খেলার জন্য জয়া9 হল সঠিক প্ল্যাটফর্ম। আপনাকে অনলাইন ক্রিকেটে বাজি বাংলাদেশ খেলতে স্বাগতম। Jaya9 এর লক্ষ্য হল আপনার বাড়ি ছাড়াই ক্যাসিনোর সমস্ত মজা প্রদান করা। আপনি আমাদের সীমাহীন এবং সীমাহীন অনলাইন ক্যাসিনো গেমগুলি আপনার সেল ফোনে খেলতে পারেন যদি আপনার কাছে থাকে৷ আপনার যেকোনো প্রশ্নের উত্তর দিতে আমাদের সহায়তা দল 24/7 উপলব্ধ, তাই আজই খেলা শুরু করুন! অনলাইন ক্যাসিনো 2023 | লাইভ ক্যাসিনো বাংলাদেশ | ক্রিকেট ক্যাসিনো | অনলাইন ক্যাসিনো বাংলাদেশ"
    }
  ];
  const dataEn = [
    {
      title: "Best Cricket Casino in Bangladesh | Top Online Casino in Bangladesh | Online Casino Bangladesh | Online Cricket Betting Bangladesh",
      content: "Get your cricket fix at Jaya9 – the best cricket casino in Bangladesh! Jaya9 is the top cricket casino in Bangladesh, where you can have a great time. You can play many games at the cricket casino for free or with real money. Try out different types of games, which is great because it helps you understand how each game works."
    },
    {
      title: "Play Online Casino in Bangladesh and Experience the Thrill",
      content: "Playing casino games online in Bangladesh is always exciting. Casinos offer players the opportunity to enjoy the best online casino games in Bangladesh. The online casino Jaya9 provides players with an excellent selection of online games. Additionally, due to its mobile gaming features, players can enjoy gaming with complete convenience."
    },
    {
      title: "Enjoy the Top Online Casino in Bangladesh at Jaya9",
      content: "Jaya9 casino can be accessed using your ID and password. Additionally, our online casino games are now available for you at jaya9.co. Play your favorite online casino games in Bangladesh and win online slot rewards. Join our trusted online Bangladesh casino agency today!"
    },
    {
      title: "Bangladesh's #1 Online Casino: Safe and Trusted",
      content: "Jaya9 is the right platform to play on Bangladesh’s casino website. Welcome to online cricket betting in Bangladesh. Jaya9 aims to bring all the fun of a casino without leaving your home. You can play our unlimited online casino games on your mobile phone if you have one. Our support team is available 24/7 to answer any of your questions, so start playing today! Online Casino 2023 | Live Casino Bangladesh | Cricket Casino | Online Casino Bangladesh."
    }
  ];

  
  const BangladeshSeraCasino = () => {
    const { language } = useContext(LanguageContext);
        const data = language === "bn" ? dataBn : dataEn;
    return (
      <div className="">
        {data.map((item, index) => (
          <div key={index} className="text-left mb-6">
            <h3 className="text-2xl font-sans font-bold">{item.title}</h3>
            <p className="text-base font-sans">{item.content}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default BangladeshSeraCasino;
  