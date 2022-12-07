const fetchPokes = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=250')
    return res.json()
}

export default async function fetchPokemons() {

    const pokes = await fetchPokes()

    return pokes.results && pokes.results.map((pokemon, index) => {
        return { ...pokemon, id: index + 1 }
    })

}