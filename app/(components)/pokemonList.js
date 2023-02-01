'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../(context)/darkModeContext';

export default function PokemonList({ pokesWithId, query }) {

  const darkmode = useContext(DarkModeContext);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-8 lg:px-[8em] pb-24 pt-12">
      {pokesWithId &&
        pokesWithId
          .filter((poke) => {
            if (query == '') return poke;
            else {
              
                /*conditional filtering based on searchbar value */
              }
              return poke.name.toLowerCase().includes(query);
            }
          })
          .map((pokemon) => (
            //pokemon link card with name and image
            <AnimatePresence mode="wait" onExitComplete={() => null}>
              <motion.div
                key={pokemon.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="flex flex-col items-center justify-center p-1 border-2 rounded-md border-slate-600
      cursor-pointer capitalize text-md text-center text-[0.85em] sm:text-[0.9em] lg:text-[1.2em] shadow-md m-1 duration-200
      hover:text-slate-500 hover:font-semibold hover:bg-slate-200/[0.4]"
                  href={`/${pokemon.name}`}
                  key={pokemon.id}
                >
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    width={120}
                    height={120}
                    alt={pokemon.name}
                  />
                  <div className={darkmode ? 'text-white' : 'text-black'}>
                    {pokemon.name}
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          ))}
    </div>
  );
}
