import { Link, useNavigate } from "react-router-dom";
import Jayalogo from "../../assets/logo3.png";
import Bdlogo from "../../assets/BD.png";
import LoginModal from "../LoginModal/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { logout } from "../../redux/slices/authSlice";
import { useFetchUser } from "../../hooks/customHook";

const TopHeader = ({
  language,
  isHovered,
  setIsOpenModal,
  isOpenModal,
  toggleOpenLanguage,
}) => {
  const { user, singleUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fetchUser, isLoading } = useFetchUser(user?._id);

  const text = {
    en: {
      wallet: "Main Wallet",
      login: "Login",
      register: "Sign Up",
      deposit: "Deposit",
      profile: "Profile",
      logout: "Logout",
      currency: "BDT English",
    },
    bn: {
      wallet: "প্রধান ওয়ালেট",
      login: "প্রবেশ করুন",
      register: "নিবন্ধন",
      deposit: "আমানত",
      profile: "প্রোফাইল",
      logout: "লগআউট",
      currency: "BDT বাংলা",
    },
  };
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    toast.success("Logout successful");
    navigate("/");
  };

  const reloadBalance = () => {
    if (!user) return;
    fetchUser(user._id);
  };

  return (
    <nav className="flex bg-common-blue justify-center lg:justify-around items-center py-2">
      <Link to="/">
        <img src={Jayalogo} alt="Logo" className="h-8 lg:h-12" />
      </Link>

      <ul className="hidden lg:flex space-x-2 items-center text-white font-sans text-sm">
        {user ? (
          <>
            <div className="flex flex-row gap-2 items-center">
              <h3 className="text-lg">{text[language].wallet}</h3>
              <span className="text-lg">
                ৳{" "}
                {singleUser?.balance ? singleUser?.balance?.toFixed(2) : "0.00"}
              </span>

              <button
                className={`${
                  isLoading ? "animate-spin" : ""
                } rotate-[180deg] transition-transform duration-300`}
                onClick={reloadBalance}
              >
                <svg
                  className={`transition-transform duration-300 ${
                    isHovered ? "" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="auto"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    stroke={isHovered ? "#f56908" : "#f56908"}
                    strokeWidth="1.5"
                    d="M12 4V1l-4 4 4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H6c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7z"
                  />
                </svg>
              </button>
            </div>
            <Link to="/amanot">
              <button className="px-4 bg-custom-orange py-1 text-lg rounded-sm">
                {text[language].deposit}
              </button>
            </Link>
            <Link to="/information">
              <button className="px-4 py-1 hover:border border-common-orange rounded-lg transition-all duration-300 ease-out text-lg">
                {text[language].profile}
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-1 hover:border border-common-orange rounded-lg text-lg"
            >
              {text[language].logout}
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsOpenModal(true)}
              className="border border-white px-4 py-2 hover:border-orange-500 outline-none rounded-sm text-white"
            >
              {text[language].login}
            </button>
            <LoginModal
              isOpenModal={isOpenModal}
              handleClose={() => setIsOpenModal(false)}
            />
            <Link to="/nibondon">
              <button className="bg-common-orange px-8 py-2 rounded-sm">
                {text[language].register}
              </button>
            </Link>
          </>
        )}

        <div>
          <span
            className="font-semibold text-lg flex items-center gap-0.5 hover:border border-common-orange px-2 py-1 rounded-lg cursor-pointer"
            onClick={toggleOpenLanguage}
          >
            <span>
              <img src={Bdlogo} alt="BD Logo" className="h-3" />
            </span>
            {text[language].currency}
          </span>
        </div>
      </ul>
    </nav>
  );
};

export default TopHeader;
