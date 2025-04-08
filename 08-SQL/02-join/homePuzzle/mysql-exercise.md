# MySQL Database Design Exercise

## Overview
In this exercise, you will design and implement a MySQL database on a topic of your choice. This project will help you demonstrate your understanding of database relationships, SQL queries, and database design principles.

## Project Requirements

### Database Design (Level 1)
- Choose any topic that interests you for your database
- If you don't have a specific topic in mind, use the suggested theme: Radio Song Competition (songs, singers, and rankings)
- Your database must include at minimum:
  - A users table
  - At least one 1-to-many relationship
  - Appropriate primary and foreign keys

### Advanced Relationships (Level 2)
- Implement at least one many-to-many relationship with a proper junction table
- Use appropriate constraints (NOT NULL, UNIQUE, etc.)
- Include indexes where they would improve performance

### Data Management
- Create SQL scripts to:
  - Build your complete database schema
  - Populate tables with sample data (at least 5-10 records per table)

### Query Development
- Write SQL queries that demonstrate:
  - Simple SELECT statements with filtering
  - Table joins (INNER JOIN, LEFT JOIN)
  - Sorting and grouping data
  - Aggregate functions (COUNT, SUM, AVG, etc.)
  - At least one complex query using multiple joins or subqueries

## Suggested Topic: Radio Song Competition

If you choose the suggested topic, your database should model a radio station's song competition where:

- Singers register to participate
- Singers can perform multiple songs
- Songs are evaluated in different competition rounds
- Listeners can vote for their favorite songs
- Results are tracked across competition rounds

### Essential Entities to Consider
1. **Singers/Artists** (users)
2. **Songs** (connected to singers in a 1-to-many relationship)
3. **Competition Rounds**
4. **Listeners/Voters**
5. **Votes** or **Ratings** (implementing many-to-many relationships)

## Relationship Examples

### 1-to-Many Relationship
In a song competition context, examples of 1-to-many relationships include:
- One singer can perform many songs
- One competition round can feature many performances
- One judge can provide many ratings

### Many-to-Many Relationship
Examples of many-to-many relationships include:
- Songs and listeners (a listener can vote for many songs, and a song can be voted for by many listeners)
- Songs and competition rounds (a song can be performed in multiple rounds, and each round features multiple songs)

## Deliverables
1. A SQL script file containing:
   - All CREATE TABLE statements with proper relationships
   - INSERT statements with sample data
   - Your query solutions

2. A brief document explaining:
   - Your database design choices
   - Entity relationship diagram (can be simple text description if you can't create a diagram)
   - Explanation of how your design satisfies the requirements

## Submission Guidelines
- Submit your SQL file(s) and documentation
- Ensure your SQL runs without errors
- Comment your code where appropriate to explain your design decisions

## Evaluation Criteria
- Correct implementation of required relationships
- Proper use of SQL syntax and best practices
- Completeness of the database design
- Effectiveness of your queries in retrieving the desired information
- Documentation quality and clarity

Good luck with your database design project!
