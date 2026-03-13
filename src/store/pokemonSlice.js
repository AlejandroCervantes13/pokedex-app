import { createSlice } from '@reduxjs/toolkit'

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    loading: false,
    searchTerm: '',
    currentPage: 0,
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
})

export const { setPokemons, setLoading, setSearchTerm, setCurrentPage } = pokemonSlice.actions
export default pokemonSlice.reducer