# Secure PHP Login System with PostgreSQL

This is a secure user authentication system built with **PHP**, **PostgreSQL**, and **modern security practices** to prevent **SQL Injection** and other vulnerabilities.

## Features
- **Secure Registration & Login** with password hashing.
- **SQL Injection Prevention** using prepared statements.
- **Session-based Authentication** to maintain user sessions.
- **Password Hashing** with `password_hash()` & verification using `password_verify()`.
- **Styled UI** with `style.css`.
- **Logout functionality** to destroy sessions securely.

---

## Setup Instructions
### 1️⃣ Requirements
- XAMPP (or any PHP environment with PostgreSQL support)
- PostgreSQL database server
- Web browser

### 2️⃣ Database Setup
1. **Create a PostgreSQL database**
   ```sql
   CREATE DATABASE secure_db;
   ```
2. **Create a Users Table**
    ```sql
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password TEXT NOT NULL
    );
    ```
3. **Create a PostgreSQL User & Grant Permissions**
    ```sql
    CREATE USER secure_user WITH PASSWORD 'secure_pass';
    GRANT ALL PRIVILEGES ON DATABASE secure_db TO secure_user;
    ```

### 3️⃣ Start Your Local Server
Using **XAMPP** or any other local server, follow these steps:

1. Open **XAMPP Control Panel** and start **Apache** and connect **PostgreSQL** database.
2. Ensure your database is correctly set up in **phpPgAdmin** or any database tool.
3. Place the project inside the `htdocs` folder (for XAMPP users)

### 4️⃣ Access the Application
Once your local server is running, open your web browser and visit: [http://localhost/secure_login/index.php]


### Your secure PHP login system with PostgreSQL is now up and running!