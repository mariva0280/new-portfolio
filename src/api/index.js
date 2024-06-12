import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})

export const createContact = async (contact) => {
    try {
        const response = await api.post('/contacts', contact);
        return response.data; 
    } catch (error) {
        console.error('Error creating contact', error)
        throw error
    }   
};

/*export const getContacts = async () => {
    const response = await axios.get(`${API_URL}/contacts`);
    return response.data;
};

export const getContactById = async (id) => {
    const response = await axios.get(`${API_URL}/contacts/${id}`);
    return response.data;
};

export const updateContactById = async (id, updates) => {
    const response = await axios.patch(`${API_URL}/contacts/${id}`, updates);
    return response.data;
};

export const deleteContactById = async (id) => {
    const response = await axios.delete(`${API_URL}/contacts/${id}`);
    return response.data;
};*/

