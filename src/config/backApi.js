import axios from 'axios'


const API = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    withCredentials: true
});

API.interceptors.response.use( response => {



    return response;

} );


export default API;