import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Dogs.module.scss';

interface Breed {
  id: number;
  name: string;
  image: { url: string };
}

const Dogs = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/breeds?limit=9', {
      headers: {
        'x-api-key': 'live_w0mb8IhsrnUcyfvO8iu3fxM2LXzq5AmnDiivELrxMipYVxNoYA44dC7RGLeD1XYK',
      },
    })
      .then(response => response.json())
      .then((data: Breed[]) => setBreeds(data))
      .catch(error => console.error('Error fetching dog breeds:', error));
  }, []);

  return (
    <div className={styles.dogs}>
      <div className={styles.dogList}>
        <h1>Dog Breeds</h1>
        {breeds.map(breed => (
          <Link to={`/dogs/${breed.id}`} key={breed.id} className={styles.dogLink}>
            <img src={breed.image.url} alt={breed.name} className={styles.dogImage} />
            <h2>{breed.name}</h2>
          </Link>
        ))}
      </div>
      <NavLink to="/home" style={{ textDecoration: 'none', color: '#333' }}>
        <h2>Back to Home</h2>
      </NavLink>
    </div>
  );
};

export default Dogs;
