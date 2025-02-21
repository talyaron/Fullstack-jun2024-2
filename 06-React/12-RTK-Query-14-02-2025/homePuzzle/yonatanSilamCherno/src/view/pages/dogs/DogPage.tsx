
import { useParams } from "react-router";
import { useGetDogsBreedQuery } from "../../../redux/servicses/dogSrvs";

const DogPage = () => {
  <div>Dog</div>;
  const { dog } = useParams();
  const { data, error, isLoading } = useGetDogsBreedQuery(dog || ""); 

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  console.log(data?.message);
  return (
    <div>
      {data?.message.map((item: string, index: number) => (
        <img key={index} style={{ height: "50vh" }} src={item} alt={dog} />
      ))}
    </div>
  );
};

export default DogPage;
