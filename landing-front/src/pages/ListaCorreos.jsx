import { useState } from "react";
const URL = import.meta.env.VITE_API_URL;

const ListaCorreos = () => {
    const [listaCorreo, setListaCorreo ] = useState([]);

    useEffect(() => {
        fetchCorreos();
    }, []);

    const fetchCorreos = async () => {
        try {
            const respuesta = await fetch(`${URL}/correos`)
            const objeto = await objeto.json();
            console.log(objeto);

            if (objeto.status == "error") {
                setUserError(`Tuvimos un error: ${objeto.msg}`)
                return;
            } 
            setListaCorreo(objeto.data);

        } catch (error) {
            console.log("Error al hacer el fetch de los posts:", error);
        }
    }

    const {asunto, contenido} = correo;

    return (
        <>
            {
            listaCorreo.map((correo) => 
            {
            return <Correo key={correo.id} {...correo} />}
            }
        </>
    );
}

export default ListaCorreos;