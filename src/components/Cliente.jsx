import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente }) => {
  const navigate = useNavigate()
  const { id, nombre, email, telefono, empresa } = cliente;
  return (
    <tr>
      <td className='py-4 px-6'>
        {nombre}
        <div className='text-gray-600 text-sm'>
          <i className='fa fa-check-square' /> {telefono}
        </div>
      </td>
      <td className='py-4 px-6'>{email}</td>
      <td className='py-4 px-6'>{empresa}</td>
      <td className='py-4 px-6'>
        <button 
          onClick={()=>navigate(`/registro/${id}/editar`)}
          className='bg-blue-500 hover:bg-gray-700 uppercase text-white py-2 px-4 text-center text-sm rounded-md'>
          Editar
        </button>
        <button className='bg-red-500 hover:bg-gray-700 uppercase text-white py-2 px-4 text-center text-sm rounded-md ml-2'>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
