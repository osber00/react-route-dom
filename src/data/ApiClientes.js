export const getClientes = async()=>{
    const url = import.meta.env.VITE_URL_API+'/clientes'
    const request = await fetch(url)
    const response = await request.json()
    return response
}

export const getCliente = async (clienteId)=>{
    const url = import.meta.env.VITE_URL_API+'/clientes/'+clienteId
    const request = await fetch(url)
    const response = await request.json()
    return response
}

export const createCliente = async (datos)=>{
    try {
        const url = import.meta.env.VITE_URL_API+'/clientes'
        const request = await fetch(url,{
            method:'post',
            body: JSON.stringify(datos),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const response = await request.json()
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const updateCliente = async (id,datos)=>{
    try {
        const url = import.meta.env.VITE_URL_API+'/clientes/'+id
        const request = await fetch(url,{
            method:'put',
            body: JSON.stringify(datos),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const response = await request.json()
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const deleteCliente = async (id)=>{
    try {
        const url = import.meta.env.VITE_URL_API+'/clientes/'+id
        const request = await fetch(url,{
            method:'delete',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const response = await request.json()
        return response
    } catch (error) {
        console.log(error);
    }
}