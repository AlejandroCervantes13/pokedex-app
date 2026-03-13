function PokemonCard({ name, image, types }) {
  const typeInfo = {
    fire:     { color: '#FF4500', emoji: '🔥' },
    water:    { color: '#1E90FF', emoji: '💧' },
    grass:    { color: '#228B22', emoji: '🌿' },
    electric: { color: '#FFD700', emoji: '⚡' },
    psychic:  { color: '#FF69B4', emoji: '🔮' },
    ice:      { color: '#00CED1', emoji: '❄️' },
    dragon:   { color: '#8A2BE2', emoji: '🐉' },
    dark:     { color: '#333333', emoji: '🌑' },
    fairy:    { color: '#FF85C2', emoji: '🧚' },
    normal:   { color: '#A8A878', emoji: '⭐' },
    fighting: { color: '#C03028', emoji: '👊' },
    flying:   { color: '#6890F0', emoji: '🦅' },
    poison:   { color: '#A040A0', emoji: '☠️' },
    ground:   { color: '#E0C068', emoji: '🌍' },
    rock:     { color: '#B8A038', emoji: '🪨' },
    bug:      { color: '#A8B820', emoji: '🐛' },
    ghost:    { color: '#705898', emoji: '👻' },
    steel:    { color: '#B8B8D0', emoji: '⚙️' },
  }

  const color1 = typeInfo[types[0]]?.color || '#888'
  const color2 = typeInfo[types[1]]?.color || color1

  const background = types.length > 1
    ? `linear-gradient(135deg, ${color1}, ${color2})`
    : color1

  return (
    <div style={{
      borderRadius: '12px',
      padding: '16px',
      textAlign: 'center',
      background: background,
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      color: 'white',
    }}>
      <img src={image} alt={name} width={100} height={100} />
      <p style={{
        textTransform: 'capitalize',
        fontWeight: 'bold',
        margin: '8px 0',
        fontSize: '16px',
        textShadow: '1px 1px 2px rgba(0,0,0,0.4)'
      }}>
        {name}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
        {types.map((type) => (
          <span
            key={type}
            style={{
              background: 'rgba(255,255,255,0.3)',
              color: 'white',
              padding: '2px 10px',
              borderRadius: '20px',
              fontSize: '12px',
              textTransform: 'capitalize',
              backdropFilter: 'blur(4px)'
            }}
          >
            {typeInfo[type]?.emoji || '❓'} {type}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PokemonCard