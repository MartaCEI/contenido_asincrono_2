import { useState, useEffect } from "react";
const URL = import.meta.env.VITE_API_URL;
import Correo from "../components/Correo";

const ListaCorreos = () => {
    const [listaCorreo, setListaCorreo ] = useState([]);

    useEffect(() => {
        fetchCorreos();
    }, []);

    const fetchCorreos = async () => {
        try {
            const respuesta = await fetch(`${URL}/correos`)
            const objeto = await respuesta.json();
            console.log(objeto.data);

            if (objeto.status == "error") {
                setUserError(`Tuvimos un error: ${objeto.msg}`)
                return;
            } 
            setListaCorreo(objeto.data);

        } catch (error) {
            console.log("Error al hacer el fetch de los posts:", error);
        }
    }

    return (
        <>
            {
            listaCorreo.map((correo) => {
                return <Correo key={correo.id} {...correo} />
            })
            }
        </>
    );
}

export default ListaCorreos;