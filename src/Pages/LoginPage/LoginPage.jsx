import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import axiosPublic from "../../api";

const LoginPage = () => {
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const { signIn, signInWithGoogle, singInwithGithub } =
    useContext(AuthContext);
  // login with email passwrd
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Login!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // login with google
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        const email = res?.user?.email;
        const username = res?.user?.displayName;
        const userInfo = { email, username };
        axiosPublic.put(`/users/${email}`, userInfo);
        console.log(res.user);
        toast.success("Successfully Login!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // login with github
  const handelGithubLogin = () => {
    singInwithGithub()
      .then((res) => {
        const email = res?.user?.email;
        const username = res?.user?.displayName;
        const userInfo = { email, username };
        axiosPublic.put(`/users/${email}`, userInfo);
        console.log(res.user);
        toast.success("Successfully Login!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="">
      <div className="bg-[#3fc2bd]">
        <Navbar />
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold mb-12">Login Now..</h1>
            <img
              src="https://i.ibb.co/HGWZhyx/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.png"
              alt=""
            />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
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
                  name="password"
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
                  <button
                    onClick={handleGoogleLogin}
                    className="btn w-full mb-2 bg-none btn-outline transition duration-500"
                  >
                    <FcGoogle size={25} />
                    Google Login
                  </button>
                  <button
                    onClick={handelGithubLogin}
                    className="btn w-full bg-none btn-outline transition duration-500"
                  >
                    <FaGithub size={25} />
                    Github Login
                  </button>
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
