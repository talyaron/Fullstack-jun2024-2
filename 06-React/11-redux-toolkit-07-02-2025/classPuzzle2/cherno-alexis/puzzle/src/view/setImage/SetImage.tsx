import { useDispatch } from 'react-redux';
import { changeImage } from '../../redux/counter/counterSlice';


interface Props {
    image: string; // Adjust this type based on what type your image prop actually is
}

const SetImage = ({ image }: Props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeImage(image));
    };

    return (
        <div>
            <img src={image} onClick={handleClick}/>
        </div>
    );
};

export default SetImage;