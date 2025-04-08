import LogoSelection from "@/components/dashboard/LogoSelection";
import LogoUpload from "@/components/dashboard/LogoUpload";
import NoticeSelectionSection from "@/components/dashboard/NoticeSelectionSection";
import NoticeUploadSection from "@/components/dashboard/NoticeUploadSection";
import SliderSelectionSection from "@/components/dashboard/SliderSelectionSection";
import SliderUploadSection from "@/components/dashboard/SliderUploadSection";

const HomeControl = () => {
  return (
    <div className="">
      <LogoUpload />
      <LogoSelection />
      <SliderUploadSection />
      <SliderSelectionSection />
      <NoticeUploadSection />
      <NoticeSelectionSection />
    </div>
  );
};

export default HomeControl;
