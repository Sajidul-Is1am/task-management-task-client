/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import axiosPublic from "../../../api";
import Swal from "sweetalert2";
const PreviousCard = ({ previous, refetch }) => {
  const { priyrity, descriptions, deadlines, title, _id } = previous;
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
  return (
    <div className="flex border-2">
      <div className="card   ">
        <div className="card-body text-left">
          <h2 className="card-title"> {title}</h2>
          <p>{descriptions}</p>
          <p>{priyrity}</p>
          <p>{deadlines}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-rose-500 text-white"
            >
              <MdDelete />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousCard;
