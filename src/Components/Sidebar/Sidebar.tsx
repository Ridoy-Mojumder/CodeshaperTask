import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import discountIcon from "../../image/image1.png";
import messageIcon from "../../image/image2.png";
import CampaignsIcon from "../../image/image3.png";
import billingIcon from "../../image/image4.png";
import customizeImage from "../../image/customizeImage.png";
import overImage from "../../image/overImage.png";
import user from "../../image/user.png";
import msg from "../../image/msg.png";
import sportsIcon from "../../image/sportsIcon.png";
import logoIcon from "../../image/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Sidebar = () => {
  const [isCampaignsOpen, setIsCampaignsOpen] = useState(false);

  return (
    <div className="w-[200px] md:w-[248px] h-full bg-white shadow-md flex flex-col border-r">
      <div className="p-6 flex items-center">
        <img src={logoIcon} alt="Logo" className="h-[32px] w-[111.24px]" />
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 mt-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md ${isActive ? "bg-gray-200 text-indigo-600" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <RxDashboard className="text-xl mr-2" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md ${isActive ? "bg-gray-200 text-indigo-600" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <IoNotificationsOutline className="text-xl mr-2" />
              <span>Notifications</span>
              <span className="ml-auto text-sm text-white bg-[#5325DC] rounded-full h-[20px] w-[20px] flex items-center justify-center">8</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/audience"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md ${isActive ? "bg-gray-200 text-indigo-600" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <CiUser className="text-xl mr-2" />
              <span>Audience</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md ${isActive ? "bg-gray-200 text-indigo-600" : "text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setIsCampaignsOpen(!isCampaignsOpen)}
            >
              <img src={CampaignsIcon} alt="Campaigns" className="h-5 w-5 mr-2" />
              <span>Campaigns</span>
              <IoIosArrowDown className={`ml-auto text-gray-500 ${isCampaignsOpen ? "rotate-180" : ""}`} />
            </NavLink>
            {isCampaignsOpen && (
              <ul className="pl-6 space-y-2 mt-2">
                <li>
                  <NavLink
                    to="/campaigns"
                    className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    <span>Campaign 1</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/campaigns"
                    className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    <span>Campaign 2</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md ${isActive ? "bg-gray-200 text-indigo-600" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <img src={messageIcon} alt="Messages" className="h-5 w-5 mr-2" />
              <span>Messages</span>
              <span className="ml-auto bg-[#EA580C] text-black text-xs px-2 py-1 rounded-full">99+</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discounts"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md ${isActive ? "bg-gray-200 text-indigo-600" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <img src={discountIcon} alt="Discounts" className="h-5 w-5 mr-2" />
              <span>Discounts</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/billing"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md ${isActive ? "bg-gray-200 text-indigo-600" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <img src={billingIcon} alt="Billing" className="h-5 w-5 mr-2" />
              <span>Billing</span>
            </NavLink>
          </li>
          <li className="pt-10 pb-7">
            <NavLink
              to="/supports"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md ${isActive ? "bg-gray-200 text-indigo-600" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <img src={sportsIcon} alt="Supports" className="h-5 w-5 mr-2" />
              <span>Supports</span>
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md ${isActive ? "bg-gray-200 text-indigo-600" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <IoSettingsOutline className="text-xl mr-2" />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="px-4 py-12 bg-[#F1F5F9] border-t">
        <h1 className="text-[14px] font-bold text-gray-800">Customization Options</h1>
        <p className="text-xs text-gray-600 mt-2">Customize design, colors, and positioning as per your branding.</p>
        <div className="mb-4 relative mt-4">
          <img src={customizeImage} alt="Customization" className="rounded-md w-full" />
          <img src={overImage} alt="" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <button className="mt-2 w-full text-[#5325DC] font-medium text-sm hover:underline transition duration-300">Apply Changes →</button>
      </div>
      <div className="p-4 border-t flex items-center space-x-4">
        <img src={user} alt="User" className="h-10 w-10 rounded-full" />
        <div>
          <p className="text-sm font-medium text-gray-800">Jenny Wilson</p>
          <p className="text-xs text-gray-500">jenny@codeshaper.com</p>
        </div>
        <img src={msg} alt="Message" className="h-[20px] w-[20px]" />
      </div>
    </div>
  );
};

export default Sidebar;
