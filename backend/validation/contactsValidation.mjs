export const validateContact = (req, res, next) => {
    const { name, phone, email, message } = req.body
    const errors = []

    if(!name) {
        errors.push({ code: 'BADR-001', message: 'El campo "name" es requerido' , field: 'name'})
    } else {
        const namePattern =  /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/
        if(!namePattern.test(name)) {
            errors.push({ code:'BADR-006', message: 'El formato del nombre es inválido', field: 'name'})
        }
    }

    if(!phone) {
        errors.push({ code: 'BADR-003', message: 'El campo "phone" es requerido' , field: 'phone'})
    } else {
        const phonePattern = /^[0-9]+$/
        if(!phonePattern.test(phone)) {
            errors.push({ code:'BADR-004', message: 'El formato del teléfono es inválido', field: 'phone'})
        }
    }    

    if(!email) {
        errors.push({ code: 'BADR-001', message: 'El campo "email" es requerido' , field: 'email'})
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailPattern.test(email)) {
            errors.push({ code: 'BADR-002', message: 'El formato del email es inválido', field: 'email'})
        }
    }

    if(!message) {
        errors.push({ code: 'BADR-007', message: 'El campo "message" es requerido' , field: 'message'})
    } else if (message.length > 500 ) {
        errors.push({ code: 'BADR-008', message: 'Mensaje demasiado largo', field: 'message'})
    }

    if(errors.length > 0 ) {
        return res.status(400).json({ errors })
    }

    next()
}

// validation/contactsValidation.mjs

export const validatePartialContact = (req, res, next) => {
    const { name, phone } = req.body;
    const errors = [];

    if (name !== undefined) {
        const namePattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/;
        if (!namePattern.test(name)) {
            errors.push({ code: 'BADR-006', message: 'El formato del nombre es inválido', field: 'name' });
        }
    }

    if (phone !== undefined) {
        const phonePattern = /^[0-9]{1,12}$/;
        if (!phonePattern.test(phone)) {
            errors.push({ code: 'BADR-004', message: 'El formato del teléfono es inválido', field: 'phone' });
        }
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
}
