import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import malben from './pics/malben.jpg'
import style from './style/App.module.scss'

function App() {
  const [isVisible, setIsVisible] = useState(true); // משתנה לניהול visibility של התמונה
  const [right, setRight] = useState(455);
  const [left, setLeft] = useState(110);
  const [top, setTop] = useState(110);


  function move() {

    console.log(window.innerWidth)
    if (right < window.innerWidth - 200) {
      setRight(right + 2);
      setLeft(left + 2);
      setTop(top + 2);
    } else {
      setIsVisible(false);
      alert('bye!');
    }
  }

  function mouseUp(){
   alert('mouse up!');
  }

  return (
    <div style={{backgroundColor:"yellow"}} onMouseUp={move}>
      {isVisible && (
        <img
          onClick={move}
          // onMouseUp={mouseUp}
          style={{
            position: 'absolute',
            width: '20%',
            height: '20%',
            right: `${right}px`,
            left: `${left}px`,
            top: `${top}px`,
          }}
          src={malben} alt="Malben" />
      )}
    </div>
  );
}

export default App;
