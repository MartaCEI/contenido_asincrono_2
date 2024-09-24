import {Router} from "express"
import {getLandingData} from '../controllers/data.controller.js'
// Controlers típicos de un CRUD
import {getEmails, getEmailById, createEmail, deleteEmail, updateEmail} from '../controllers/correos.mongo.controller.js'
// Controllers específicos
import {getEmailsByUserId, getEmailsByAsunto} from '../controllers/correos.mongo.controller.js'

const router = Router();

// Rutas al mock
router.get("/home", getLandingData);

// /API/v1/mongo
router.get('/correos' , getEmails)
router.get('/correos/:id' , getEmailById)
router.post('/correos' , createEmail)
router.delete('/correos/:id' , deleteEmail)
router.patch('/correos/:id' , updateEmail) // ACTUALIZA INFO. Ejemplo: como leido
// Rutas específicas
router.get('/correos/user/:id', getEmailsByUserId)
// Correos con asunto específico o similar a ":asunto"
router.get('/correos/:asunto', getEmailsByAsunto)

export default router;