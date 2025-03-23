
import memberBg from "../../assets/member-header-bg.png";

const Name = () => {
    return (
        <div
          className="flex items-center gap-4 p-4 min-h-[200px]  md:min-h-[200px] lg:min-h-[180px]"
          style={{ backgroundImage: `url(${memberBg})` }}
        >
          <div className="w-16 h-16 bg-black text-common-orange flex items-center justify-center text-3xl font-bold rounded-full">
            R
          </div>
          {/* Full Name */}
          <span className="text-white text-xl font-semibold">Rohan</span>
        </div>
    );
};

export default Name;