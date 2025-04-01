import { useGetDogsByNameQuery } from "../../../redux/servicses/dogSrvc"
import { useParams } from "react-router"

const Dog = () => {
    const { dog } = useParams()
    const { data, error, isLoading } = useGetDogsByNameQuery(dog || "Not Found a Dog.")

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {JSON.stringify(error)}</div>

    return (
        <div>
            {data?.message && data.message.length > 0 ? (<img style={{ height: "50vh" }} src={data.message[0]} alt={dog} />) : (<div>No images found</div>)}
        </div>
    )
}

export default Dog
