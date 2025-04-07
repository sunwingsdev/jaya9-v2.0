import { Link } from "react-router-dom";
// import Cricketlogo from "../../assets/cricketmenu.webp";
// import livecasinologo1 from "../../assets/livecasino1.webp";
// import livecasinologo2 from "../../assets/laivecasino2.webp";
// import livecasinologo3 from "../../assets/livecasino3.webp";
// import slotlogo1 from "../../assets/slotlogo1.webp";
// import slotlogo2 from "../../assets/slotlogo2.webp";
// import slotlogo3 from "../../assets/slotlogo3.webp";
// import slotlogo4 from "../../assets/slotlogo4.webp";
// import slotlogo5 from "../../assets/slotlogo5.webp";
// import slotlogo6 from "../../assets/slotlogo6.webp";
// import slotlogo7 from "../../assets/slotlogo7.webp";
// import slotlogo8 from "../../assets/slotlogo8.webp";
// import slotlogo9 from "../../assets/slotlogo9.webp";
// import tablelogo1 from "../../assets/slotlotterylogo.webp";
// import tablelogo2 from "../../assets/tablelogo2.webp";
// import tablelogo3 from "../../assets/tablelogo3.webp";
// import tablelogo4 from "../../assets/tablelogo4.webp";
// import tableelogo5 from "../../assets/tablelogo5.webp";
// import sportsmenulogo from "../../assets/sportsmenulogo.webp";
// import crashmenulogo1 from "../../assets/crash new spribe.webp";

// import crashmenulogo2 from "../../assets/crashmenulogo2.webp";
// import crashmenulogo3 from "../../assets/crashmenulogo3.webp";
// import crashmenulogo4 from "../../assets/crashmenulogo4.webp";
// import crashmenulogo5 from "../../assets/crashmenulogo5.webp";
// import crashmenulogo6 from "../../assets/crashmenulogo6.webp";
// import betswizicon from "../../assets/cricketmenuicon.png";
// import newicon from "../../assets/new_icon.png";

const LargeNavbar = ({ location, menuItems }) => {
  return (
    //     <ul   className="hidden  relative  lg:flex text-sm justify-center items-center  whitespace-nowrap ">
    //     <Link to="/downloadmobileapp" className="">
    //       <li
    //         className={`border-r p-2 border-white border-opacity-20 transition ${
    //           location.pathname === "/downloadmobileapp"
    //             ? "border-b-2 border-yellow-300"
    //             : ""
    //         }`}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           width="24"
    //           height="24"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           className="feather feather-download"
    //         >
    //           <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    //           <path d="M17 10l-5 5-5-5"></path>
    //           <path d="M12 15V3"></path>
    //         </svg>
    //       </li>
    //     </Link>

    //     <Link to="/" className="  ">
    //       <li className="p-2 transition border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2) border-r-[rgba(255,255,255,0.2)]]">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           width="24"
    //           height="24"
    //           fill="white"
    //         >
    //           <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    //         </svg>
    //       </li>
    //     </Link>

    //     <Link
    //       to="/cricket"
    //       className="text-white hover:text-gray-300 transition"
    //     >
    //       <li
    //         className={` inline-block ${
    //           location.pathname === "/cricket"
    //             ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
    //             : "border-r-[rgba(255,255,255,0.2)]" //
    //         } `}
    //       >
    //         <div className="group   border-r border-white p-2 border-opacity-20">
    //           ক্রিকেট
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             width="20"
    //             height="20"
    //             fill="none"
    //             stroke="white"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="inline ml-2"
    //           >
    //             <path d="M6 9l6 6 6-6"></path>
    //           </svg>
    //           <div
    //             className="absolute left-0 right-0  mt-1    bg-white text-black p-2 rounded-md shadow-xl
    //   opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
    //   group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 z-10"
    //           >
    //             <ul className="grid grid-cols-3 mx-auto max-w-5xl  gap-1   ">
    //               <li>
    //                 <div>
    //                   <img
    //                     src={Cricketlogo}
    //                     alt="Cricket Logo"
    //                     className="w-[50%] rounded-md border-black hover:border"
    //                   />
    //                   <div className="flex pt-2 w-2/4 flex-row items-center justify-center">
    //                     <h3 className="font-bold">Betswiz</h3>
    //                     <img src={betswizicon} alt="" className="w-5 h-5" />
    //                   </div>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </li>
    //     </Link>

    //     <Link
    //       to="/livecasino"
    //       className="text-white hover:text-gray-300 transition"
    //     >
    //       <li
    //         className={` inline-block ${
    //           location.pathname === "/livecasino"
    //             ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
    //             : "border-r-[rgba(255,255,255,0.2)]" //
    //         } `}
    //       >
    //         <div className="group  border-r border-white p-2 border-opacity-20">
    //           লাইভ ক্যাসিনো
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             width="20"
    //             height="20"
    //             fill="none"
    //             stroke="white"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="inline ml-2"
    //           >
    //             <path d="M6 9l6 6 6-6"></path>
    //           </svg>
    //           <div
    //             className="absolute left-0 right-0 mt-1  bg-white text-black p-2 rounded-md shadow-xl
    //   opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
    //   group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
    //           >
    //             <ul className="flex gap-2 mx-auto max-w-5xl">
    //               <li className="w-[15%]">
    //                 <img
    //                   src={livecasinologo1}
    //                   alt="Cricket Logo"
    //                   className="w-full h-auto rounded-md border-black hover:border object-contain"
    //                 />
    //                 <div className="flex pt-2 w-full flex-row items-center justify-center">
    //                   <h3 className="font-bold">Evolution Gaming</h3>
    //                   <img src={betswizicon} alt="" className="w-5 h-5" />
    //                 </div>
    //               </li>
    //               <li className="w-[15%]">
    //                 <img
    //                   src={livecasinologo2}
    //                   alt="Cricket Logo"
    //                   className="w-full h-auto rounded-md border-black hover:border object-contain"
    //                 />
    //                 <div className="flex pt-2 w-full flex-row items-center justify-center">
    //                   <h3 className="font-bold">Pragmatic Play</h3>
    //                   <img src={betswizicon} alt="" className="w-5 h-5" />
    //                 </div>
    //               </li>
    //               <li className="w-[15%]">
    //                 <img
    //                   src={livecasinologo3}
    //                   alt="Cricket Logo"
    //                   className="w-full h-auto rounded-md border-black hover:border object-contain"
    //                 />
    //                 <div className="flex pt-2 w-full flex-row items-center justify-center">
    //                   <h3 className="font-bold">AE Casino</h3>
    //                   <img src={betswizicon} alt="" className="w-5 h-5" />
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </li>
    //     </Link>

    //     <Link
    //       to="/slotgames"
    //       className="text-white hover:text-gray-300 transition"
    //     >
    //       <li
    //         className={` inline-block ${
    //           location.pathname === "/slotgames"
    //             ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
    //             : "border-r-[rgba(255,255,255,0.2)]"
    //         }`}
    //       >
    //         <div className="group  border-r border-white p-2 border-opacity-20">
    //           স্লট গেম
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             width="20"
    //             height="20"
    //             fill="none"
    //             stroke="white"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="inline ml-2"
    //           >
    //             <path d="M6 9l6 6 6-6"></path>
    //           </svg>
    //           <div
    //             className="absolute left-0 right-0 mt-1  bg-white text-black p-2 rounded-md shadow-xl
    //   opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
    //   group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
    //           >
    //             <ul className="grid grid-cols-6  mx-auto max-w-5xl gap-4 ">
    //               {[
    //                 { src: slotlogo1, title: "JILI", icon: betswizicon },
    //                 { src: slotlogo2, title: "TITO", icon: betswizicon },
    //                 {
    //                   src: slotlogo3,
    //                   title: "Pragmatic Play",
    //                   icon: betswizicon,
    //                 },
    //                 { src: slotlogo4, title: "PG SOFT", icon: betswizicon },
    //                 { src: slotlogo5, title: "Smart Soft", icon: null },
    //                 { src: slotlogo6, title: "Spade Gaming", icon: null },
    //                 { src: slotlogo7, title: "Fa Chai", icon: null },
    //                 { src: slotlogo8, title: "JDB", icon: null },
    //                 { src: slotlogo9, title: "Red Tiger", icon: null },
    //               ].map((item, index) => (
    //                 <li key={index} className="flex flex-col items-center">
    //                   <img
    //                     src={item.src}
    //                     alt={item.title}
    //                     className="w-full h-[130px] object-cover rounded-md border hover:border-black"
    //                   />
    //                   <div className="flex pt-2 w-full flex-row items-center justify-center">
    //                     <h3 className="font-bold">{item.title}</h3>
    //                     {item.icon && (
    //                       <img
    //                         src={item.icon}
    //                         alt=""
    //                         className="w-5 h-5 ml-2"
    //                       />
    //                     )}
    //                   </div>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       </li>
    //     </Link>

    //     <Link
    //       to="/tablegames"
    //       className="text-white hover:text-gray-300 transition"
    //     >
    //       <li
    //         className={` inline-block ${
    //           location.pathname === "/tablegames"
    //             ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
    //             : "border-r-[rgba(255,255,255,0.2)]" //
    //         } `}
    //       >
    //         <div className="group  border-r border-white p-2 border-opacity-20">
    //           টেবিল গেম
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             width="20"
    //             height="20"
    //             fill="none"
    //             stroke="white"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="inline ml-2"
    //           >
    //             <path d="M6 9l6 6 6-6"></path>
    //           </svg>
    //           <div
    //             className="absolute left-0 right-0  mt-1  bg-white text-black p-2 rounded-md shadow-xl
    //   opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
    //   group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
    //           >
    //             <ul className="grid grid-cols-6  mx-auto max-w-5xl     ">
    //               <li className="w-[90%]">
    //                 <img
    //                   src={tablelogo1}
    //                   alt="Cricket Logo"
    //                   className="w-full  rounded-md border-black hover:border"
    //                 />
    //                 <div className="flex pt-2 w-full flex-row items-center justify-center">
    //                   <h3 className="font-bold">Spribe</h3>
    //                   <img src={newicon} alt="" className="w-5 h-5" />
    //                 </div>
    //               </li>
    //               <li className="w-[90%]">
    //                 <img
    //                   src={tablelogo2}
    //                   alt="Cricket Logo"
    //                   className="w-full rounded-md border-black hover:border"
    //                 />
    //                 <div className="flex pt-2 w-full flex-row items-center justify-center">
    //                   <h3 className="font-bold">JILI</h3>
    //                   <img src={betswizicon} alt="" className="w-5 h-5" />
    //                 </div>
    //               </li>
    //               <li className="w-[90%]">
    //                 <img
    //                   src={tablelogo3}
    //                   alt="Cricket Logo"
    //                   className="w-full rounded-md border-black hover:border"
    //                 />
    //                 <div className="flex pt-2 w-full flex-row items-center justify-center">
    //                   <h3 className="font-bold">TITO</h3>
    //                   <img src={betswizicon} alt="" className="w-5 h-5" />
    //                 </div>
    //               </li>
    //               <li className="w-[90%]">
    //                 <img
    //                   src={tablelogo4}
    //                   alt="Cricket Logo"
    //                   className="w-full rounded-md border-black hover:border"
    //                 />
    //                 <div className="flex pt-2 w-full flex-row items-center justify-center">
    //                   <h3 className="font-bold">King Midas</h3>
    //                 </div>
    //               </li>
    //               <li className="w-[90%]">
    //                 <img
    //                   src={tableelogo5}
    //                   alt="Cricket Logo"
    //                   className="w-full rounded-md border-black hover:border"
    //                 />
    //                 <div className="flex pt-2 w-full flex-row items-center justify-center">
    //                   <h3 className="font-bold">Red Tiger</h3>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </li>
    //     </Link>

    //     <Link
    //       to="/sports"
    //       className="text-white hover:text-gray-300 transition"
    //     >
    //       <li
    //         className={` inline-block ${
    //           location.pathname === "/sports"
    //             ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
    //             : "border-r-[rgba(255,255,255,0.2)]" //
    //         } `}
    //       >
    //         <div className="group  border-r border-white p-2 border-opacity-20">
    //           স্পোর্টস
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             width="20"
    //             height="20"
    //             fill="none"
    //             stroke="white"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="inline ml-2"
    //           >
    //             <path d="M6 9l6 6 6-6"></path>
    //           </svg>
    //           <div className=" group">
    //             <div
    //               className="absolute left-0 right-0 mt-1  bg-white text-black p-2 rounded-md shadow-xl
    //   opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
    //   group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
    //             >
    //               <ul className="grid grid-cols-3  mx-auto max-w-5xl  gap-1">
    //                 <li>
    //                   <img
    //                     src={sportsmenulogo}
    //                     alt="Cricket Logo"
    //                     className="w-2/4 rounded-md border-black hover:border"
    //                   />
    //                   <div className="flex pt-2 w-1/3 flex-row items-center justify-center">
    //                     <h3 className="font-bold">IBC Sports</h3>
    //                   </div>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </li>
    //     </Link>

    //     <Link
    //       to="/machdhora"
    //       className="text-white hover:text-gray-300 transition"
    //     >
    //       <li
    //         className={` inline-block ${
    //           location.pathname === "/machdhora"
    //             ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
    //             : "border-r-[rgba(255,255,255,0.2)]" //
    //         } `}
    //       >
    //         <div className="group  border-r border-white p-2 border-opacity-20">
    //           মাছ ধরা
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             width="20"
    //             height="20"
    //             fill="none"
    //             stroke="white"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="inline ml-2"
    //           >
    //             <path d="M6 9l6 6 6-6"></path>
    //           </svg>
    //           <div
    //             className="absolute left-0 right-0  mt-1  bg-white text-black p-2 rounded-md shadow-xl
    //   opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
    //   group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
    //           >
    //             <ul className="grid grid-cols-6  gap-2 mx-auto max-w-5xl   ">
    //               <li>
    //                 <img
    //                   src={slotlogo1}
    //                   alt="Cricket Logo"
    //                   className="w-full  rounded-md border-black hover:border"
    //                 />
    //                 <div className="flex pt-2 w-full flex-row items-center justify-center">
    //                   <h3 className="font-bold">JILI</h3>
    //                   <img src={betswizicon} alt="" className="w-5 h-5" />
    //                 </div>
    //               </li>
    //               <li>
    //                 <img
    //                   src={slotlogo2}
    //                   alt="Cricket Logo"
    //                   className="w-full rounded-md border-black hover:border"
    //                 />
    //                 <div className="flex pt-2 w-full flex-row items-center justify-center">
    //                   <h3 className="font-bold">TITO</h3>
    //                   <img src={betswizicon} alt="" className="w-5 h-5" />
    //                 </div>
    //               </li>
    //               <li>
    //                 <img
    //                   src={slotlogo6}
    //                   alt="Cricket Logo"
    //                   className="w-full rounded-md border-black hover:border"
    //                 />
    //                 <div className="flex pt-2 w-full flex-row items-center justify-center">
    //                   <h3 className="font-bold">SPG</h3>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </li>
    //     </Link>

    //     <Link
    //       to="/lottery"
    //       className="text-white hover:text-gray-300 transition"
    //     >
    //       <li
    //         className={` inline-block ${
    //           location.pathname === "/lottery"
    //             ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
    //             : "border-r-[rgba(255,255,255,0.2)]" //
    //         } `}
    //       >
    //         <div className="group  border-r border-white p-2 border-opacity-20">
    //           লটারি
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             width="20"
    //             height="20"
    //             fill="none"
    //             stroke="white"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="inline ml-2"
    //           >
    //             <path d="M6 9l6 6 6-6"></path>
    //           </svg>
    //           <div
    //             className="absolute left-0 right-0  mt-1  bg-white text-black p-2 rounded-md shadow-xl
    //   opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
    //   group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
    //           >
    //             <ul className="grid grid-cols-5  mx-auto max-w-5xl  gap-2   ">
    //               <li className="w-[80%]">
    //                 <img
    //                   src={tablelogo1}
    //                   alt="Cricket Logo"
    //                   className="w-full  rounded-md border-black hover:border"
    //                 />
    //                 <div className="flex pt-2 w-full flex-row items-center justify-center">
    //                   <h3 className="font-bold">SPRIBE Keno</h3>
    //                   <img src={newicon} alt="" className="w-5 h-5" />
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </li>
    //     </Link>

    //     <Link to="/crash" className="text-white hover:text-gray-300 ">
    //       <li
    //         className={` inline-block ${
    //           location.pathname === "/crash"
    //             ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
    //             : "border-r-[rgba(255,255,255,0.2)]"
    //         }`}
    //       >
    //         <div className="group  border-r border-white p-2 border-opacity-20">
    //           ক্র্যাশ
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             width="20"
    //             height="20"
    //             fill="none"
    //             stroke="white"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="inline ml-2"
    //           >
    //             <path d="M6 9l6 6 6-6"></path>
    //           </svg>
    //           {/* Dropdown Container */}
    //           <div
    //             className="absolute left-0 right-0 mt-1  bg-white text-black p-2 rounded-md shadow-xl
    // opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
    // group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
    //           >
    //             <ul className="grid grid-cols-6  mx-auto max-w-5xl gap-4 ">
    //               {[
    //                 { src: crashmenulogo1, title: "SPRIBE", icon: newicon },
    //                 { src: crashmenulogo2, title: "JILI", icon: betswizicon },
    //                 { src: crashmenulogo3, title: "TITO", icon: betswizicon },
    //                 { src: crashmenulogo4, title: "Aviatrix", icon: null },
    //                 { src: slotlogo3, title: "Pragmatic Play", icon: null },
    //                 { src: crashmenulogo5, title: "King Midus", icon: null },
    //                 { src: crashmenulogo6, title: "Smart Soft", icon: null },
    //               ].map((item, index) => (
    //                 <li key={index} className="flex flex-col items-center">
    //                   <img
    //                     src={item.src}
    //                     alt={item.title}
    //                     className="w-full  object-cover rounded-md border hover:border-black"
    //                   />
    //                   <div className="flex pt-2 w-full flex-row items-center justify-center">
    //                     <h3 className="font-bold">{item.title}</h3>
    //                     {item.icon && (
    //                       <img
    //                         src={item.icon}
    //                         alt=""
    //                         className="w-5 h-5 ml-2"
    //                       />
    //                     )}
    //                   </div>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       </li>
    //     </Link>

    //     <Link to="/promotion">
    //       <li
    //         className={` text-white hover:text-gray-300  p-2  ${
    //           location.pathname === "/promotion"
    //             ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
    //             : "border-r-[rgba(255,255,255,0.2)]"
    //         } `}
    //       >
    //         প্রমোশন
    //       </li>
    //     </Link>

    //     <Link to="/jayarank" className="">
    //       <li
    //         className={`font-semibold hover:text-gray-300 flex items-center  p-2 gap-1 ${
    //           location.pathname === "/jayarank"
    //             ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
    //             : "border-r-[rgba(255,255,255,0.2)]"
    //         }   `}
    //       >
    //         Jaya Rank
    //         <span className="px-1 py-1 bg-green-600 rounded-lg font-bold text-xs">
    //           New
    //         </span>
    //       </li>
    //     </Link>
    //   </ul>
    <div className="overflow-hidden">
  <ul className="lg:flex hidden text-sm justify-center items-center whitespace-nowrap">
    <Link to="/downloadmobileapp" className="">
      <li
        className={`border-r p-2 border-white border-opacity-20 transition ${
          location.pathname === "/downloadmobileapp"
            ? "border-b-2 border-yellow-300"
            : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          width="24"
          height="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-download"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <path d="M17 10l-5 5-5-5"></path>
          <path d="M12 15V3"></path>
        </svg>
      </li>
    </Link>

    {menuItems.slice(0, menuItems.length - 1).map((item, index) => {
      const isFirst = index === 0;
      const isLastOne = index === menuItems.length - 2;

      return (
        <Link
          key={index}
          to={item.path}
          className="text-white hover:text-gray-300 transition"
        >
          <li
            className={`inline-block ${
              location.pathname === item.path
                ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
                : "border-r-[rgba(255,255,255,0.2)]"
            }`}
          >
            <div className="group border-r border-white p-2 border-opacity-20">
              {isFirst ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              ) : (
                <>
                  {item.name}
                  {!isLastOne && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="inline ml-2"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  )}
                </>
              )}

              {!isFirst && !isLastOne && (
                <div className="absolute left-0 right-0 mt-1 bg-white text-black p-2 rounded-md shadow-xl opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out group-hover:opacity-100 group-hover:visible group-hover:scale-y-100">
                  <ul className="flex flex-wrap gap-2 mx-auto max-w-5xl">
                    {item.mainIcons?.map((mainIcon, subIndex) => (
                      <li key={subIndex} className="w-[15%]">
                        {/* ✅ icon এর জায়গায় mainIcon এর mIcon */}
                        <img
                          src={mainIcon.mIcon}
                          alt={mainIcon.name}
                          className="w-full h-auto rounded-md border-black hover:border object-contain"
                        />
                        <div className="flex pt-2 w-full flex-row items-center justify-center">
                          {/* ✅ name এর জায়গায় mainIcon এর name */}
                          <h3 className="font-bold">{mainIcon.name}</h3>
                          {/* ✅ সাব-মেনুর ইমেজের জায়গায় mainIcon এর nameLogo */}
                          <img
                            src={mainIcon.nameLogo}
                            alt={mainIcon.name}
                            className="w-5 h-5"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        </Link>
      );
    })}

    <Link to="/jayarank" className="text-white hover:text-gray-300 transition">
      <li
        className={`flex font-semibold hover:text-gray-300  items-center p-2 gap-1 ${
          location.pathname === "/jayarank"
            ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
            : "border-r-[rgba(255,255,255,0.2)]"
        }`}
      >
        Jaya Rank
        <span className="px-1 py-1 bg-green-600 rounded-lg font-bold text-xs">
          New
        </span>
      </li>
    </Link>
  </ul>
</div>

  );
};

export default LargeNavbar;
