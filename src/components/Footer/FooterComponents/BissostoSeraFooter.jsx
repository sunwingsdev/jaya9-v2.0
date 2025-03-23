import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";


const BissostoSeraFooter = () => {
    
const { language } = useContext(LanguageContext);
    

    return (
        <div className="text-left font-sans p-4">
            
                

            {language === "bn" ? (
                <p>
                    বিশ্বস্ত সেরা অনলাইন ক্রিকেট এক্সচেঞ্জ (বিনিময়), বাংলাদেশ এবং দক্ষিণ এশিয়ার 
                    বেটিং(বাজি খেলার) সাইট (স্থান) অনলাইন ক্রিকেট, লাইভ ক্রিকেট, লাইভ ক্যাসিনো, 
                    ফুটবল, স্লট গেম এবং টেবিল গেমের জন্য JAYA9 হল ইন্টারনেটে সবচেয়ে বিখ্যাত 
                    অনলাইন বেটিং(বাজি খেলার) সাইট (স্থান)গুলির মধ্যে একটি। কিন্তু JAYA9 সম্পর্কে 
                    সবচেয়ে ভালো জিনিস হল একবার ম্যাচ শুরু হলে, আপনি ম্যাচের সময় খেলার মধ্যে 
                    বাজি রাখতে পারেন। JAYA9 সব দেশের জন্য একাধিক মুদ্রা অফার করে, মানে বিভিন্ন 
                    দেশের কারেন্সি দিয়ে খেলতে পারবেন। এখন বাংলাদেশের খেলোয়াড়রা স্থানীয় জারা 
                    আছেন তারা BDT দিয়ে বাজি উপভোগ করতে পারবেন। আপনি যখন JAYA9 অনলাইন বাজির 
                    সাইটে প্রবেশ করবেন, তখন আপনি JAYA9 সম্পর্কে সমস্ত কিছু জানতে পারবেন এবং 
                    JAYA9-এ বাজি রাখা কীভাবে সহজ, শুধুমাত্র সেই খেলার ম্যাচটিতে ক্লিক করুন যা 
                    আপনার পক্ষে। JAYA9 দ্রুত এবং নিরাপদ লেনদেনের সাথে বিভিন্ন অর্থপ্রদানের পদ্ধতি 
                    ব্যবহার করে খেলোয়াড়দের বেংক একাউন্ট এ সহজে সরাসরি টাকা জমা করতে পারবে।
                </p>
            ) : (
                <p>
                    Trusted best online cricket exchange, one of the most famous online betting sites 
                    on the internet for online cricket, live cricket, live casino, football, slot games, 
                    and table games in Bangladesh and South Asia. But the best thing about JAYA9 is that 
                    once the match starts, you can place bets during the game. JAYA9 offers multiple 
                    currencies for all countries, meaning you can play with different currencies. Now, 
                    Bangladeshi players can enjoy betting with BDT. When you enter the JAYA9 online 
                    betting site, you will learn everything about JAYA9 and how easy it is to place bets. 
                    Simply click on the match that suits you. JAYA9 allows players to deposit money 
                    directly into their bank accounts using various payment methods with fast and secure 
                    transactions.
                </p>
            )}
        </div>
    );
};

export default BissostoSeraFooter;
