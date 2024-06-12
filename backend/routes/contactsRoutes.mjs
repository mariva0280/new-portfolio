import { Router } from 'express';
import { ContactsController } from '../controllers/contactsController.mjs'
import { validateContact, validatePartialContact } from '../validation/contactsValidation.mjs';

const router = Router()

router.get('/contacts', ContactsController.getAllContacts)
router.get('/contacts/:id', ContactsController.getContactById)
router.post('/contacts',validateContact, ContactsController.createContact)
router.patch('/contacts/:id',validatePartialContact, ContactsController.updateContactById)
router.delete('/contacts/:id', ContactsController.deleteContactById)

export default router