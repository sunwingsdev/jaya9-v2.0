import { IoMdHome } from "react-icons/io";

import {
  IoGameController,
  IoLogoWechat,
  IoSettingsSharp,
} from "react-icons/io5";

import { FaAffiliatetheme, FaUsers } from "react-icons/fa";
import { PiCashRegister } from "react-icons/pi";
import { GiGamepadCross, GiRibbonMedal } from "react-icons/gi";
import { SlGameController } from "react-icons/sl";
import { BsBank, BsFront, BsPiggyBank, BsShop } from "react-icons/bs";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardMobileMenu from "../components/dashboard/DashboardMobileMenu1";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  const menuItems = [
    { name: "Dashboard", icon: <IoMdHome />, path: "/dashboard" },
    {
      name: "Users",
      icon: <FaUsers />,
      path: "/dashboard/all-user",
    },
    {
      name: "Cash Agent",
      icon: <PiCashRegister />,
      submenu: [
        { name: "All Agents", path: "/dashboard/cashagent" },
        { name: "KYC", path: "/dashboard/kyc" },
        {
          name: "Payment Requests",
          path: "/dashboard/paymentmethodrequests",
        },
      ],
    },
    {
      name: "Affiliators",
      icon: <FaAffiliatetheme />,

      submenu: [
        { name: "All Affiliates", path: "/dashboard/affiliators" },
        { name: "All Affiliate Links", path: "/dashboard/allaffiliatelinks" },
      ],
    },
    {
      name: "Games Control",
      icon: <IoGameController />,
      submenu: [
        { name: "Categories", path: "/dashboard/game-categories" },
        { name: "Active Games", path: "/dashboard/active-games" },
        { name: "Inactive Games", path: "/dashboard/inactive-games" },
      ],
    },
    {
      name: "Games Api key",
      icon: <GiGamepadCross />,
      submenu: [
        { name: "Sprots Live TV", path: "/dashboard/games-api/sports-live-tv" },
        { name: "BetFair API", path: "/dashboard/games-api/betfair-api" },
        {
          name: "Sports Radar API",
          path: "/dashboard/games-api/sports-radar-api",
        },
        { name: "Odds Jam API", path: "/dashboard/games-api/odds-jam-api" },
        {
          name: "Bet Construct API",
          path: "/dashboard/games-api/bet-construct-api",
        },
        { name: "Kambi API", path: "/dashboard/games-api/kambi-api" },
        { name: "Pinnacle API", path: "/dashboard/games-api/pinnacle-api" },
        { name: "SoftSwiss API", path: "/dashboard/games-api/softswiss-api" },
        { name: "Betradar API", path: "/dashboard/games-api/betradar-api" },
        { name: "Evolution API", path: "/dashboard/games-api/evolution-api" },
        {
          name: "Pragmatic Play API",
          path: "/dashboard/games-api/pragmatic-play-api",
        },
        { name: "Playtech API", path: "/dashboard/games-api/playtech-api" },
        { name: "NetEnt API", path: "/dashboard/games-api/netent-api" },
        {
          name: "Betsoft Gaming API",
          path: "/dashboard/games-api/betsoft-gaming-api",
        },
      ],
    },
    {
      name: "Bonuses",
      icon: <GiRibbonMedal />,
      submenu: [
        { name: "Happy Hours", path: "/dashboard/games" },
        { name: "Deposit Bonuses" },
        { name: "Refer Bonuses" },
        { name: "Welcome Bonuses" },
      ],
    },
    {
      name: "Game History",
      icon: <SlGameController />,
      submenu: [
        { name: "Play Stats" },
        { name: "Win Game Stats" },
        { name: "Loss Game Stats" },
      ],
    },
    { name: "Tournament", icon: <BsShop /> },
    { name: "Jack Pot", icon: <BsShop /> },
    {
      name: "Frontend",
      icon: <BsFront />,
      submenu: [
        { name: "Home Control", path: "/dashboard/home-control" },
        { name: "Promotions", path: "/dashboard/promotion-offer" },
        { name: "Pages", path: "/dashboard/manage-pages" },
        { name: "FAQ" },
        { name: "Sponsorship" },
        { name: "Brand Ambassador" },
      ],
    },
    {
      name: "Banking Deposit",
      icon: <BsPiggyBank />,
      submenu: [
        { name: "Deposit Method", path: "/dashboard/depositmethod" },
        { name: "Deposit History", path: "/dashboard/deposits" },
      ],
    },
    {
      name: "Banking Withdraw",
      icon: <BsBank />,
      submenu: [
        { name: "Withdraw Method" },
        { name: "Withdraw History", path: "/dashboard/withdraws" },
      ],
    },
    {
      name: "Settings",
      icon: <IoSettingsSharp />,
      submenu: [
        { name: "Pincodes" },
        { name: "Activity Log" },
        { name: "Permissions" },
        { name: "Gateway API Keys" },
        { name: "SMS" },
        { name: "Mailings" },
        { name: "Support" },
        { name: "Security" },
        { name: "Commission", path: "/dashboard/commissionsetting" },
      ],
    },
    {
      name: "Oracle Technology",
      icon: <IoLogoWechat />,
      submenu: [
        { name: "Instant Support" },
        { name: "Normal Support" },
        { name: "Permissions" },
        { name: "Notice" },
        { name: "About Us" },
        { name: "Contact Us" },
      ],
    },
  ];
  return (
    <div className="flex">
      {/* DashboardSidebar */}
      <DashboardSidebar open={open} setOpen={setOpen} menuItems={menuItems} />
      <div
        className={`flex-1 h-screen overflow-y-auto duration-300 ${
          !open ? "md:pl-16" : "md:pl-64"
        }`}
      >
        <DashboardMobileMenu open={open} menuItems={menuItems} />
        <div className="mt-[62px] md:mt-14 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
