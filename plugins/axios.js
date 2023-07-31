import axios from "axios"

export default axios.defineNuxtPlugin((NuxtApp) => {

    axios.defaults.withCredentials = true
    axios.defaults.baseURL = 'http://localhost:8000'

    return {
        provide: {
            axios: axios
        }
    }
})