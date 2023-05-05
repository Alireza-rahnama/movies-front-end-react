import axios from 'axios';

const api =  axios.create({
    // baseURL:'http://localhost:8080',
    baseURL:'https://54.86.96.77:8080', //MY AMAZON EC2 PUBLIC IP ADDRESS
    headers: {"Acess-Control-Allow-Origin": "true"}
});

export default api;

