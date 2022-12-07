import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function PokemonListImg({ name, id }) {

  return (
    <>
      <AnimatePresence exitBeforeEnter={true} onExitComplete={()=>null}>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
          <Link className="flex flex-col items-center justify-center p-1 border-2 rounded-md border-slate-600
      cursor-pointer capitalize text-md text-center lg:text-[1.2em] shadow-md m-1 duration-150
      hover:text-slate-500 hover:font-semibold hover:bg-slate-200/[0.4]"
            key={name}
            href={`/pokemons/${name}`}>

            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              width={120}
              height={120}
              alt={name} />
            <div>
              {name}
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
