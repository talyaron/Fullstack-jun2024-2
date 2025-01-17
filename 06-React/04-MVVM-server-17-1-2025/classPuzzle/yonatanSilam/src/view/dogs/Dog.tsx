import { useDogsVM } from "./DogVM";

const Dog = () => {
  const { dogs } = useDogsVM();

  return (
    <div>
      <img src={dogs?.massage[0]} alt="dog1" />
      <img src={dogs?.massage[1]} alt="dog2" />
      <img src={dogs?.massage[2]} alt="dog3" />
    </div>
  );
};

export default Dog;
