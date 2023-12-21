import { useForm } from "react-hook-form";



const NewTask = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
    const onSubmit = (data) => {
      console.log(data)
  }



  return (
    <div className="">
      <h3 className="text-center text-4xl font-bold my-8">New Tasks</h3>
      <form
        className="bg-[#CAD9F6] px-10 py-28 grid grid-cols-2 w-full gap-12 rounded-md justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full">
          <input
            placeholder="Title"
            {...register("title", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
            className="w-full input"
          />
          {/* {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )} */}
        </div>
        <div className="w-full">
          <input
            placeholder="Deadlines"
            type="date"
            {...register("deadlines", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
            className="w-full input"
          />
          {/* {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )} */}
        </div>
        <div className="w-full">
          <textarea
            placeholder="Descriptions"
            {...register("descriptions", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
            className="w-full input pt-2"
          />
          {/* {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )} */}
        </div>
        <div className="w-full">
          <select
            {...register("priyrity", { required: true })}
            className="input w-full"
          >
            <option disabled>Priyority</option>
            <option>Low</option>
            <option>Moderate</option>
            <option>Heigh</option>
          </select>
        </div>

        <input
          className="btn col-span-2 w-2/6 mx-auto"
          value={"Create Task"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default NewTask;