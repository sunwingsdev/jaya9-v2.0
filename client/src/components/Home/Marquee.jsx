import Marquee from "react-fast-marquee";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const NoticeMarquee = () => {
  const { data: homeControls } = useGetHomeControlsQuery();

  const notice = homeControls?.find(
    (control) => control.category === "notice" && control.isSelected
  );

  return (
    <div className="flex items-center bg-common-blue py-2 relative overflow-hidden">
      <span className="absolute top-1 left-2 md:left-8 lg:left-12 text-common-orange text-2xl z-50 bg-common-blue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="28"
          fill="currentColor"
        >
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm6.29-3c-.52 0-1.02-.2-1.41-.59-.78-.78-.78-2.05 0-2.83.39-.39.89-.59 1.41-.59s1.02.2 1.41.59c.78.78.78 2.05 0 2.83-.39.39-.89.59-1.41.59zM12 16c-2.76 0-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2c0 2.76-2.24 5-5 5zm5.3-4.71c-.39-.39-.39-1.02 0-1.41 1.17-1.17 1.17-3.07 0-4.24-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0 1.95 1.95 1.95 5.12 0 7.07-.39.39-1.02.39-1.41-.01z" />
        </svg>
      </span>

      <div className="w-full pl-14 text-white text-sm">
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <span className="mx-4">{notice?.title}</span>
        </Marquee>
      </div>
    </div>
  );
};

export default NoticeMarquee;
