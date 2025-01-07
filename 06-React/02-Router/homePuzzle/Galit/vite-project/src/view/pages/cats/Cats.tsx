import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Cats.module.scss';

interface Breed {
  name: string;
  temperament: string;
}

interface Cat {
  id: string;
  url: string;
  breeds: Breed[];
}

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=9&include_breeds=true')
      .then(response => response.json())
      .then((data: Cat[]) => setCats(data))
      .catch(error => console.error('Error fetching cat data:', error));
  }, []);

  return (
    <div className={styles.cats}>
      <div className={styles.catList}>
        <h1>Cats</h1>
        {cats.map(cat => (
          <Link to={`/cats/${cat.id}`} key={cat.id} className={styles.catLink}>
            <img src={cat.url} alt={`Cat ${cat.id}`} className={styles.catImage} />
          </Link>
        ))}
      
           
        
      </div>
      <NavLink to="/home" style={{ textDecoration: 'none', color: '#333' }}>
        <h2>Back to Home</h2>
      </NavLink>    </div>
    
  );
};

export default Cats;
