import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { CgGoogleTasks } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogout = () => {
    if (user) {
      logOut()
        .then((res) => {
          console.log(res.user);
          toast.success("SuccesFully Logout");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  console.log(user);
  // smooth scroll start
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  // smooth scroll end
  const navItem = (
    <>
      <li className="font-light text-white text-lg">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="font-light text-white text-lg">
        {user && <Link to="/dashboard">DashBoard</Link>}
      </li>
      <li className="font-light text-white text-lg">
        <a href="#whobanifit">Who Banifits</a>
      </li>
    </>
  );

  return (
    <div className="lg:pt-6">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown text-black">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
              >
                {navItem}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl text-white">
              <CgGoogleTasks size={40} />
              ProTaskMagnet
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItem}</ul>
          </div>
          <div className="navbar-end text-white ">
            {user ? (
              <a onClick={handleLogout} className="cursor-pointer">
                LogOut
              </a>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
