import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import DynamicModal from "../modals/DynamicModal";
import { Button } from "../ui/button";
import LogoUploadForm from "./LogoUploadForm";

const LogoUpload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div>
        <div className="bg-[#222222] flex flex-row items-start justify-between w-full p-4 mb-2">
          <p className="text-2xl text-white font-bold">Upload Logo</p>
          <Button
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded whitespace-nowrap"
            onClick={() => setIsModalOpen(true)}
          >
            <IoAdd /> Add
          </Button>
        </div>
      </div>
      <DynamicModal
        title={"Uplaod logo"}
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      >
        <LogoUploadForm closeModal={() => setIsModalOpen(false)} />
      </DynamicModal>
    </>
  );
};

export default LogoUpload;
