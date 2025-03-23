import { useContext, useState, useEffect, useMemo } from "react";
import memberLogo from "../assets/memberpic.svg";
import MemberInfo from "../components/VerifyProfile/MemberInfo";
import MemberInfoDetails from "../components/VerifyProfile/MemberInfoDetails";
import { LanguageContext } from "../Context/LanguageContext";

const VerifyProfile = () => {
  const { language } = useContext(LanguageContext);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddNumberOpen, setIsAddNumberOpen] = useState(false);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(memberLogo);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(generateOtp());

  const handleChangeOtp = (e) => {
    setOtp(e.target.value);
  };

  const handleReload = () => {
    setGeneratedOtp(generateOtp());
    setOtp("");
  };

  const memberInfoBn = useMemo(() => ({
    username: "রোহান",
    email: "rakibuhasanrakib@gmail.com",
    dob: "১৯৯৫-০৫-১২",
    mobile: "+৮৮০ ******৮০০২",
    currency: "বিডিটি",
    fullname: "রোহান চৌধুরী",
  }), []);

  const memberInfoEn = useMemo(() => ({
    username: "Rohan",
    email: "rakibuhasanrakib@gmail.com",
    dob: "1995-05-12",
    mobile: "+880 ******8002",
    currency: "BDT",
    fullname: "Rohan Chowdhury",
  }), []);
  
  // Initial state set based on the language
  const [memberInfo, setMemberInfo] = useState(
    language === "bn" ? memberInfoBn : memberInfoEn
  );

  const [formData, setFormData] = useState(memberInfo);

  // Update memberInfo when language changes
  useEffect(() => {
    setMemberInfo(language === "bn" ? memberInfoBn : memberInfoEn);
    setFormData(language === "bn" ? memberInfoBn : memberInfoEn);
  }, [language, memberInfoBn, memberInfoEn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMemberInfo(formData);
    setIsEditOpen(false);
    console.log(formData);
  };

  return (
    <div className="mx-auto max-w-2xl pb-5 lg:max-w-3xl px-4 lg:px-0 min-h-screen mt-12 relative">
      <MemberInfo language={language} profileImage={profileImage} handleImageChange={handleImageChange} />

      <div>
        <MemberInfoDetails
        language={language}
          memberInfo={memberInfo}
          setIsEditOpen={setIsEditOpen}
          isOtpOpen={isOtpOpen}
          setIsOtpOpen={setIsOtpOpen}
          setIsAddNumberOpen={setIsAddNumberOpen}
          isEditOpen={isEditOpen}
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
          isAddNumberOpen={isAddNumberOpen}
          otp={otp}
          handleChangeOtp={handleChangeOtp}
          handleReload={handleReload}
          generatedOtp={generatedOtp}
        />
      </div>
    </div>
  );
};

export default VerifyProfile;
