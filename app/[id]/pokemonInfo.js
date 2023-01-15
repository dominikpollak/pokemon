import PokemonCard from '../(components)/PokemonCard';

export default async function PokemonInfo({ params }) {
  async function getPokemon() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    return res.json();
  }

  const pokemon = await getPokemon();

  return <PokemonCard pokemon={pokemon} />;
}
