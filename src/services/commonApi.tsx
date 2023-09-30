import axios from "axios"


export const featuredList = async () => {
    try {
        const response = await axios.get(`${"http://localhost:5000"}/idx/spark/v1/listings`)
        if (response) return response.data
    } catch (e) {
        console.info(e)
        return []
    }
}