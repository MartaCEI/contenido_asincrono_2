import {Router} from "express"
import {getEmails, getEmailById, createEmail, deleteEmail, updateEmail} from '../controllers/correos.mongo.controller.js'

const router = Router();

// /API/v1/mongo
router.get('correos' , getEmails)
router.get('correos/:id' , getEmailById)
router.post('correos' , createEmail)
router.delete('correos/:id' , deleteEmail)
router.patch('correos/:id' , updateEmail) // ACTUALIZA INFO. Ejemplo: como leido


export default router;