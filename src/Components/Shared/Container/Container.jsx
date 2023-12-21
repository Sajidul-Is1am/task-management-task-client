/* eslint-disable react/prop-types */


const Container = ({ children }) => {
  return (
    <div className="sm:px-3 px-4 md:px-6 lg:px-32 xl:px-32 2xl:px-32">
      {children}
    </div>
  );
};


export default Container;
