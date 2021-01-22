import Axios from "axios"

export const serverApi = Axios.create({
  baseURL: "http://localhost:3000/"
})
