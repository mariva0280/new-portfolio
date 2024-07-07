import express from 'express'
import cors from 'cors'
import router from './routes/contactsRoutes.mjs'

const app = express()
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(cors())

app.use(express.json())

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
