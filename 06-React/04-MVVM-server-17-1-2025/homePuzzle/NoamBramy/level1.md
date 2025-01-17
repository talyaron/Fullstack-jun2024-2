## useStates:
    - set isButton1 = false
    - set isButton2 = false

## Render buttons:
    - Button 1: If isButton1 is true, show it as blue, otherwise gray.
    - Button 2: If isButton2 is true, show it as blue, otherwise gray.

## When Button 1 is clicked:
    - If isButton1 is false (the button is off):
    - Change isButton1 to true (the button is now on).
    - Change isButton2 to false (turn off Button 2).
    - If it is already on (isButton1 is true):
    - Change isButton1 to false (turn off Button 1).

## When Button 2 is clicked:
    - If isButton2 is false (the button is off):
    - Change isButton2 to true (the button is now on).
    - Change isButton1 to false (turn off Button 1).
    - If it is already on (isButton2 is true):
    - Change isButton2 to false (turn off Button 2).
