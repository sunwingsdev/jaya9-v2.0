

const EditProfile = ({isEditOpen,setIsEditOpen,handleSubmit,isBengali,formData,handleChange}) => {
    return (
        <div>
           {isEditOpen && (
            <div
              className="fixed inset-0 z-50 px-3 lg:px-0 bg-gray-800 bg-opacity-50 flex justify-center items-center "
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsEditOpen(false); // Modal বন্ধ হবে যদি বাহিরের জায়গায় ক্লিক করা হয়
                }
              }}
            >
              <div className="bg-white h-2/3 overflow-y-auto lg:h-auto  w-96 ">
                <div className="px-3 py-6 text-white font-semibold bg-common-blue flex flex-row items-center">
                  <h2 className="text-lg w-full ">Edit Profile</h2>
                  <button
                    onClick={() => setIsEditOpen(false)}
                    className="mt-2 text-gray-500 l"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className=" p-4 space-y-4  rounded-lg"
                >
                  <div>
                    <label className="block font-medium">
                      
                      
                      {isBengali ? "ইমেইল" : "E-mail"}
                      </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-500 rounded"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">
                      
                      {isBengali ? "ব্যবহারকারীর নাম" : "User Name"}
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full p-2 order border border-gray-500 rounded"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">

                    {isBengali ? "জন্ম তারিখ" : "Birth Date"}
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full p-2 order border border-gray-500 rounded"
                    />
                  </div>

                  <div>
                    <label className="block font-medium">
                      
                      {isBengali ? "মোবাইল নম্বর" : "Phone Number"}
                      </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full p-2 order border border-gray-500 rounded"
                    />
                  </div>

                  <div>
                    <label className="block font-medium">

                    {isBengali ? "পুরো নাম" : "Full Name"}
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={formData.fullname}
                      onChange={handleChange}
                      className="w-full p-2 order border border-gray-500 rounded"
                    />
                  </div>

                  {/* <div>
                    <label className="block font-medium">Verify OTP</label>
                    <input
                      type="text"
                      name="otp"
                      value={formData.otp}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div> */}

                  {/* <div>
                    <label className="block font-medium">মুদ্রা</label>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    >
                      <option value="BDT">BDT</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </div> */}
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-common-blue whitespace-nowrap text-white px-4 py-2 rounded-lg lg:w-1/3 mt-2"
                  >
                    
                    {isBengali ? "জমা দিন" : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          )} 
        </div>
    );
};

export default EditProfile;