'use client'

import { useEffect } from 'react';
import { useState } from 'react';
import Link from "next/link"
// import { Suspense } from "react";
// import Spinner from '../(components)/spinner';
import PokemonListCard from '../(components)/pokemonListCard'

export default function PokemonsPage() {

    const [query, setQuery] = useState('')
    const [pokemons, setPokemons] = useState([])
    const [pokesWithId, setPokesWithId] = useState([])


    useEffect(() => {
        async function getPokemons() {
            try {
                const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=250')
                const pokes = await res.json()
                setPokemons(pokes)

                setPokesWithId(pokemons.results && pokemons.results.map((pokemon, index) => {
                    return { ...pokemon, id: index + 1 }
                }))

            }
            catch (err) {
                <p>{err.message}</p>
            }
        }
        getPokemons()

        console.log('rerender')

    }, [JSON.stringify(pokemons)])

    return (

        <main className="relative">

            <div className='flex justify-center pt-10 '>
                <input
                    type="text"
                    className='px-6 py-2 shadow-md border-[1px] border-blue-700 rounded-xl'
                    placeholder='Search pokemon...'
                    autoFocus
                    onChange={e => { setQuery(e.target.value) }} />
            </div>

            <header className="absolute top-6 right-14">
                <Link className="underline hover:font-semibold" href='/'>back</Link>
            </header>

            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-4 px-24 lg:px-[8em] pb-24 pt-12">
                {pokesWithId && pokesWithId.filter(poke => {
                    if (query == '') return poke
                    else {
                        {/*conditional filtering based on searchbar value */}
                        return poke.name.toLowerCase().includes(query)
                    }
                }).map(pokemon => (
                    //pokemon link card with name and image
                    <PokemonListCard name={pokemon.name} id={pokemon.id}/>
                ))}
            </div>
        </main>
    )
}


