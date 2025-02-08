# Tic Tac Toe Game Exercise

In this exercise, you will build a Tic Tac Toe game using React. You'll implement the game step by step, starting with basic functionality and progressively adding more features.

## Learning Objectives

By completing this exercise, you will:
- Practice React state management with useState hook
- Implement user interactions and event handling
- Create a responsive grid layout using CSS
- Build game logic and algorithms
- Handle conditional rendering based on game state

## Exercise Requirements

### Level 1: Basic Game Board
Build the fundamental game structure:

1. Create a 3x3 grid game board
2. Requirements:
   - Each cell should start empty
   - When a player clicks a cell, it should display either 'X' or 'O'
   - Players should alternate turns automatically
   - Once a cell is filled, it cannot be changed

### Level 2: Game Controls
Add basic game controls and information:

1. Add a reset button that:
   - Clears all cells
   - Resets to the first player's turn
2. Add a status message that:
   - Shows which player's turn is next (X or O)
   - Updates after each move

### Level 3: Game Logic
Implement the core game mechanics:

1. Create an algorithm to check for a winner by:
   - Checking all horizontal lines
   - Checking all vertical lines
   - Checking both diagonals
2. Add game status messages for:
   - Announcing the winner when someone wins
   - Declaring a draw when the board is full with no winner
3. Prevent further moves when:
   - A player has won
   - The game ends in a draw

## Technical Requirements

- Use React functional components
- Use the useState hook for state management
- Style your game using CSS (Tailwind CSS recommended)
- Ensure responsive design for different screen sizes
- Write clean, well-commented code
- Follow React best practices

## Getting Started

1. Create a new React component called `TicTacToe`
2. Start with Level 1 requirements
3. Test each feature thoroughly before moving to the next level
4. Commit your code regularly with clear commit messages

## Tips

- Break down the problem into smaller components
- Plan your state management strategy before coding
- Test edge cases (e.g., clicking filled cells, multiple wins)
- Consider user experience in your design
- Use meaningful variable names
- Add comments to explain complex logic

## Bonus Challenges

After completing the main requirements, try these extensions:

1. Add a scoreboard to track multiple games
2. Implement an undo/redo feature
3. Add animations for placing X's and O's
4. Create an AI opponent
5. Add sound effects for moves and wins
6. Implement a move history feature



