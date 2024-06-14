import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const createContact = async (contact) => {
    try {
        const response = await api.post('/contacts', contact);
        return response.data; 
    } catch (error) {
        console.error('Error creating contact', error)
        throw error
    }   
}

