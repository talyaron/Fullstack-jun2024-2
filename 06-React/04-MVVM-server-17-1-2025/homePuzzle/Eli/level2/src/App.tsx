import { useState } from "react";
import "./App.css";

/* for dragging and droping the cube we need a few things:

1. setting drag to on when we hold the mouse over the box

2. when we drop the cube setting drag off

3.calculate the offset of the area clicked so when it is being dragged it will be dragged from 
the point we are holding and not the top left (mouse position - the box position = offset )

4.setting the box to move when we are dragging according to the mouse position minus the offset
(box position = mouse position - offset)
*/

function App() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 200, y: 200 });
  const [dragging, setDrag] = useState(false);

  function handClick(e: React.MouseEvent) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const offsetX = mouseX - position.x;
    const offsetY = mouseY - position.y;

    setOffset({ x: offsetX, y: offsetY });
    setDrag(true);
  }
  function handleDrag(e: React.MouseEvent) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const calculatedX = mouseX - offset.x;
    const calculatedY = mouseY - offset.y;

    if (dragging) {
      setPosition({ x: calculatedX, y: calculatedY });
    }
  }

  function handleDrop() {
    setDrag(false);
  }
  return (
    <>
      <h1 style={{ userSelect: "none" }}> drag and drop the cube!</h1>
      <div
        className="cube"
        onMouseMove={(e) => handleDrag(e)}
        onMouseDown={(e) => handClick(e)}
        onMouseUp={handleDrop}
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
      ></div>
    </>
  );
}

export default App;
