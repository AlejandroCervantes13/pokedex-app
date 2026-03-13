import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemons, setLoading } from '../store/pokemonSlice'
import PokemonCard from '../components/PokemonCard'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import PokemonModal from '../components/PokemonModal'

const LIMIT = 6

function Home() {
  const dispatch = useDispatch()
  const { pokemons, loading, searchTerm, currentPage } = useSelector((state) => state.pokemon)
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    async function fetchPokemons() {
      dispatch(setLoading(true))
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`)
      const data = await response.json()
      const details = await Promise.all(
        data.results.map(async (p) => {
          const res = await fetch(p.url)
          return res.json()
        })
      )
      dispatch(setPokemons(details))
      dispatch(setLoading(false))
    }
    fetchPokemons()
  }, [])

  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filtered.length / LIMIT)
  const paginated = filtered.slice(currentPage * LIMIT, currentPage * LIMIT + LIMIT)

  return (
    <div style={{ minHeight: '100vh', background: '#1a1a2e', padding: '20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
         <span style={{ color: 'white', fontSize: '1rem', fontWeight: 'bold' }}>
            
            Isaac Alejandro Chulim Cervantes
         </span>
         <h1 style={{ color: 'white', fontSize: '2rem', margin: 0 }}>
             Pokédex
        </h1>
         <span style={{ width: '200px' }} />
        </div>
        <SearchBar />
        {loading ? (
          <p style={{ textAlign: 'center', color: 'white' }}>Cargando Pokémon...</p>
        ) : (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '16px'
            }}>
              {paginated.map((pokemon) => (
                <div
                  key={pokemon.id}
                  onClick={() => setSelectedPokemon(pokemon)}
                  style={{ cursor: 'pointer' }}
                >
                  <PokemonCard
                    name={pokemon.name}
                    image={pokemon.sprites.front_default}
                    types={pokemon.types.map((t) => t.type.name)}
                  />
                </div>
              ))}
            </div>
            <Pagination totalPages={totalPages} />
          </>
        )}
      </div>
      <PokemonModal
        pokemon={selectedPokemon}
        onClose={() => setSelectedPokemon(null)}
      />
    </div>
  )
}

export default Home