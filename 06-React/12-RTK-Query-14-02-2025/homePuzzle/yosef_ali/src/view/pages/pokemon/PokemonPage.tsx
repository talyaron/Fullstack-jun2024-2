import { useGetPokemonByNameQuery } from "../../../redux/servicses/pokemonSrvc"
import { useParams } from "react-router"


const PokemonPage = () => {
    const { pokemon } = useParams()
    if (!pokemon) return <div>enter a name of pokemon</div>
    const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon) //pokemon ||

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {JSON.stringify(error)}</div>

    return (
        <div>
            <img style={{ height: "50vh" }} src={data?.sprites.other.home.front_default || ""} alt={data?.name} />
           
        </div>

    )
}

export default PokemonPage