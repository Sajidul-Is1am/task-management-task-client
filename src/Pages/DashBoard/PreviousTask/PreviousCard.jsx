import { MdDelete } from "react-icons/md";
const PreviousCard = ({ previous }) => {
  const { priyrity, descriptions, deadlines, title } = previous;
  return (
    <div className="flex border-2">
      <div className="card   ">
        <div className="card-body text-left">
          <h2 className="card-title"> {title}</h2>
          <p>{descriptions}</p>
          <p>{priyrity}</p>
          <p>{deadlines}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-rose-500 text-white">
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
