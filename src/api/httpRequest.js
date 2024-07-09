import axios from "axios";



export async function getAllClientes (url) {
const response = await axios.get(url)
console.log(response.data)
return response.data
}