import { useDogsVM } from "./DogVM";
import styles from "./Dog.module.scss";

const Dog = () => {
  const { dogs } = useDogsVM();

  return (
    <div>
      {dogs?.message.map((dog, index) => (
        <img className={styles.dog} key={index} src={dog} alt="some dog" />
      ))}
    </div>
  );
};

export default Dog;
