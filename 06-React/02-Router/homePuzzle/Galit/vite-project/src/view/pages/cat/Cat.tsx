import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from './Cat.module.scss'; 

interface Breed {
  name: string;
  weight: {
    imperial: string;
    metric: string;
  };
  temperament: string;
  origin: string;
  life_span: string;
  country_codes: string;
  wikipedia_url: string;
}

interface CatData {
  id: string;
  url: string;
  breeds: Breed[];
  width: number;
  height: number;
}

const Cat = () => {
  const { id } = useParams<{ id: string }>();
  const [catData, setCatData] = useState<CatData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.thecatapi.com/v1/images/${id}?include_breeds=true`)
      .then(res => res.json())
      .then(data => {
        setCatData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch image:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!catData) {
    return <p>No cat found</p>;
  }

  const { url, breeds, width, height } = catData;
  const breed = breeds?.[0] || null;

  return (
    <div> 
    <div className={styles.catContainer}>
      <h1>Cat: {breed?.name || 'Unknown Breed'}</h1>
      <div className={styles.imageContainer}>
        <img src={url} alt={`Cat ${id}`} className={styles.catImage} />
      </div>
      <div className={styles.infoContainer}>
        <h2>Breed Information</h2>
        <p><strong>Temperament:</strong> {breed?.temperament || 'Not available'}</p>
        <p><strong>Origin:</strong> {breed?.origin || 'Not available'}</p>
        <p><strong>Life Span:</strong> {breed?.life_span || 'Not available'} years</p>
        <p><strong>Weight:</strong> {breed?.weight?.imperial || 'Not available'} (imperial), {breed?.weight?.metric || 'Not available'} (metric)</p>
        <p><strong>Country Code:</strong> {breed?.country_codes || 'Not available'}</p>
        <p>
          {breed?.wikipedia_url ? (
            <a href={breed.wikipedia_url} target="_blank" rel="noopener noreferrer">
              Read more on Wikipedia
            </a>
          ) : (
            'Wikipedia link not available'
          )}
        </p>
      </div>
 

    </div>
    <NavLink to="/cats" className={styles.backLink} style={{ textDecoration: 'none', color: '#333' }}>
        <h2>Back</h2>
      </NavLink>
    </div>
  );
};

export default Cat;
