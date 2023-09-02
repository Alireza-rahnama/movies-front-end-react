import axios from 'axios';

const api =  axios.create({
    baseURL:'http://localhost:8080',
    // baseURL:'http://3.91.52.195:80', //MY AMAZON ECS BACKEND TASK PUBLIC IP ADDRESS
    // baseURL:'http://http://172.31.24.212:8080', //MY AMAZON ECS BACKEND TASK'S PRIVATE IP ADDRESS
    // baseURL:'https://54.86.96.77:8080', //MY AMAZON EC2 PUBLIC IP ADDRESS
    headers: {"Acess-Control-Allow-Origin": "true"}
});

export default api;

