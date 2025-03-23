

import EditProfile from "./EditProfile";
import MemberInformation from "./MemberInformation";
import SecondaryNumber from "./SecondaryNumber";
import VerifyOtp from "./VerifyOtp";

const MemberInfoDetails = ({memberInfo,language,setIsEditOpen,setIsOtpOpen,setIsAddNumberOpen,isEditOpen,handleSubmit,formData,handleChange,isAddNumberOpen,otp,handleChangeOtp,handleReload,generatedOtp,isOtpOpen}) => {
  const isBengali = language === "bn";  
  return (
        <div className="lg:mt-12 bg-memberProfileColor mt-20  pt-8 shadow-lg rounded-lg ">
          {/* Member Information */}
          <MemberInformation
           memberInfo={memberInfo}
          isBengali={isBengali}
          setIsEditOpen={setIsEditOpen}
          setIsOtpOpen={setIsOtpOpen}
          setIsAddNumberOpen={setIsAddNumberOpen}
          />
          {/* Edit Profile Modal */}
          <EditProfile 
          isEditOpen={isEditOpen}
          setIsEditOpen={setIsEditOpen}
          handleSubmit={handleSubmit}
          isBengali={isBengali}
          formData={formData}
          handleChange={handleChange}
          />

          {/* Add Secondary Number Modal */}
          <SecondaryNumber 
          isAddNumberOpen={isAddNumberOpen}
          setIsAddNumberOpen={setIsAddNumberOpen}
          isBengali={isBengali}
          otp={otp}
          handleChangeOtp={handleChangeOtp}
          handleReload={handleReload}
          generatedOtp={generatedOtp}
          memberInfo={memberInfo}
          />

          {/* Verify OTP Modal */}
          <VerifyOtp
          isOtpOpen={isOtpOpen}
          setIsOtpOpen={setIsOtpOpen}
          isBengali={isBengali}
          otp={otp}
          handleChangeOtp={handleChangeOtp}
          handleReload={handleReload}
          generatedOtp={generatedOtp}
          memberInfo={memberInfo}

          />
        </div>
    );
};

export default MemberInfoDetails;