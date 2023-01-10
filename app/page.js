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
      <div className="flex w-full justify-center mt-4">
        <div className="flex items-center">
          <Image src={Pokeball} height={40} width={40} alt='pokeball'/>
        </div>

        <div className="flex justify-center items-center px-4">
          <input
            type="text"
            className="px-6 py-2 shadow-md border-[1.5px] border-black rounded-xl text-center text-white font-bold bg-blue-400"
            placeholder="Search pokemon..."
            autoFocus
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <div className="flex items-center">
          <Image src={Pokeball} height={40} width={40} alt='pokeball' />
        </div>
      </div>

      <PokemonList pokesWithId={pokesWithId} query={query} />
    </main>
  );
}
