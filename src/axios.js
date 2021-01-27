import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-25078/us-central1/api' // the API(cloud function) url
});

export default instance;
