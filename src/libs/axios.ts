import axios from "axios";

const baseUrl = window.location.host.includes("local")
    ? "http://localhost:8000"
    : "http://10.11.1.75:8000"
    // : "https://api.soleguardalliance.org" // todo: to be rectified

const endpoint = axios.create({
    baseURL: baseUrl
})


export default endpoint;

