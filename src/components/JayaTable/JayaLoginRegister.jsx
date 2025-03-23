
import ProbesKorun from '../LoginModal/Login';
import { Link } from 'react-router-dom';

const JayaLoginRegister = ({isOpenModal,setIsOpenModal,language}) => {
    return (
        <div className="px-4 pt-16 sm:px-8 md:px-16 lg:px-52  w-full">
        <div className="flex  py-8 rounded-xl text-white space-y-6 flex-col justify-center bg-jaya-bg-color items-center">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-sans font-bold text-center">
              Login / register now become JAYA9 VIP
            </h3>
            <p className="text-center font-sans font-bold">
              Get the Benefits Now
            </p>
          </div>
          <div className="px-5 flex flex-col sm:flex-row lg:gap-40 gap-4 justify-center w-full">
          <div className="flex items-center justify-center">
            <button
              onClick={() => setIsOpenModal(true)}
              className="border border-white px-4 py-2 hover:border-orange-500 outline-none rounded-sm text-white"
            >
              
              {language === "bn" ? "প্রবেশ করুন" : "Login"}
            </button>

            <ProbesKorun
              isOpenModal={isOpenModal}
              handleClose={() => setIsOpenModal(false)}
            />
          </div>
            <Link to='/nibondon'>
            <button className="bg-common-orange px-8 py-2 rounded-sm w-full sm:w-auto mt-4 sm:mt-0">
              
              {language === "bn" ? "নিবন্ধন" : "Sign Up"}
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default JayaLoginRegister;