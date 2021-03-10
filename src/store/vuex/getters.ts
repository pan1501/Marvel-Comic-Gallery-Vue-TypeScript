export const getters = {
  getDataReady: (state: any) => state.dataReady,
  getComicsData: (state: any) => state.comicsData,
  getDisplayDetail: (state: any) => state.showDetail,
  getSearchInput: (state: any) => state.searchInput,
  getFilterOptions: (state: any) => state.filterOptions,
  getSelectedType: (state: any) => state.selectedType,
  getSelectedComicDetails: (state: any) => state.selectedComicDetails,
  getRelatedCharacters: (state: any) => state.relatedCharacters,
  getRelatedStories: (state: any) => state.relatedStories
}

export default getters
