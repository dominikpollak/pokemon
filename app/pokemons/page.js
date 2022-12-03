'use client'

import { useEffect } from 'react';
import { useState, useRef } from 'react';
import Link from "next/link"
import Image from "next/image"

export default function PokemonsPage() {

    const [query, setQuery] = useState('')
    const [pokemons, setPokemons] = useState([])
    const [pokesWithId, setPokesWithId] = useState([])

    useEffect(()=>{
        async function getPokemons() {
            try{
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=250')
            const pokes = await res.json()
            setPokemons(pokes)

            setPokesWithId(pokemons.results && pokemons.results.map((pokemon, index) => {
                return {...pokemon, id : index + 1}
            }))

            }
            catch(err){
                <p>{err.message}</p>
            }
        }
        getPokemons()

        console.log('rerender')
              
    },[JSON.stringify(pokemons)])

    return (

        <main className="relative">
            {/* {pokesWithId && pokesWithId.map(poke => (
                <p>{JSON.stringify(poke)}</p>
            ))} */}

              <div className='flex justify-center pt-10 '>
            <input
                type="text"
                className='px-6 py-2 shadow-md border-[1px] border-blue-700 rounded-xl'
                placeholder='Search pokemon...'
                autoFocus
                onChange={e => { setQuery(e.target.value) }} />
            {/* <span><Image src={searchIcon} width={40} height={40} alt="search icon"/></span> */}
        </div>

            <header className="absolute top-6 right-14">
                <Link className="underline hover:font-semibold" href='/'>back</Link>
            </header>

            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 px-24 pb-24 pt-12">
                {pokesWithId && pokesWithId.filter(poke =>{
                    if(query == '') return poke 
                    else{
                        return poke.name.toLowerCase().includes(query)}
                }).map(pokemon => (
                    <div className="flex justify-center p-1 border-[1px] border-slate-600" key={pokemon.name}>
                        <Link
                            className="capitalize text-md text-center hover:text-slate-500 hover:font-semibold"
                            href={`/pokemons/${pokemon.name}`}
                            key={pokemon.name}>
                            <Image
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                width={70}
                                height={70}
                                alt={pokemon.name} />
                            {pokemon.name}
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}


