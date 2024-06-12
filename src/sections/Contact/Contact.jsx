import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: [] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    // Validación de campos obligatorios
    for (const key in formData) {
      newErrors[key] = [];
      if (formData[key].trim() === '') {
        newErrors[key].push('Campo obligatorio')
      }
    }

    // Validación del nombre
    if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/.test(formData.name.trim())) {
      newErrors.name.push('El formato del nombre es inválido')
    }

    // Validación del teléfono 
    if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone.push('El formato del teléfono es inválido')
    }

    // Validación del email 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email.push('El formato del email es inválido')
    }

    // Validación del mensaje (máximo 500 caracteres)
    if (formData.message.trim().length > 500) {
      newErrors.message.push('El mensaje no puede tener más de 500 caracteres')
    }

    // Actualizar el estado de los errores
    setErrors(newErrors)

    // Si no hay errores, enviar el formulario
    if (Object.values(newErrors).every((errorArray) => errorArray.length === 0)) {
      console.log('Formulario enviado')
      setSuccessMessage('Formulario enviado correctamente')
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      })

      setTimeout(() => {
        setSuccessMessage('')
      }, 5000)
    }
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor='name' hidden>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && errors.name.map((error, index) => (
            <span key={index} className={styles.error}>{error}</span>
          ))}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='phone' hidden>
            Phone
          </label>
          <input
            type='text'
            name='phone'
            id='phone'
            placeholder='Phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && errors.phone.map((error, index) => (
            <span key={index} className={styles.error}>{error}</span>
          ))}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='email' hidden>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && errors.email.map((error, index) => (
            <span key={index} className={styles.error}>{error}</span>
          ))}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='message' hidden>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            placeholder='Message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && errors.message.map((error, index) => (
            <span key={index} className={styles.error}>{error}</span>
          ))}
        </div>
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        <input className='hover btn' type='submit' value='Submit' />
      </form>
    </section>
  );
}

export default Contact
