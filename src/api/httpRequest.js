import axios from "axios";

const url = 'http://localhost:5121/api/Cliente'
export const getAllClientes = async () => {
const response = await axios.get(url)
console.log(response.data)
return response.data
}