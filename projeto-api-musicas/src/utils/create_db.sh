#!/bin/bash

# Path to the SQL file
sql_file="c:/Users/Administrador/musician-erp/projeto-api-musicas/src/data/create_table.sql"

# Path to the destination .db file
db_file="/c:/Users/Administrador/musician-erp/projeto-api-musicas/src/data/database.db"

# Run the SQL file and create the .db file
sqlite3 "$db_file" < "$sql_file"

echo "Database created at $db_file"