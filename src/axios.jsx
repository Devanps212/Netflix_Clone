import axios from "axios";
import { baseUrl } from './constance/constance'; // Check and confirm the file path

const instance = axios.create({
    baseURL: baseUrl
});

export default instance;
