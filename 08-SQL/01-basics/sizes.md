# MySQL Data Types and Storage Requirements for 1 Million Records

## Numeric Types

| Data Type | Storage Per Value | Total for 1M Records | Notes |
|-----------|-------------------|----------------------|-------|
| TINYINT | 1 byte | ~1 MB | Range: -128 to 127 or 0 to 255 (unsigned) |
| SMALLINT | 2 bytes | ~2 MB | Range: -32,768 to 32,767 or 0 to 65,535 (unsigned) |
| MEDIUMINT | 3 bytes | ~3 MB | Range: -8,388,608 to 8,388,607 or 0 to 16,777,215 (unsigned) |
| INT / INTEGER | 4 bytes | ~4 MB | Range: -2,147,483,648 to 2,147,483,647 or 0 to 4,294,967,295 (unsigned) |
| BIGINT | 8 bytes | ~8 MB | Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| FLOAT | 4 bytes | ~4 MB | Single-precision floating-point number |
| DOUBLE / REAL | 8 bytes | ~8 MB | Double-precision floating-point number |
| DECIMAL(p,s) | Varies: ~(p/2) + 2 bytes | Varies | Where p is precision and s is scale. E.g., DECIMAL(10,2) needs ~7 bytes |
| BIT(n) | ~(n+7)/8 bytes | Varies | 1-64 bits |

## String Types

| Data Type | Storage Per Value | Total for 1M Records | Notes |
|-----------|-------------------|----------------------|-------|
| CHAR(n) | n bytes | n MB | Fixed-length (1-255 characters). Always uses full space |
| VARCHAR(n) | L+1 bytes (if ≤255) or L+2 bytes (if >255) | Varies | Variable-length (L is actual text length) |
| TINYTEXT | L+1 bytes | Varies | Max length: 255 characters |
| TEXT | L+2 bytes | Varies | Max length: 65,535 characters |
| MEDIUMTEXT | L+3 bytes | Varies | Max length: 16,777,215 characters |
| LONGTEXT | L+4 bytes | Varies | Max length: 4,294,967,295 characters |
| BINARY(n) | n bytes | n MB | Fixed-length binary data |
| VARBINARY(n) | L+1 bytes (if ≤255) or L+2 bytes (if >255) | Varies | Variable-length binary data |
| TINYBLOB | L+1 bytes | Varies | Max length: 255 bytes |
| BLOB | L+2 bytes | Varies | Max length: 65,535 bytes |
| MEDIUMBLOB | L+3 bytes | Varies | Max length: 16,777,215 bytes |
| LONGBLOB | L+4 bytes | Varies | Max length: 4,294,967,295 bytes |
| ENUM | 1 or 2 bytes | 1-2 MB | 1 byte for up to 255 values, 2 bytes for up to 65,535 values |
| SET | 1, 2, 3, 4, or 8 bytes | 1-8 MB | Depends on number of members (max 64) |

## Date and Time Types

| Data Type | Storage Per Value | Total for 1M Records | Notes |
|-----------|-------------------|----------------------|-------|
| DATE | 3 bytes | ~3 MB | Range: '1000-01-01' to '9999-12-31' |
| TIME | 3 bytes | ~3 MB | Range: '-838:59:59' to '838:59:59' |
| DATETIME | 5 bytes (pre-5.6.4) 8 bytes with fractional seconds (5.6.4+) | 5-8 MB | Range: '1000-01-01 00:00:00' to '9999-12-31 23:59:59' |
| TIMESTAMP | 4 bytes | ~4 MB | Range: '1970-01-01 00:00:01' UTC to '2038-01-19 03:14:07' UTC |
| YEAR | 1 byte | ~1 MB | Range: 1901 to 2155 |

## JSON Type (MySQL 5.7.8+)

| Data Type | Storage Per Value | Total for 1M Records | Notes |
|-----------|-------------------|----------------------|-------|
| JSON | Varies | Varies | Binary format. Size depends on content |

## Examples with Common Field Sizes

### Example Table 1: Customer Records

| Field | Data Type | Size per Record | Total for 1M Records |
|-------|-----------|-----------------|----------------------|
| id | INT | 4 bytes | 4 MB |
| name | VARCHAR(100) avg 20 chars | ~21 bytes | ~21 MB |
| email | VARCHAR(100) avg 30 chars | ~31 bytes | ~31 MB |
| phone | VARCHAR(20) avg 12 chars | ~13 bytes | ~13 MB |
| address | VARCHAR(200) avg 60 chars | ~62 bytes | ~62 MB |
| created_at | DATETIME | 8 bytes | 8 MB |
| **Total** | | **~139 bytes** | **~139 MB** |

### Example Table 2: Transaction Records

| Field | Data Type | Size per Record | Total for 1M Records |
|-------|-----------|-----------------|----------------------|
| id | BIGINT | 8 bytes | 8 MB |
| customer_id | INT | 4 bytes | 4 MB |
| amount | DECIMAL(10,2) | ~7 bytes | ~7 MB |
| transaction_date | DATETIME | 8 bytes | 8 MB |
| status | ENUM | 1 byte | 1 MB |
| details | TEXT avg 200 chars | ~202 bytes | ~202 MB |
| **Total** | | **~230 bytes** | **~230 MB** |

## Notes on Actual Storage Requirements

1. The actual disk usage will be higher than the calculated values due to:
   - Index overhead (primary keys, foreign keys, etc.)
   - Storage engine overhead (InnoDB page format, etc.)
   - Table metadata
   - Fragmentation

2. InnoDB typically uses a page size of 16KB, which affects how data is stored on disk

3. Compression options can significantly reduce storage requirements

4. NULL values generally require 1 bit per nullable column in the record header

For precise calculations, consider using MySQL's `INFORMATION_SCHEMA.TABLES` and `INFORMATION_SCHEMA.COLUMNS` to analyze actual storage usage after creating and populating tables.