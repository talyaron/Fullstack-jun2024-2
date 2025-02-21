import { useGetPokemonByNameQuery } from "../../../redux/servicses/pokemonSrvc"
import { Link, useParams } from "react-router"


const PokemonPage = () => {
    const { pokemon } = useParams()
    const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon || "") //pokemon ||

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {JSON.stringify(error)}</div>

    return (
        <div>
            <img style={{ height: "50vh" }} src={data?.sprites.front_default || ""} alt={data?.name} />
           
        </div>

    )
}

export default PokemonPage