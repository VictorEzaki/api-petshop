import api from './api'

export const createUser = async (user) => {
    const response = await api.post('/user', user)
    return response.data
}