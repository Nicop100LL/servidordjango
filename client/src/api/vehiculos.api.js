import axios from 'axios'

export const getAllVehiculos = () => {
    return axios.get('http://127.0.0.1:8000/api/vehiculos/')
}

export const getVehiculo =  (id) => {
    return axios.get(`http://127.0.0.1:8000/api/vehiculos/${id}`)
    
}

export const getPeople = () => {
    return axios.get('http://127.0.0.1:8000/api/team/')
}