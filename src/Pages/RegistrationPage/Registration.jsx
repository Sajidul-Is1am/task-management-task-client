import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { ImageUpload } from "../../Utility/Utility";
import axiosPublic from "../../api";

const Registration = () => {
  const navigate = useNavigate();
  const { createUser, user, profileUpdate } = useContext(AuthContext);

  const handleRegistration = async (e) => {
    e.preventDefault();
    const form = e.target;
    //   this two item for update
    const name = form.name.value;
    const photo = form.photo.files[0];
    const email = form.email.value;
    const password = form.password.value;

    const imageData = await ImageUpload(photo);
    console.log(imageData);
    const userInfo = {
      email,
      name,
    };
    console.log(name, imageData?.data?.data?.display_url);
    // console.log(userInfo);
    createUser(email, password)
      .then(async (res) => {
        toast.success("Successfully Registration!");
        navigate("/");
        console.log(res.user);
        axiosPublic.put(`/users/${email}`, userInfo).then((res) => {
          console.log(res?.data);
          profileUpdate(name, imageData?.data?.display_url)
            .then((res) => {
              console.log(res.user);
            })
            .catch((err) => {
              console.log(err.message);
            });
          console.log(res.data);

        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  console.log(user);

  return (
    <div>
      <div className="">
        <div className="bg-[#3fc2bd]">
          <Navbar />
        </div>

        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-center">
              <h1 className="text-5xl font-bold mb-12">Registration..</h1>
              <img
                src="https://i.ibb.co/HGWZhyx/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.png"
                alt=""
              />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegistration} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered input-accent"
                    required
                    name="name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Profile</span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                    name="photo"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered input-accent"
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
                    className="input input-bordered input-accent"
                    required
                    name="password"
                  />
                  <p className="mt-2">
                    have any account{" "}
                    <Link to={"/login"} className="underline text-blue-600">
                      Login
                    </Link>
                  </p>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
