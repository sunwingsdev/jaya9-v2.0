import { useEffect } from "react";
import downloadLogo from "../../assets/download-app.png";

const SmallDeviceModal = ({ isModal, setIsModal }) => {

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        
        document.body.style.marginTop = "0";
        setIsModal(false); 
      } else {
        if (isModal) {
          document.body.style.marginTop = "70px"; 
        } else {
          document.body.style.marginTop = "0";
        }
      }
    };

   
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, );

  return (
    <>
      
      {isModal && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-auto z-40 bg-white text-black  text-center p-4 shadow-lg">
          <div className="flex flex-row items-center justify-between ">
            <div className="flex  flex-row gap-2 items-center justify-start">
              <button
                onClick={() => setIsModal(false)}
                className=" text-sm   text-black "
              >
                ✖
              </button>
              <img src={downloadLogo} alt="" className="w-6 md:w-8 h-auto" />
              <p className=" text-sm md:text-md font-semibold">Download Our App Version now !</p>
            </div>
            <button className="px-3 py-1 rounded-sm md:text-xl text-white bg-mobileAppButtonColor">
              Download
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SmallDeviceModal;
