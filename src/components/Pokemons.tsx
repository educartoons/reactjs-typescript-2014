interface Pokemon {
  name: string;
  url: string;
}

interface IPokemons {
  pokemons: Pokemon[];
}

function Pokemons(props: IPokemons) {
  const { pokemons } = props;
  return (
    <ul>
      {pokemons.map((pokemon: Pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
}

export { Pokemons };
