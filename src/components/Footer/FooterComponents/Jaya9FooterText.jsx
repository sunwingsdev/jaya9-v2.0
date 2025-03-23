import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";

const Jaya9FooterText = () => {
    const sectionsBn = [
      {
        title:
          "Jaya9 & Joya9 | Jaya9 Login | Joya 9 Vip | Jaya 9 Trusted Online Cricket Betting",
        content: "",
      },
      {
        title:
          "বিশ্বস্ত সেরা অনলাইন ক্রিকেট এক্সচেঞ্জ (বিনিময়), বাংলাদেশ এবং দক্ষিণ এশিয়ার বেটিং(বাজি খেলার)সাইট (স্থান)",
        content: `
            অনলাইন ক্রিকেট, লাইভ ক্রিকেট, লাইভ ক্যাসিনো, ফুটবল, স্লট গেম এবং টেবিল গেমের জন্য JAYA9 হল ইন্টারনেটে সবচেয়ে বিখ্যাত অনলাইন বেটিং(বাজি খেলার) সাইট (স্থান)গুলির মধ্যে একটি।কিন্তু JAYA9 সম্পর্কে সবচেয়ে ভালো জিনিস হল একবার ম্যাচ শুরু হলে, আপনি ম্যাচের সময় খেলার মধ্যে বাজি রাখতে পারেন। 
  
  JAYA9 সব দেশের জন্য একাধিক মুদ্রা অফার করে, মানে বিভিন্ন দেশের কারেন্সি দিয়ে খেলতে পারবেন।এখন বাংলাদেশের খেলোয়াড়রা স্থানীয় জারা আছেন তারা BDT দিয়ে বাজি উপভোগ করতে পারবেন। আপনি যখন JAYA9 অনলাইন বাজির সাইটে প্রবেশ করবেন, তখন আপনি JAYA9 সম্পর্কে সমস্ত কিছু জানতে পারবেন এবং JAYA9-এ বাজি রাখা কীভাবে সহজ, শুধুমাত্র সেই খেলার ম্যাচটিতে ক্লিক করুন যা আপনার পক্ষে। JAYA9 দ্রুত এবং নিরাপদ লেনদেনের সাথে বিভিন্ন অর্থপ্রদানের পদ্ধতি ব্যবহার করে খেলোয়াড়দের বেংক একাউন্ট এ সহজে সরাসরি টাকা জমা করতে পারবে।
          `,
      },
      {
        title: "এক্সক্লুসিভ অনলাইন ক্যাসিনো 2024 বাংলাদেশ ক্রিকেট বেটিং খেলুন",
        content: `
            আপনি কি খুঁজছেন বাংলাদেশের সেরা ক্রিকেট ক্যাসিনো? যদি হ্যাঁ, তাহলে বাংলাদেশের শীর্ষ অনলাইন ক্যাসিনো - JAYA9-এ স্বাগতম! অনলাইন স্লট গেম খেলার জন্য, ক্রিকেটে বাজি ধরা, লাইভ গেমস এবং jaya9 ক্যাসিনোর চেয়ে ভালো জায়গা আর নেই!
  
  JAYA9 হল একটি অনলাইন ক্যাসিনো যা বাংলাদেশী খেলোয়াড়দের বিভিন্ন ধরনের JAYA9 ক্যাসিনো 2024 ক্যাসিনো গেম অফার করে। এছাড়াও, রুলেট, ব্যাকার্যাট এবং পোকার লাইভ করতে, আপনি অনলাইনে টেবিল গেম খেলতে পারেন। আপনি যখনই চান, আপনি বিনামূল্যে সেরা অনলাইন ক্রিকেট এক্সচেঞ্জ গেমের বিস্তৃত পরিসরে অ্যাক্সেস করতে পারেন।
          `,
      },
      {
        title: "ক্যাসিনো বাংলাদেশে সর্বশেষ স্লট গেমস",
        content: `
            JAYA9-এ, অনলাইন স্লট হল সবচেয়ে জনপ্রিয় গেম। 3-রিল গেমের একটি ক্লাসিক সংগ্রহ থেকে আধুনিক ভিডিও স্লট পর্যন্ত, এই পোর্টফোলিও অনলাইন স্লটের একটি বিস্তৃত পরিসর অফার করে। এছাড়াও, অনলাইন স্লটগুলি বিভিন্ন থিমে উপলব্ধ যার অর্থ হল সমস্ত স্লট খেলোয়াড়রা তাদের পছন্দের স্লট গেমগুলি খুঁজে পাওয়ার গ্যারান্টিযুক্ত৷
          `,
      },
      {
        title: "বাংলাদেশে রিয়েল-টাইম অনলাইন ক্যাসিনো গেম খেলুন",
        content: `
            রিয়েল-টাইম ক্যাসিনো গেমগুলি JAYA9-এ উপলব্ধ। রিয়েল-টাইম গেমগুলির সাথে, খেলোয়াড়রা মনে করেন যে তারা জমি-ভিত্তিক ক্যাসিনো বাংলাদেশ। আপনি ডিলারের মিথস্ক্রিয়া থেকে শুরু করে বড় ক্যাসিনো জয় পর্যন্ত সবকিছুতেই বাস্তবতা অনুভব করতে পারেন।
          `,
      },
      {
        title: "আইওএস এবং অ্যান্ড্রয়েডের জন্য JAYA9 অফার ক্রিকেট বেটিং অ্যাপ",
        content: `
            ক্যাসিনো গেমিংকে আপনার জন্য আরামদায়ক করতে, Jaya9 ক্যাসিনোতে jaya9 মোবাইল অ্যাপ্লিকেশনের সর্বশেষ সংস্করণও রয়েছে। JAYA9 সেরা ক্যাসিনো অ্যাপ, যেখানে খেলোয়াড়রা আপনার বাসা, অফিস, পার্ক, মল বা অন্য যেকোনো জায়গা থেকে আমাদের যেকোনো ক্যাসিনো গেম খেলতে পারে।
          `,
      },
      {
        title: "প্রায়শই জিজ্ঞাসিত প্রশ্ন:",
        content: `
           বাংলাদেশে একটি ক্যাসিনোতে সাইন আপ বোনাস কি?
  সর্বোত্তম স্বাগত বোনাসের জন্য যোগ্যতা অর্জন করার জন্য একটি আমানত করা এবং একটি অ্যাকাউন্ট প্রতিষ্ঠা করাই আপনার প্রয়োজন৷ আপনি প্রথম পাঁচটি আমানতের উপর প্রণোদনা পাবেন।
          `,
      },
      {
        title: "মোবাইল ক্যাসিনো গেম উপলব্ধ?",
        content: `
            একটি ব্যবহারকারী-বান্ধব মোবাইল সংস্করণ Android এবং iOS ডিভাইসগুলির জন্য jaya9 থেকে উপলব্ধ, যা একটি অনলাইন ক্যাসিনো বিকল্পও অফার করে৷
          `,
      },
      {
        title: "জয়া9 বাংলাদেশ কয়টি ক্যাসিনো গেম অফার করে?",
        content: `
           খেলোয়াড়রা jaya9 ক্যাসিনোতে স্লট গেম, লাইভ গেমস, বাংলাদেশ ক্রিকেট বেটিং, এবং আরও অনেক কিছু অন্যান্য ব্যতিক্রমী ক্যাসিনো গেম উপভোগ করতে পারে, যা বিভিন্ন প্রদানকারীর থেকে অনলাইন স্লট মেশিন অফার করে।
          `,
      },
    ];
    const sectionsEn = [
      {
        "title": "Jaya9 & Joya9 | Jaya9 Login | Joya 9 VIP | Jaya 9 Trusted Online Cricket Betting",
        "content": ""
      },
      {
        "title": "The Most Trusted Online Cricket Exchange in Bangladesh & South Asia",
        "content": "JAYA9 is one of the most famous online betting sites on the internet for online cricket, live cricket, live casino, football, slot games, and table games. But the best thing about JAYA9 is that once a match starts, you can place bets during the game.JAYA9 offers multiple currencies for all countries, meaning you can play using different currencies. Now, Bangladeshi players can enjoy betting with BDT. When you enter the JAYA9 online betting site, you will learn everything about JAYA9 and how easy it is to place bets—just click on the match that suits you. JAYA9 allows players to deposit money directly into their bank accounts using various payment methods with fast and secure transactions."
      },
      {
        "title": "Exclusive Online Casino 2024 – Play Bangladesh Cricket Betting",
        "content": "Are you looking for the best cricket casino in Bangladesh? If yes, then welcome to JAYA9—the top online casino in Bangladesh! There is no better place than JAYA9 casino for playing online slot games, betting on cricket, and live games.JAYA9 is an online casino that offers a variety of JAYA9 casino 2024 games for Bangladeshi players. Additionally, to experience roulette, baccarat, and poker live, you can play table games online. Whenever you want, you can access a wide range of free online cricket exchange games."
      },
      {
        "title": "Latest Slot Games in Bangladesh Casino",
        "content": "At JAYA9, online slots are the most popular games. From a classic collection of 3-reel games to modern video slots, this portfolio offers a wide range of online slots. Additionally, online slots are available in different themes, meaning all slot players are guaranteed to find their favorite slot games."
      },
      {
        "title": "Play Real-Time Online Casino Games in Bangladesh",
        "content": "Real-time casino games are available at JAYA9. With real-time games, players feel as if they are in a land-based casino in Bangladesh. You can experience realism in everything, from dealer interactions to big casino wins."
      },
      {
        "title": "JAYA9 Offers Cricket Betting App for iOS and Android",
        "content": "To make casino gaming more convenient for you, Jaya9 Casino also has the latest version of the JAYA9 mobile application. JAYA9 is the best casino app, where players can play any of our casino games from home, office, park, mall, or any other location."
      },
      {
        "title": "Frequently Asked Questions:",
        "content": "What is the sign-up bonus in a Bangladesh casino?To qualify for the best welcome bonus, all you need to do is make a deposit and create an account. You will receive incentives on your first five deposits."
      },
      {
        "title": "Are mobile casino games available?",
        "content": "A user-friendly mobile version is available from JAYA9 for Android and iOS devices, which also offers an online casino option."
      },
      {
        "title": "How many casino games does JAYA9 Bangladesh offer?",
        "content": "Players can enjoy slot games, live games, Bangladesh cricket betting, and many other exceptional casino games at JAYA9 casino, which offers online slot machines from various providers."
      }
    ];
    const { language } = useContext(LanguageContext);
      const sections = language === "bn" ? sectionsBn : sectionsEn;
  
    return (
      <div className="">
        
        {sections.map((section, index) => (
          <div key={index} className="mb-6 text-left">
            <h3 className="text-2xl font-sans font-bold">{section.title}</h3>
            {section.content && <p className="mt-2">{section.content}</p>}
          </div>
        ))}
      </div>
    );
  };
  
  export default Jaya9FooterText;
  