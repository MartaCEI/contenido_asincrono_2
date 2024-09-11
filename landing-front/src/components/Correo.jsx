const Correo = ({asunto, contenido, leido, created_at}) => {
    return (
        <div className="Correo-div">
            <h2>{asunto}</h2>
            <p>{contenido}</p>
            <p>{created_at}</p>
            {
            leido ?
            <input type="checkbox" id="leido" name="leido" value="leido" checked />
            : <input type="checkbox" id="leido" name="leido" value="leido" />
            } <label for="leido">Leído</label>
        </div>
    );
}

export default Correo;
