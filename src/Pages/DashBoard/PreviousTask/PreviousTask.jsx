import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../../api";
import PreviousCard from "./PreviousCard";
// import PreviousCard from "./PreviousCard";

const PreviousTask = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading,refetch } = useQuery({
    queryKey: ["previousQuery"],
    queryFn: async () => {
      const response = await axiosPublic.get(`/previous/${user?.email}`);
      return response.data;
    },
  });
  if (isLoading) {
    return (
      <span className="loading loading-dots loading-lg flex mx-auto items-center h-screen"></span>
    );
  }
  return (
    <div>
      <h3 className="text-center text-4xl font-bold mt-4 mb-6 ">
        Previous Tasks
      </h3>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 max-h-[500px] overflow-y-scroll">
        {data?.map((previous) => (
          <PreviousCard
            key={previous._id}
            previous={previous}
            refetch={refetch}
          ></PreviousCard>
        ))}
      </div>
    </div>
  );
};

export default PreviousTask;
