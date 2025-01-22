import { useState } from 'react';
import styles from './style/App.module.scss';
import malben from './pics/malben.jpg';

const DraggableImage = () => {
  const [position, setPosition] = useState({ x: 600, y: 500 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = e.target.getBoundingClientRect();
    console.log(rect)
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      
      setPosition({
        x: newX,
        y: newY,
      });

      if (e.clientX > window.innerWidth - 200) {
        setIsVisible(false);
        alert('bye!');
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className={styles.main}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <p className={styles.mousePosition}>
        Mouse Position - X: {Math.round(position.x)}, Y: {Math.round(position.y)}
      </p>
      
      {isVisible && (
        <img
          src={malben}
          alt="Draggable"
          className={`${styles.draggableImage} ${isDragging ? styles.dragging : ''}`}
          style={{
            position: 'absolute',  // חשוב להוסיף את זה
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          onMouseDown={handleMouseDown}
          draggable="false"
        />
      )}
    </div>
  );
};

export default DraggableImage;