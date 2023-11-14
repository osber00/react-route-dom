import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { createCliente } from "../data/ApiClientes";

export const crearClienteAction = async ({ request }) => {
  const formData = await request.formData();
  //console.log(formData.get('nombre'));
  //console.log([...formData]);
  const datos = Object.fromEntries(formData);
  //console.log(datos);
  const email = formData.get("email");

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

  const regCliente = await createCliente(datos)
  if (Object.keys(regCliente).length) {
    return redirect('/')
    
  }
  errores.push("No se guardó la información")
  return errores;
};

const NuevoCliente = () => {
  const navigate = useNavigate();
  const errores = useActionData();
  //console.log(errores);
  return (
    <>
      <div className='mb-6'>
        <h2 className='text-2xl uppercase font-semibold'>
          Nuevo Cliente
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
          <Formulario></Formulario>
          <button
            type='submit'
            className='bg-blue-700 w-full text-white font-semibold py-4 uppercase rounded-md hover:bg-blue-600'>
            <i className='fa fa-save' /> Guardar registro
          </button>
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
