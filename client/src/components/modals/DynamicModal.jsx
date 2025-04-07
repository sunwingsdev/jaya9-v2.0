import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";

const DynamicModal = ({ isOpen, onOpenChange, title, children }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onOpenChange}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
                <div className="bg-blue-600 text-white rounded-t-lg relative">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium px-6 py-4 pr-12" // Added pr-12 for close button space
                  >
                    {title}
                  </Dialog.Title>
                  <button
                    onClick={() => onOpenChange(false)}
                    className="absolute right-4 top-4 rounded-md p-1 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <IoClose className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </button>
                </div>
                <div className="p-8">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DynamicModal;
