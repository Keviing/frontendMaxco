import axios from "axios";



export async function getAllData (url) {
const response = await axios.get(url)
console.log(response.data)
return response.data
}