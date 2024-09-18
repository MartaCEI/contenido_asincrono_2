import mongoose from 'mongoose'
import {mongodbUri} from '../config/config.js'

// crear una conexion
const connectDB = async () => {
    try {
        await mongoose.connect(mongodbUri);
        console.log("Conectado correctamente")
    } catch (error) {
        console.log("Error conectando a MongooDB", error.message);
        process.exit(1);
    }
}

// crear Squemas
// Schema de correos
const emailSchema = new mongoose.Schema({
    remitente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    destinatario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    asunto: {
        type: String,
        required: true
        },
    contenido: String,
    isLeido: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})


// SubSchema o NestedSchema
// como se mete un esquema dentro de otro. 
const addressSchema = new mongoose.Schema({
    calle:String,
    zip: String
})

// Schema de usuarios
const userSchema = new mongoose.Schema({
    // username: String,
    // email:String
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: addressSchema 
})



// crear nuertros modelos
const User = mongoose.model('User', userSchema);
const Email = mongoose.model('Email', emailSchema);
// Se creara automaticamente las colecciones que no existen, pero en minusculas y en plural.

// Exportar los modelos y la conexión.
export { connectDB, User, Email }