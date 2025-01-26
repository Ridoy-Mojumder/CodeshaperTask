import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import dashboardIcon from '../image/dashboardIcon.png';

const Root = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <div className={`fixed md:relative z-50 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <Sidebar />
      </div>

      <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'ml-64' : ''} transition-all duration-300`}>
        <Navbar />

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 "
        >
          {isSidebarOpen ? <><button className="flex items-center justify-center w-[32px] h-[32px] p-[6px] rounded-full shadow-md hover:bg-gray-100">
                        <img src={dashboardIcon} alt="" className='h-[20px] w-[20px]' />
                    </button></> : <><button className="flex items-center justify-center w-[32px] h-[32px] p-[6px] rounded-full shadow-md hover:bg-gray-100">
                        <img src={dashboardIcon} alt="" className='h-[20px] w-[20px]' />
                    </button></>} 
        </button>

        <div className="flex-1 bg-gray-100 p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
