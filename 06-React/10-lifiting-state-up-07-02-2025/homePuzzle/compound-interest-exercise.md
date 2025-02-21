# Compound Interest Calculator Exercise

## Overview
Create a compound interest calculator application that helps users understand their investment growth. The application should use the formula A = P(1 + r)t where:
- A = Final amount
- P = Principal (initial investment)
- r = Annual interest rate (in decimal)
- t = Time in years

## Requirements

### Component Structure
Create the following components:

1. `InitialSum` component:
   - Input field for the principal amount (P)
   - Should validate that input is a positive number
   - Must emit changes to parent component

2. `InterestRate` component:
   - Input field for interest rate (r)
   - Should handle percentage input (e.g., 5 for 5%)
   - Must convert percentage to decimal for calculations
   - Must emit changes to parent component

3. `Years` component:
   - Input field for time period (t)
   - Should only accept positive integers
   - Must emit changes to parent component

4. `Calculator` component:
   - Should receive all inputs from child components
   - Must calculate the final amount using the formula
   - Display the calculated amount
   - Should update calculation whenever any input changes

5. `StatusMessage` component:
   - Should display "You are reach!" if earned > $1000
   - Should display "You are gained some income" if earned < $1000
   - Earned amount is calculated as (Final amount - Initial investment)

### Tasks

1. Implement state management for all inputs
2. Create proper data flow between components
3. Implement input validation
4. Format currency values properly
5. Handle edge cases (negative numbers, invalid inputs)
6. Add basic styling to match the provided design

### Bonus Challenges

1. Add animation when status message changes
2. Implement a chart showing growth over time
3. Add option to switch between different compounding frequencies
4. Add error boundary handling

## Evaluation Criteria

- Proper component structure
- Correct implementation of the formula
- Clean and maintainable code
- Error handling
- User input validation
- UI/UX considerations

## Notes

- Use only functional components with hooks
- Implement proper prop-types
- Follow React best practices
- Consider performance optimizations
- Write clean, commented code
