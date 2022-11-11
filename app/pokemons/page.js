
import Link from "next/link"
import Image from "next/image"

export default async function PokemonsPage() {

    async function getPokemons() {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=500')
        return res.json()
    }

    const pokemons = await getPokemons()

    return (
        <main className="relative">
            <header className="absolute top-6 right-14">
                <Link className="underline hover:font-semibold" href='/'>back</Link>
            </header>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 p-24">
                {pokemons.results && pokemons.results.map((pokemon, index) => (
                    <div className="flex justify-center p-1 border-[1px] border-slate-600" key={pokemon.id}>
                        <Link
                            className="capitalize text-md text-center hover:text-slate-500 hover:font-semibold"
                            href={`/pokemons/${pokemon.name}`}
                            key={pokemon.id}>
                            <Image
                                className=''
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
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


