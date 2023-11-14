import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error.message);
  return (
    <>
    <h1 className="uppercase text-center text-2xl font-semibold mt-6">Ups! Algo salió mal</h1>
    <div className="bg-red-200 text-black text-center mt-4 py-3 px-3 rounded-md">{error.statusText || error.message}</div>
    </>
  )
}

export default ErrorPage