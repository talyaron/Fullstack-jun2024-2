import { useLocation } from 'react-router';

const Cat = () => {
  const location = useLocation();
  const { url } = location.state || {};

  return (
    <div>
      {url ? <img src={url} alt="Cat" /> : <p>Loading...</p>}
    </div>
  );
};

export default Cat;
