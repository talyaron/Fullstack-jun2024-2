import {  useParams } from "react-router"
import { useGetDogByNameQuery } from "../redux/services/dogSrvc"


const Dog = () => {
    const { dog } = useParams();
    const { data, error, isLoading } = useGetDogByNameQuery(dog as string, { skip: !dog });

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {JSON.stringify(error)}</div>

    return (
        <div>
            <h1>{dog}</h1>
            <img style={{ height: "50vh" }} src={data?.message[0]} alt={data?.message[0]} />
        </div>

    )
}

export default Dog