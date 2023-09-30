import axios from "axios"


export const featuredList = async () => {
    try {
        const response = await axios.get(`${"https://direct-lender-api.onrender.com"}/idx/spark/v1/listings`)
        if (response) return response.data
    } catch (e) {
        console.info(e)
        return []
    }
}