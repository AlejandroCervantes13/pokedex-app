import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../store/pokemonSlice'

function Pagination({ totalPages }) {
  const dispatch = useDispatch()
  const currentPage = useSelector((state) => state.pokemon.currentPage)

  const btnStyle = (disabled) => ({
    padding: '10px 24px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '3px solid white',
    borderRadius: '30px',
    fontSize: '15px',
    fontWeight: 'bold',
    color: disabled ? '#aaa' : 'white',
    background: disabled
      ? '#555'
      : 'linear-gradient(135deg, #cc0000, #ff4444)',
    boxShadow: disabled ? 'none' : '0 4px 12px rgba(200,0,0,0.4)',
    transition: 'all 0.2s',
  })

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '16px',
      marginTop: '28px',
      marginBottom: '12px',
    }}>
      <button
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
        disabled={currentPage === 0}
        style={btnStyle(currentPage === 0)}
      >
        ← Anterior
      </button>

      <span style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: '15px',
        background: 'rgba(255,255,255,0.1)',
        padding: '8px 18px',
        borderRadius: '20px',
        border: '2px solid rgba(255,255,255,0.2)'
      }}>
        Página {currentPage + 1} de {totalPages}
      </span>

      <button
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
        disabled={currentPage + 1 >= totalPages}
        style={btnStyle(currentPage + 1 >= totalPages)}
      >
        Siguiente →
      </button>
    </div>
  )
}

export default Pagination