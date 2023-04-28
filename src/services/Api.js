import axios, { Axios } from "axios";
//brasil https://viacep.com.br/ws/
//portugal https://geoapi.pt/cp/


const api = axios.create({
    baseURL:"https://geoapi.pt/cp/"
})

export default api;