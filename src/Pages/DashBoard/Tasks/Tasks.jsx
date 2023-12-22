import { PiRectangleBold } from "react-icons/pi";
import { GrInProgress } from "react-icons/gr";
import { FaFlagCheckered } from "react-icons/fa";
const Tasks = () => {
  return (
    <div>
      <h3 className="text-4xl font-semibold mb-5">Tasks</h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 justify-center ">
        <div className="p-2  bg-[#ECF0F1] rounded-md h-[530px] overflow-y-scroll">
          <h4 className="mt-3 ml-4 flex items-center gap-2 text-xl font-bold">
            <PiRectangleBold size={25} />
            To Do
          </h4>
          <div className="bg-gray-100 rounded-lg shadow-md p-4  m-4">
            <h3 className="font-semibold text-lg">
              Title :{" "}
              <span className="text-base font-normal">This is Title</span>
            </h3>
            <h3 className="font-semibold text-lg">
              Date : <span className="text-base font-normal">This is Date</span>
            </h3>
            <h3 className="font-semibold text-lg">
              Priority :{" "}
              <span className="text-base font-normal">This is Priority</span>
            </h3>
            <h3 className="font-semibold text-lg">
              Description :{" "}
              <span className="text-base font-normal">This is Description</span>
            </h3>
          </div>
        </div>
        <div className="p-2  bg-[#ECF0F1] rounded-md h-[530px] overflow-y-scroll">
          <h4 className="mt-3 ml-4 flex items-center gap-2 text-xl font-bold">
            <GrInProgress size={25} />
            Ongoing
          </h4>
          <div className="bg-gray-100 rounded-lg shadow-md p-4  m-4">
            <h3 className="font-semibold text-lg">
              Title :{" "}
              <span className="text-base font-normal">This is Title</span>
            </h3>
            <h3 className="font-semibold text-lg">
              Date : <span className="text-base font-normal">This is Date</span>
            </h3>
            <h3 className="font-semibold text-lg">
              Priority :{" "}
              <span className="text-base font-normal">This is Priority</span>
            </h3>
            <h3 className="font-semibold text-lg">
              Description :{" "}
              <span className="text-base font-normal">This is Description</span>
            </h3>
          </div>
        </div>
        <div className="p-2  bg-[#ECF0F1] rounded-md h-[530px] overflow-y-scroll">
          <h4 className="mt-3 ml-4 gap-2 flex items-center text-xl font-bold">
            <FaFlagCheckered />
            Complete
          </h4>
          <div className="bg-gray-100 rounded-lg shadow-md p-4  m-4">
            <h3 className="font-semibold text-lg">
              Title :{" "}
              <span className="text-base font-normal">This is Title</span>
            </h3>
            <h3 className="font-semibold text-lg">
              Date : <span className="text-base font-normal">This is Date</span>
            </h3>
            <h3 className="font-semibold text-lg">
              Priority :{" "}
              <span className="text-base font-normal">This is Priority</span>
            </h3>
            <h3 className="font-semibold text-lg">
              Description :{" "}
              <span className="text-base font-normal">This is Description</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
