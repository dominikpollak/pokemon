import PokemonInfo from './pokemonInfo';

// SSG render
export async function generateStaticParams() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=250')
    const pokemons = await res.json()
    return pokemons.results.map(pokemon => (
        { id: pokemon.name }
    ))
}

export default async function PokemonPage({ params }) {

    async function getPokemon() {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        return res.json()
    }

    const pokemon = await getPokemon()

    return (
        <>
        <PokemonInfo pokemon={pokemon}/>
        </>

    )
}
