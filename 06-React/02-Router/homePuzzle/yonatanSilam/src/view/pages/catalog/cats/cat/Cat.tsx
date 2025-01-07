import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./Cat.module.scss";

const Cat = () => {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImageUrl(data.url);
      });
  }, [id]);

  return (
    <div className={styles.post}>
      <h1>Some post: {id}</h1>
      <img src={imageUrl} alt={id} />
    </div>
  );
};

export default Cat;
