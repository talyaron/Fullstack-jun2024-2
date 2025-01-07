import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Pet.module.scss";

const Pet: React.FC<{ type: string }> = ({ type }) => {
  const { id } = useParams<{ id: string }>();
  const [pet, setPet] = useState<{ image: string; name: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl =
    type === "cats"
      ? "https://api.thecatapi.com/v1/images/search?limit=1"
      : "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    const fetchPet = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const petData =
          type === "cats"
            ? { image: data[0].url, name: id || "Unknown" } // Используем id напрямую
            : { image: data.message, name: id || "Unknown" };

        setPet(petData);
      } catch (error) {
        setError("Failed to load pet details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [apiUrl, id]);

  return (
    <div className={styles.pet}>
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {pet && (
        <div>
          <img src={pet.image} alt={pet.name} className={styles.petImage} />
          <p>{pet.name}</p>
        </div>
      )}
    </div>
  );
};

export default Pet;
