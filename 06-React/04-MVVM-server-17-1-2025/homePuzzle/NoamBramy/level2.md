## Start Dragging (onMouseDown)
- When the user clicks on the rectangle:
  - Find out where the mouse is clicked on the rectangle.
  - Calculate the difference between where the mouse was clicked and the top-left corner of the rectangle.
  - offsetX = mouseX - rectangleLeft
  - offsetY = mouseY - rectangleTop
  - Start dragging (isDragging = true).

## Move the Rectangle (onMouseMove)
- If dragging is happening (isDragging = true):
- Calculate the new position of the rectangle as the mouse moves.
- newX = mouseX - offsetX
- newY = mouseY - offsetY
- Move the rectangle to this new position.

## Stop Dragging (onMouseUp)
- When the user releases the mouse:
- Stop dragging (isDragging = false).
- Keep the rectangle in the place where the mouse was released (final position).