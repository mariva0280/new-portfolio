import express from 'express'
import { setContactsRouter } from './routes/contactsRoutes.mjs'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/api', setContactsRouter())

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:%{PORT}`)
})