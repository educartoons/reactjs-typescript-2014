import { useState, useEffect } from 'react';
import { Pokemons } from './Pokemons';

// Single Responsability

function PokemonsList() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((result) => result.json())
      .then((data) => setPokemons(data.results));
  };

  useEffect(() => {
    console.log('useEffect de UserList');
    fetchPokemons();
  }, []);

  return (
    <div>
      <h3>Lista de Pokemones</h3>
      {<Pokemons pokemons={pokemons} />}
    </div>
  );
}

export { PokemonsList };
