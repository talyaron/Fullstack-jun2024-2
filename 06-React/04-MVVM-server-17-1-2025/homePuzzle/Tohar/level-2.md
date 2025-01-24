To drug and drop the cube at the same points we pressed on beforedruging, 
We need to save the x and y position of the screen when pressing and calculate the distance 
between the position of the cube to the point (the point minus the top left corner),

Then put the cube in that calculated distance left from the point we drug it to.


the calculations: 

1. distanceX = x-point - x-cubePosition(corners)
    distanceY = y-point - y-cubePosition(corners)

2. druged x-position of the cube + x-distance
   druged y-position of the cube + y-distance 