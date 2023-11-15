import {
  useLoaderData,
  useActionData,
  useNavigate,
  Form,
  redirect
} from "react-router-dom";
import { getCliente, updateCliente } from "../data/ApiClientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export const editarClienteLoader = async ({ params }) => {
  //console.log(params.clienteId);
  const cliente = await getCliente(params.clienteId);
  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "No encontrado",
    });
  }
  return cliente;
};

export const editarClienteAction = async ({ request, params }) => {
  const formData = await request.formData();
  //console.log([...formData]);
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");
  //console.log(datos);
  //console.log(params);
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push("El email no es válido");
  }

  if (Object.keys(errores).length > 0) {
    return errores;
  }

  const guardarCambios = await updateCliente(params.clienteId, datos)
  if (Object.keys(guardarCambios).length > 0) {
    return redirect('/')
  }

  errores.push('No se guardaron los cambios')
  return errores;
};

const EditarCliente = () => {
  const cliente = useLoaderData();
  const navigate = useNavigate();
  const errores = useActionData()
  //console.log(cliente);
  return (
    <>
      <div className='mb-6'>
        <h2 className='text-2xl uppercase font-semibold'>
          Editar Cliente
          <button
            className='bg-black text-white text-sm float-right py-2 px-2 rounded hover:bg-slate-500'
            onClick={() => navigate(-1)}>
            <i className='fa fa-angle-left'></i> Volver
          </button>
        </h2>
      </div>
      <div className='bg-white py-6 px-6 rounded-md'>
        <Form method='post' noValidate>
          {errores?.length &&
            errores.map((error, i) => <Error key={i}>{error}</Error>)}
          <Formulario cliente={cliente}></Formulario>
          <button
            type='submit'
            className='bg-red-700 w-full text-white font-semibold py-4 uppercase rounded-md hover:bg-blue-600'>
            <i className='fa fa-save' /> Guardar cambios
          </button>
        </Form>
      </div>
    </>
  );
};

export default EditarCliente;
