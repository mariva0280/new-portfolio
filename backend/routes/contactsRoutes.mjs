import { Router } from 'express';
import { ContactsController } from '../controllers/contactsController.mjs'

const router = Router()

router.get('/contacts', ContactsController.getAllContacts)
router.get('/contacts/:id', ContactsController.getContactById)
router.post('/contacts', ContactsController.createContact)
router.delete('/contacts/:id', ContactsController.deleteContactById)

export default router