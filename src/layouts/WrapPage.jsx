import { Outlet, Link, useLocation } from "react-router-dom";

const WrapPage = () => {
  const location = useLocation();
  //console.log(location);

  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/4 bg-sky-500 uppercase py-10 px-8 text-white'>
        <div
          className={`${
            location.pathname == "/" ? "text-blue-200" : "text-white"
          } py-2 px-4 hover:bg-sky-950 cursor-pointer`}>
          <Link to={"/"}>
            <i className='fa fa-check-circle' /> Usuarios
          </Link>
        </div>
        <div
          className={`${
            location.pathname == "/registro" ? "text-blue-200" : "text-white"
          } py-2 px-4 hover:bg-sky-950 cursor-pointer`}>
          <Link to={"/registro"}>
            <i className='fa fa-check-circle' /> Crear Usuario
          </Link>
        </div>
      </div>
      <div className='md:w-3/4 py-10 px-32'>
        <Outlet />
      </div>
    </div>
  );
};

export default WrapPage;
