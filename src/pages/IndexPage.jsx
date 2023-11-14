import { useLoaderData } from "react-router-dom";
import { clientes } from "../data/usuarios";
import Cliente from "../components/Cliente";
import { getClientes } from "../data/ApiClientes";

export const clientesLoader = () => {
  const clientes = getClientes()
  return clientes
};

const IndexPage = () => {
  const clientes = useLoaderData();
  //console.log(clientes);
  return (
    <>
      <h1 className='text-2xl font-semibold mb-4 uppercase'>
        Resgistro de clientes
      </h1>

      {clientes.length ? (
        <table className='min-w-full divide-y divide-gray-200 shadow-lg'>
        <thead className='bg-gray-800'>
          <tr>
            <th className='text-left text-white py-4 px-6'>Nombre</th>
            <th className='text-left text-white py-4 px-6'>Email</th>
            <th className='text-left text-white py-4 px-6'>Empresa</th>
            <th className='text-left text-white py-4 px-6'>Acciones</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {clientes.map((cliente) => (
            <Cliente cliente={cliente} key={cliente.id} />
          ))}
        </tbody>
      </table>
      ) :(
        <div className="uppercase bg-red-400 py-4 rounded-md text-white font-semibold text-center">No hay clientes</div>
      )}
    </>
  );
};

export default IndexPage;
