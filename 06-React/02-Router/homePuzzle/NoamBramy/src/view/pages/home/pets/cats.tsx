import{ useEffect, useState } from 'react';
import { Link } from 'react-router';

const Cats = () => {
  const [cats, setCats] = useState<{ id: string; url: string }[]>([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=5')
      .then((res) => res.json())
      .then((data) => {
        setCats(data);
      });
  }, []);

  return (
    <div>
      <h1>Cats:</h1>
      {cats.map((cat) => (
        <div key={cat.id}>
          <Link to={`/pets/cat/${cat.id}`} state={{ url: cat.url }}>
            <img src={cat.url} alt="Cat" style={{ width: '150px', height: '150px' }} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cats;
