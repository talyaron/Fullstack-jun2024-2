# Food and Storage Management SQL Exercise

This exercise will guide you through setting up a database system to track foods and their storage locations in a house, working with an existing foods table.

## Database Schema Setup

### 1. Create the Storage Locations Table

First, create a table for the different storage locations in the house. The table should include:
- A primary key for the location ID
- Location name (refrigerator, freezer, pantry, etc.)
- Optional fields for temperature range and humidity level
- Notes field
- Creation timestamp

### 2. Existing Foods Table

We'll work with your existing foods table. Assume it has at least:
- A primary key field (food_id)
- Food name field
- Other relevant food information

### 3. Alter the Foods Table to Add Storage Location

Modify the existing foods table to add a foreign key to the storage locations table:
- Add a location_id column to the foods table
- Set up the foreign key constraint to reference the storage_locations table
- Consider which ON DELETE behavior to use:
  - CASCADE: If a storage location is deleted, all foods in that location will also be deleted
  - SET NULL: If a storage location is deleted, the location_id for all foods in that location will be set to NULL
  - RESTRICT/NO ACTION: Prevents deletion of a storage location if any foods reference it
  - SET DEFAULT: Sets the location_id to a default value if the referenced storage location is deleted
- Optionally add a date_stored field

## Sample Data Requirements

### 1. Add Storage Locations

Populate the storage locations table with at least 4-5 different storage places in a house:
- Refrigerator
- Freezer
- Pantry
- Basement storage
- Any other relevant locations

### 2. Add Foods

Add at least 5-7 different food items with varied:
- Categories (dairy, meat, vegetables, etc.)
- Quantities and units
- Expiration dates
- Purchase dates

### 3. Update Foods with Storage Locations

Update the foods table to assign appropriate storage locations to each food item using the new foreign key.

## Query Exercises

Create queries to answer the following questions:

### 1. Find All Foods in a Specific Location
Write a query to display all foods stored in a particular location (e.g., refrigerator), showing name, category, quantity, and expiration date.

### 2. Find All Foods in a Category by Storage Location
Write a query to find all foods of a specific category (e.g., dairy) grouped by storage location.

### 3. Find Items Nearing Expiration
Write a query to identify items that will expire within the next week.

### 4. Total Inventory by Category
Write a query to summarize the total quantity of items by food category.

### 5. Find Empty Storage Locations
Write a query to find storage locations that don't currently contain any food items.

## Extension Ideas (Optional)

If you complete the main exercises, consider these extensions:
- Add a brands table and connect it to foods
- Create a recipe table that links to foods as ingredients
- Add nutritional information to the foods table
- Create a shopping list generator based on low inventory items
- Implement a trigger to log when items are removed from inventory