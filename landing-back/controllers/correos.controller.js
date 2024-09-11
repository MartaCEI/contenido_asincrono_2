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


export const createCorreo = async (req, res) => {
    const {remitente_id, destinatario_id, asunto, contenido} = req.body;

    if (!remitente_id || !destinatario_id || !asunto || !contenido) {
        return res.status(400).json({msg: "Faltan datos obligatorios"})
    }
    
    const query = `INSERT INTO correos (remitente_id, destinatario_id, asunto, contenido) 
        VALUES (?, ?, ?, ?)`;

    const [result] = await mysqldb.query(query, [remitente_id, destinatario_id, asunto, contenido]);
    
    const  newCorreo = {
        remitente_id: remitente_id,
        destinatario_id: destinatario_id,
        asunto: asunto,
        contenido: contenido,
    }

    posts.push(newCorreo);

    res.status(201).json({ msg: "Correo creado", success: "ok", data: newCorreo });
}


// export const getSingleCorreo = async (req, res) => {
//     const {id} = req.params;
//     const query = `SELECT * FROM correos WHERE id = ${id}`;
//     // const [rows] = await mysqldb.query(query, [id]);
//     const [rows] = await mysqldb.query(query);

//     res.status(200).json({
//         msg: "Correo encontrado",
//         success:"ok",
//         data: rows[0]
//     })
// }

// export const getSingleCorreoWithReplies = (req,res) => {
//     const {id} = req.params;
//     // Busca el post con el id que se pasa por parámetro 
//     const post = posts.find(post => post.id == parseInt(id));
//     // Busca los comentarios que coinciden con el postId.
//     const comentarios = comments.filter(comment => comment.postId == parseInt(id));
//     // Agrego a post el atributo "coments" y va hacer un array con todos los comentarios.
//     post.comments = comentarios;
    
//     res.status(200).json(post);
// }