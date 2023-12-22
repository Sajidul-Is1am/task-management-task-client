import { useForm } from "react-hook-form";
import axiosPublic from "../../../../api";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const UpdateTask = () => {
  const { id } = useParams();
  console.log(id);
//   get single data form databse
  const { data:DefaultUpdate,refetch ,isLoading} = useQuery({
      queryKey: ["updateitem"],
      enabled:  !!id,
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/singleTask/${id}`
      );
      return response?.data;
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    } = useForm();
    
  const onSubmit =  (data) => {
      axiosPublic.patch(`/newtask/${id}`,data)
          .then(res => {
              console.log(res.data);
              refetch()
              toast.success('Updated Task')
      })
    };
    if (isLoading) {
        return "loading"
    }
      return (
        <div>
          <form
            className="bg-[#ECF0F1] px-10 py-28 lg:grid lg:grid-cols-2 space-y-5 w-full lg:gap-12 rounded-md justify-center items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <input
                placeholder="Title"
                {...register("title", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"}
                className="w-full input col-span-1"
                defaultValue={DefaultUpdate?.title}
              />
            </div>
            <div className="w-full">
              <input
                placeholder="Deadlines"
                type="date"
                {...register("deadlines", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"}
                className="w-full input"
                defaultValue={DefaultUpdate?.deadlines}
              />
            </div>
            <div className="w-full">
              <textarea
                placeholder="Descriptions"
                {...register("descriptions", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"}
                className="w-full input pt-2"
                defaultValue={DefaultUpdate?.descriptions}
              />
            </div>
            <div className="w-full">
              <select
                {...register("priyrity", { required: true })}
                className="input w-full"
                defaultValue={DefaultUpdate?.priyrity}
              >
                <option disabled>Priyority</option>
                <option>Low</option>
                <option>Moderate</option>
                <option>Heigh</option>
              </select>
            </div>

            <input
              className="bg-white btn col-span-2 lg:w-2/6 w-full mx-auto"
              value={"Update Task"}
              type="submit"
            />
          </form>
        </div>
      );
};

export default UpdateTask;
