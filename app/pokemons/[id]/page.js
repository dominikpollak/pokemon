import Link from 'next/link';
import Image from 'next/image';
import Stardustncandy from './stardustncandy';

export async function generateStaticParams(){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=250')
    const pokemons = await res.json()
    return pokemons.results.map(pokemon => (
        {id : pokemon.name}
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
            <div className='h-screen flex flex-col pt-[2em]' key={pokemon.name}>
                <Image
                    className='relative mx-auto max-h-[220px]'
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    width={250}
                    height={250}
                    alt={pokemon.name} />
                <main className="mt-[-4.5em] w-[25em] max-h-[36em] mx-auto mb-5 border-0 rounded-xl border-slate-600 bg-white shadow-md">
                    <article className='px-10 py-6 pt-28'>
                        {/* <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-rose-800 text-3xl tracking-[5px] font-light capitalize text-center pb-6' */}
                        <h1 className='text-cyan-900 text-4xl tracking-[5px] font-light capitalize text-center pb-7'
                        >{pokemon.name}</h1>
                        <div className='h-[0.9em] w-[13em] mx-auto bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-l-full rounded-r-full mb-8'></div>
                        <div className='flex justify-center pb-8'>
                            {pokemon.stats && <p className='text-center border-r-[1px] pr-6'>
                                HP {Math.floor(Math.random() * pokemon.stats[0].base_stat)}/{pokemon.stats[0].base_stat}
                            </p>}
                            <p className='text-center pl-8'>XP {pokemon.base_experience}</p>
                        </div>

                        <div className="flex justify-around border-y-[1px] my-2 py-4" >

                            <div className='border-r-[1px] pr-7 py-2'>
                                <p className='font-medium text-lg '>{pokemon.weight}kg</p>
                                <div className='text-sm text-cyan-800'>Weight</div>
                            </div>

                            <div className='border-r-[1px] pr-7 py-2'>
                                <p className='font-medium text-lg text-center'>{pokemon.height}m</p>
                                <div className='text-sm text-cyan-800'>Height</div>
                            </div>

                            <div className='py-2 '>
                                <div className='inline-block'>
                                    {pokemon.types && <span className='capitalize font-medium text-lg'>{pokemon.types[0].type.name} </span>}
                                    {pokemon.types && pokemon.types.length > 1 && <span className='capitalize font-medium text-lg'>/ {pokemon.types[1].type.name}</span>}
                                </div>
                                <p className='text-center text-sm text-cyan-800'>Type</p>
                            </div>
                        </div>
                        <Stardustncandy pokemon={pokemon}/>
                    </article>
                </main>
                <footer className='text-center pb-8'>
                    <Link className='underline hover:font-semibold text-lg' href='/pokemons'>back</Link>
                </footer>
            </div>
        </>

    )
}
