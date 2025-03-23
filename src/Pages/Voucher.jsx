import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

const Voucher = () => {
  const { language } = useContext(LanguageContext);

  const text = {
    bn: {
      claimVoucher: "দাবি ভাউচার",
      applyVoucher: "ভাউচার প্রয়োগ করুন",
      enterVoucher: "ভাউচার কোড লিখুন",
      submit: "জমা দিন",
    },
    en: {
      claimVoucher: "Claim Voucher",
      applyVoucher: "Apply Voucher",
      enterVoucher: "Enter Voucher Code",
      submit: "Submit",
    },
  };

  return (
    <div className="bg-informationBackground pb-2">
      <div className="mx-auto max-w-3xl bg-white">
        <div>
          <div className="justify-items-start md:justify-items-center lg:justify-items-start items-center">
            <div className="pl-16 py-5">
              <h3 className="text-lg text-left mb-5">
                {text[language].claimVoucher}
              </h3>
              <h3 className="pb-1">{text[language].applyVoucher}</h3>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder={text[language].enterVoucher}
                className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-common-orange"
              />
              <button className="mt-5 block px-3 py-1 rounded-lg text-white bg-common-blue text-left">
                {text[language].submit}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
