import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function PokemonList({ pokesWithId, query}) {

  return (
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 px-8 lg:px-[8em] pb-24 pt-12">
        {pokesWithId && pokesWithId.filter(poke => {
          if (query == '') return poke
          else {
            {/*conditional filtering based on searchbar value */ }
            return poke.name.toLowerCase().includes(query)
          }
        }).map(pokemon => (
          //pokemon link card with name and image
          <AnimatePresence exitBeforeEnter={true} onExitComplete={() => null}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
              <Link className="flex flex-col items-center justify-center p-1 border-2 rounded-md border-slate-600
      cursor-pointer capitalize text-md text-center text-[0.8em] lg:text-[1.2em] shadow-md m-1 duration-200
      hover:text-slate-500 hover:font-semibold hover:bg-slate-200/[0.4]"
                key={pokemon.name}
                href={`/pokemons/${pokemon.name}`}>

                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  width={120}
                  height={120}
                  alt={pokemon.name} />
                <div>
                  {pokemon.name}
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>))}
      </div>
  )
}
