import { useState } from 'react';
import { PokemonsList } from './components/PokemonsList';

function App() {
  const [showPokemons, setShowPokemons] = useState(false);
  return (
    // JSX
    <div>
      <h1>Bienvenidos a ReactJS</h1>
      <button
        onClick={() => {
          setShowPokemons(!showPokemons);
        }}
      >
        Toggle Show Pokemons
      </button>
      {showPokemons === true ? <PokemonsList /> : null}
    </div>
  );
}

export { App };
