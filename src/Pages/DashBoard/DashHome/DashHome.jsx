const DashHome = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 my-10">
      <div className="  bg-green-500 text-white rounded-lg flex justify-between  px-5 py-10">
        <h3 className="text-2xl font-bold">Previos Task:</h3>
        <span className="text-3xl font-bold">0</span>
      </div>
      <div className="  bg-orange-600 text-white rounded-lg flex justify-between  px-5 py-10">
        <h3 className="text-2xl font-bold">Total User:</h3>
        <span className="text-3xl font-bold">0</span>
      </div>
      <div className="  bg-rose-600 text-white rounded-lg flex justify-between  px-5 py-10">
        <h3 className="text-2xl font-bold">To Do Task:</h3>
        <span className="text-3xl font-bold">0</span>
      </div>
      <div className="  bg-pink-600 text-white flex justify-between rounded-lg  px-5 py-10">
        <h3 className="text-2xl font-bold">Ongoin Task:</h3>
        <span className="text-3xl font-bold">0</span>
      </div>
      <div className="  bg-accent text-white rounded-lg  px-5 py-10 flex justify-between">
        <h3 className="text-2xl font-bold">Complete Task: </h3>
        <span className="text-3xl font-bold">0</span>
      </div>
    </div>
  );
};

export default DashHome;
