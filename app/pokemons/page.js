'use client'

import { useEffect } from 'react';
import { useState, use } from 'react';
import Link from "next/link"
import { Suspense } from "react";
import Spinner from '../(components)/spinner';
import PokemonList from '../(components)/pokemonList'
import fetchPokemons from '../(components)/fetchPokemons';

const pokePromise = fetchPokemons()

export default function PokemonsPage() {

    const [query, setQuery] = useState('')
    // const [pokesWithId, setPokesWithId] = useState([])

    // useEffect(() => {
    //     async function getPokemons() {
    //         try {
    //             setPokesWithId(await fetchPokemons())
    //         }
    //         catch (err) {
    //             <p>{err.message}</p>
    //         }
    //     }
    //     getPokemons()

    //     console.log('rerender')

    // }, [JSON.stringify(pokesWithId)])

    const pokesWithId = use(pokePromise)

    return (

        <main className="relative">

            <div className='flex justify-center pt-10'>
                <input
                    type="text"
                    className='px-6 py-2 shadow-md border-[1px] border-blue-700 rounded-xl mt-2'
                    placeholder='Search pokemon...'
                    autoFocus
                    onChange={e => { setQuery(e.target.value) }} />
            </div>

            <header className="absolute lg:top-6 lg:right-14 top-2 right-4">
                <Link className="underline hover:font-semibold" href='/'>back</Link>
            </header>

                <PokemonList pokesWithId={pokesWithId} query={query} />
        </main>
    )
}


