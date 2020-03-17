const searchGifs = (query) => {
  // API key
  const _key = "fPHvsGmGLgfrBlLD2i7jEhcIRuk7UtPf"

  // API request URL
  const _baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${_key}&q=${query}&limit=25&offset=0&rating=G`

  console.log(query)
}

export default searchGifs
