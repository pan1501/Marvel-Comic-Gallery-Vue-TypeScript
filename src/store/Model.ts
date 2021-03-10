import axios from 'axios'
import * as d3 from 'd3'

export const Model = {
  data: [],
  // nested the comics by its format
  nestedByFormat () {
    return d3
      .nest()
      .key((d: object) => d.format)
      .map(this.data)
  },
  filterComicsByTitle (searchInput: string) {
    // Do clone for the raw data
    const comicsToFilterClone = JSON.parse(JSON.stringify(this.data))
    // filter out comics which its title doesn't contain the search
    const filteredComics = comicsToFilterClone.filter((comic: any) => {
      return comic.title.includes(searchInput)
    })

    return filteredComics
  },
  getFilterOptions () {
    return Object.keys(this.nestedByFormat())
  },
  filterComicsByFormat (selectedType: string) {
    // if the selected type is empty just return the raw data
    if (selectedType === null) return this.data
    return this.nestedByFormat()[selectedType]
  },
  getDataFromAPI (
    comicID: string,
    urlTokens: string,
    characterOrStories: string
  ) {
    return axios
      .get(
        `https://gateway.marvel.com:443/v1/public/comics/${comicID}/${characterOrStories}?${urlTokens}`
      )
      .then(response => response.data.data.results)
  }
}
