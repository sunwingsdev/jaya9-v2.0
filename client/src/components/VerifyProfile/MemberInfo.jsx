
import infologo from "../../assets/personal-info.jpg";
import { FaPlus } from "react-icons/fa";

const MemberInfo = ({profileImage,handleImageChange}) => {
    return (
        <div className="relative">
        <img
          src={infologo}
          alt=""
          className="max-h-28 w-full md:max-h-32 rounded-2xl lg:max-h-32 "
        />
        <div className="relative w-24 h-24 mx-auto">
          {/* Profile Image */}
          <img
            src={profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full border border-gray-300 object-cover"
          />

          {/* Hidden File Input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="fileInput"
          />

          {/* Upload Button (+ Icon) */}
          <label
            htmlFor="fileInput"
            className="absolute bottom-1 right-1 bg-common-blue text-white p-2 rounded-full cursor-pointer shadow-md"
          >
            <FaPlus className="w-4 h-4" />
          </label>
        </div>
      </div>
    );
};

export default MemberInfo;