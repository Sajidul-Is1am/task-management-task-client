import { Link, Outlet } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { VscChecklist } from "react-icons/vsc";
import { IoHomeOutline, IoSearchSharp } from "react-icons/io5";
import { IoIosNotifications, IoMdAdd } from "react-icons/io";
import { GrFormPrevious } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { MdMenuOpen } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import toast from "react-hot-toast";
// import { Query, useQuery } from "@tanstack/react-query";


const DashBoard = () => {
  const { user, logOut } = useContext(AuthContext);

   const handleLogout = () => {
     if (user) {
       logOut()
         .then((res) => {
           console.log(res.user);
           toast.success("SuccesFully Logout")
         })
         .catch((err) => {
           console.log(err.message);
         });
     }
   };

  const profileImage = user?.photoURL;
  return (
    <div className="grid grid-cols-12 rounded-xl">
      <div className="col-span-2 ">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content z-[2] flex flex-col items-center justify-end">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden "
            >
              <MdMenuOpen />
            </label>
          </div>
          <div className="drawer-side z-[1]">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu px-10 bg-[#3fc2bd] lg:bg-gray-200  min-h-screen space-y-6 text-base-content">
              {/* Sidebar content here */}
              <h1 className="text-center pt-10 pb-16 text-2xl font-bold">
                ProTaskMagnet.
              </h1>
              <li className="text-lg bg-[#EEF2FC] rounded-md">
                <Link>
                  <LuLayoutDashboard /> DashBoard
                </Link>
              </li>
              <li className="text-lg bg-[#EEF2FC] rounded-md">
                <Link to={"/dashboard/tasks"}>
                  <VscChecklist />
                  Tasks
                </Link>
              </li>
              <li className="text-lg bg-[#EEF2FC] rounded-md">
                <Link to={"/dashboard/newtask"}>
                  <IoMdAdd />
                  New Task
                </Link>
              </li>
              <li className="text-lg bg-[#EEF2FC] rounded-md">
                <Link to={`/dashboard/previous`}>
                  <GrFormPrevious />
                  Previous Tasks
                </Link>
              </li>
              <div className="divider"></div>
              <li className="text-lg bg-[#EEF2FC] rounded-md">
                <Link to={"/"}>
                  <IoHomeOutline /> Home
                </Link>
              </li>
              <li className="text-lg bg-rose-600 text-white rounded-md flex ">
                {user && (
                  <Link className="cursor-pointer" onClick={handleLogout}>
                  <CiLogout size={25} className="font-bold"/>  LogOut
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-10 w-full pt-4 px-4 ">
        <div className="w-full flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full input rounded-r-none bg-gray-200"
          />
          <button className="btn join-item bg-gray-200 rounded-l-none">
            Search
            <IoSearchSharp />
          </button>
          <IoIosNotifications className="" size={30} />
          <div className="avatar online">
            <div className="w-12 rounded-full border-2">
              <img src={profileImage} />
            </div>
          </div>
        </div>
        <div className="lg:divider"></div>

        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
