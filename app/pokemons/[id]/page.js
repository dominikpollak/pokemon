import PokemonInfo from './pokemonInfo';
import { Suspense } from 'react';

// SSG render
export async function generateStaticParams() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=250')
    const pokemons = await res.json()
    return pokemons.results.map(pokemon => (
        { id: pokemon.name }
    ))
}

export default async function PokemonPage({ params }) {

    return (
        <>
        <Suspense fallback={<p className='h-screen bg-red-200'>Loading...</p>}>
        <PokemonInfo params={params}/>
        </Suspense>
        </>

    )
}
