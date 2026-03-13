function PokemonModal({ pokemon, onClose }) {
  if (!pokemon) return null

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

  const types = pokemon.types.map((t) => t.type.name)
  const color1 = typeInfo[types[0]]?.color || '#888'
  const color2 = typeInfo[types[1]]?.color || color1
  const background = types.length > 1
    ? `linear-gradient(135deg, ${color1}, ${color2})`
    : color1

  const stats = pokemon.stats.map((s) => ({
    name: s.stat.name,
    value: s.base_stat
  }))

  const statEmoji = {
    hp: '❤️',
    attack: '⚔️',
    defense: '🛡️',
    'special-attack': '✨',
    'special-defense': '💫',
    speed: '💨'
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        background: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: background,
          borderRadius: '20px',
          padding: '24px',
          width: '90%',
          maxWidth: '400px',
          color: 'white',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          textAlign: 'center',
        }}
      >
        <button
          onClick={onClose}
          style={{
            float: 'right',
            background: 'rgba(255,255,255,0.3)',
            border: 'none',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            color: 'white',
            fontSize: '16px',
          }}
        >
          ✕
        </button>

        <img
          src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
          alt={pokemon.name}
          width={150}
          height={150}
        />

        <h2 style={{ textTransform: 'capitalize', margin: '8px 0', textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}>
          {pokemon.name}
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '16px' }}>
          {types.map((type) => (
            <span
              key={type}
              style={{
                background: 'rgba(255,255,255,0.3)',
                padding: '2px 12px',
                borderRadius: '20px',
                fontSize: '13px',
                textTransform: 'capitalize',
              }}
            >
              {typeInfo[type]?.emoji} {type}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px' }}>
          <div>
            <p style={{ margin: 0, fontSize: '12px', opacity: 0.8 }}>Altura</p>
            <p style={{ margin: 0, fontWeight: 'bold' }}>{pokemon.height / 10} m</p>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '12px', opacity: 0.8 }}>Peso</p>
            <p style={{ margin: 0, fontWeight: 'bold' }}>{pokemon.weight / 10} kg</p>
          </div>
        </div>

        <div style={{ textAlign: 'left' }}>
          {stats.map((stat) => (
            <div key={stat.name} style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '2px' }}>
                <span>{statEmoji[stat.name]} {stat.name}</span>
                <span>{stat.value}</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '10px', height: '8px' }}>
                <div style={{
                  background: 'white',
                  width: `${Math.min(stat.value, 100)}%`,
                  height: '8px',
                  borderRadius: '10px'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonModal