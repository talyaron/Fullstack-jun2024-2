import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PetsList.module.scss";

interface Pet {
  id: string;
  name: string;
  image: string;
}

const PetsList: React.FC<{ type: string }> = ({ type }) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl =
    type === "cats"
      ? "https://api.thecatapi.com/v1/images/search?limit=10"
      : "https://dog.ceo/api/breeds/image/random/10";

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const processedPets =
          type === "cats"
            ? data.map((item: any, index: number) => ({
                id: `cat-${index + 1}`,
                name: `Cat ${index + 1}`,
                image: item.url,
              }))
            : data.message.map((url: string, index: number) => ({
                id: `dog-${index + 1}`,
                name: `Dog ${index + 1}`,
                image: url,
              }));

        setPets(processedPets);
      } catch (error) {
        setError("Failed to load pets. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [apiUrl]);

  return (
    <div className={styles.petsList}>
      <h1>{type === "cats" ? "Cats" : "Dogs"} List</h1>

      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            <Link to={`/catalog/${type}/${pet.id}`}>
              <img src={pet.image} alt={pet.name} className={styles.petImage} />
              <p>{pet.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetsList;
