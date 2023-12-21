import { Link, Outlet } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { VscChecklist } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";


const DashBoard = () => {
  return (
    <div className="grid grid-cols-12 rounded-xl">
      <div className="col-span-2 border-r-2">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu px-16  min-h-full space-y-6 text-base-content">
              {/* Sidebar content here */}
              <h1 className="text-center pt-10 pb-16 text-2xl">TaskMinder.</h1>
              <li className="text-lg bg-[#EEF2FC] rounded-md">
                <Link>
                  <LuLayoutDashboard /> DashBoard
                </Link>
              </li>
              <li className="text-lg bg-[#EEF2FC] rounded-md">
                <Link to={'/dashboard/tasks'}>
                  <VscChecklist />
                  Tasks
                </Link>
              </li>
              <li className="text-lg bg-[#EEF2FC] rounded-md">
                <Link>
                  <IoMdAdd />
                  New Task
                </Link>
              </li>
              <div className="divider"></div>
              <li className="text-lg bg-[#EEF2FC] rounded-md">
                <Link to={"/"}>
                  <IoHomeOutline /> Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-10 w-full pt-4 px-4">
        <div className="w-full flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full input rounded-r-none bg-gray-200"
          />
          <button className="btn join-item bg-gray-200 rounded-l-none">
            Search
            <IoSearchSharp  />
          </button>
          <IoIosNotifications className="" size={30} />
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
                  </div>
                  
              </div>
              <div className="divider"></div>

              <div>
                  <Outlet></Outlet>
              </div>
      </div>
    </div>
  );
};

export default DashBoard;