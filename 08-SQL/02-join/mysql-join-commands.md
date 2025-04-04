# MySQL JOIN Commands and Operations Reference

## Basic Join Types

| Join Type | Description | Syntax Example |
|-----------|-------------|----------------|
| `INNER JOIN` | Returns only matching rows from both tables | `SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id` |
| `LEFT JOIN` | Returns all rows from left table and matching rows from right table | `SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.id` |
| `RIGHT JOIN` | Returns all rows from right table and matching rows from left table | `SELECT * FROM table1 RIGHT JOIN table2 ON table1.id = table2.id` |

## Filtering Operations

| Operation | Description | Example |
|-----------|-------------|---------|
| `WHERE` | Filter rows based on conditions | `SELECT * FROM users u JOIN users_foods uf ON u.user_id = uf.user_id WHERE u.last_name = 'Smith'` |
| `HAVING` | Filter groups (used with GROUP BY) | `SELECT food_type, AVG(love_level) FROM foods f JOIN users_foods uf ON f.food_id = uf.food_id GROUP BY food_type HAVING AVG(love_level) > 7` |

## Comparison Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `=` | Equal to | `WHERE age = 30` |
| `<>` or `!=` | Not equal to | `WHERE status <> 'inactive'` |
| `<` | Less than | `WHERE price < 100` |
| `>` | Greater than | `WHERE rating > 4` |
| `<=` | Less than or equal to | `WHERE quantity <= 5` |
| `>=` | Greater than or equal to | `WHERE views >= 1000` |
| `BETWEEN` | Between an inclusive range | `WHERE age BETWEEN 18 AND 35` |
| `IN` | Matches values in a list | `WHERE category IN ('fruits', 'vegetables')` |
| `LIKE` | Pattern matching with wildcards | `WHERE name LIKE 'A%'` |
| `IS NULL` | Is a NULL value | `WHERE middle_name IS NULL` |
| `IS NOT NULL` | Is not a NULL value | `WHERE phone IS NOT NULL` |

## Logical Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `AND` | Both conditions must be true | `WHERE price > 10 AND category = 'organic'` |
| `OR` | Either condition can be true | `WHERE status = 'new' OR status = 'sale'` |
| `NOT` | Negates a condition | `WHERE NOT category = 'junk food'` |

## Sorting and Limiting

| Operation | Description | Example |
|-----------|-------------|---------|
| `ORDER BY` | Sort results | `SELECT * FROM products ORDER BY price DESC, name ASC` |
| `LIMIT` | Restrict number of rows returned | `SELECT * FROM ratings ORDER BY score DESC LIMIT 10` |

## Basic Aggregation Functions

| Function | Description | Example |
|----------|-------------|---------|
| `COUNT()` | Count rows | `SELECT user_id, COUNT(food_id) AS favorites FROM users_foods GROUP BY user_id` |
| `SUM()` | Sum values | `SELECT food_type, SUM(price) AS total FROM foods GROUP BY food_type` |
| `AVG()` | Average of values | `SELECT food_id, AVG(love_level) AS avg_rating FROM users_foods GROUP BY food_id` |
| `MAX()` | Maximum value | `SELECT user_id, MAX(love_level) AS highest_rating FROM users_foods GROUP BY user_id` |
| `MIN()` | Minimum value | `SELECT food_type, MIN(price) AS lowest_price FROM foods GROUP BY food_type` |
