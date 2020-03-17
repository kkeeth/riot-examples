require('dotenv').config()
const searchGifs = (query) => {
  // API key
  const _key = process.env.API_KEY
  // base URL
  const _baseUrl = "https://api.giphy.com/v1/gifs/search"
  // API request URL
  const _reqUrl = `${_baseUrl}?api_key=${_key}&q=${query}&&rating=G`

  fetch(_reqUrl)
    .then((res) => {
      return res.status === 200
       ? res.json()
       : null
    })
    .then((data) => {
      console.log(data)
    })
}

export default searchGifs
