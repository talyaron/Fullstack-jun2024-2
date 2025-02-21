# Dog Breed Gallery Assignment

## Overview
In this assignment, you will create a dynamic web application that displays images of different dog breeds using React Router for navigation and RTK Query for data fetching.

## Requirements

### 1. Homepage Setup
- Visit the [Dog API breeds list documentation](https://dog.ceo/api/breeds/list/all)
- Select any 3 dog breeds from the available options
- Create a homepage that displays links to these breeds using React Router's `<Link>` component

### 2. Breed Pages
- Create a dynamic route path: `dogs/:breed`
- When a user changes the breed name in the URL, the page should display images of that specific breed
- Use the `useParams` hook to extract the breed name from the URL

### 3. API Integration
- Use RTK Query to fetch images from the Dog API
- Endpoint to use: `https://dog.ceo/api/breed/{breed}/images`
- Read the [breed endpoint documentation](https://dog.ceo/dog-api/documentation/breed) for more details

### 4. Required Features
Your application must include:
- Navigation between different breed pages
- Loading states while fetching images
- Error handling for invalid breed names
- Responsive image display
- Clear and intuitive user interface

## Evaluation Criteria
Your assignment will be evaluated based on:
1. Correct implementation of React Router
2. Proper use of RTK Query
3. Error handling
4. Code organization and cleanliness
5. User interface design
6. Loading state management

## Getting Started
1. Set up a new React project
2. Install required dependencies:
   - React Router
   - Redux Toolkit / RTK Query
3. Review the Dog API documentation
4. Plan your component structure

## Testing Requirements
Test your application for:
- Navigation between breeds
- Direct URL access
- Invalid breed names
- Loading states
- Error states


Good luck with your assignment! 🐕
