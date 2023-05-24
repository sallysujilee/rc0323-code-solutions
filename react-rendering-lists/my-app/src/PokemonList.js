function PokemonList({pokedex}) {

  const list = pokedex.map(pokemon => <li key={pokemon.number}>{pokemon.name}</li>)

  return (
    <ul>
      {list}
    </ul>
  )
}

export default PokemonList
