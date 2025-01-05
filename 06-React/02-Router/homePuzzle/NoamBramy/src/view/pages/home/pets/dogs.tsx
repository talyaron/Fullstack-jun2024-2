import { Link } from 'react-router';

const Dogs = () => {
  const dogs = [
    { id: "akita", title: 'Akita' },
    { id: "boxer", title: 'Boxer' },
    { id: "chow", title: 'Chow' },
    { id: "husky", title: 'Husky' },
    { id: "mix", title: 'Mix' },
    { id: "pitbull", title: 'Pitbull' },
    { id: "pekinese", title: 'Pekinese' },
  ];

  return (
    <div>
      <h1>Dogs:</h1>
      {dogs.map(dog => (
        <div key={dog.id}>
          <Link to={`/home/dog/${dog.id}`}>{dog.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Dogs;
