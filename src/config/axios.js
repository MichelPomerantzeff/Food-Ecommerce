import axios from "axios";

const instance = axios.create({
    // API URL (cloud function)
    baseURL: "http://127.0.0.1:5001/food-ecommerce-fc12b/us-central1/api"
        
    // "https://us-central1-food-ecommerce-fc12b.cloudfunctions.net/api" PROD API

    // "http://127.0.0.1:5001/food-ecommerce-fc12b/us-central1/api" LOCAL API
});

export default instance;
