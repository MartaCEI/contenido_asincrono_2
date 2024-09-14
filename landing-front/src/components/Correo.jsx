const URLSTATIC = import.meta.env.VITE_STATIC_URL;
const URL = import.meta.env.VITE_API_URL;

const Correo = ({asunto, contenido, leido, created_at, destinatario_id, remitente_id, remitente_image, remitente_nombre, remitente_email, destinatario_nombre, destinatario_email}) => {

    return (
        <section className="Correo">
            <div className="Correo-info">
                <div className="Correo-left">
                    <img src={`${URLSTATIC}/img/${remitente_image}`} alt={remitente_nombre} />
                </div>
                <div className="Correo-right">
                    <div className="Correo-remitente">
                        <p><b>FROM: </b>{remitente_nombre}</p>
                        <p>{created_at}</p>
                    </div>
                    <div className="Correo-destinatario">
                        <p><b>TO: </b>{destinatario_nombre}</p>
                    </div>
                </div>
            </div>

            <div className="Correo-asunto">
                <h2 className="Correo-h2">{asunto}</h2>
            </div>

            <div className="Correo-contenido">
                <p>{contenido}</p>
            </div>
        </section>
    );
}

export default Correo;


// {
// leido ?
// <input type="checkbox" id="leido" name="leido" value="leido" checked />
// : <input type="checkbox" id="leido" name="leido" value="leido" />
// } <label for="leido">Leído</label>
