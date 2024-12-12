import axios from "axios";

axios.defaults.baseURL = 'https://djangorestframework1-47e5ef4ee651.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();