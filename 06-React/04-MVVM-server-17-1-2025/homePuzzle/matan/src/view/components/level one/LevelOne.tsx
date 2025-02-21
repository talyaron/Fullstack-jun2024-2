import React, { useState } from 'react';
import style from './LevelOne.module.scss'

const LevelOne = () => {
   const [input1, setInput1] = useState(false);
   const [input2, setInput2] = useState(false);
 
   const handleToggle1 = () => {
       if (input1) {
           setInput1(false);
       } else {
           setInput1(true);
           setInput2(false);
       }
   };
 
   const handleToggle2 = () => {
       if (input2) {
           setInput2(false);
       } else {
           setInput2(true);
           setInput1(false);
       }
   };
 
   return (
       <div>
           <button className={`${style.btn} ${input1 ? style.active : ''}`} onClick={handleToggle1}>
               Button 1 
           </button>
           <button className={`${style.btn} ${input2 ? style.active : ''}`} onClick={handleToggle2}>
               Button 2 
           </button>
       </div>
   );
}

export default LevelOne;