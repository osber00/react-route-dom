const Error = ({ children }) => {
  return (
    <div className='bg-red-600 text-white text-center my-2 font-semibold py-3 px-3 uppercase shadow-md rounded-md'>
      {children}
    </div>
  );
};

export default Error;
