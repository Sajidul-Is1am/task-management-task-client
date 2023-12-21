import { Link } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="">
      <div className="bg-[#3fc2bd]">
        <Navbar />
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img
              src="https://i.ibb.co/HGWZhyx/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.png"
              alt=""
            />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <p className="mt-2">
                  Don't have any account{" "}
                  <Link
                    to={"/registration"}
                    className="underline text-blue-600"
                  >
                    Registration
                  </Link>
                </p>
                <div className="divider"></div>
                <div>
                  <button className="btn w-full mb-2 bg-none btn-outline transition duration-500">
                    <FcGoogle size={25} />
                    Google Login
                  </button>
                  <button className="btn w-full bg-none btn-outline transition duration-500">
                    <FaGithub size={25} />
                    Github Login
                  </button>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
