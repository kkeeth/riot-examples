import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
const searchGifs = (query) => {
  // API key
  const key = process.env.API_KEY
  // base URL
  const baseUrl = "https://api.giphy.com/v1/gifs/search"
  // limit
  const limit = 30
  // API request URL
  const reqUrl = `${baseUrl}?api_key=${key}&q=${query}&limit=${limit}rating=G`
  // const jsonUrl = "http://localhost:1234/assets/response.json"

  return axios
    .get(reqUrl)
    .then(({ data: res }) => {
      return res.data
    })
    .catch(e => {
      return e
    })
}

export default searchGifs
