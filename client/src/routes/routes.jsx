import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Cricket from "../Pages/Cricket";
import LiveCasino from "../Pages/LiveCasino";
import SlotGames from "../Pages/SlotGames";
import TableGames from "../Pages/TableGames";
import Sports from "../Pages/Sports";
import Fishing from "../Pages/Fishing";
import Lottery from "../Pages/Lottery";
import Crash from "../Pages/Crash";
import Promotion from "../Pages/Promotion";
import Jayatable from "../Pages/JayaTable";
import Deposit from "../Pages/Deposit";
import VerifyProfile from "../Pages/VerifyProfile";
import MainLayout from "../Layout/MainLayout";
import MainProfile from "../Pages/MainProfile";
import Baji from "../Pages/Baji";
import Turnover from "../Pages/Turnover";
import TransferRecord from "../Pages/TransferRecord";
import Bonus from "../Pages/Bonus";
import Transaction from "../Pages/Transaction";
import Voucher from "../Pages/Voucher";
import Rewards from "../Pages/Rewards";
import PasswordChange from "../Pages/PasswordChange";
import BankDetails from "../Pages/BankDetails";
import Inbox from "../Pages/Inbox";
import Referral from "../Pages/Referral";
import ReferralBonus from "../Pages/ReferralBonus";
import SidebarTabs from "../Pages/SidebarTabs";
import SignUp from "../Pages/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "../Pages/dashboard/DashboardHome";
import AllUsers from "../Pages/dashboard/AllUsers";
import GameCategories from "../Pages/dashboard/GameCategories";
import ActiveGames from "../Pages/dashboard/ActiveGames";
import InActiveGames from "../Pages/dashboard/InactiveGames";
import GamesApi from "../Pages/dashboard/GamesApi";
import AddGameCategories from "../Pages/dashboard/AddGameCategories";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../Pages/admin-login/AdminLogin";
import HomeControl from "@/Pages/dashboard/HomeControl";
import DepositMethod from "@/Pages/dashboard/DepositMethod";
import AddGame from "@/Pages/dashboard/AddGame";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cricket", element: <Cricket /> },
      { path: "/livecasino", element: <LiveCasino /> },
      { path: "/slotgames", element: <SlotGames /> },
      { path: "/tablegames", element: <TableGames /> },
      { path: "/sports", element: <Sports /> },
      { path: "/machdhora", element: <Fishing /> },
      { path: "/lottery", element: <Lottery /> },
      { path: "/crash", element: <Crash /> },
      { path: "/promotion", element: <Promotion /> },
      { path: "/jayarank", element: <Jayatable /> },
      { path: "/nibondon", element: <SignUp /> },
      { path: "/promotion", element: <Promotion /> },
      { path: "/amanot", element: <Deposit /> },
      { path: "/jachaikoron", element: <VerifyProfile /> },
      { path: "/baji", element: <Baji /> },
      { path: "/turnover", element: <Turnover /> },
      { path: "/sthanantor", element: <TransferRecord /> },
      { path: "/bonus", element: <Bonus /> },
      { path: "/lenden", element: <Transaction /> },
      { path: "/dabivoutcher", element: <Voucher /> },
      { path: "/puroskar", element: <Rewards /> },
      { path: "/passwordchange", element: <PasswordChange /> },
      { path: "/bankdetails", element: <BankDetails /> },
      { path: "/inbox", element: <Inbox /> },
      { path: "/refference", element: <Referral /> },
      { path: "/refferelbonus", element: <ReferralBonus /> },
      { path: "/footertab", element: <SidebarTabs /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "all-user",
        element: <AllUsers />,
      },
      {
        path: "game-categories",
        element: <GameCategories />,
      },
      { path: "active-games", element: <ActiveGames /> },
      { path: "inactive-games", element: <InActiveGames /> },
      { path: "games-api/:id", element: <GamesApi /> },
      { path: "add-games-categories", element: <AddGameCategories /> },
      { path: "home-control", element: <HomeControl /> },
      { path: "depositmethod", element: <DepositMethod /> },
      { path: "addgame", element: <AddGame /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },

  {
    path: "/information",
    element: <MainProfile />,
  },
]);

export default router;
