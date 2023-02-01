'use client';

import { useState, use } from 'react';
import PokemonList from './(components)/pokemonList';
import fetchPokemons from './(components)/fetchPokemons';
import Image from 'next/image';
import Pokeball from '../imgs/pokeball.png';

const pokePromise = fetchPokemons();

export default function PokemonsPage() {
  const [query, setQuery] = useState('');

  const pokesWithId = use(pokePromise);

  return (
    <main className="relative">
      <div className="mt-4 flex w-full justify-center">
        <div className="flex items-center">
          <Image src={Pokeball} height={40} width={40} alt="pokeball" />
        </div>

        <div className="flex items-center justify-center px-4">
          <input
            type="text"
            className="rounded-xl border-[1.5px] border-black bg-blue-400 px-6 py-2 text-center font-bold text-white shadow-md"
            placeholder="Search pokemon..."
            autoFocus
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <div className="flex items-center">
          <Image src={Pokeball} height={40} width={40} alt="pokeball" />
        </div>
      </div>

      <PokemonList pokesWithId={pokesWithId} query={query} />
    </main>
  );
}
