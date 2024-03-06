import { useState, useEffect } from 'react';
import { Pokemons } from './Pokemons';







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
    return () => {
      console.log(
        'esto se ejecuto despues de que la lista de pokemons fue retirada',
      );
    };
  }, []);

  return (
    <div>
      <h3>Lista de Pokemones</h3>
      {<Pokemons pokemons={pokemons} />}
    </div>
  );
}

export { PokemonsList };
