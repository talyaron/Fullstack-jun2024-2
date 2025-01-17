import { useToggleButtons } from './ButtonVM';

const ToggleButtons = () => {
  const { isButton1, isButton2, toggleButton1, toggleButton2 } = useToggleButtons();

  return (
    <div>
      <button
        onClick={toggleButton1}
        style={{
          backgroundColor: isButton1 ? 'blue' : 'gray',
          color: 'white',
          padding: '10px 20px',
          margin: '10px',
        }}
      >
        Button 1
      </button>
      <button
        onClick={toggleButton2}
        style={{
          backgroundColor: isButton2 ? 'blue' : 'gray',
          color: 'white',
          padding: '10px 20px',
          margin: '10px',
        }}
      >
        Button 2
      </button>
    </div>
  );
};

export default ToggleButtons;
