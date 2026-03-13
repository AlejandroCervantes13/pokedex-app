import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm, setCurrentPage } from '../store/pokemonSlice'

function SearchBar() {
  const dispatch = useDispatch()
  const searchTerm = useSelector((state) => state.pokemon.searchTerm)

  function handleChange(e) {
    dispatch(setSearchTerm(e.target.value))
    dispatch(setCurrentPage(0))
  }

  return (
    <input
      type="text"
      placeholder="Buscar Pokémon..."
      value={searchTerm}
      onChange={handleChange}
      style={{
        width: '100%',
        padding: '12px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        marginBottom: '20px',
        boxSizing: 'border-box'
      }}
    />
  )
}

export default SearchBar