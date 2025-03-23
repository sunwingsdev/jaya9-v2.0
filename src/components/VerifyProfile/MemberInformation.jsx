import warninglogo from "../../assets/warning.svg";

const MemberInformation = ({memberInfo,isBengali,setIsEditOpen,setIsOtpOpen,setIsAddNumberOpen}) => {
    return (
        <div>
           <div>
            <div className="flex justify-between hover:bg-gray-500 border-b border-black p-3 items-center mb-4">
              <div className="flex flex-col ">
                <h2 className="text-xl font-semibold">{isBengali ? "ব্যবহারকারীর নাম" : "Username"}</h2>
                <p className="text-memberinfotextcolor font-bold">
                  {" "}
                  {memberInfo.username}
                </p>
              </div>
              <button
                onClick={() => setIsEditOpen(true)}
                className="text-memberinfotextcolor text-sm font-bold underline"
              >
                {isBengali ? "প্রোফাইল সম্পাদনা করুন" : "Edit Profile"}
              </button>
            </div>

            {/* Mobile Number */}
            <div className="border-b border-black hover:bg-gray-500 p-3">
              <h3 className="text-lg font-semibold">{isBengali ? "মোবাইল নম্বর" : "Mobile Number"}</h3>
              <div className="flex justify-between gap-2  items-center">
                <p className="text-memberinfotextcolor font-bold">
                  {memberInfo.mobile}
                </p>
                <div
                  className="flex flex-row items-center gap-2"
                  onClick={() => setIsOtpOpen(true)}
                >
                  <button className="text-memberinfotextcolor text-sm font-bold underline">
                  {isBengali ? "ওটিপি যাচাই করুন" : "Verify OTP"}
                  </button>
                  <img src={warninglogo} alt="" className="w-8 h-auto" />
                </div>
              </div>
              <button
                onClick={() => setIsAddNumberOpen(true)}
                className="mt-2 text-white bg-common-blue p-1 rounded-lg "
              >
                 {isBengali ? "+ অতিরিক্ত নম্বর যোগ করুন" : "+ Add Secondary Number"}
              </button>
            </div>

            {/* Email & Other Info */}
            <div className="mt-4 ">
              <p className="flex flex-col p-3 border-b hover:bg-gray-500 border-black">
                <strong>{isBengali ? "ইমেইল" : "Email"}</strong>{" "}
                <span className="text-memberinfotextcolor font-bold">
                  {memberInfo.email}
                </span>
              </p>
              <p className="flex flex-col border-b hover:bg-gray-500 border-black p-3">
                <strong>{isBengali ? "জন্ম তারিখ" : "Date of Birth"}</strong>{" "}
                <span
                  className="text-memberinfotextcolor
          font-bold"
                >
                  {memberInfo.dob}
                </span>
              </p>
              <p className="flex flex-col border-b hover:bg-gray-500 border-black p-3">
                <strong>{isBengali ? "মুদ্রা" : "Currency"}</strong>{" "}
                <span className="text-memberinfotextcolor font-bold">BDT</span>
              </p>
            </div>
          </div> 
        </div>
    );
};

export default MemberInformation;