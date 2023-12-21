import { Link } from "react-router-dom";
import Container from "../../../Components/Shared/Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const Banner = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Container>
        <div className="md:py-6 mt-16 grid md:grid-cols-2 grid-cols-1 justify-between items-center">
          <div className="space-y-4">
            <h1 className="text-7xl font-bold">Task</h1>
            <h4 className="text-4xl font-semibold">Management Pro</h4>
            <p className="max-w-[500px] pb-6">
              Simplify collaboration and boost productivity with our seamless
              team task management solution. Effortlessly coordinate tasks, stay
              organized, and achieve your team goals.
            </p>
            <button to={"/dashboard"} className="">
              <Link
                className="px-6 py-4  bg-[#3fc2bd] transition duration-500 text-white rounded-tl-2xl rounded-br-2xl hover:bg-[#419e9b]"
                to={`${user?"/dashboard":"/login"}`}
              >
                {" "}
                Explore More
              </Link>
            </button>
          </div>
          <div>
            <img
              src="https://i.ibb.co/KK0DJvW/42-removebg-preview.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
