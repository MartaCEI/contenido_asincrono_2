import { mysqlConfig } from "../config/config.js"

// importo la conexion a mysqlConfig
import mysqldb from "../data/mysqldb.js"

// endpoint 
export const getAllCorreos = async (req, res) => {

    // Obtener la lista de correos y devolver al usuario su correo

    const query = 'SELECT * FROM correos';
    const [rows] = await mysqldb.query(query);

    res.status(200).json({
        msg: "Lista de correos",
        success:"ok",
        data: rows
    })
}