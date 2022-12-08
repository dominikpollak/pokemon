import PokemonInfo from './pokemonInfo';
import { Suspense } from 'react';
import Loading from '../../(components)/loading';

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
        <Suspense fallback={<Loading />}>
        <PokemonInfo params={params}/>
        </Suspense>
        </>

    )
}
