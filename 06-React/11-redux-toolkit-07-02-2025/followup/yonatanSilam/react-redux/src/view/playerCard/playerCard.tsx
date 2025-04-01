import { useDispatch } from "react-redux";
import { usePlayerVM } from "./playerVM";
import { changeImage } from "../../redux/image/imageSlice";

const Players = () => {
  const { imageUrl } = usePlayerVM();
  
  const dispatch = useDispatch();

  function handleAdd(image: string) {
    dispatch(changeImage(image));
  }
  return (
    <div>
      {imageUrl.map((image, index) => (
        <button key={index} onClick={() => handleAdd(image)}>
          <img src={image} alt={image} />
        </button>
      ))}
    </div>
  );
};
export default Players;
