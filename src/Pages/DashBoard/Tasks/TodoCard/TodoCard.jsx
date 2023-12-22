/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axiosPublic from "../../../../api";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
// import { useContext } from "react";
// import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
const TodoCard = ({ taskItem, refetch }) => {
  const { priyrity, descriptions, deadlines, title, _id } = taskItem;

  //   const { user } = useContext(AuthContext);

 

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const data = await axiosPublic.delete(`/previous/${_id}`);
        console.log(data?.data);
        await refetch();

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  console.log(_id);
  return (
    <div>
      <div className="bg-gray-100 rounded-lg shadow-md p-4  m-4 flex relative ">
        <div className="mr-7 space-y-2">
          <h3 className="font-semibold text-lg">
            Title : <span className="text-base font-normal">{title}</span>
          </h3>
          <h3 className="font-semibold text-lg">
            Date : <span className="text-base font-normal">{deadlines}</span>
          </h3>
          <h3 className="font-semibold text-lg">
            Priority : <span className="text-base font-normal">{priyrity}</span>
          </h3>
          <h3 className="font-semibold text-lg">
            Description :{" "}
            <span className="text-base font-normal">{descriptions}</span>
          </h3>
        </div>
        {/* delete */}
        <div className="absolute top-0 right-0 p-4">
          <Link to={`/dashboard/update/${_id}`}>
            <FaEdit size={25} className="text-rose-600" />
          </Link>
        </div>
        {/* delete start */}
        <div className="absolute bottom-0 right-0 p-4">
          <Link onClick={() => handleDelete(_id)}>
            <MdDelete size={25} className="text-rose-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
