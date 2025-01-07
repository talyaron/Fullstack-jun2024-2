import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from './Dog.module.scss';

interface DogImage {
  id: string;
  url: string;
}

interface Breed {
  id: number;
  name: string;
  temperament: string;
  life_span: string;
  height: { imperial: string; metric: string };
  weight: { imperial: string; metric: string };
}

const Dog = () => {
  const { id } = useParams<{ id: string }>();
  const [dogImage, setDogImage] = useState<DogImage | null>(null);
  const [breedInfo, setBreedInfo] = useState<Breed | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
      headers: {
        'x-api-key': 'live_w0mb8IhsrnUcyfvO8iu3fxM2LXzq5AmnDiivELrxMipYVxNoYA44dC7RGLeD1XYK',
      },
    })
      .then(res => res.json())
      .then(data => {
        setBreedInfo(data);
      })
      .catch(err => {
        console.error('Failed to fetch breed data:', err);
      });

    fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${id}`, {
      headers: {
        'x-api-key': 'live_w0mb8IhsrnUcyfvO8iu3fxM2LXzq5AmnDiivELrxMipYVxNoYA44dC7RGLeD1XYK',
      },
    })
      .then(res => res.json())
      .then(data => {
        setDogImage(data[0]);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch dog image:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!dogImage || !breedInfo) {
    return <p>No dog found</p>;
  }

  const { name, temperament, life_span, height, weight } = breedInfo;
  return (
    <div> 
    <div className={styles.dogContainer}>
      <div className={styles.dogHeader}>
        <h1>{name}</h1>
      </div>
      <img src={dogImage.url} alt={`Dog ${name}`} className={styles.dogImage} />
      <div className={styles.dogInfo}>
        <h2>Breed Info</h2>
        <p><strong>Temperament:</strong> {temperament}</p>
        <p><strong>Life Span:</strong> {life_span} years</p>
        <p><strong>Height:</strong> {height?.imperial} in (imperial), {height?.metric} cm (metric)</p>
        <p><strong>Weight:</strong> {weight?.imperial} lbs (imperial), {weight?.metric} kg (metric)</p>
      </div>
   
    </div>
    <NavLink to="/dogs" style={{ textDecoration: 'none', color: '#333' }}>
        <h2>Back</h2>
      </NavLink>
    </div>
  );
};

export default Dog;
